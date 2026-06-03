import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { SudanPartnershipContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipBenefits({
  content,
  locale,
}: {
  content: SudanPartnershipContent["benefits"];
  locale: Locale;
}) {
  return (
    <SectionShell className="partnership-benefits" id="benefits">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="path-grid partnership-benefits__grid">
          {content.cards.map((card) => (
            <article className="surface-card feature-card partnership-benefits__card" data-reveal key={card.title}>
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
      </MotionGroup>
    </SectionShell>
  );
}
