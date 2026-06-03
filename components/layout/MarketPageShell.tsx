import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimatedBackdrop from "@/components/layout/AnimatedBackdrop";
import DocumentDirection from "@/components/layout/DocumentDirection";
import { getDirection } from "@/lib/locale";
import type { Locale, PageKey } from "@/lib/site-types";
import { sudanThemeVars } from "@/themes/sudan-theme";

export default function MarketPageShell({
  children,
  locale,
  pageKey,
}: {
  children: ReactNode;
  locale: Locale;
  pageKey: PageKey;
}) {
  const direction = getDirection(locale);

  return (
    <div
      className={["page-shell", "sudan-theme", `page-shell--${pageKey}`].join(" ")}
      dir={direction}
      lang={locale}
      style={sudanThemeVars}
    >
      <DocumentDirection direction={direction} locale={locale} />
      <AnimatedBackdrop />
      <Header locale={locale} pageKey={pageKey} />
      <main className="page-main">{children}</main>
      <Footer locale={locale} pageKey={pageKey} />
    </div>
  );
}
