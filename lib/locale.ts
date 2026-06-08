import type { Direction, Locale } from "@/lib/site-types";

const locales: Locale[] = ["ar", "en"];

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

function stripLocalePrefix(path: string) {
  for (const locale of locales) {
    const prefix = `/${locale}`;

    if (path === prefix) return "/";
    if (path.startsWith(`${prefix}/`)) return path.slice(prefix.length);
  }

  return path || "/";
}

export function getDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}

export function isRTL(locale: Locale) {
  return getDirection(locale) === "rtl";
}

export function localizeHref(href: string, locale: Locale, fallback: Locale = "ar") {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;

  const [pathWithQuery, hash] = href.split("#");
  const [rawPath, queryString] = pathWithQuery.split("?");
  const normalizedPath = stripLocalePrefix(rawPath || "/");
  const localizedPath =
    locale === fallback
      ? normalizedPath
      : normalizedPath === "/"
        ? `/${locale}`
        : `/${locale}${normalizedPath}`;

  return `${localizedPath}${queryString ? `?${queryString}` : ""}${hash ? `#${hash}` : ""}`;
}

export function formatLangLabel(locale: Locale) {
  return locale === "ar" ? "AR" : "EN";
}
