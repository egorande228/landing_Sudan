import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";
import MediaSlot from "@/components/ui/MediaSlot";
import MotionGroup from "@/components/ui/MotionGroup";
import type { SudanPartnershipContent } from "@/content/sudan-content";
import { localizeHref } from "@/lib/locale";
import type { Locale } from "@/lib/site-types";

export default function PartnershipFinalCta({
  content,
  locale,
}: {
  content: SudanPartnershipContent["finalCta"];
  locale: Locale;
}) {
  const actionLabel = locale === "ar" ? "\u0627\u0641\u062a\u062d \u0627\u0644\u0645\u0633\u0627\u0631" : "Open route";

  return (
    <SectionShell className="partnership-final" id="final-cta" tight>
      <MotionGroup variant="scale">
        <div className="surface-stage closing-grid" style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}>
          <div className="closing-copy partnership-final__copy" data-reveal>
            <span className="section-eyebrow">{content.eyebrow}</span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-description">{content.description}</p>
            <div className="button-row">
              <ButtonLink item={content.primaryCta} locale={locale} />
              <ButtonLink item={content.secondaryCta} locale={locale} />
            </div>

            <div className="contact-grid">
              {content.contacts.map((contact) => (
                <Link
                  className="surface-card contact-card contact-card--link"
                  href={localizeHref(contact.href, locale)}
                  key={contact.href}
                  rel={contact.external ? "noreferrer" : undefined}
                  target={contact.external ? "_blank" : undefined}
                >
                  <div className="feature-card__header">
                    <span className="icon-pill">
                      <Icon className="contact-card__icon" name={contact.icon} />
                    </span>
                  </div>
                  <h3 className="card-title">{contact.title}</h3>
                  <p className="contact-card__body">{contact.description}</p>
                  <span className="contact-card__meta">{actionLabel}</span>
                </Link>
              ))}
            </div>
          </div>

          <div data-reveal>
            <MediaSlot locale={locale} slotId={content.media.slotId} />
          </div>
        </div>
      </MotionGroup>
    </SectionShell>
  );
}
