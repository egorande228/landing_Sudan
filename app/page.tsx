import type { Metadata } from "next";
import MarketPageShell from "@/components/layout/MarketPageShell";
import HomeGamesSection from "@/components/sections/home/HomeGamesSection";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeOffersSection from "@/components/sections/home/HomeOffersSection";
import HomeSportsSection from "@/components/sections/home/HomeSportsSection";
import { getSudanHomeContent } from "@/content/sudan-content";
import { resolveLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  return buildMetadata(locale, getSudanHomeContent(locale).seo);
}

export default async function HomePage({ searchParams }: PageProps) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const content = getSudanHomeContent(locale);

  return (
    <MarketPageShell locale={locale} pageKey="home">
      <HomeHero content={content.hero} locale={locale} />
      <HomeGamesSection content={content.games} locale={locale} />
      <HomeSportsSection content={content.sports} locale={locale} />
      <HomeOffersSection content={content.offers} locale={locale} />
    </MarketPageShell>
  );
}
