import MarketPageShell from "@/components/layout/MarketPageShell";
import PartnershipBenefits from "@/components/sections/partnership/PartnershipBenefits";
import PartnershipHero from "@/components/sections/partnership/PartnershipHero";
import PartnershipPaths from "@/components/sections/partnership/PartnershipPaths";
import PartnershipSteps from "@/components/sections/partnership/PartnershipSteps";
import { getSudanPartnershipContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipPageView({ locale }: { locale: Locale }) {
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
