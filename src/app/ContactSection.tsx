"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageContext";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const { lang, tr } = useLang();
  const c = tr.contact;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    projectType: "Комплексная автоматизация",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, lang }),
      });
    } catch {/* silent */} finally {
      setSending(false);
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(180deg, #090e1a 0%, #0d1627 100%)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glows */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-80px",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-60px",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 56,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Heading & Value Proposition */}
          <div className="reveal">
            <span className="eyebrow" style={{ marginBottom: 14 }}>
              {c.eyebrow}
            </span>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                lineHeight: 1.12,
                marginBottom: 18,
                marginTop: 8,
              }}
            >
              {c.h2a} <span className="text-gradient-cyan">{c.h2b}</span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#cbd5e1",
                lineHeight: 1.65,
                marginBottom: 32,
              }}
            >
              {c.sub}
            </p>

            {/* 3 Trust points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  title: "Первичный аудит бесплатно",
                  desc: "Разбираем ваши текущие системы, выявляем узкие места и точки потери прибыли без предоплаты.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Прямой диалог с Solution-архитектором",
                  desc: "С вами общаются инженеры с опытом реальных внедрений, а не менеджеры по продажам с шаблонами.",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "NDA и защита данных",
                  desc: "Подписываем соглашение о неразглашении конфиденциальной информации до передачи любых данных.",
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "16px 20px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 16,
                    boxShadow: "none",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(168, 85, 247, 0.15)",
                      color: "#d8b4fe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", marginBottom: 3 }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 12.5, color: "#cbd5e1", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="reveal reveal-delay-2"
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              borderRadius: 24,
              padding: "36px 32px",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <div
                  style={{
                    width: 56, height: 56, borderRadius: 18,
                    background: "rgba(16, 185, 129, 0.15)", color: "#34d399",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: "#ffffff", marginBottom: 8 }}>
                  {c.sent}
                </h3>
                <p style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, marginBottom: 20 }}>
                  {c.sentSub}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ padding: "10px 24px", fontSize: 14 }}
                >
                  {c.sendMore}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "#ffffff", marginBottom: 4 }}>
                  Заказать аудит и расчёт
                </h3>
                <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 8 }}>
                  Заполните форму, и мы подготовим профильное предложение для вашей сферы.
                </p>

                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Аслан Касымов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: 14,
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                      Телефон / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (700) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: 12,
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#ffffff",
                        fontSize: 14,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                      Компания
                    </label>
                    <input
                      type="text"
                      placeholder="ТОО / Завод / Сеть"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: 12,
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#ffffff",
                        fontSize: 14,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                    Направление решения
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: 14,
                      outline: "none",
                    }}
                  >
                    <option>Комплексная автоматизация (Enterprise / ERP)</option>
                    <option>AI-агенты (Продажи / HR / Аналитика)</option>
                    <option>HRTech & LMS платформы</option>
                    <option>VR / XR тренажёры и симуляторы</option>
                    <option>EnergyTech (SmartEnergyControl)</option>
                    <option>Кастомная разработка ПО под ключ</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#e4e4e7", marginBottom: 6 }}>
                    Кратко о задаче
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Например: хотим объединить 1С, склад и отдел продаж, автоматизировать квалификацию лидов..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: 14,
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                {/* File Attachment field per TZ §24 */}
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#e4e4e7",
                      marginBottom: 6,
                    }}
                  >
                    <span>Прикрепить ТЗ или файл проекта</span>
                    <span style={{ fontSize: 11, color: "#a1a1aa", fontWeight: 400 }}>PDF, DOCX, ZIP до 25 МБ</span>
                  </label>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "12px",
                      borderRadius: 12,
                      border: "1.5px dashed rgba(255, 255, 255, 0.2)",
                      background: attachedFile ? "rgba(168, 85, 247, 0.15)" : "rgba(255, 255, 255, 0.05)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      fontSize: 13,
                      color: attachedFile ? "#d8b4fe" : "#a1a1aa",
                      fontWeight: 600,
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.zip,.rar,.xlsx"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setAttachedFile(file.name);
                      }}
                    />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span>{attachedFile ? `Файл прикреплен: ${attachedFile}` : "Выбрать файл технического задания..."}</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "14px", fontSize: 15, marginTop: 6, opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? "⏳ ..." : c.submit}
                </button>

                <p style={{ fontSize: 11, color: "#a1a1aa", textAlign: "center", lineHeight: 1.4 }}>
                  {lang === "EN"
                    ? "By submitting you agree to data processing. Confidentiality guaranteed by NDA."
                    : lang === "KZ"
                    ? "Жіберу арқылы деректерді өңдеуге келісесіз. Құпиялылық NDA-мен кепілдендіріледі."
                    : "Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Конфиденциальность гарантируется NDA."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
