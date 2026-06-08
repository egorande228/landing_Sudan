import type { Metadata } from "next";
import FaqPageView from "@/components/pages/FaqPageView";
import { getSudanFaqContent } from "@/content/sudan-content";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/site-types";

const locale: Locale = "en";

export function generateMetadata(): Metadata {
  return buildMetadata(locale, "faq", getSudanFaqContent(locale).seo);
}

export default function EnglishFaqPage() {
  return <FaqPageView locale={locale} />;
}
