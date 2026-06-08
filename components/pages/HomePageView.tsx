import MarketPageShell from "@/components/layout/MarketPageShell";
import HomeGamesSection from "@/components/sections/home/HomeGamesSection";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeOffersSection from "@/components/sections/home/HomeOffersSection";
import HomeSportsSection from "@/components/sections/home/HomeSportsSection";
import { getSudanHomeContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function HomePageView({ locale }: { locale: Locale }) {
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
