"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

const industries = [
  { id: "production", label: "Производство и промышленность", icon: "🏭" },
  { id: "horeca", label: "HoReCa, ресторанные сети и ритейл", icon: "🍽️" },
  { id: "logistics", label: "Склад, дистрибуция и логистика", icon: "📦" },
  { id: "services", label: "B2B услуги, консалтинг и сервис", icon: "💼" },
  { id: "energy", label: "Энергетика и ресурсоснабжение", icon: "⚡" },
];

const painPoints = [
  {
    id: "excel",
    dept: "Финансы & Учёт",
    title: "Критические данные ведутся в Excel и таблицах",
    impact: "Риск потери данных, человеческий фактор, формулы ломаются",
    score: 25,
  },
  {
    id: "messengers",
    dept: "Продажи & Клиенты",
    title: "Лиды и согласования идут через личные WhatsApp / Telegram",
    impact: "Теряется до 30% обращений, нет истории клиента, увод базы",
    score: 30,
  },
  {
    id: "manual_input",
    dept: "Операции",
    title: "Сотрудники вручную перебивают данные из системы в систему",
    impact: "Сотни часов потерь в месяц, дублирование операций, ошибки",
    score: 20,
  },
  {
    id: "reporting_delay",
    dept: "Управление",
    title: "Отчётность руководству собирается вручную по 3–5 дней",
    impact: "Решения принимаются вслепую на устаревших цифрах",
    score: 35,
  },
  {
    id: "hr_onboarding",
    dept: "HR & Персонал",
    title: "Бумажный онбординг, долгий ввод новичков и хаос в регламентах",
    impact: "Высокая текучесть на испытательном сроке, простои рабочих мест",
    score: 20,
  },
  {
    id: "energy_leaks",
    dept: "Ресурсы & Склад",
    title: "Нет онлайн-контроля потерь энергии, сырья или остатков склада",
    impact: "Кассовые разрывы, перерасход бюджета, неконтролируемые издержки",
    score: 25,
  },
];

export default function AuditCalculatorSection() {
  const [selectedIndustry, setSelectedIndustry] = useState("production");
  const [selectedPains, setSelectedPains] = useState<string[]>([
    "excel",
    "messengers",
    "reporting_delay",
  ]);
  const [step, setStep] = useState<"quiz" | "result">("quiz");
  const { tr } = useLang();

  const togglePain = (id: string) => {
    setSelectedPains((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const calculatedLossScore = selectedPains.reduce((acc, id) => {
    const p = painPoints.find((item) => item.id === id);
    return acc + (p ? p.score : 0);
  }, 0);

  const potentialZones = selectedPains.length;
  const estimatedSavings = potentialZones * 18; // percentage estimate

  return (
    <section
      id="audit"
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(145deg, #180933 0%, #290e4f 50%, #15062a 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            className="eyebrow"
            style={{
              marginBottom: 14,
              background: "rgba(168, 85, 247, 0.2)",
              borderColor: "rgba(168, 85, 247, 0.35)",
              color: "#d8b4fe",
            }}
          >
            {tr.sections.auditEyebrow}
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
            {tr.sections.auditH2a} <span className="text-gradient-light">{tr.sections.auditH2b}</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#c4b5fd",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Отметьте симптомы вашей компании. Система OMIS мгновенно рассчитает ключевые зоны
            цифровизации и сформирует предварительный план устранения потерь.
          </p>
        </div>

        {/* Interactive Workspace Container */}
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(168, 85, 247, 0.25)",
            borderRadius: 24,
            padding: "36px 32px",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
          }}
        >
          {/* Step 1: Industry Selector Tabs */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              Шаг 1. Выберите отрасль вашего предприятия:
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {industries.map((ind) => {
                const isSelected = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    style={{
                      padding: "10px 18px",
                      borderRadius: 14,
                      fontSize: 13.5,
                      fontWeight: 600,
                      background: isSelected ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "rgba(255, 255, 255, 0.05)",
                      border: isSelected ? "1px solid #c084fc" : "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: isSelected ? "0 4px 16px rgba(124, 58, 237, 0.35)" : "none",
                    }}
                  >
                    <span>{ind.icon}</span>
                    <span>{ind.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Pain Points Checklist */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Шаг 2. Отметьте актуальные проблемы в компании:
              </div>
              <span style={{ fontSize: 12, color: "#c4b5fd" }}>
                Выбрано: <strong>{selectedPains.length}</strong> из {painPoints.length}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 14,
              }}
            >
              {painPoints.map((item) => {
                const isChecked = selectedPains.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => togglePain(item.id)}
                    style={{
                      padding: "16px 18px",
                      borderRadius: 16,
                      background: isChecked ? "rgba(124, 58, 237, 0.18)" : "rgba(255, 255, 255, 0.03)",
                      border: isChecked ? "1.5px solid #a855f7" : "1px solid rgba(255, 255, 255, 0.08)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        border: isChecked ? "2px solid #a855f7" : "2px solid #71717a",
                        background: isChecked ? "#7c3aed" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                        transition: "all 0.2s",
                      }}
                    >
                      {isChecked && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>

                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#c084fc", textTransform: "uppercase" }}>
                          {item.dept}
                        </span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", lineHeight: 1.3, marginBottom: 4 }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.4 }}>
                        {item.impact}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Live Result Bar */}
          <div
            style={{
              padding: "24px 28px",
              borderRadius: 18,
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(79, 70, 229, 0.2) 100%)",
              border: "1px solid rgba(168, 85, 247, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#c4b5fd", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Обнаружено точек роста:
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#ffffff" }}>
                  {potentialZones} {potentialZones === 1 ? "зона" : potentialZones < 5 ? "зоны" : "зон"}
                </div>
              </div>

              <div style={{ width: 1, height: 40, background: "rgba(255, 255, 255, 0.15)" }} className="divider" />

              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#c4b5fd", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Потенциал роста эффективности:
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#34d399" }}>
                  +{estimatedSavings > 0 ? Math.min(estimatedSavings, 75) : 0}%
                </div>
              </div>

              <div style={{ width: 1, height: 40, background: "rgba(255, 255, 255, 0.15)" }} className="divider" />

              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#c4b5fd", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Индекс потерь в процессах:
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: calculatedLossScore > 50 ? "#f87171" : "#fbbf24" }}>
                  {calculatedLossScore > 60 ? "Критический уровень" : calculatedLossScore > 30 ? "Умеренный риск" : "Базовый уровень"}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                padding: "14px 28px",
                fontSize: 14,
                background: "linear-gradient(135deg, #a855f7, #6366f1)",
                boxShadow: "0 8px 24px rgba(168, 85, 247, 0.4)",
              }}
            >
              Получить экспертный разбор OMIS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .divider { display: none !important; }
          .audit-container { padding: 24px 20px !important; }
        }
        @media (max-width: 640px) {
          .audit-result-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
