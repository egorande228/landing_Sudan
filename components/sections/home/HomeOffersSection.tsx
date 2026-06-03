import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";
import MotionGroup from "@/components/ui/MotionGroup";
import type { SudanHomeContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

const slipPresets = {
  ar: [
    {
      chips: ["ترحيب", "بداية", "واضح"],
      code: "W-01",
      rows: [
        { label: "المسار", value: "أولى" },
        { label: "الوصول", value: "مباشر" },
        { label: "الواجهة", value: "سريعة" },
      ],
      status: "جاهز",
    },
    {
      chips: ["مكافآت", "دوران", "مرن"],
      code: "R-02",
      rows: [
        { label: "المسار", value: "متغير" },
        { label: "التتبع", value: "أسهل" },
        { label: "العرض", value: "نشط" },
      ],
      status: "نشط",
    },
    {
      chips: ["وصول", "هاتف", "أقصر"],
      code: "A-03",
      rows: [
        { label: "المسار", value: "مباشر" },
        { label: "الخطوة", value: "أقصر" },
        { label: "البدء", value: "فوري" },
      ],
      status: "سريع",
    },
  ],
  en: [
    {
      chips: ["Welcome", "Start", "Clear"],
      code: "W-01",
      rows: [
        { label: "Route", value: "First" },
        { label: "Access", value: "Direct" },
        { label: "View", value: "Fast" },
      ],
      status: "Ready",
    },
    {
      chips: ["Rewards", "Rotate", "Flexible"],
      code: "R-02",
      rows: [
        { label: "Route", value: "Active" },
        { label: "Tracking", value: "Easier" },
        { label: "Offer", value: "Live" },
      ],
      status: "Active",
    },
    {
      chips: ["Access", "Mobile", "Short"],
      code: "A-03",
      rows: [
        { label: "Route", value: "Direct" },
        { label: "Step", value: "Shorter" },
        { label: "Start", value: "Fast" },
      ],
      status: "Quick",
    },
  ],
} as const;

const slipLabels = {
  ar: {
    board: "إيصال العرض",
    ready: "نشط",
    route: "المسار",
  },
  en: {
    board: "Offer Slip",
    ready: "Open",
    promoCode: "Promo code",
    promoCodes: "Promo codes",
    route: "Route",
  },
} as const;

export default function HomeOffersSection({
  content,
  locale,
}: {
  content: SudanHomeContent["offers"];
  locale: Locale;
}) {
  const labels = slipLabels[locale];
  const presets = slipPresets[locale];
  const promoLabels =
    locale === "ar"
      ? {
          promoCode: "\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u0648\u0645\u0648",
          promoCodes: "\u0631\u0645\u0648\u0632 \u0627\u0644\u0628\u0631\u0648\u0645\u0648",
        }
      : {
          promoCode: slipLabels.en.promoCode,
          promoCodes: slipLabels.en.promoCodes,
        };

  return (
    <SectionShell className="home-offers-section" id="offers">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="offers-betslip-grid">
          {content.cards.map((card, index) => {
            const preset = presets[index] ?? presets[presets.length - 1];
            const promoCodes = card.promoCodes ?? [];

            return (
              <article
                className={[
                  "surface-card offer-betslip",
                  index === 0
                    ? "offer-betslip--welcome"
                    : index === content.cards.length - 1
                      ? "offer-betslip--access"
                      : "offer-betslip--rewards",
                ]
                  .filter(Boolean)
                  .join(" ")}
                data-reveal
                key={card.title}
              >
                <div aria-hidden="true" className="offer-betslip__rail">
                  <span className="offer-betslip__serial muted-number" dir="ltr">
                    {`0${index + 1}`}
                  </span>
                </div>

                <div className="offer-betslip__sheet">
                  <div className="offer-betslip__head">
                    <span className="offer-betslip__eyebrow">{labels.board}</span>
                    <div className="offer-betslip__head-meta">
                      {card.badge ? (
                        <span className="offer-betslip__pill offer-betslip__pill--accent">{card.badge}</span>
                      ) : null}
                      <span className="offer-betslip__pill">{preset.status}</span>
                    </div>
                  </div>

                  <div className="offer-betslip__board">
                    <div className="offer-betslip__board-head">
                      {card.icon ? (
                        <span className="offer-betslip__icon">
                          <Icon name={card.icon} />
                        </span>
                      ) : null}

                      <div className="offer-betslip__board-labels">
                        <span className="offer-betslip__board-title">{labels.board}</span>
                        <span className="offer-betslip__board-code muted-number" dir="ltr">
                          {preset.code}
                        </span>
                      </div>
                    </div>

                    <div className="offer-betslip__rows">
                      {preset.rows.map((row) => (
                        <div className="offer-betslip__row" key={`${card.title}-${row.label}`}>
                          <span className="offer-betslip__row-label">{row.label}</span>
                          <span className="offer-betslip__row-value">{row.value}</span>
                        </div>
                      ))}
                    </div>

                    {promoCodes.length ? (
                      <div className="offer-betslip__promo">
                        <span className="offer-betslip__promo-label">
                          {promoCodes.length > 1 ? promoLabels.promoCodes : promoLabels.promoCode}
                        </span>
                        <div className="offer-betslip__promo-codes">
                          {promoCodes.map((promoCode) => (
                            <span
                              className="offer-betslip__promo-code muted-number"
                              dir="ltr"
                              key={`${card.title}-${promoCode}`}
                            >
                              {promoCode}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="offer-betslip__meter" aria-hidden="true">
                      <span className="offer-betslip__meter-fill" />
                    </div>

                    <div className="offer-betslip__chips">
                      {preset.chips.map((chip) => (
                        <span className="offer-betslip__chip" key={`${card.title}-${chip}`}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="offer-betslip__copy">
                    <h3 className="offer-betslip__title">{card.title}</h3>
                    <p className="offer-betslip__text">{card.description}</p>
                  </div>

                  <div className="offer-betslip__foot">
                    <div className="offer-betslip__route">
                      <span className="offer-betslip__route-label">{labels.route}</span>
                      <span className="offer-betslip__route-value">{card.badge ?? labels.ready}</span>
                    </div>

                    {card.cta ? (
                      <div className="offer-betslip__actions">
                        <ButtonLink className="button-link--compact" item={card.cta} locale={locale} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
