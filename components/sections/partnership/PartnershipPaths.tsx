import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionGroup from "@/components/ui/MotionGroup";
import {
  getSudanPathContactActions,
  type SudanPartnershipContent,
} from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function PartnershipPaths({
  content,
  locale,
}: {
  content: SudanPartnershipContent["paths"];
  locale: Locale;
}) {
  const contactActions = getSudanPathContactActions(locale);

  return (
    <SectionShell className="partnership-paths" id="paths">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="path-grid">
          {content.cards.map((card, index) => (
            <article
              className={[
                "surface-card route-card",
                index === 0 ? "route-card--partner" : "route-card--agent",
              ].join(" ")}
              data-reveal
              key={card.title}
            >
              <h3 className="route-card__title">{card.title}</h3>
              <p className="route-card__body">{card.description}</p>
              <p className="route-card__bullet-title">{card.bulletTitle}</p>
              <ul className="route-card__bullets">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="route-card__footer">
                {contactActions.map((action) => (
                  <ButtonLink item={action} key={`${card.title}-${action.label}`} locale={locale} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
