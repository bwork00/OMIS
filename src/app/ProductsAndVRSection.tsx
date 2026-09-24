"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

const vrStages = [
  {
    id: "real",
    title: "1. Реальный объект",
    badge: "Промышленный узел",
    desc: "Сканирование физического оборудования завода, цеха, технологических узлов и опасных участков.",
    metrics: "100% точность геометрии оборудования",
    codeSnippet: "3D LiDAR Scan · 0.5mm Accuracy · CAD Modeling",
  },
  {
    id: "twin",
    title: "2. Digital Twin",
    badge: "Цифровой двойник",
    desc: "Создание параметрической интерактивной 3D-модели узла с физикой процессов и привязкой телеметрии.",
    metrics: "Физика сопротивления материалов в реальном времени",
    codeSnippet: "Unity / Unreal Engine 5 · Real-time Physics Engine",
  },
  {
    id: "sim",
    title: "3. VR-тренажёр",
    badge: "Обучение персонала",
    desc: "Погружение рабочего в шлеме VR: безопасная отработка сварки швов, сборки редукторов и действий при аварии.",
    metrics: "0% риска травм при отработке нештатных ситуаций",
    codeSnippet: "Haptic Feedback · 90 FPS · Multi-user Workspace",
  },
  {
    id: "analytics",
    title: "4. Аналитика и KPI",
    badge: "Контроль качества",
    desc: "Автоматический трекинг каждого движения, угла наклона электрода, времени операции и фиксация в профиле рабочего.",
    metrics: "Снижение производственного брака на 42%",
    codeSnippet: "Telemetry Ingestion · Automated Scoring · LMS Sync",
  },
];

export default function ProductsAndVRSection() {
  const [activeVRStage, setActiveVRStage] = useState(0);
  const [activeProductTab, setActiveProductTab] = useState<"energy" | "vr">("energy");
  const { tr } = useLang();

  const currentStage = vrStages[activeVRStage];

  return (
    <section
      id="products"
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(180deg, #090e1a 0%, #0d1627 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="eyebrow" style={{ marginBottom: 14 }}>
            {tr.sections.productsEyebrow}
          </span>
          <h2
            style={{
              fontSize: "clamp(2.1rem, 3.8vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: 16,
              marginTop: 8,
            }}
          >
            {tr.sections.productsH2a} <span className="text-gradient-cyan">{tr.sections.productsH2b}</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#cbd5e1",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Не просто заказная разработка. OMIS развивает собственные запатентованные платформы
            промышленного энергоучёта и VR/XR симуляторы для подготовки кадров.
          </p>

          {/* Product Switcher Pills */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(255, 255, 255, 0.05)",
              padding: 4,
              borderRadius: 999,
              marginTop: 28,
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <button
              onClick={() => setActiveProductTab("energy")}
              style={{
                padding: "10px 24px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: activeProductTab === "energy" ? "linear-gradient(135deg, #06b6d4, #3b82f6)" : "transparent",
                color: activeProductTab === "energy" ? "#ffffff" : "#94a3b8",
                boxShadow: activeProductTab === "energy" ? "0 4px 14px rgba(6, 182, 212, 0.35)" : "none",
              }}
            >
              ⚡ SmartEnergyControl (EnergyTech)
            </button>
            <button
              onClick={() => setActiveProductTab("vr")}
              style={{
                padding: "10px 24px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: activeProductTab === "vr" ? "linear-gradient(135deg, #06b6d4, #3b82f6)" : "transparent",
                color: activeProductTab === "vr" ? "#ffffff" : "#94a3b8",
                boxShadow: activeProductTab === "vr" ? "0 4px 14px rgba(6, 182, 212, 0.35)" : "none",
              }}
            >
              🥽 VR / XR Digital Twin Симуляторы
            </button>
          </div>
        </div>

        {/* ── TAB 1: SmartEnergyControl ── */}
        {activeProductTab === "energy" && (
          <div
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 24,
              border: "1px solid rgba(56, 189, 248, 0.25)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              padding: "40px 36px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
            className="product-grid"
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    background: "rgba(245, 158, 11, 0.15)",
                    color: "#fcd34d",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                  }}
                >
                  Запатентованный продукт OMIS
                </span>
                <span style={{ fontSize: 12, color: "#cbd5e1", fontWeight: 600 }}>Реестр ПО РК</span>
              </div>

              <h3 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", fontWeight: 900, color: "#ffffff", marginBottom: 16 }}>
                SmartEnergyControl
              </h3>

              <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.65, marginBottom: 24 }}>
                Интеллектуальная система диспетчеризации, технического учёта и оптимизации потребления
                электроэнергии, газа, тепла и воды на крупных производственных объектах.
              </p>

              {/* 3 Key Values */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 30 }}>
                {[
                  {
                    title: "Срезание пиковых нагрузок",
                    desc: "Прогнозирование превышения договорных лимитов и автоматическое перераспределение мощности.",
                    metric: "До −24% затрат на тариф",
                  },
                  {
                    title: "Беспроводная IIoT телеметрия",
                    desc: "Сбор данных с трансформаторных подстанций и узлов учёта каждые 30 секунд без прокладки кабелей.",
                    metric: "Поддержка LoRaWAN / Modbus",
                  },
                  {
                    title: "Мгновенная детекция утечек",
                    desc: "Нейросетевой анализ отклонений от технологического графика: выявление аварий до перегрева.",
                    metric: "Реакция < 10 сек",
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: "rgba(168, 85, 247, 0.15)",
                        border: "1px solid rgba(168, 85, 247, 0.25)",
                        color: "#d8b4fe",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                        fontWeight: 900,
                        fontSize: 12,
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#ffffff" }}>
                        {item.title} <span style={{ color: "#d8b4fe", fontSize: 12 }}>({item.metric})</span>
                      </div>
                      <div style={{ fontSize: 12.5, color: "#cbd5e1", marginTop: 2 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn btn-primary" style={{ padding: "12px 28px", fontSize: 14 }}>
                Запросить демо SmartEnergyControl
              </a>
            </div>

            {/* Right: Mock Telemetry Dashboard */}
            <div
              style={{
                background: "#0f0728",
                borderRadius: 20,
                border: "1px solid rgba(124, 58, 237, 0.3)",
                padding: "24px 26px",
                color: "#ffffff",
                boxShadow: "0 16px 40px rgba(15, 7, 40, 0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}>SMART-ENERGY-HUB // ONLINE</span>
                </div>
                <span style={{ fontSize: 11, color: "#a855f7", fontFamily: "monospace" }}>Telemetria v3.8</span>
              </div>

              {/* Live KPI row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "14px 16px", borderRadius: 14, border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: 10, color: "#a1a1aa", textTransform: "uppercase" }}>Текущая мощность цеха</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#34d399", marginTop: 4 }}>348.2 кВт</div>
                  <div style={{ fontSize: 10, color: "#10b981", marginTop: 2 }}>−14.8% от пикового лимита</div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "14px 16px", borderRadius: 14, border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: 10, color: "#a1a1aa", textTransform: "uppercase" }}>Коэффициент cos φ</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#c084fc", marginTop: 4 }}>0.96</div>
                  <div style={{ fontSize: 10, color: "#a855f7", marginTop: 2 }}>Реактивная мощность скомпенсирована</div>
                </div>
              </div>

              {/* Interactive simulated graph bar */}
              <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: 14, padding: "16px 18px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#cbd5e1", marginBottom: 12 }}>
                  <span>Суточный график баланса (24h)</span>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>Оптимальный коридор</span>
                </div>
                {/* SVG mock power curve */}
                <svg width="100%" height="80" viewBox="0 0 400 80" fill="none">
                  <path d="M0 60 Q 50 40, 100 55 T 200 30 T 300 45 T 400 25" stroke="#7c3aed" strokeWidth="2.5" fill="none" />
                  <path d="M0 60 Q 50 40, 100 55 T 200 30 T 300 45 T 400 25 L 400 80 L 0 80 Z" fill="rgba(124, 58, 237, 0.15)" />
                  <line x1="0" y1="20" x2="400" y2="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="330" y="15" fill="#f87171" fontSize="9" fontWeight="bold">Лимит 400 кВт</text>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: VR / XR Digital Twin ── */}
        {activeProductTab === "vr" && (
          <div
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              borderRadius: 24,
              border: "1px solid rgba(168, 85, 247, 0.25)",
              boxShadow: "0 16px 40px -12px rgba(91, 33, 182, 0.2)",
              padding: "40px 36px",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 36px" }}>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  background: "rgba(168, 85, 247, 0.15)",
                  color: "#d8b4fe",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  display: "inline-block",
                  marginBottom: 10,
                }}
              >
                Технологическая цепочка VR
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", marginBottom: 8 }}>
                От реального цеха к интерактивному симулятору
              </h3>
              <p style={{ fontSize: 14, color: "#cbd5e1" }}>
                Кликайте по этапам, чтобы увидеть, как физическое оборудование превращается
                в обучающую VR-систему с телеметрией.
              </p>
            </div>

            {/* 4 Interactive Steps Selector */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
                marginBottom: 28,
              }}
              className="vr-steps-nav"
            >
              {vrStages.map((stage, i) => {
                const isActive = activeVRStage === i;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveVRStage(i)}
                    style={{
                      padding: "16px 14px",
                      borderRadius: 16,
                      background: isActive ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "rgba(255, 255, 255, 0.05)",
                      border: isActive ? "1px solid #c084fc" : "1px solid rgba(255, 255, 255, 0.1)",
                      color: isActive ? "#ffffff" : "#e4e4e7",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.25s ease",
                      boxShadow: isActive ? "0 8px 24px rgba(124, 58, 237, 0.25)" : "none",
                    }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 800, color: isActive ? "#ddd6fe" : "#7c3aed", textTransform: "uppercase", marginBottom: 4 }}>
                      {stage.badge}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.2 }}>
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Detailed Display Card */}
            <div
              style={{
                background: "linear-gradient(145deg, #16082e 0%, #2a0f52 100%)",
                borderRadius: 20,
                padding: "32px 36px",
                color: "#ffffff",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: 36,
                alignItems: "center",
              }}
              className="product-grid"
            >
              <div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#a855f7", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Этап {activeVRStage + 1} из 4
                </span>
                <h4 style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", margin: "8px 0 14px" }}>
                  {currentStage.title}: {currentStage.badge}
                </h4>
                <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.6, marginBottom: 20 }}>
                  {currentStage.desc}
                </p>

                <div
                  style={{
                    padding: "12px 18px",
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    marginBottom: 20,
                  }}
                >
                  <div style={{ fontSize: 11, color: "#a1a1aa", textTransform: "uppercase" }}>Бизнес-эффект:</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#34d399", marginTop: 2 }}>
                    ✓ {currentStage.metrics}
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "#c084fc", fontFamily: "monospace" }}>
                  Инженерный стек: {currentStage.codeSnippet}
                </div>
              </div>

              {/* Interactive Visual Graphic */}
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.35)",
                  borderRadius: 16,
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>
                  {activeVRStage === 0 ? "🏭" : activeVRStage === 1 ? "🧊" : activeVRStage === 2 ? "🥽" : "📊"}
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#ffffff", marginBottom: 6 }}>
                  {currentStage.badge} Модель
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.4 }}>
                  Сценарии: Обучение промышленной сварке, механика сложных турбин, охрана труда и ТБ на опасных производствах.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .vr-steps-nav { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .vr-steps-nav { grid-template-columns: 1fr !important; }
          .product-tabs { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
