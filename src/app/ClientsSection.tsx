"use client";

import { useLang } from "./LanguageContext";

const partners = [
  {
    name: "Astana Hub",
    category: "Технологический хаб",
    role: "Официальный аккредитованный резидент",
    logoText: "ASTANA HUB",
  },
  {
    name: "Hyundai Trans Kazakhstan",
    category: "Автомобилестроение",
    role: "Внедрение LMS и мобильной геймификации",
    logoText: "HYUNDAI",
  },
  {
    name: "Izmir Group",
    category: "FoodTech & HoReCa",
    role: "Цифровые чек-листы и расчёт KPI смен",
    logoText: "IZMIR GROUP",
  },
  {
    name: "Кайдзен Центр Казахстан",
    category: "Бережливое производство",
    role: "Методологическое партнёрство Lean",
    logoText: "KAIZEN CENTER",
  },
  {
    name: "Торайгыров Университет",
    category: "R&D и Академическое партнёрство",
    role: "Подготовка инженерных кадров",
    logoText: "TOU UNIVERSITY",
  },
  {
    name: "ИнЕУ",
    category: "Вычислительная техника",
    role: "Научно-техническое сотрудничество",
    logoText: "INEU TECH",
  },
];

export default function ClientsSection() {
  const { tr } = useLang();
  return (
    <section
      id="partners"
      style={{
        padding: "50px 0 60px",
        background: "linear-gradient(180deg, #130526 0%, #0f041c 100%)",
        borderTop: "1px solid rgba(168, 85, 247, 0.15)",
        borderBottom: "1px solid rgba(168, 85, 247, 0.15)",
        position: "relative",
      }}
    >
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#d8b4fe",
            }}
          >
            {tr.sections.partnersEyebrow}
          </p>
        </div>

        {/* Client Logos / Badges Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            alignItems: "center",
          }}
        >
          {partners.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "16px 18px",
                borderRadius: 14,
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "center",
                transition: "all 0.2s ease",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                }}
              >
                {p.logoText}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#d8b4fe" }}>
                {p.category}
              </div>
              <div style={{ fontSize: 10, color: "#71717a", marginTop: 4, lineHeight: 1.3 }}>
                {p.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
