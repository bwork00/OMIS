"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

const rolesQuiz = [
  {
    question: "Какая технологическая задача вас больше всего зажигает?",
    options: [
      { text: "Проектирование сложных баз данных, микросервисов и корпоративных шин", role: "Enterprise Solution Architect" },
      { text: "Обучение нейросетей, RAG-системы, LLM-агенты и автоматизация диалогов", role: "AI & ML Engineer" },
      { text: "Создание высоконагруженных веб-сервисов и нативных приложений Next.js / React Native", role: "Senior Fullstack Developer" },
      { text: "3D-симуляции, физика материалов, виртуальные тренажёры на Unity / Unreal Engine", role: "VR / XR Simulation Engineer" },
    ],
  },
];

const vacancies = [
  {
    title: "Senior Solution Architect / Тимлид",
    type: "Full-time · Офис / Гибрид (Астана / Павлодар)",
    stack: "System Design, Microservices, 1C/ERP, PostgreSQL, Docker, Kafka",
    desc: "Проектирование цифровой архитектуры для промышленных предприятий, руководство инженерными спринтами.",
  },
  {
    title: "AI & LLM Solutions Engineer",
    type: "Full-time · Удалённо / Офис",
    stack: "Python, PyTorch, LangChain/LlamaIndex, RAG, Vector DB, Fastify",
    desc: "Разработка автономных AI-агентов для квалификации продаж, HR-скрининга и семантического поиска регламентов.",
  },
  {
    title: "Senior Fullstack Developer (React / Next.js / Node)",
    type: "Full-time · Гибрид",
    stack: "TypeScript, Next.js, Tailwind, Node.js, GraphQL, Redis",
    desc: "Разработка высоконагруженных веб-платформ, дашбордов и личных кабинетов корпоративных заказчиков.",
  },
  {
    title: "VR / XR 3D Developer (Unity / Unreal Engine)",
    type: "Full-time · Офис",
    stack: "Unity, C#, Unreal Engine 5, OpenXR, 3D Physics Simulation",
    desc: "Создание физически точных тренажёров промышленной сварки, механики узлов и техники безопасности.",
  },
];

export default function CareerSection() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [appliedRole, setAppliedRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [resumeData, setResumeData] = useState({ name: "", phone: "", telegram: "", role: vacancies[0].title });
  const { tr } = useLang();

  const currentRoleMatch = selectedOption !== null ? rolesQuiz[0].options[selectedOption].role : null;

  return (
    <section
      id="career"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0a0f1d 0%, #0d1527 100%)",
        color: "#ffffff",
        position: "relative",
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="eyebrow" style={{ marginBottom: 14 }}>
            {tr.sections.careerEyebrow}
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
            {tr.sections.careerH2}
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#52525b",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Мы создаём продукты, меняющие целые отрасли. Ищем сильных инженеров, готовых решать
            нестандартные задачи на стыке AI, Enterprise-систем и промышленного VR.
          </p>
        </div>

        {/* Interactive Quiz Card: Find Your Role in OMIS */}
        <div
          style={{
            background: "linear-gradient(145deg, #180933 0%, #290e4f 50%, #15062a 100%)",
            borderRadius: 24,
            padding: "36px 34px",
            color: "#ffffff",
            boxShadow: "0 20px 50px rgba(24, 9, 51, 0.25)",
            border: "1px solid rgba(168, 85, 247, 0.2)",
            marginBottom: 48,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Интерактивный квиз
            </span>
            <span style={{ fontSize: 12, color: "#c4b5fd" }}>Определите свой трек развития в команде</span>
          </div>

          <h3 style={{ fontSize: 22, fontWeight: 900, color: "#ffffff", marginBottom: 20 }}>
            {rolesQuiz[0].question}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {rolesQuiz[0].options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedOption(idx)}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 16,
                    background: isSelected ? "rgba(124, 58, 237, 0.3)" : "rgba(255, 255, 255, 0.04)",
                    border: isSelected ? "1.5px solid #a855f7" : "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: 13,
                    lineHeight: 1.45,
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: 4, color: isSelected ? "#d8b4fe" : "#ffffff" }}>
                    Вариант {idx + 1}
                  </div>
                  <div>{opt.text}</div>
                </button>
              );
            })}
          </div>

          {currentRoleMatch && (
            <div
              style={{
                padding: "14px 20px",
                borderRadius: 14,
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6ee7b7", textTransform: "uppercase" }}>
                  Ваш профиль в OMIS:
                </span>
                <div style={{ fontSize: 17, fontWeight: 900, color: "#ffffff", marginTop: 2 }}>
                  {currentRoleMatch}
                </div>
              </div>
              <a
                href="#vacancies"
                className="btn btn-primary"
                style={{ padding: "8px 18px", fontSize: 13, background: "#10b981" }}
              >
                Смотреть вакансии этого стека
              </a>
            </div>
          )}
        </div>

        {/* Open Vacancies Grid */}
        <div id="vacancies">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <h3 style={{ fontSize: 24, fontWeight: 900, color: "#ffffff" }}>
              Открытые позиции в инженерной команде
            </h3>
            <span style={{ fontSize: 13, color: "#a1a1aa", fontWeight: 600 }}>
              4 активные вакансии
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
              marginBottom: 40,
            }}
          >
            {vacancies.map((v, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.65)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                }}
              >
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#c084fc", marginBottom: 6 }}>
                    {v.type}
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 900, color: "#ffffff", marginBottom: 10, lineHeight: 1.3 }}>
                    {v.title}
                  </h4>
                  <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.55, marginBottom: 16 }}>
                    {v.desc}
                  </p>

                  <div
                    style={{
                      padding: "8px 12px",
                      borderRadius: 10,
                      background: "rgba(168, 85, 247, 0.15)",
                      border: "1px solid rgba(168, 85, 247, 0.25)",
                      fontSize: 11.5,
                      color: "#d8b4fe",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      marginBottom: 20,
                    }}
                  >
                    Стек: {v.stack}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setAppliedRole(v.title);
                    setResumeData({ ...resumeData, role: v.title });
                  }}
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "10px", fontSize: 13, fontWeight: 700 }}
                >
                  Откликнуться на вакансию
                </button>
              </div>
            ))}
          </div>

          {/* Quick Resume Form */}
          {appliedRole && (
            <div
              style={{
                background: "rgba(15, 23, 42, 0.85)",
                borderRadius: 24,
                padding: "32px",
                border: "1.5px solid rgba(168, 85, 247, 0.4)",
                boxShadow: "0 12px 36px rgba(168, 85, 247, 0.15)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#34d399", marginBottom: 6 }}>
                    Отклик на позицию «{appliedRole}» принят!
                  </div>
                  <p style={{ fontSize: 14, color: "#cbd5e1" }}>
                    HR-команда OMIS свяжется с вами в течение 24 часов для согласования технического скрининга.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 14, alignItems: "end" }}
                  className="resume-form-grid"
                >
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Петров"
                      value={resumeData.name}
                      onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff", fontSize: 13 }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                      Телефон / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (700) 000-00-00"
                      value={resumeData.phone}
                      onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff", fontSize: 13 }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                      Ссылка на GitHub / Резюме
                    </label>
                    <input
                      type="text"
                      placeholder="github.com/profile или резюме"
                      value={resumeData.telegram}
                      onChange={(e) => setResumeData({ ...resumeData, telegram: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff", fontSize: 13 }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: "11px 22px", fontSize: 13 }}
                  >
                    Отправить резюме
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resume-form-grid { grid-template-columns: 1fr !important; }
          .vacancies-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .career-quiz-options { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
