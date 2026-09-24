"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

const industriesData = [
  {
    id: "auto",
    title: "Автомобилестроение & Заводы",
    badge: "Enterprise Industry",
    icon: "🚗",
    pain: "Длительный онбординг сотен рабочих, бумажные регламенты ТБ, отсутствие единого контроля мотивации.",
    solution: "Корпоративное мобильное приложение с геймификацией, микрообучением технике безопасности и сквозным расчётом KPI.",
    tech: ["Native iOS/Android", "LMS Core", "Gamification Engine", "1C:ERP Sync"],
    clientCase: "Hyundai Trans Kazakhstan · 30 000+ авто/год",
    result: "Адаптация новичков ускорилась на 45%, затраты на обучение снизились на 30%.",
  },
  {
    id: "foodtech",
    title: "FoodTech & Ресторанные сети",
    badge: "HoReCa & Франшизы",
    icon: "🍽️",
    pain: "Утеря заказов в чатах, непрозрачные смены, срыв санитарных регламентов, децентрализованный найм на точках.",
    solution: "Мобильная платформа операционного контроля: цифровые чек-листы с фотофиксацией, автоматический расчёт премий и экспресс-найм.",
    tech: ["Мобильные чек-листы", "Интеграция с R-Keeper/iiko", "AI-скрининг медкнижек"],
    clientCase: "Izmir Group (Сеть кофеен и ресторанов)",
    result: "Снижение критических ошибок на 35–50%, рост операционной эффективности на 40%.",
  },
  {
    id: "industrial",
    title: "Пищевая промышленность & Агро",
    badge: "Промышленное производство",
    icon: "🏭",
    pain: "Хаос в кадровом учёте сотен вахтовых рабочих, проверка СБ по 4 дня, потеря документов при приёме.",
    solution: "Платформа экспресс-найма с автоматическим OCR-распознаванием документов, согласованием в 1 клик и AI-тестированием.",
    tech: ["OCR сканер паспортов", "Модуль интеграции СБ", "Биометрическая верификация"],
    clientCase: "Мясной холдинг · 60+ тонн продукции в сутки",
    result: "Скорость приёма выросла в 10 раз, 100% прозрачность кадрового резерва.",
  },
  {
    id: "energy",
    title: "Энергетика & Ресурсы",
    badge: "EnergyTech & Инфраструктура",
    icon: "⚡",
    pain: "Штрафы за превышение договорных лимитов мощности, запоздалый съём показаний счётчиков, коммерческие потери.",
    solution: "Программно-аппаратный комплекс SmartEnergyControl: беспроводные IIoT-датчики, контроль cos φ и онлайн-баланс подстанций.",
    tech: ["LoRaWAN IIoT", "SmartEnergyControl", "SCADA Integration", "Предиктивный AI"],
    clientCase: "Промышленные подстанции и распределительные сети РК",
    result: "Экономия до 24% затрат на электроэнергию, срезание пиковых нагрузок.",
  },
  {
    id: "logistics",
    title: "Склад & Дистрибуция",
    badge: "Supply Chain",
    icon: "📦",
    pain: "Пересортица, неликвиды, ручной пересчёт ячеек, задержки отгрузки из-за несогласованности остатков в 1С.",
    solution: "WMS-платформа с адресным хранением, мобильными терминалами сбора данных и алгоритмом оптимизации маршрутов сборщика.",
    tech: ["WMS Core", "Штрихкодирование/QR", "1C:УТ / ERP коннектор"],
    clientCase: "Дистрибьюторские логистические хабы",
    result: "Точность учёта 99.8%, скорость комплектации партий выросла на 35%.",
  },
  {
    id: "retail",
    title: "Retail & B2B Продажи",
    badge: "Омниканальная коммерция",
    icon: "🛍️",
    pain: "Менеджеры забывают перезванивать, клиенты уходят к конкурентам из-за задержки КП на 2 дня, нет аналитики маржи.",
    solution: "AI-агенты продаж: мгновенная квалификация обращений в WhatsApp, расчёт КП из номенклатуры 1С и эскалация в CRM.",
    tech: ["WhatsApp Business API", "AI Sales Agent", "Bitrix24 / amoCRM", "P&L Дашборд"],
    clientCase: "B2B поставщики и торговые сети",
    result: "Первый контакт < 15 секунд, конверсия лидов в целевые встречи +38%.",
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { tr } = useLang();

  const current = industriesData[activeTab];

  return (
    <section
      id="industries"
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(180deg, #0a0f1d 0%, #0d1527 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="eyebrow" style={{ marginBottom: 14 }}>
            {tr.sections.industriesEyebrow}
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
            {tr.sections.industriesH2}
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
            Мы не предлагаем абстрактные программы. Каждое решение учитывает специфику,
            регламенты и бизнес-процессы конкретной отрасли.
          </p>
        </div>

        {/* 6 Industry Horizontal Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          {industriesData.map((ind, i) => {
            const isSelected = activeTab === i;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "12px 20px",
                  borderRadius: 14,
                  fontSize: 14,
                  fontWeight: 700,
                  background: isSelected ? "linear-gradient(135deg, #06b6d4, #3b82f6)" : "rgba(255, 255, 255, 0.05)",
                  border: isSelected ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.1)",
                  color: isSelected ? "#ffffff" : "#cbd5e1",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: isSelected ? "0 8px 24px rgba(6, 182, 212, 0.35)" : "none",
                }}
              >
                <span>{ind.icon}</span>
                <span>{ind.title.split(" & ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Blueprint Card */}
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
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
            alignItems: "center",
          }}
          className="industry-grid"
        >
          {/* Left Column: Problem & Solution Blueprint */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  background: "rgba(6, 182, 212, 0.15)",
                  color: "#38bdf8",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                }}
              >
                {current.badge}
              </span>
              <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>{current.clientCase}</span>
            </div>

            <h3 style={{ fontSize: 26, fontWeight: 900, color: "#ffffff", marginBottom: 20 }}>
              {current.title}
            </h3>

            {/* Problem row */}
            <div style={{ marginBottom: 18, background: "rgba(239, 68, 68, 0.12)", padding: "16px 18px", borderRadius: 14, border: "1px solid rgba(239, 68, 68, 0.3)" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#fca5a5", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                Узкие места и потери отрасли:
              </div>
              <p style={{ fontSize: 13.5, color: "#fca5a5", lineHeight: 1.5 }}>
                {current.pain}
              </p>
            </div>

            {/* Solution row */}
            <div style={{ marginBottom: 24, background: "rgba(6, 182, 212, 0.12)", padding: "16px 18px", borderRadius: 14, border: "1px solid rgba(6, 182, 212, 0.3)" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                Архитектурное решение OMIS:
              </div>
              <p style={{ fontSize: 13.5, color: "#7dd3fc", lineHeight: 1.5, fontWeight: 600 }}>
                {current.solution}
              </p>
            </div>

            {/* Tech stack badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {current.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "3px 10px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 600,
                    background: "rgba(255, 255, 255, 0.06)",
                    color: "#cbd5e1",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary" style={{ padding: "12px 26px", fontSize: 14, background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", border: "none" }}>
              Обсудить проект для отрасли
            </a>
          </div>

          {/* Right Column: Confirmed Result Showcase */}
          <div
            style={{
              background: "linear-gradient(145deg, #180933 0%, #290e4f 100%)",
              borderRadius: 20,
              padding: "32px 30px",
              color: "#ffffff",
              boxShadow: "0 16px 40px rgba(24, 9, 51, 0.3)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              Подтверждённый результат внедрения:
            </div>

            <div style={{ fontSize: 20, fontWeight: 900, color: "#34d399", lineHeight: 1.35, marginBottom: 18 }}>
              ✓ {current.result}
            </div>

            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: 16 }}>
              <div style={{ fontSize: 11, color: "#a1a1aa", textTransform: "uppercase", marginBottom: 4 }}>
                Референс заказчика:
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#ffffff" }}>
                {current.clientCase}
              </div>
              <p style={{ fontSize: 12, color: "#cbd5e1", marginTop: 6, lineHeight: 1.45 }}>
                Проект сдан в промышленную эксплуатацию. Проведено обучение персонала и подключено гарантийное сопровождение OMIS.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .industry-grid { grid-template-columns: 1fr !important; padding: 28px 22px !important; gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .industry-grid { padding: 22px 16px !important; }
        }
      `}</style>
    </section>
  );
}
