import Link from "next/link";
import SudanLogo from "@/components/brand/SudanLogo";
import { getSudanChromeContent } from "@/content/sudan-content";
import { sudanGlobals } from "@/config/sudan.globals";
import { buildNavHref, buildPageHref } from "@/lib/navigation";
import type { Locale, PageKey } from "@/lib/site-types";

function FooterGroup({
  locale,
  pageKey,
  title,
  items,
}: {
  locale: Locale;
  pageKey: PageKey;
  title: string;
  items: readonly string[];
}) {
  const chrome = getSudanChromeContent(locale);

  return (
    <div className="footer-group">
      <p className="footer-group__title">{title}</p>
      <div className="footer-group__links">
        {items.map((item) => (
          <Link className="footer-group__link" href={buildNavHref(item, pageKey, locale)} key={item}>
            {chrome.navLabels[item as keyof typeof chrome.navLabels]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer({
  locale,
  pageKey,
}: {
  locale: Locale;
  pageKey: PageKey;
}) {
  const chrome = getSudanChromeContent(locale);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-shell__grid">
            <div className="footer-brand">
              <Link aria-label={chrome.brandLabel} className="footer-brand__logo" href={buildPageHref("home", locale)}>
                <SudanLogo decorative size="md" />
              </Link>
              <p className="footer-brand__blurb">{chrome.footer.blurb}</p>
            </div>

            <FooterGroup
              items={sudanGlobals.chrome.footer.home}
              locale={locale}
              pageKey={pageKey}
              title={chrome.footer.homeTitle}
            />
            <FooterGroup
              items={sudanGlobals.chrome.footer.partnership}
              locale={locale}
              pageKey={pageKey}
              title={chrome.footer.partnershipTitle}
            />
            <FooterGroup
              items={sudanGlobals.chrome.footer.support}
              locale={locale}
              pageKey={pageKey}
              title={chrome.footer.supportTitle}
            />
          </div>

          <div className="footer-shell__meta">{chrome.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
