import type { Metadata } from "next";
import HomePageView from "@/components/pages/HomePageView";
import { getSudanHomeContent } from "@/content/sudan-content";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/site-types";

const locale: Locale = "en";

export function generateMetadata(): Metadata {
  return buildMetadata(locale, "home", getSudanHomeContent(locale).seo);
}

export default function EnglishHomePage() {
  return <HomePageView locale={locale} />;
}
