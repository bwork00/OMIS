"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

const categories = [
  "Все кейсы",
  "Автомобилестроение",
  "HoReCa & Ритейл",
  "Промышленность",
  "EnergyTech",
  "VR-тренажёры",
];

const allCases = [
  {
    id: "hyundai",
    category: "Автомобилестроение",
    client: "Hyundai Trans Kazakhstan",
    industry: "Крупное автопроизводство · ≈30 000 авто/год",
    tag: "Enterprise HRTech & LMS",
    badgeColor: "#6366f1",
    problem:
      "Падение мотивации сотрудников, долгий онбординг новичков до 2 месяцев. Сложно быстро обучать и контролировать цеха, ставить прозрачные цели и отслеживать прогресс рабочих.",
    solution:
      "Разработали и внедрили корпоративное мобильное приложение: микрообучение в одном месте, система баллов и геймификации, цели и KPI в реальном времени, магазин нематериальных наград.",
    tech: ["iOS / Android Native", "LMS Engine", "Геймификация KPI", "1C:ERP Интеграция"],
    metrics: [
      { label: "Скорость онбординга", value: "+45%" },
      { label: "Затраты на обучение", value: "−30%" },
      { label: "Вовлечённость (eNPS)", value: "+54%" },
    ],
  },
  {
    id: "izmir",
    category: "HoReCa & Ритейл",
    client: "Izmir Group (Сеть кафе и кондитерских)",
    industry: "Izmir doner & steak house, пекарни · Десятки точек",
    tag: "Операционный контур",
    badgeColor: "#7c3aed",
    problem:
      "Децентрализованный найм: управляющие искали персонал сами, документы сдавались с задержкой в неделю. Задачи терялись в чатах WhatsApp, не было единого стандарта качества и прозрачного расчёта премий.",
    solution:
      "Внедрили мобильное приложение: цифровые чек-листы с фотоотчётами, автоматический расчёт KPI по сменам, экспресс-анкета кандидата прямо на точке с онлайн-передачей в головной HR.",
    tech: ["Мобильные чек-листы", "R-Keeper / iiko API", "Авторасчёт KPI", "HR-модуль"],
    metrics: [
      { label: "Эффективность персонала", value: "+40%" },
      { label: "Снижение ошибок", value: "−35–50%" },
      { label: "Адаптация новичков", value: "на 60% быстрее" },
    ],
  },
  {
    id: "agro",
    category: "Промышленность",
    client: "Крупный производственный комплекс",
    industry: "Мясная пищевая индустрия · 60+ тонн продукции в сутки",
    tag: "Automation HR & СБ",
    badgeColor: "#8b5cf6",
    problem:
      "Хаос в найме вахтовиков: кандидаты приходили без документов, данные хранились на бумаге. Проверка через службу безопасности (СБ) занимала до 4 дней, невозможно было отследить причины увольнений.",
    solution:
      "Мобильная платформа экспресс-найма: 20+ обязательных критериев, OCR-сканирование удостоверений, параллельное согласование СБ и HR в 1 клик, единая цифровая база сотрудников.",
    tech: ["OCR Сканер удостоверений", "Модуль безопасности СБ", "Биометрия", "HR-портал"],
    metrics: [
      { label: "Скорость приёма на работу", value: "в 10 раз" },
      { label: "Эффективность HR", value: "+90%" },
      { label: "Прозрачность отбора", value: "100%" },
    ],
  },
  {
    id: "vr-training",
    category: "VR-тренажёры",
    client: "Промышленные и добывающие предприятия",
    industry: "Металлургия, машиностроение, опасные производства",
    tag: "VR / XR Симуляторы",
    badgeColor: "#d946ef",
    problem:
      "Обучение рабочих на реальном оборудовании связано с рисками травматизма, расходом дорогостоящих материалов (металл, электроды) и простоем производственных мощностей.",
    solution:
      "VR-тренажёры для обучения промышленной сварке, ремонту турбин, механике и охране труда. Точная физика процессов, тактильный отклик и автоматический трекинг дефектов шва.",
    tech: ["Unity / Unreal Engine 5", "VR Шлемы", "Physics Engine", "Телеметрия навыков"],
    metrics: [
      { label: "Снижение производственного брака", value: "−42%" },
      { label: "Травматизм на обучении", value: "0%" },
      { label: "Экономия расходников", value: "−65%" },
    ],
  },
  {
    id: "energy-tech",
    category: "EnergyTech",
    client: "Промышленные подстанции и распределительные сети",
    industry: "Трансформаторные мощности, производственные цеха",
    tag: "SmartEnergyControl",
    badgeColor: "#f59e0b",
    problem:
      "Кассовые штрафы энергосетей за пиковые превышения договорной мощности. Запоздалый ручной учёт показаний счётчиков, невозможность предиктивного распределения нагрузок.",
    solution:
      "Программно-аппаратный комплекс SmartEnergyControl: беспроводные IIoT-датчики LoRaWAN, анализ cos φ, диспетчерский мониторинг и срезание пиковых нагрузок.",
    tech: ["SmartEnergyControl", "IIoT Датчики LoRaWAN", "SCADA коннекторы", "Предикт-модели"],
    metrics: [
      { label: "Экономия на тарифах", value: "до 24%" },
      { label: "Оповещение об авариях", value: "< 10 сек" },
      { label: "Окупаемость проекта", value: "4–6 мес" },
    ],
  },
  {
    id: "loyalty",
    category: "HoReCa & Ритейл",
    client: "Сети ресторанного бизнеса и строительный ритейл",
    industry: "Ресторанная сеть Шанырак, строительные супермаркеты",
    tag: "CRM & Лояльность",
    badgeColor: "#ec4899",
    problem:
      "Отсутствие единой базы покупателей, пластиковые карты забывают дома, нет персонализированных предложений и автоматического возврата оттока клиентов.",
    solution:
      "Цифровая система лояльности в смартфоне: электронные карты Apple Wallet / Google Pay, бонусный баланс, интеграция с кассовыми терминалами и автопуши о спецпредложениях.",
    tech: ["Apple Wallet / Google Pay", "Кассовые интеграции", "RFM Сегментация", "Push-сервер"],
    metrics: [
      { label: "Рост повторных чеков", value: "+28%" },
      { label: "Средний чек клиентов", value: "+19%" },
      { label: "Активная база", value: "85 000+" },
    ],
  },
];

export default function CasesSection() {
  const [activeCategory, setActiveCategory] = useState("Все кейсы");
  const { tr } = useLang();

  const filteredCases =
    activeCategory === "Все кейсы"
      ? allCases
      : allCases.filter((c) => c.category === activeCategory);

  return (
    <section
      id="cases"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #090e1a 0%, #0d1627 100%)",
        color: "#ffffff",
        position: "relative",
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
      }}
    >
      <div
        className="grid-pattern"
        style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none" }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="eyebrow" style={{ marginBottom: 14 }}>
            {tr.sections.casesEyebrow}
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
            {tr.sections.casesH2a} <span className="text-gradient-cyan">{tr.sections.casesH2b}</span>
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
            Не слова о компетенциях — конкретные проекты с измеримыми результатами для лидеров
            рынка Казахстана и промышленных предприятий.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "center",
              marginTop: 28,
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "9px 18px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    background: isSelected ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "rgba(255, 255, 255, 0.05)",
                    border: isSelected ? "1px solid #7c3aed" : "1px solid rgba(255, 255, 255, 0.15)",
                    color: isSelected ? "#ffffff" : "#a1a1aa",
                    boxShadow: isSelected ? "0 4px 14px rgba(124, 58, 237, 0.3)" : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cases Grid (Guaranteed 100% visible, no hidden elements) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {filteredCases.map((c) => (
            <div
              key={c.id}
              style={{
                background: "rgba(15, 23, 42, 0.65)",
                borderRadius: 22,
                padding: "32px 28px",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top Accent Gradient line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${c.badgeColor}, #c4b5fd)`,
                }}
              />

              <div>
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      background: "rgba(168, 85, 247, 0.15)",
                      color: "#d8b4fe",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    {c.tag}
                  </span>

                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#059669",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
                    Внедрено OMIS
                  </span>
                </div>

                {/* Client & Industry */}
                  <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 900,
                    color: "#ffffff",
                    marginBottom: 4,
                    lineHeight: 1.25,
                  }}
                >
                  {c.client}
                </h3>
                <div style={{ fontSize: 12.5, color: "#a1a1aa", marginBottom: 20, fontWeight: 500 }}>
                  {c.industry}
                </div>

                {/* Problem description */}
                <div
                  style={{
                    marginBottom: 14,
                    background: "rgba(239, 68, 68, 0.1)",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#fca5a5",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 4,
                    }}
                  >
                    Проблема до внедрения:
                  </div>
                  <p style={{ fontSize: 13, color: "#e4e4e7", lineHeight: 1.5 }}>
                    {c.problem}
                  </p>
                </div>

                {/* Solution description */}
                <div
                  style={{
                    marginBottom: 20,
                    background: "rgba(168, 85, 247, 0.1)",
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(168, 85, 247, 0.25)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#d8b4fe",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: 4,
                    }}
                  >
                    Спроектированное решение OMIS:
                  </div>
                  <p style={{ fontSize: 13, color: "#e4e4e7", lineHeight: 1.5, fontWeight: 600 }}>
                    {c.solution}
                  </p>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                  {c.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "3px 9px",
                        borderRadius: 6,
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "#cbd5e1",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Before / After Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 8,
                  paddingTop: 18,
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {c.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(168, 85, 247, 0.15)",
                      borderRadius: 12,
                      padding: "10px 12px",
                      border: "1px solid rgba(168, 85, 247, 0.2)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#d8b4fe" }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: 10, color: "#a1a1aa", marginTop: 2, lineHeight: 1.2 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
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
              Хотите получить такие же измеримые результаты в вашей компании?
            </div>
            <div style={{ fontSize: 13, color: "#c4b5fd" }}>
              Запишитесь на первичный аудит процессов. Архитектор OMIS разберёт вашу текущую архитектуру бесплатно.
            </div>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: "12px 26px", fontSize: 14 }}>
            Обсудить аналогичный кейс
          </a>
        </div>
      </div>
    </section>
  );
}
