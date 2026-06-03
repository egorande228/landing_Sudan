import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { SudanPartnershipContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipTools({
  content,
  locale,
}: {
  content: SudanPartnershipContent["tools"];
  locale: Locale;
}) {
  return (
    <SectionShell className="partnership-tools" id="tools">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="tools-grid">
          <div className="tool-stack">
            <div className="support-note partnership-tools__note" data-reveal>
              <h3 className="support-note__title">
                {locale === "ar" ? "\u0645\u0627 \u064a\u0628\u0642\u0649 \u0642\u0631\u064a\u0628\u064b\u0627 \u0645\u0646\u0643" : "What stays close to you"}
              </h3>
              <ul className="checklist">
                {content.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tool-card-grid">
            {content.cards.map((card) => (
              <article className="surface-card feature-card partnership-tools__card" data-reveal key={card.title}>
                <div className="feature-card__header">
                  {card.icon ? (
                    <span className="icon-pill">
                      <Icon name={card.icon} />
                    </span>
                  ) : null}
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-body">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
