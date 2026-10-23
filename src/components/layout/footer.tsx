import Image from "next/image";
import { connection } from "next/server";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";
import type { Locale } from "@/i18n/routing";

type FooterProps = {
  locale: Locale;
};

async function CopyrightYear({ locale }: FooterProps) {
  await connection();
  const t = await getTranslations("footer");
  const year = new Intl.NumberFormat(locale, { useGrouping: false }).format(
    new Date().getFullYear(),
  );

  return (
    <p className="site-footer__copyright">
      {t("copyright", { year })}
    </p>
  );
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const a11y = await getTranslations("a11y");

  return (
    <footer className="site-footer">
      <Container className="site-footer__content">
        <div className="site-footer__brand">
          <Image
            src="/brand/wastoo-logo-white.svg"
            alt={a11y("logoAlt")}
            width={64}
            height={46}
          />
          <p>{t("description")}</p>
        </div>

        <nav
          className="site-footer__nav"
          aria-label={a11y("footerNavigation")}
        >
          <a href={`/${locale}#how`}>{nav("how")}</a>
          <a href={`/${locale}#mission`}>{nav("mission")}</a>
          <a href={`/${locale}#faq`}>{nav("faq")}</a>
        </nav>

        <div className="site-footer__extras">
          <LanguageSwitcher locale={locale} />
          {site.contactEmail.trim() || site.socialLinks.length > 0 ? (
            <>
              {site.contactEmail.trim() ? (
                <div className="site-footer__contact">
                  <a href={`mailto:${site.contactEmail}`}>
                    {site.contactEmail}
                  </a>
                </div>
              ) : null}
              {site.socialLinks.length > 0 ? (
                <div className="site-footer__social">
                  {site.socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </>
          ) : null}
        </div>

        <Suspense
          fallback={
            <p className="site-footer__copyright">{t("copyrightFallback")}</p>
          }
        >
          <CopyrightYear locale={locale} />
        </Suspense>
      </Container>
    </footer>
  );
}
