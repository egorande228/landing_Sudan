import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import { getLocalizedSudanMediaSlot } from "@/content/sudan-media-slots";
import { getSudanSportsCardLink, type SudanHomeContent } from "@/content/sudan-content";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import { localizeHref } from "@/lib/locale";
import type { IconName, Locale } from "@/lib/site-types";

type SportsCard = SudanHomeContent["sports"]["lead"];

const sportsChipLabels: Record<Locale, Partial<Record<IconName, string>>> = {
  ar: {
    ball: "رياضات",
    gift: "دعم",
    mobile: "هاتف",
    ticket: "مباشر",
  },
  en: {
    ball: "Sports",
    gift: "Support",
    mobile: "Mobile",
    ticket: "Live",
  },
};

const sportsFallbackNotes: Record<Locale, Partial<Record<IconName, string>> & { default: string }> = {
  ar: {
    ball: "تنقل أسرع عندما تريد متابعة أكثر من مباراة في نفس الواجهة.",
    default: "واجهة أوضح قبل الانتقال إلى الخطوة التالية.",
    gift: "راجع ما يدعم البداية قبل فتح أول رهان.",
    mobile: "أوضح على الشاشة الصغيرة مع قراءة أسرع للمعلومة.",
    ticket: "أفضل عندما تتغير الصورة بسرعة أثناء المباراة.",
  },
  en: {
    ball: "Move faster when you want more than one match in the same view.",
    default: "A clearer read before you take the next step.",
    gift: "Check what supports the start before the first bet opens.",
    mobile: "Cleaner on small screens with faster scanning.",
    ticket: "Best when the match picture changes quickly.",
  },
};

function getSportsCardChip(card: SportsCard, locale: Locale) {
  if (card.badge) {
    return card.badge;
  }

  if (card.icon) {
    return sportsChipLabels[locale][card.icon] ?? (locale === "ar" ? "الرياضة" : "Sports");
  }

  return locale === "ar" ? "الرياضة" : "Sports";
}

function getSportsCardNote(card: SportsCard, locale: Locale) {
  if (card.metric?.label) {
    return card.metric.label;
  }

  if (card.icon) {
    return sportsFallbackNotes[locale][card.icon] ?? sportsFallbackNotes[locale].default;
  }

  return sportsFallbackNotes[locale].default;
}

function getSportsArtName(card: SportsCard, index: number) {
  if (card.icon) {
    return card.icon;
  }

  return index === 0 ? "ball" : "ticket";
}

function getPlaceholderLabel(locale: Locale) {
  return locale === "ar" ? "مكان المعاينة" : "Preview slot";
}

export default function HomeSportsSection({
  content,
  locale,
}: {
  content: SudanHomeContent["sports"];
  locale: Locale;
}) {
  const sportsLink = getSudanSportsCardLink(locale);
  const sportsHref = localizeHref(sportsLink.href, locale);
  const cards = [content.lead, ...content.cards].slice(0, 4);

  return (
    <SectionShell className="home-sports-section" id="sports">
      <MotionGroup variant="up">
        <div className="surface-stage sports-showcase">
          <SectionHeader content={content} />

          <div className="sports-showcase__grid">
            {cards.map((card, index) => {
              const chip = getSportsCardChip(card, locale);
              const note = getSportsCardNote(card, locale);
              const artName = getSportsArtName(card, index);
              const placeholderLabel = getPlaceholderLabel(locale);
              const mediaSlot = card.media ? getLocalizedSudanMediaSlot(card.media.slotId, locale) : null;
              const mediaSrc = mediaSlot?.targetPath ?? null;

              return (
                <Link
                  className="sports-showcase-card"
                  data-reveal
                  href={sportsHref}
                  key={card.title}
                  rel={sportsLink.external ? "noreferrer" : undefined}
                  target={sportsLink.external ? "_blank" : undefined}
                >
                  <div className="sports-showcase-card__media">
                    {mediaSrc ? (
                      <div className="sports-showcase-card__art-shell">
                        <Image
                          alt=""
                          className="sports-showcase-card__image"
                          fill
                          priority={index === 0}
                          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
                          src={mediaSrc}
                        />
                      </div>
                    ) : (
                      <div
                        aria-hidden="true"
                        className={[
                          "sports-showcase-card__placeholder",
                          `sports-showcase-card__placeholder--${artName}`,
                        ].join(" ")}
                      >
                        <span className="sports-showcase-card__placeholder-badge">ART</span>
                        <span className="sports-showcase-card__placeholder-line sports-showcase-card__placeholder-line--primary" />
                        <span className="sports-showcase-card__placeholder-line sports-showcase-card__placeholder-line--secondary" />
                        <span className="sports-showcase-card__placeholder-frame">
                          <Icon className="sports-showcase-card__placeholder-icon" name={artName} />
                        </span>
                        <span className="sports-showcase-card__placeholder-label">{placeholderLabel}</span>
                      </div>
                    )}

                    <div className="sports-showcase-card__meta">
                      <span className="sports-showcase-card__chip">{chip}</span>
                      <span className="sports-showcase-card__serial muted-number" dir="ltr">
                        {`0${index + 1}`}
                      </span>
                    </div>
                  </div>

                  <div className="sports-showcase-card__copy">
                    <h3 className="sports-showcase-card__title">{card.title}</h3>
                    <p className="sports-showcase-card__body">{card.description}</p>
                  </div>

                  <p className="sports-showcase-card__note">{note}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
