"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageContext";

const agents = [
  {
    id: "sales",
    name: "AI Sales & Revenue Agent",
    role: "Автономная квалификация и дожим лидов",
    color: "#7c3aed",
    iconPath: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    what: "Обрабатывает входящий поток лидов из WhatsApp, Telegram и форм сайта за 15 секунд. Задаёт квалификационные вопросы по BANT, проверяет остатки в 1C/ERP, рассчитывает КП и передаёт сделку в Bitrix24/CRM со скорингом готовности к покупке.",
    metrics: [
      { label: "Скорость первого контакта", value: "< 15 сек" },
      { label: "Квалификация лидов", value: "24/7 без сна" },
      { label: "Конверсия в целевую встречу", value: "+38%" },
    ],
    sampleLog: [
      { sender: "Клиент", text: "Здравствуйте! Нужен расчёт на внедрение системы учёта для 3 складов в Алматы." },
      { sender: "AI Sales", text: "Добрый день! Уточните, используете ли сейчас 1С (УТ/ERP) и сколько пользователей будут работать в системе одновременно?" },
      { sender: "Клиент", text: "Да, 1С:УТ 11.4, около 25 сотрудников." },
      { sender: "AI Sales", text: "Принято. Сформировал предварительный план интеграции. Передаю карточку ведущему архитектору OMIS, встреча назначена на завтра в 11:00." },
    ],
    tags: ["Bitrix24 / amoCRM", "1C:ERP Коннектор", "WhatsApp Business API", "BANT Квалификация"],
  },
  {
    id: "hr",
    name: "AI HR & Recruitment Agent",
    role: "Скрининг, онбординг и аттестация",
    color: "#6366f1",
    iconPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    what: "Автоматически верифицирует резюме, проводит асинхронное первичное интервью в чате, проверяет совпадение навыков с профилем должности и координирует согласование с службой безопасности и линейными руководителями.",
    metrics: [
      { label: "Время закрытия вакансии", value: "−45%" },
      { label: "Отсев нерелевантных кандидатов", value: "92%" },
      { label: "Вовлечённость новичков (eNPS)", value: "+54%" },
    ],
    sampleLog: [
      { sender: "Кандидат", text: "Отправил отклик на позицию Руководителя проекта автоматизации." },
      { sender: "AI HR", text: "Спасибо! Проанализировал ваш опыт. Вижу 4 года ведения ERP-проектов. Готовы ответить на 3 кейсовых вопроса по методологии внедрения?" },
      { sender: "Кандидат", text: "Да, готов, давайте." },
      { sender: "AI HR", text: "Отлично. Ваши ответы оценены на 9.1/10. Приглашение на финальное интервью с HRD отправлено на ваш email." },
    ],
    tags: ["HeadHunter API", "Онбординг-боты", "Аттестация персонала", "LMS Интеграция"],
  },
  {
    id: "analyst",
    name: "AI Data & BI Analyst",
    role: "Сквозная аналитика и поиск аномалий",
    color: "#8b5cf6",
    iconPath: "M18 20V10M12 20V4M6 20v-6",
    what: "Каждую ночь сканирует транзакции в ERP, CRM, кассовых узлах и банках. Выявляет кассовые разрывы, аномальные скидки менеджеров, проседание маржинальности по категориям и присылает готовый управленческий дайджест генеральному директору.",
    metrics: [
      { label: "Время подготовки P&L", value: "Мгновенно" },
      { label: "Детекция аномалий в данных", value: "100% транзакций" },
      { label: "Точность предикта выручки", value: "94.6%" },
    ],
    sampleLog: [
      { sender: "Система", text: "Скан 14 200 транзакций за сутки завершён." },
      { sender: "AI Analyst", text: "Внимание! Обнаружена аномалия: менеджер отдела B2B предоставил скидку 18% клиенту без согласования финдиректора." },
      { sender: "AI Analyst", text: "Прогноз кассового баланса на конец недели скорректирован: профицит +4.2 млн ₸." },
    ],
    tags: ["P&L / CashFlow", "Аномалии в закупках", "План-факт анализ", "Executive Digest"],
  },
  {
    id: "knowledge",
    name: "AI Knowledge Base Core",
    role: "Корпоративная семантическая память",
    color: "#d946ef",
    iconPath: "M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z",
    what: "Индексирует все регламенты, ГОСТы, договоры, инструкции и проектную документацию компании. Сотрудник любого уровня мгновенно получает точный ответ со ссылкой на пункт регламента компании, исключая ошибки и простои.",
    metrics: [
      { label: "Поиск по регламентам", value: "< 2 сек" },
      { label: "Точность ответов (RAG)", value: "99.2%" },
      { label: "Разгрузка старших специалистов", value: "−60%" },
    ],
    sampleLog: [
      { sender: "Сотрудник", text: "Какой регламент замены узла компрессора при температуре выше +35°C?" },
      { sender: "AI Knowledge", text: "Согласно Регламенту ТО-24 (раздел 4.2, стр. 18): перед заменой требуется снизить давление до 1.2 бар и зафиксировать клапан А-3. Ссылка на бланк наряда прикреплена." },
    ],
    tags: ["RAG Архитектура", "100% Конфиденциально", "Векторная БД", "Локальный контур"],
  },
  {
    id: "control",
    name: "AI Process Sentinel",
    role: "Контроль регламентов и SLA",
    color: "#ec4899",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    what: "Непрерывно следит за выполнением производственных и сервисных регламентов. Если заказ завис на этапе комплектации дольше 45 минут или в сервисном тикете нарушен SLA — агент предупреждает ответственного и эскалирует задачу.",
    metrics: [
      { label: "Соблюдение SLA", value: "99.4%" },
      { label: "Предотвращение простоев", value: "До инцидента" },
      { label: "Прозрачность для руководства", value: "100%" },
    ],
    sampleLog: [
      { sender: "Монитор SLA", text: "Заказ #48191 находится в статусе «Сборка» 52 минуты (норма 40 минут)." },
      { sender: "AI Sentinel", text: "Уведомление начальнику склада отправлено. Причина задержки: поиск артикула KX-90. Назначен резервный комплектовщик." },
    ],
    tags: ["SLA Диспетчер", "Эскалация инцидентов", "Контроль очередей", "IoT Триггеры"],
  },
];

export default function AIAgentsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeAgent, setActiveAgent] = useState<string>(agents[0].id);
  const { tr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 70);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = agents.find((a) => a.id === activeAgent)!;

  return (
    <section
      id="ai-agents"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(160deg, #130526 0%, #1e093d 50%, #110522 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.6), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 54 }}>
          <span
            className="eyebrow"
            style={{
              marginBottom: 14,
              background: "rgba(124, 58, 237, 0.2)",
              borderColor: "rgba(168, 85, 247, 0.35)",
              color: "#d8b4fe",
            }}
          >
            {tr.sections.aiEyebrow}
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
            {tr.sections.aiH2a} <span className="text-gradient-light">{tr.sections.aiH2b}</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#c4b5fd",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Никаких абстрактных чат-ботов «обо всём». Каждый агент решает узкую коммерческую
            задачу, интегрирован в корпоративные базы данных и работает по вашим регламентам.
          </p>
        </div>

        {/* 2-Column interactive showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 28,
            alignItems: "stretch",
          }}
          className="ai-agents-grid"
        >
          {/* Left: Agents List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {agents.map((agent) => {
              const isSelected = activeAgent === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 18px",
                    borderRadius: 16,
                    background: isSelected ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)",
                    border: isSelected ? "1.5px solid rgba(168, 85, 247, 0.6)" : "1px solid rgba(255, 255, 255, 0.06)",
                    boxShadow: isSelected ? "0 8px 24px rgba(124, 58, 237, 0.25)" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#ffffff",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: isSelected ? agent.color : "rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#ffffff",
                      transition: "background 0.25s",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={agent.iconPath} />
                    </svg>
                  </div>

                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: isSelected ? "#ffffff" : "#e4e4e7", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {agent.name}
                    </div>
                    <div style={{ fontSize: 11, color: isSelected ? "#d8b4fe" : "#a1a1aa", marginTop: 2 }}>
                      {agent.role}
                    </div>
                  </div>

                  {isSelected && (
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a855f7", flexShrink: 0 }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Agent Live Console & Capabilities */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 24,
              border: "1px solid rgba(168, 85, 247, 0.25)",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Header info */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: current.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    boxShadow: "0 8px 20px rgba(124, 58, 237, 0.35)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={current.iconPath} />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em" }}>
                    {current.name}
                  </h3>
                  <p style={{ fontSize: 12, color: "#c4b5fd" }}>{current.role}</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {/* Audio Soundwaves Animation */}
                <div style={{ display: "flex", alignItems: "center", gap: 3, height: 16 }}>
                  <div className="sound-wave-bar" style={{ animationDelay: "0s" }} />
                  <div className="sound-wave-bar" style={{ animationDelay: "0.2s" }} />
                  <div className="sound-wave-bar" style={{ animationDelay: "0.4s" }} />
                  <div className="sound-wave-bar" style={{ animationDelay: "0.1s" }} />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#34d399",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span className="live-pulse-dot" />
                  ONLINE · Real-Time AI Core
                </span>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: 14.5, color: "#e4e4e7", lineHeight: 1.65, marginBottom: 24 }}>
              {current.what}
            </p>

            {/* Metrics Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                marginBottom: 24,
              }}
            >
              {current.metrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    padding: "14px 16px",
                    borderRadius: 14,
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#ffffff", marginBottom: 4 }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: 11, color: "#a1a1aa" }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Realistic Enterprise Live Simulation / Audit Log */}
            <div
              style={{
                borderRadius: 16,
                background: "rgba(15, 6, 32, 0.7)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                padding: "18px 20px",
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Демонстрация рабочего диалога
                </span>
                <span style={{ fontSize: 10, color: "#71717a", fontFamily: "monospace" }}>Session #OMIS-AI-LIVE</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {current.sampleLog.map((log, idx) => {
                  const isAgent = log.sender.startsWith("AI") || log.sender === "Система";
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        fontSize: 12.5,
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 700,
                          color: isAgent ? "#c084fc" : "#94a3b8",
                          flexShrink: 0,
                          width: 80,
                        }}
                      >
                        {log.sender}:
                      </span>
                      <span style={{ color: isAgent ? "#f1f5f9" : "#cbd5e1" }}>{log.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Integration Tags & Action */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
                marginTop: "auto",
                paddingTop: 16,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(124, 58, 237, 0.2)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#d8b4fe",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="btn btn-primary"
                style={{
                  padding: "10px 22px",
                  fontSize: 13,
                  background: "linear-gradient(135deg, #9333ea, #6366f1)",
                }}
              >
                Внедрить {current.name.split(" ")[1] || "агента"}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-agents-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .ai-agents-grid { gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
