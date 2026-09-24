"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageContext";

const solutions = [
  {
    id: "ai",
    title: "AI & Intelligent Automation",
    desc: "AI-агенты для продаж, HR, аналитики и контроля регламентов. Внедряем нейросети не ради тренда — только там, где сокращаются косты или растёт выручка.",
    tags: ["AI Sales Agent", "AI HR Agent", "AI Data Analyst", "Process Sentinel"],
    color: "from-purple-600 to-indigo-600",
    bg: "from-purple-50 to-indigo-50",
    border: "border-purple-200",
    iconPath: "M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8zm-2 15v-1a1 1 0 0 0-1-1 6 6 0 1 1 6 0 1 1 0 0 0-1 1v1h-4z",
  },
  {
    id: "enterprise",
    title: "Enterprise Systems & ERP",
    desc: "Комплексные корпоративные платформы для крупного бизнеса: цифровизация сквозных процессов, учёт, логистика, межсистемные шины и порталы управления.",
    tags: ["ERP", "Корпоративные порталы", "WMS & Склад", "Управленческий учёт"],
    color: "from-indigo-600 to-purple-700",
    bg: "from-indigo-50 to-purple-50",
    border: "border-indigo-200",
    iconPath: "M3 21h18M5 21V7l8-4v18M13 7l6 3v11M9 9v1M9 13v1M9 17v1M17 13v1M17 17v1",
  },
  {
    id: "bpa",
    title: "Business Process Automation (BPA)",
    desc: "Отказ от рутины и человеческого фактора: цепочки согласований, автоматический документооборот, сквозные триггеры и интеграции API.",
    tags: ["BPMN", "ЭДО", "Маршрутизация задач", "Автосогласования"],
    color: "from-violet-600 to-indigo-600",
    bg: "from-violet-50 to-indigo-50",
    border: "border-violet-200",
    iconPath: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v6M12 9V3M15 12h6M9 12H3",
  },
  {
    id: "crm",
    title: "CRM & SalesTech",
    desc: "Системы управления воронками продаж и дистрибуцией. AI-ассистенты менеджеров, предиктивный скоринг сделок и автоматизация повторных покупок.",
    tags: ["Омниканальность", "Скоринг лидов", "Pipeline BI", "WhatsApp Integration"],
    color: "from-purple-500 to-fuchsia-600",
    bg: "from-purple-50 to-fuchsia-50",
    border: "border-fuchsia-200",
    iconPath: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    id: "hrtech",
    title: "HRTech, LMS & Геймификация",
    desc: "Автоматизация найма, скрининга, онбординга и KPI сотрудников. Реализовано для завода Hyundai Казахстан и крупных холдингов с тысячами сотрудников.",
    tags: ["Онбординг", "Корп. обучение", "Геймификация KPI", "Скрининг резюме"],
    color: "from-violet-600 to-purple-700",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    iconPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    id: "bi",
    title: "Business Intelligence & Big Data",
    desc: "Сводные управленческие дашборды для собственников и топ-менеджмента. План-факт анализ в реальном времени, отчёты P&L и Cash Flow в одном клике.",
    tags: ["Executive BI", "План-факт", "Визуализация KPI", "Предиктивная аналитика"],
    color: "from-purple-700 to-indigo-700",
    bg: "from-purple-50 to-indigo-50",
    border: "border-indigo-200",
    iconPath: "M18 20V10M12 20V4M6 20v-6",
  },
  {
    id: "industrial",
    title: "Промышленная цифровизация & IoT",
    desc: "Digital twin цехов, мониторинг производственных линий, датчики телеметрии, контроль простоев оборудования и повышение общей эффективности (OEE).",
    tags: ["Digital Twin", "IIoT Датчики", "Мониторинг OEE", "Промышленный SCADA"],
    color: "from-purple-600 to-blue-700",
    bg: "from-purple-50 to-blue-50",
    border: "border-blue-200",
    iconPath: "M2 20h20M5 20V8l7-5v17M12 8l8 4v8",
  },
  {
    id: "energy",
    title: "EnergyTech & SmartEnergyControl",
    desc: "Интеллектуальный учёт и предиктивный контроль энергоресурсов предприятий. Собственный запатентованный программный комплекс OMIS.",
    tags: ["SmartEnergyControl", "Энергобаланс", "Пиковые нагрузки", "Экономия до 24%"],
    color: "from-amber-500 to-orange-600",
    bg: "from-amber-50 to-orange-50",
    border: "border-orange-200",
    iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    id: "vr",
    title: "VR / XR Тренажёры & Симуляторы",
    desc: "Виртуальные симуляторы для обучения опасным и точным операциям: промышленная сварка, техника безопасности, горное дело, медицина и механика.",
    tags: ["VR Сварка", "Охрана труда", "Digital Twin симуляторы", "Снижение брака"],
    color: "from-fuchsia-600 to-purple-700",
    bg: "from-fuchsia-50 to-purple-50",
    border: "border-fuchsia-200",
    iconPath: "M2 7h20v10H2zm5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    id: "custom",
    title: "Custom High-Load Development",
    desc: "Разработка специализированного сложного ПО с нуля: высоконагруженные веб-системы, микросервисная архитектура, нативные мобильные приложения iOS/Android.",
    tags: ["Microservices", "iOS / Android", "Enterprise API", "High Load"],
    color: "from-slate-700 to-purple-800",
    bg: "from-slate-50 to-purple-50",
    border: "border-slate-200",
    iconPath: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  },
];

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);
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
      id="solutions"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(180deg, #0b1329 0%, #080d1e 100%)",
        color: "#ffffff",
      }}
    >
      {/* Background pattern */}
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none" }} />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="eyebrow" style={{ marginBottom: 14 }}>
            {tr.sections.solutionsEyebrow}
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
            {tr.sections.solutionsH2a} <span className="text-gradient-cyan">{tr.sections.solutionsH2b}</span>
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
            10 специализированных технологических направлений. Каждое — завершённый комплекс
            архитектурных решений под задачи enterprise-бизнеса.
          </p>
        </div>

        {/* Cards grid — 3 cols on lg, 2 on md */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {solutions.map((sol, i) => {
            const isActive = activeCard === sol.id;
            return (
              <div
                key={sol.id}
                className="reveal glass-card-hover"
                onMouseEnter={() => setActiveCard(sol.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  position: "relative",
                  background: isActive ? "rgba(15, 23, 42, 0.9)" : "rgba(15, 23, 42, 0.65)",
                  borderRadius: 18,
                  padding: "26px 24px",
                  border: isActive ? "1px solid rgba(56, 189, 248, 0.45)" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive
                    ? "0 16px 36px -10px rgba(6, 182, 212, 0.3)"
                    : "0 4px 20px rgba(0,0,0,0.3)",
                  transition: "all 0.28s ease",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                {/* Header row: vector icon + number badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      boxShadow: "0 6px 16px rgba(6, 182, 212, 0.35)",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={sol.iconPath} />
                    </svg>
                  </div>

                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: isActive ? "#38bdf8" : "#64748b",
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: isActive ? "#38bdf8" : "#ffffff",
                    marginBottom: 8,
                    lineHeight: 1.3,
                    transition: "color 0.2s",
                  }}
                >
                  {sol.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#cbd5e1",
                    lineHeight: 1.6,
                    marginBottom: 18,
                    flexGrow: 1,
                  }}
                >
                  {sol.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 10, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 9px",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#38bdf8",
                        background: "rgba(6, 182, 212, 0.12)",
                        border: "1px solid rgba(6, 182, 212, 0.25)",
                        borderRadius: 999,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <div
          className="reveal"
          style={{
            marginTop: 48,
            padding: "24px 32px",
            borderRadius: 20,
            background: "linear-gradient(135deg, #2e1065 0%, #1e0b3b 100%)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            boxShadow: "0 16px 40px rgba(46, 16, 101, 0.2)",
          }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>
              Не нашли готового шаблона под вашу индустрию?
            </div>
            <div style={{ fontSize: 13, color: "#c4b5fd" }}>
              Мы проектируем архитектуру с чистого листа под уникальные бизнес-процессы любой сложности.
            </div>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: "12px 26px", fontSize: 14 }}>
            Заказать аудит процессов
          </a>
        </div>
      </div>
    </section>
  );
}
