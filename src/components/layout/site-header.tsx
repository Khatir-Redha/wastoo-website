"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { Button, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/i18n/routing";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = useTranslations("nav");
  const a11y = useTranslations("a11y");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (
        !menuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const howHref = `/${locale}#how`;
  const missionHref = `/${locale}#mission`;
  const faqHref = `/${locale}#faq`;
  const launchHref = `/${locale}#launch`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__bar">
          <a
            className="site-logo"
            href={`/${locale}`}
            aria-label={a11y("homeLink")}
          >
            <Image
              src="/brand/wastoo-logo-primary.svg"
              alt={a11y("logoAlt")}
              width={64}
              height={42}
              loading="eager"
            />
            <span className="site-wordmark" dir={locale === "ar" ? "rtl" : "ltr"}>
              {locale === "ar" ? "واستو" : "Wastoo"}
            </span>
          </a>

          <nav className="site-nav-links" aria-label={a11y("siteNavigation")}>
            <a className="site-nav-link" href={howHref}>
              {t("how")}
            </a>
            <a className="site-nav-link" href={missionHref}>
              {t("mission")}
            </a>
            <a className="site-nav-link" href={faqHref}>
              {t("faq")}
            </a>
          </nav>

          <div className="site-header__actions site-header__desktop-actions">
            <LanguageSwitcher locale={locale} />
            <a className={buttonStyles({ variant: "primary", size: "sm" })} href={launchHref}>
              {t("cta")}
            </a>
          </div>

          <div className="site-header__mobile-actions">
            <LanguageSwitcher locale={locale} />
            <Button
              ref={menuButtonRef}
              className="site-menu-toggle"
              variant="secondary"
              size="sm"
              type="button"
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={menuOpen}
              aria-controls="site-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X aria-hidden="true" size={20} />
              ) : (
                <Menu aria-hidden="true" size={20} />
              )}
            </Button>
          </div>

          <nav
            className="site-menu-panel"
            id="site-mobile-menu"
            aria-label={a11y("siteNavigation")}
            ref={menuRef}
            hidden={!menuOpen}
          >
            <a className="site-nav-link" href={howHref} onClick={closeMenu}>
              {t("how")}
            </a>
            <a
              className="site-nav-link"
              href={missionHref}
              onClick={closeMenu}
            >
              {t("mission")}
            </a>
            <a className="site-nav-link" href={faqHref} onClick={closeMenu}>
              {t("faq")}
            </a>
            <a
              className={buttonStyles({ variant: "primary" })}
              href={launchHref}
              onClick={closeMenu}
            >
              {t("cta")}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
