import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionGroup from "@/components/ui/MotionGroup";
import type { SudanFaqContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

function FaqList({
  title,
  description,
  items,
  className,
}: SudanFaqContent["playerFaq"] & { className?: string }) {
  return (
    <article className={["surface-card faq-card", className].filter(Boolean).join(" ")}>
      <h2 className="card-title">{title}</h2>
      <p className="faq-copy">{description}</p>
      <div className="faq-list">
        {items.map((item, index) => (
          <details className="faq-item" key={item.question} open={index === 0}>
            <summary>{item.question}</summary>
            <div className="faq-item__answer">
              <p className="faq-copy">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </article>
  );
}

export default function FaqHub({
  content,
  locale,
}: {
  content: SudanFaqContent;
  locale: Locale;
}) {
  return (
    <>
      <SectionShell className="faq-hero-section" id="top">
        <MotionGroup>
          <div className="faq-hero" data-reveal>
            <span className="section-eyebrow">{content.hero.eyebrow}</span>
            <h1 className="hero-title">{content.hero.title}</h1>
            <p className="hero-copy__body">{content.hero.description}</p>
            <div className="button-row">
              <ButtonLink item={content.hero.primaryCta} locale={locale} />
              <ButtonLink item={content.hero.secondaryCta} locale={locale} />
            </div>
          </div>
        </MotionGroup>
      </SectionShell>

      <SectionShell className="faq-player-section" id="player-faq">
        <MotionGroup>
          <SectionHeader content={content.playerFaq} />
          <div className="faq-layout">
            <FaqList className="faq-card--player" {...content.playerFaq} />
          </div>
        </MotionGroup>
      </SectionShell>

      <SectionShell className="faq-partnership-section" id="partnership-faq" tight>
        <MotionGroup>
          <SectionHeader content={content.partnershipFaq} />
          <div className="faq-layout">
            <FaqList className="faq-card--partnership" {...content.partnershipFaq} />
          </div>
        </MotionGroup>
      </SectionShell>
    </>
  );
}
