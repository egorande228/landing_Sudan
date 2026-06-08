import type { Metadata } from "next";
import PartnershipPageView from "@/components/pages/PartnershipPageView";
import { getSudanPartnershipContent } from "@/content/sudan-content";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/site-types";

const locale: Locale = "en";

export function generateMetadata(): Metadata {
  return buildMetadata(locale, "partnership", getSudanPartnershipContent(locale).seo);
}

export default function EnglishPartnershipPage() {
  return <PartnershipPageView locale={locale} />;
}
