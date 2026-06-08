import type { Metadata } from "next";
import { buildPageHref } from "@/lib/navigation";
import type { Locale, PageKey } from "@/lib/site-types";

type SEOContent = {
  title: string;
  description: string;
};

export function buildMetadata(locale: Locale, pageKey: PageKey, seo: SEOContent): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: buildPageHref(pageKey, locale),
      languages: {
        ar: buildPageHref(pageKey, "ar"),
        en: buildPageHref(pageKey, "en"),
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: locale === "ar" ? "ar_SD" : "en_SD",
      type: "website",
    },
  };
}
