"use client";

export default function Footer() {
  const links = {
    "Решения": [
      { label: "AI & Intelligent Automation", href: "#ai-agents" },
      { label: "Enterprise Systems (ERP)", href: "#solutions" },
      { label: "HRTech & LMS", href: "#solutions" },
      { label: "VR / XR Симуляторы", href: "#solutions" },
      { label: "BI & Big Data Аналитика", href: "#solutions" },
      { label: "SmartEnergyControl", href: "#solutions" },
    ],
    "Компания": [
      { label: "О компании", href: "#about" },
      { label: "Кейсы внедрения", href: "#cases" },
      { label: "Методология", href: "#methodology" },
      { label: "Интеллектуальная собственность", href: "#about" },
      { label: "Резидент Astana Hub", href: "#about" },
      { label: "Контакты", href: "#contact" },
    ],
    "Отрасли": [
      { label: "Промышленность & Металлургия", href: "#solutions" },
      { label: "Энергетика & Учёт ресурсов", href: "#solutions" },
      { label: "Ресторанный бизнес & Ритейл", href: "#cases" },
      { label: "Автомобилестроение", href: "#cases" },
      { label: "Агропромышленный комплекс", href: "#cases" },
      { label: "Медицина & Образование", href: "#solutions" },
    ],
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #180933 0%, #0e0420 100%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent)",
        }}
      />

      {/* Main footer */}
      <div className="site-container" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Brand info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 16px rgba(124, 58, 237, 0.35)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9L9 3L15 9L9 15L3 9Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 6L12 9L9 12L6 9L9 6Z" fill="white" />
                </svg>
              </div>
              <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em", color: "#ffffff" }}>
                OMIS
              </span>
            </div>

            <p style={{ fontSize: 13.5, color: "#cbd5e1", lineHeight: 1.6, marginBottom: 22, maxWidth: 320 }}>
              Проектируем и внедряем цифровую архитектуру бизнеса. Сначала диагностика и процессы — затем технологии.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "#94a3b8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#a855f7" }}>📍</span> Казахстан · Астана / Павлодар
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#a855f7" }}>🏛️</span> Официальный резидент Astana Hub
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#a855f7" }}>📄</span> 50+ авторских прав на ПО
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#a855f7" }}>✉️</span> info@omis.kz
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#d8b4fe",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 18,
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      style={{
                        fontSize: 13,
                        color: "#94a3b8",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", padding: "20px 0" }}>
        <div
          className="site-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <p>© 2013–2026 OMIS Enterprise Architecture. Все права защищены.</p>
          <div style={{ display: "flex", gap: 20 }}>
            <span>Политика конфиденциальности</span>
            <span>NDA & Защита данных</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 550px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
