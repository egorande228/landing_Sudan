import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionGroup from "@/components/ui/MotionGroup";
import type { SudanPartnershipContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipHero({
  content,
  locale,
}: {
  content: SudanPartnershipContent["hero"];
  locale: Locale;
}) {
  const secondaryCta =
    content.secondaryCta.href === "/partnership#tools"
      ? {
          ...content.secondaryCta,
          href: "/partnership#steps",
          label:
            locale === "ar"
              ? "\u0631\u0627\u062c\u0639 \u0627\u0644\u062e\u0637\u0648\u0627\u062a"
              : "View steps",
        }
      : content.secondaryCta;

  return (
    <SectionShell className="partnership-hero" id="top">
      <MotionGroup>
        <div className="lead-grid partnership-hero__grid">
          <div className="hero-copy partnership-hero__copy">
            <span className="section-eyebrow" data-reveal>
              {content.eyebrow}
            </span>
            <h1 className="hero-title" data-reveal>
              {content.title}
            </h1>
            <p className="hero-copy__body" data-reveal>
              {content.description}
            </p>

            <div className="button-row" data-reveal>
              <ButtonLink item={content.primaryCta} locale={locale} />
              <ButtonLink item={secondaryCta} locale={locale} />
            </div>

            <div className="metrics-grid" data-reveal>
              {content.metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <span className="metric-card__value muted-number" dir="ltr">
                    {metric.value}
                  </span>
                  <span className="metric-card__label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
