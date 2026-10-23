import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { absoluteSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries([
    ...routing.locales.map((locale) => [
      locale,
      absoluteSiteUrl(`/${locale}`),
    ]),
    ["x-default", absoluteSiteUrl(`/${routing.defaultLocale}`)],
  ]);

  return routing.locales.map((locale) => ({
    url: absoluteSiteUrl(`/${locale}`),
    alternates: { languages },
  }));
}
