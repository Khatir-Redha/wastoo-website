import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import {
  FAQ,
  Hero,
  HowItWorks,
  Launch,
  Mission,
  Problem,
  ProductPreview,
  Roles,
} from "@/components/sections/landing-sections";
import { routing } from "@/i18n/routing";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("a11y");

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("skipToContent")}
      </a>
      <Nav locale={locale} />
      <main id="main-content" aria-label={t("mainContent")} tabIndex={-1}>
        <Hero />
        <ProductPreview />
        <Problem />
        <HowItWorks />
        <Roles />
        <Mission />
        <Launch />
        <FAQ />
      </main>
      <Footer locale={locale} />
    </>
  );
}
