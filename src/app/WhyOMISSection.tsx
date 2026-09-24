"use client";

import { useEffect, useRef } from "react";
import { useLang } from "./LanguageContext";

const facts = [
  {
    value: "50+",
    label: "авторских свидетельств на ПО",
    desc: "Зарегистрированные объекты интеллектуальной собственности и патенты",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    value: "200+",
    label: "завершённых проектов",
    desc: "От комплексных платформ до масштабных отраслевых внедрений",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    value: "100+",
    label: "корпоративных клиентов",
    desc: "Крупный бизнес, холдинги, промышленные гиганты и B2G",
    iconPath: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8",
  },
  {
    value: "13",
    label: "лет непрерывного опыта",
    desc: "Основана в 2013 году. Устойчивая репутация и собственная инженерная школа",
    iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    value: "10+",
    label: "отраслей автоматизации",
    desc: "Производство, энергетика, HoReCa, медицина, ритейл, логистика",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const capabilities = [
  {
    title: "Резидент Astana Hub",
    desc: "Официальный статус в ведущем международном технопарке IT-стартапов и технологических компаний Центральной Азии.",
    iconPath: "M3 21h18M3 7v14M21 7v14M6 7l6-4 6 4M10 21V11h4v10",
  },
  {
    title: "Собственные R&D лаборатории AI & VR",
    desc: "Создаём прикладные нейросетевые алгоритмы и физически точные VR-симуляторы без зависимости от сторонних вендоров.",
    iconPath: "M12 2a8 8 0 00-8 8c0 3.36 2.07 6.24 5 7.42V19a1 1 0 001 1h4a1 1 0 001-1v-1.58c2.93-1.18 5-4.06 5-7.42a8 8 0 00-8-8z",
  },
  {
    title: "Бесшовная интеграция с Enterprise-стеком",
    desc: "Опыт сшивки с 1С (УПП, ERP, УТ), SAP, Oracle, Bitrix24, корпоративными шинами данных и SCADA-системами.",
    iconPath: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Авторская методология проектирования",
    desc: "Собственный фреймворк сквозного аудита бизнес-процессов, защищающий заказчика от перерасхода бюджета.",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Промышленная надёжность и безопасность",
    desc: "Развёртывание в изолированном контуре заказчика (On-premise / Private Cloud) с соблюдением требований безопасности РК.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Готовые серийные продукты OMIS",
    desc: "Платформа учёта SmartEnergyControl, HR-модули и тренажёры — отлаженные решения с быстрой окупаемостью.",
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
];

export default function WhyOMISSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { tr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 60);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(180deg, #0a0f1d 0%, #0d1527 100%)",
        color: "#ffffff",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 54 }}>
          <span className="eyebrow" style={{ marginBottom: 14 }}>
            {tr.sections.whyEyebrow}
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
            {tr.sections.whyH2a} <span className="text-gradient-cyan">{tr.sections.whyH2b}</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#cbd5e1",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            13 лет опыта, собственная интеллектуальная собственность и подтверждённый
            опыт внедрения на ведущих промышленных предприятиях Казахстана.
          </p>
        </div>

        {/* 5 Big Facts Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {facts.map((f, i) => (
            <div
              key={i}
              className="reveal glass-card-hover"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                borderRadius: 18,
                padding: "24px 20px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(6, 182, 212, 0.15)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                  marginBottom: 14,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.iconPath} />
                </svg>
              </div>

              <div
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 6,
                  background: "linear-gradient(135deg, #38bdf8, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {f.value}
              </div>

              <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff", marginBottom: 4, lineHeight: 1.3 }}>
                {f.label}
              </div>

              <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.45, marginTop: "auto" }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>

        {/* 6 Capabilities Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="reveal glass-card-hover"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                borderRadius: 18,
                padding: "26px 24px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  flexShrink: 0,
                  boxShadow: "0 6px 16px rgba(6, 182, 212, 0.35)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={cap.iconPath} />
                </svg>
              </div>

              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#ffffff", marginBottom: 6, lineHeight: 1.3 }}>
                  {cap.title}
                </h3>
                <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.55 }}>
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
