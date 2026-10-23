"use client";

import { useTranslations } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const t = useTranslations("a11y");

  return (
    <details className="language-menu">
      <summary className="language-switcher" aria-label={t("languageSwitcher")}>
        <span>{t(`languageNames.${locale}`)}</span>
        <span className="language-switcher__chevron" aria-hidden="true" />
      </summary>
      <div className="language-menu__options" role="group" aria-label={t("languageSwitcher")}>
        {routing.locales.map((supportedLocale) => (
          <a
            key={supportedLocale}
            className="language-menu__option"
            href={`/${supportedLocale}`}
            aria-current={supportedLocale === locale ? "page" : undefined}
            onClick={(event) => {
              const target = new URL(window.location.href);
              const pathSegments = target.pathname.split("/");
              pathSegments[1] = supportedLocale;
              target.pathname = pathSegments.join("/");
              event.currentTarget.href = target.toString();
            }}
          >
            {t(`languageNames.${supportedLocale}`)}
          </a>
        ))}
      </div>
    </details>
  );
}
