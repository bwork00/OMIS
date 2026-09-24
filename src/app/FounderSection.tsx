"use client";

import { useLang } from "./LanguageContext";

export default function FounderSection() {
  const { tr } = useLang();
  return (
    <section
      id="founder"
      style={{
        padding: "90px 0",
        background: "linear-gradient(180deg, #090e1a 0%, #0d1627 100%)",
        color: "#ffffff",
        position: "relative",
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            background: "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: 28,
            padding: "48px 44px",
            color: "#ffffff",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: 48,
            alignItems: "center",
          }}
          className="founder-grid"
        >
          {/* Left Column: Persona Card */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 36px rgba(124, 58, 237, 0.4)",
                border: "4px solid rgba(255, 255, 255, 0.15)",
                fontSize: 48,
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              АШ
            </div>

            <h3 style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", marginBottom: 4 }}>
              Александр Шанькин
            </h3>
            <p style={{ fontSize: 13, color: "#c4b5fd", fontWeight: 600, marginBottom: 16 }}>
              Основатель OMIS · Solution-архитектор
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                  background: "rgba(124, 58, 237, 0.25)",
                  color: "#ddd6fe",
                  border: "1px solid rgba(168, 85, 247, 0.35)",
                }}
              >
                Магистр техники и технологии
              </span>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                  background: "rgba(16, 185, 129, 0.2)",
                  color: "#6ee7b7",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                }}
              >
                Кайдзен-наставник
              </span>
            </div>
          </div>

          {/* Right Column: Leadership Philosophy & Hard Facts */}
          <div>
            <span
              className="eyebrow"
              style={{
                marginBottom: 12,
                background: "rgba(168, 85, 247, 0.2)",
                borderColor: "rgba(168, 85, 247, 0.35)",
                color: "#d8b4fe",
              }}
            >
              {tr.sections.founderEyebrow}
            </span>

            <h4
              style={{
                fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                fontWeight: 900,
                lineHeight: 1.25,
                color: "#ffffff",
                marginBottom: 16,
              }}
            >
              «За технологией OMIS стоит не просто код, а глубокое понимание бизнес-процессов и бережливого управления»
            </h4>

            <p style={{ fontSize: 14.5, color: "#cbd5e1", lineHeight: 1.65, marginBottom: 24 }}>
              Создание архитектуры корпоративных систем начинается не с выбора фреймворка, а с анализа
              потерь времени, узких мест и человеческого фактора. Сочетание Кайдзен-философии непрерывного
              улучшения и 13 лет инженерной практики позволяет OMIS проектировать системы, которые окупаются
              в первые месяцы промышленной эксплуатации.
            </p>

            {/* 3 Proof Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
                paddingTop: 18,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              className="founder-proofs"
            >
              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#ffffff" }}>50+</div>
                <div style={{ fontSize: 11, color: "#a1a1aa", marginTop: 2 }}>
                  Авторских прав на ПО в реестре РК
                </div>
              </div>

              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#ffffff" }}>200+</div>
                <div style={{ fontSize: 11, color: "#a1a1aa", marginTop: 2 }}>
                  Реализованных проектов B2B / B2G
                </div>
              </div>

              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#ffffff" }}>13 лет</div>
                <div style={{ fontSize: 11, color: "#a1a1aa", marginTop: 2 }}>
                  Непрерывной разработки и внедрений
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px 24px !important; }
          .founder-proofs { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .founder-proofs { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
