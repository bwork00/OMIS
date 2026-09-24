"use client";

import { useLang } from "./LanguageContext";

const steps = [
  {
    num: "01",
    title: "Диагностика",
    desc: "Аудит процессов, узких мест и инфраструктуры. Находим потери времени и денег до написания кода.",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    num: "02",
    title: "Архитектура",
    desc: "Проектируем сквозную цифровую модель бизнеса, схемы интеграций, базы данных и стек технологий.",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    num: "03",
    title: "Прототип",
    desc: "Быстрый кликабельный прототип будущей системы. Вы тестируете логику и интерфейс до инвестиций в бэкенд.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    num: "04",
    title: "Разработка",
    desc: "Создаём ядро и модули по методологии Agile/Scrum с регулярными спринтами и демонстрацией релизов.",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    num: "05",
    title: "Интеграция",
    desc: "Бесшовная сшивка с 1C, SAP, CRM, банками, складским оборудованием и корпоративными шинами (ESB/Kafka).",
    iconPath: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    num: "06",
    title: "Внедрение & SLA",
    desc: "Промышленный запуск, обучение персонала, написание регламентов и круглосуточное сопровождение.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    num: "07",
    title: "Масштабирование",
    desc: "Аналитика бизнес-метрик, оптимизация нагрузки, подключение новых филиалов и AI-модулей.",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

export default function MethodologySection() {
  const { tr } = useLang();
  return (
    <section
      id="methodology"
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(150deg, #1b0a33 0%, #2a0f4d 50%, #15062a 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <span
            className="eyebrow"
            style={{
              marginBottom: 14,
              background: "rgba(124, 58, 237, 0.2)",
              borderColor: "rgba(168, 85, 247, 0.35)",
              color: "#d8b4fe",
            }}
          >
            {tr.sections.methodologyEyebrow}
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: 16,
              marginTop: 8,
            }}
          >
            {tr.sections.methodologyH2a} <span className="text-gradient-light">{tr.sections.methodologyH2b}</span>
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
            Мы не начинаем разработку вслепую. Сначала досконально оцифровываем архитектуру процессов,
            рассчитываем экономический эффект и только затем пишем код.
          </p>
        </div>

        {/* 7 Steps Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 18,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                borderRadius: 18,
                padding: "24px 22px",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(124, 58, 237, 0.25)",
                    border: "1px solid rgba(168, 85, 247, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c084fc",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={step.iconPath} />
                  </svg>
                </div>

                <span style={{ fontSize: 13, fontWeight: 900, color: "rgba(196, 181, 253, 0.5)", fontFamily: "monospace" }}>
                  STEP {step.num}
                </span>
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#ffffff", marginBottom: 8 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.55 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Central Tagline Quote */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 900, color: "#ffffff" }}>
            Сначала проектируем.{" "}
            <span className="text-gradient-light">Затем программируем.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
