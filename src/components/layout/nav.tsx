import { SiteHeader } from "./site-header";
import type { Locale } from "@/i18n/routing";

type NavProps = {
  locale: Locale;
};

export async function Nav({ locale }: NavProps) {
  return <SiteHeader locale={locale} />;
}
