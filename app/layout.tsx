import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MELBET Sudan",
    template: "%s | MELBET Sudan",
  },
  description: "Sudan market landing pages for players, partners, and agents.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
