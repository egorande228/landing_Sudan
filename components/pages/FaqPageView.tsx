import MarketPageShell from "@/components/layout/MarketPageShell";
import FaqHub from "@/components/sections/faq/FaqHub";
import { getSudanFaqContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function FaqPageView({ locale }: { locale: Locale }) {
  const content = getSudanFaqContent(locale);

  return (
    <MarketPageShell locale={locale} pageKey="faq">
      <FaqHub content={content} locale={locale} />
    </MarketPageShell>
  );
}
