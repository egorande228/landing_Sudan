import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import type { SudanHomeContent } from "@/content/sudan-content";
import type { Locale } from "@/lib/site-types";

export default function HomeFinalCta({
  content,
  locale,
}: {
  content: SudanHomeContent["finalCta"];
  locale: Locale;
}) {
  return (
    <SectionShell className="home-final-section" id="final-cta" tight>
      <MotionGroup variant="scale">
        <div className="surface-stage closing-atlas" style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}>
          <div className="closing-atlas__copy" data-reveal>
            <span className="section-eyebrow">{content.eyebrow}</span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-description">{content.description}</p>

            <div className="button-row">
              <ButtonLink item={content.primaryCta} locale={locale} />
              <ButtonLink item={content.secondaryCta} locale={locale} />
            </div>
          </div>

          <div className="closing-atlas__media" data-reveal>
            <MediaSlot locale={locale} slotId={content.media.slotId} />
          </div>

          <div className="closing-atlas__route" data-reveal>
            {content.checkpoints.map((item, index) => (
              <div className="closing-atlas__stop" key={item}>
                <span className="closing-atlas__stop-index muted-number" dir="ltr">
                  {`0${index + 1}`}
                </span>
                <span className="closing-atlas__stop-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
