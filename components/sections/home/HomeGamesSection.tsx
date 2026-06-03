import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import { getSudanGamesCardCta } from "@/content/sudan-content";
import ButtonLink from "@/components/ui/ButtonLink";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { SudanHomeContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function HomeGamesSection({
  content,
  locale,
}: {
  content: SudanHomeContent["games"];
  locale: Locale;
}) {
  const gamesCta = getSudanGamesCardCta(locale);
  const displayCards = content.cards.slice(0, 2);

  return (
    <SectionShell className="home-games-section" id="games">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="games-compass">
          {displayCards.map((card, index) => (
            <article
              className={[
                "surface-stage games-compass__lead",
                index === 1 ? "games-compass__lead--secondary" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              data-reveal
              key={card.title}
            >
              <div className="games-compass__header">
                <span className="games-compass__count muted-number" dir="ltr">
                  {`0${index + 1}`}
                </span>
                <div className="feature-card__header">
                  {card.icon ? (
                    <span className="icon-pill">
                      <Icon name={card.icon} />
                    </span>
                  ) : null}
                  {card.badge ? <span className="card-badge">{card.badge}</span> : null}
                </div>
              </div>

              {card.media ? (
                <div className="games-compass__media">
                  <MediaSlot
                    className={[
                      "media-slot--games-art",
                      index === 0 ? "media-slot--games-art-casino" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    decorative
                    fallbackMode="scene-only"
                    locale={locale}
                    slotId={card.media.slotId}
                  />
                </div>
              ) : null}

              <h3 className="card-title">{card.title}</h3>
              <p className="card-body">{card.description}</p>

              {card.highlights ? (
                <ul className="card-highlights card-highlights--inline">
                  {card.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}

              <div className="card-footer">
                <ButtonLink className="button-link--compact" item={gamesCta} locale={locale} />
              </div>
            </article>
          ))}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
