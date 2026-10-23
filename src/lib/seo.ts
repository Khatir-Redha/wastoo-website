const siteUrlValue = process.env.SITE_URL;

export function getSiteUrl(): URL {
  if (!siteUrlValue) {
    if (process.env.NODE_ENV === "development") {
      return new URL("http://localhost:3000");
    }

    throw new Error(
      "SITE_URL is required for production metadata, sitemap, and robots output.",
    );
  }

  let siteUrl: URL;
  try {
    siteUrl = new URL(siteUrlValue);
  } catch {
    throw new Error("SITE_URL must be a valid absolute URL.");
  }

  if (
    !["https:", "http:"].includes(siteUrl.protocol) ||
    (process.env.NODE_ENV === "production" && siteUrl.protocol !== "https:") ||
    siteUrl.username ||
    siteUrl.password ||
    siteUrl.pathname !== "/" ||
    siteUrl.search ||
    siteUrl.hash
  ) {
    throw new Error(
      "SITE_URL must be an HTTPS production origin (HTTP is allowed in development) without a path.",
    );
  }

  return siteUrl;
}

export function absoluteSiteUrl(path: string): string {
  return new URL(path, getSiteUrl()).toString();
}
