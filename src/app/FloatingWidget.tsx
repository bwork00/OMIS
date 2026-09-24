"use client";

import { useLang } from "./LanguageContext";

export default function FloatingWidget() {
  const { tr, lang } = useLang();

  const labels = {
    RU: "⚡ Рассчитать аудит потерь",
    KZ: "⚡ Шығын аудитін есептеу",
    EN: "⚡ Calculate Loss Audit",
  };

  return (
    <a href="#audit" className="floating-cta-btn" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
      <span className="live-pulse-dot" />
      <span>{labels[lang]}</span>
    </a>
  );
}
