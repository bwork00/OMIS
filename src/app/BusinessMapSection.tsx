"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

const departments = [
  {
    id: "sales",
    title: "Продажи & CRM",
    icon: "📈",
    headline: "Сквозной контроль воронки и AI-менеджеры",
    solutions: [
      "AI-квалификация входящих лидов из WhatsApp за 15 секунд",
      "Омниканальная CRM с автоматическим распределением сделок",
      "Контроль конверсии этапов и предиктивный скоринг",
      "Автогенерация счетов, КП и договоров без участия менеджера",
    ],
    metric: "+38% конверсия в закрытую сделку",
  },
  {
    id: "finances",
    title: "Финансы & Учёт",
    icon: "💳",
    headline: "Прозрачность Cash Flow и управленческий P&L онлайн",
    solutions: [
      "Автоматическая сборка P&L и Cash Flow без ручного сведения таблиц",
      "План-факт анализ бюджетных статей в реальном времени",
      "Сквозная интеграция с банками и 1С",
      "Раннее предупреждение кассовых разрывов за 14 дней",
    ],
    metric: "0 дней задержки управленческой отчётности",
  },
  {
    id: "hr",
    title: "HR & Персонал",
    icon: "👥",
    headline: "Автоматизация найма, онбординга и геймификация KPI",
    solutions: [
      "Мобильная платформа найма и верификации кандидатов (кейс Hyundai)",
      "Интерактивное микрообучение и корпоративные базы знаний RAG",
      "Рейтинг лучших сотрудников и магазин нематериальной мотивации",
      "Автоматический расчёт KPI по чек-листам (кейс Izmir)",
    ],
    metric: "−45% времени на онбординг новичков",
  },
  {
    id: "production",
    title: "Производство & IoT",
    icon: "🏭",
    headline: "Digital Twin цехов и мониторинг простоев оборудования",
    solutions: [
      "Телеметрия с датчиков станков и производственных линий (IIoT)",
      "Расчёт общей эффективности оборудования (OEE) в реальном времени",
      "VR-тренажёры для отработки опасных технологических операций",
      "Автоматический контроль соблюдения технологических карт",
    ],
    metric: "−35% аварийных простоев линий",
  },
  {
    id: "warehouse",
    title: "Склад & Логистика",
    icon: "📦",
    headline: "WMS, адресный склад и контроль остатков",
    solutions: [
      "Автоматизированный учёт перемещений по QR/штрихкодам",
      "Оптимизация маршрутов комплектации заказов по ячейкам",
      "Контроль неликвидов и предупреждение дефицита сырья",
      "Синхронизация остатков между филиалами и онлайн-витриной",
    ],
    metric: "99.8% точность складского учёта",
  },
  {
    id: "management",
    title: "Топ-менеджмент",
    icon: "🎯",
    headline: "Единый цифровой пульт управления компанией",
    solutions: [
      "Executive Dashboard на смартфоне руководителя с ключевыми KPI",
      "Контроль выполнения стратегических поручений и дедлайнов",
      "AI-ассистент генерального директора для быстрых ответов по данным",
      "Сквозная прозрачность работы всех подразделений в едином контуре",
    ],
    metric: "100% контроль бизнеса из любой точки мира",
  },
];

export default function BusinessMapSection() {
  const [activeDept, setActiveDept] = useState("sales");
  const { tr } = useLang();

  const current = departments.find((d) => d.id === activeDept) || departments[0];

  return (
    <section
      id="business-map"
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
            {tr.sections.mapEyebrow}
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
            Архитектура автоматизации: <span className="text-gradient-cyan">каждый узел компании</span>
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
            Кликните на подразделение, чтобы увидеть, какие цифровые решения OMIS связывают
            его в единый управляемый контур бизнеса.
          </p>
        </div>

        {/* Interactive Map Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "360px 1fr",
            gap: 28,
            alignItems: "stretch",
          }}
          className="map-grid"
        >
          {/* Left Column: Department Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {departments.map((dept) => {
              const isSelected = activeDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 20px",
                    borderRadius: 16,
                    background: isSelected ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "rgba(255, 255, 255, 0.05)",
                    border: isSelected ? "1px solid #7c3aed" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: isSelected ? "#ffffff" : "#e4e4e7",
                    boxShadow: isSelected ? "0 8px 24px rgba(124, 58, 237, 0.25)" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{dept.icon}</span>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 800 }}>{dept.title}</div>
                    <div style={{ fontSize: 11, color: isSelected ? "#ddd6fe" : "#a1a1aa", marginTop: 2 }}>
                      {isSelected ? "Активный просмотр" : "Нажмите для деталей"}
                    </div>
                  </div>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.2)",
                      flexShrink: 0,
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Department Solutions Showcase */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 24,
              border: "1px solid rgba(168, 85, 247, 0.25)",
              boxShadow: "0 16px 48px -12px rgba(91, 33, 182, 0.2)",
              padding: "36px 34px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: "rgba(168, 85, 247, 0.15)",
                    color: "#d8b4fe",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                  }}
                >
                  Контур: {current.title}
                </span>

                <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
                  {current.metric}
                </span>
              </div>

              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", marginBottom: 12 }}>
                {current.headline}
              </h3>

              <div style={{ fontSize: 12, fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em", margin: "20px 0 12px" }}>
                Архитектурные решения OMIS:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {current.solutions.map((sol, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span style={{ color: "#a855f7", fontWeight: 900, fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#e4e4e7", lineHeight: 1.5, fontWeight: 500 }}>
                      {sol}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 24,
                marginTop: 28,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              <div style={{ fontSize: 13, color: "#a1a1aa" }}>
                Связываем данный модуль с 1С, Bitrix24, Telegram и корпоративным ядром.
              </div>

              <a href="#contact" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>
                Автоматизировать {current.title.toLowerCase()}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .map-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .map-dept-tabs { flex-wrap: wrap !important; }
        }
      `}</style>
    </section>
  );
}
