import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import MotionGroup from "@/components/ui/MotionGroup";
import Icon from "@/components/ui/Icon";
import type { SudanPartnershipContent } from "@/content/sudan-content";

export default function PartnershipSteps({
  content,
}: {
  content: SudanPartnershipContent["steps"];
}) {
  return (
    <SectionShell className="partnership-steps" id="steps">
      <MotionGroup>
        <SectionHeader content={content} />

        <div className="steps-track">
          <div className="steps-grid">
            {content.items.map((item, index) => (
              <article
                className={[
                  "surface-card step-card",
                  index === 1 ? "step-card--accent" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                data-reveal
                key={item.title}
              >
                <span className="step-card__metric muted-number" dir="ltr">
                  {item.metric}
                </span>
                {item.icon ? (
                  <span className="icon-pill">
                    <Icon name={item.icon} />
                  </span>
                ) : null}
                <h3 className="step-card__title">{item.title}</h3>
                <p className="step-card__body">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
