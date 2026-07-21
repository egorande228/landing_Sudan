import ButtonLink from "@/components/ui/ButtonLink";
import MediaSlot from "@/components/ui/MediaSlot";
import SectionShell from "@/components/layout/SectionShell";
import {
  getSudanPathContactActions,
  type SudanHomeContent,
} from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function HomeHero({
  content,
  locale,
}: {
  content: SudanHomeContent["hero"];
  locale: Locale;
}) {
  const contactActions = getSudanPathContactActions(locale);

  return (
    <SectionShell className="hero-section" id="top">
      <div>
        <div className="hero-journey">
          <div className="hero-copy">
            <span className="section-eyebrow" data-reveal>
              {content.eyebrow}
            </span>
            <h1 className="hero-title" data-reveal>
              {content.title}
            </h1>
            <p className="hero-copy__body" data-reveal>
              {content.description}
            </p>

            <div className="hero-actions" data-reveal>
              <div className="button-row">
                <ButtonLink item={content.primaryCta} locale={locale} />
                <ButtonLink item={content.secondaryCta} locale={locale} />
              </div>
            </div>

            {content.featurePoints.length ? (
              <div className="hero-mini-grid" data-reveal>
                {content.featurePoints.map((point, index) => (
                  <article className="hero-mini-card" key={point}>
                    <span className="hero-mini-card__index muted-number" dir="ltr">
                      {`0${index + 1}`}
                    </span>
                    <p className="hero-mini-card__body">{point}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          <div className="surface-stage hero-atlas" data-reveal>
            <div className="hero-atlas__media">
              <MediaSlot locale={locale} priority slotId={content.media.slotId} />
            </div>

            <div className="hero-atlas__rail">
              <div className="hero-contact-row hero-contact-row--atlas">
                {contactActions.map((action) => (
                  <ButtonLink
                    className="button-link--compact"
                    item={action}
                    key={action.href}
                    locale={locale}
                  />
                ))}
              </div>

              <div className="hero-route">
                {content.metrics.map((metric, index) => (
                  <div className="hero-route__stop" key={metric.label}>
                    <span className="hero-route__index muted-number" dir="ltr">
                      {`0${index + 1}`}
                    </span>
                    <div className="hero-route__content">
                      <span className="hero-route__value muted-number" dir="ltr">
                        {metric.value}
                      </span>
                      <span className="hero-route__label">{metric.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
