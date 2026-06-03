import type { Metadata } from "next";
import MarketPageShell from "@/components/layout/MarketPageShell";
import PartnershipBenefits from "@/components/sections/partnership/PartnershipBenefits";
import PartnershipHero from "@/components/sections/partnership/PartnershipHero";
import PartnershipPaths from "@/components/sections/partnership/PartnershipPaths";
import PartnershipSteps from "@/components/sections/partnership/PartnershipSteps";
import { getSudanPartnershipContent } from "@/content/sudan-content";
import { resolveLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  return buildMetadata(locale, getSudanPartnershipContent(locale).seo);
}

export default async function PartnershipPage({ searchParams }: PageProps) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const content = getSudanPartnershipContent(locale);

  return (
    <MarketPageShell locale={locale} pageKey="partnership">
      <PartnershipHero content={content.hero} locale={locale} />
      <PartnershipBenefits content={content.benefits} locale={locale} />
      <PartnershipSteps content={content.steps} />
      <PartnershipPaths content={content.paths} locale={locale} />
    </MarketPageShell>
  );
}
