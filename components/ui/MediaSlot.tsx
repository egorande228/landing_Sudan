"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  getLocalizedSudanMediaSlot,
  type SudanMediaSlotId,
} from "@/content/sudan-media-slots";
import type { Locale } from "@/lib/site-types";

function toAspectRatio(ratio: string) {
  const [width, height] = ratio.split(":").map((value) => Number(value.trim()));
  return `${width} / ${height}`;
}

function getFallbackMessage(locale: Locale) {
  return locale === "ar"
    ? "\u0645\u0639\u0627\u064a\u0646\u0629 \u0628\u0635\u0631\u064a\u0629 \u0645\u0624\u0642\u062a\u0629 \u062d\u062a\u0649 \u064a\u0635\u0644 \u0627\u0644\u0641\u0646 \u0627\u0644\u0646\u0647\u0627\u0626\u064a"
    : "Concept preview while final artwork is prepared";
}

function getFallbackSection(locale: Locale, fallbackType: string) {
  const labels = {
    "hero-stage": {
      ar: "\u0627\u0644\u0627\u0641\u062a\u062a\u0627\u062d\u064a\u0629",
      en: "Intro",
    },
    "game-card": {
      ar: "\u0627\u0644\u0623\u0644\u0639\u0627\u0628",
      en: "Games",
    },
    "sports-card": {
      ar: "\u0627\u0644\u0631\u064a\u0627\u0636\u0629",
      en: "Sports",
    },
    "offer-card": {
      ar: "\u0627\u0644\u0639\u0631\u0648\u0636",
      en: "Offers",
    },
    "partnership-panel": {
      ar: "\u0627\u0644\u0634\u0631\u0627\u0643\u0629",
      en: "Partnership",
    },
    "support-panel": {
      ar: "\u0627\u0644\u062f\u0639\u0645",
      en: "Support",
    },
  } as const;

  return labels[fallbackType as keyof typeof labels]?.[locale] ?? labels["game-card"][locale];
}

function getFallbackTitle(locale: Locale, fallbackType: string) {
  const labels = {
    "hero-stage": {
      ar: "\u062a\u0635\u0648\u0631 \u0645\u0634\u0647\u062f \u0627\u0644\u0646\u064a\u0644",
      en: "Nile route concept",
    },
    "game-card": {
      ar: "\u062a\u0635\u0648\u0631 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0644\u0639\u0628",
      en: "Player floor concept",
    },
    "sports-card": {
      ar: "\u062a\u0635\u0648\u0631 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629",
      en: "Matchboard concept",
    },
    "offer-card": {
      ar: "\u062a\u0635\u0648\u0631 \u0625\u0637\u0627\u0631 \u0627\u0644\u0639\u0631\u0636",
      en: "Offer frame concept",
    },
    "partnership-panel": {
      ar: "\u062a\u0635\u0648\u0631 \u0645\u0633\u0627\u0631 \u0627\u0644\u0634\u0631\u0627\u0643\u0629",
      en: "Partner desk concept",
    },
    "support-panel": {
      ar: "\u062a\u0635\u0648\u0631 \u0645\u0631\u0643\u0632 \u0627\u0644\u062f\u0639\u0645",
      en: "Support hub concept",
    },
  } as const;

  return labels[fallbackType as keyof typeof labels]?.[locale] ?? labels["game-card"][locale];
}

function getFallbackSignals(locale: Locale, fallbackType: string) {
  const labels = {
    "hero-stage": {
      ar: [
        "\u0627\u0644\u0633\u0648\u062f\u0627\u0646",
        "24/7",
        "\u0645\u0628\u0627\u0634\u0631",
      ],
      en: ["Sudan", "24/7", "Live"],
    },
    "game-card": {
      ar: [
        "\u0643\u0627\u0632\u064a\u0646\u0648",
        "\u0633\u0644\u0648\u062a\u0633",
        "\u0647\u0627\u062a\u0641",
      ],
      en: ["Casino", "Slots", "Mobile"],
    },
    "sports-card": {
      ar: [
        "\u0643\u0631\u0629 \u0642\u062f\u0645",
        "\u0644\u0627\u064a\u0641",
        "\u0633\u0631\u064a\u0639",
      ],
      en: ["Football", "Live", "Fast"],
    },
    "offer-card": {
      ar: [
        "\u062a\u0631\u062d\u064a\u0628",
        "\u0645\u0643\u0627\u0641\u0622\u062a",
        "\u0648\u0627\u0636\u062d",
      ],
      en: ["Welcome", "Rewards", "Clear"],
    },
    "partnership-panel": {
      ar: [
        "\u062a\u062a\u0628\u0639",
        "\u062f\u0639\u0645",
        "\u0645\u0628\u0627\u0634\u0631",
      ],
      en: ["Tracking", "Support", "Direct"],
    },
    "support-panel": {
      ar: [
        "\u0623\u0633\u0626\u0644\u0629",
        "\u062a\u0648\u0627\u0635\u0644",
        "\u062e\u0637\u0648\u0629",
      ],
      en: ["FAQ", "Contact", "Route"],
    },
  } as const;

  return labels[fallbackType as keyof typeof labels]?.[locale] ?? labels["game-card"][locale];
}

type MediaSlotProps = {
  slotId: SudanMediaSlotId;
  locale: Locale;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
  fallbackMode?: "default" | "scene-only";
};

export default function MediaSlot({
  slotId,
  locale,
  className,
  priority = false,
  decorative = false,
  fallbackMode = "default",
}: MediaSlotProps) {
  const slot = useMemo(() => getLocalizedSudanMediaSlot(slotId, locale), [locale, slotId]);
  const [errorSrc, setErrorSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const imageSrc = slot.targetPath;
  const hasError = !imageSrc || errorSrc === imageSrc;
  const loaded = Boolean(imageSrc) && loadedSrc === imageSrc;
  const sceneOnly = fallbackMode === "scene-only";

  return (
    <div
      aria-hidden={decorative || undefined}
      className={["media-slot", `media-slot--${slot.fallbackType}`, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: toAspectRatio(slot.ratio) }}
    >
      <div className="media-slot__inner">
        {imageSrc && !hasError ? (
          <Image
            alt={decorative ? "" : slot.alt}
            className={[
              "media-slot__image",
              `media-slot__image--${slot.fit}`,
              loaded ? "media-slot__image--loaded" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            fill
            key={imageSrc}
            onError={() => setErrorSrc(imageSrc)}
            onLoad={() => setLoadedSrc(imageSrc)}
            priority={priority}
            sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
            src={imageSrc}
          />
        ) : null}

        {!loaded || hasError ? (
          <div
            className={[
              "media-slot__fallback",
              `media-slot__fallback--${slot.fallbackType}`,
              sceneOnly ? "media-slot__fallback--scene-only" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {sceneOnly || slot.fallbackType === "hero-stage" || slot.fallbackType === "sports-card" ? null : (
              <div className="media-slot__fallback-head">
                <span className="media-slot__fallback-badge">
                  {locale === "ar" ? "\u0627\u0644\u0633\u0648\u062f\u0627\u0646" : "Sudan"}
                </span>
                <span className="media-slot__fallback-section">
                  {getFallbackSection(locale, slot.fallbackType)}
                </span>
              </div>
            )}

            <div aria-hidden="true" className="media-slot__fallback-scene">
              <span className="media-slot__fallback-orb" />
              <span className="media-slot__fallback-river" />
              <span className="media-slot__fallback-panel media-slot__fallback-panel--primary" />
              <span className="media-slot__fallback-panel media-slot__fallback-panel--secondary" />
              <span className="media-slot__fallback-panel media-slot__fallback-panel--tertiary" />
              <span className="media-slot__fallback-gridline" />
            </div>

            {sceneOnly ? null : (
              <div className="media-slot__fallback-foot">
                <span className="media-slot__fallback-title">
                  {getFallbackTitle(locale, slot.fallbackType)}
                </span>
                <div className="media-slot__fallback-signals">
                  {getFallbackSignals(locale, slot.fallbackType).map((signal) => (
                    <span className="media-slot__fallback-signal" key={signal}>
                      {signal}
                    </span>
                  ))}
                </div>
                <span className="media-slot__fallback-note">{getFallbackMessage(locale)}</span>
              </div>
            )}
          </div>
        ) : null}

        <span className="media-slot__overlay" />
      </div>
    </div>
  );
}
