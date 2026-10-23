import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Geist, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { absoluteSiteUrl, getSiteUrl } from "@/lib/seo";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["Arial", "sans-serif"],
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  fallback: ["Arial", "sans-serif"],
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");
  const siteUrl = getSiteUrl();
  const languages = Object.fromEntries([
    ...routing.locales.map((supportedLocale) => [
      supportedLocale,
      absoluteSiteUrl(`/${supportedLocale}`),
    ]),
    ["x-default", absoluteSiteUrl(`/${routing.defaultLocale}`)],
  ]);

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: absoluteSiteUrl(`/${locale}`),
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Wastoo",
      title,
      description,
      url: absoluteSiteUrl(`/${locale}`),
      locale: {
        ar: "ar_DZ",
        fr: "fr_FR",
        en: "en_US",
      }[locale],
      images: [
        {
          url: "/screens/og-image.png",
          width: 1080,
          height: 2340,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/screens/og-image.png",
          alt: title,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const fontClassName = locale === "ar" ? arabic.variable : geist.variable;

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${fontClassName} min-h-full antialiased`}
    >
      <body className="min-h-full">
        <NextIntlClientProvider
          messages={{
            nav: messages.nav,
            a11y: messages.a11y,
          }}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
