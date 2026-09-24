"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageContext";

// Fixed coordinate space: viewBox 0 0 800 440
// Center is strictly at (400, 220)
const chaosItems = [
  { label: "Excel-таблицы", sub: "ручной ввод данных", x: 150, y: 80, color: "#16a34a" },
  { label: "Разрозненные CRM", sub: "лиды теряются", x: 400, y: 50, color: "#7c3aed" },
  { label: "WhatsApp & Telegram", sub: "нет единой истории", x: 650, y: 90, color: "#25d366" },
  { label: "Бумажные отчёты", sub: "задержка 2-3 дня", x: 130, y: 240, color: "#dc2626" },
  { label: "1С локальные базы", sub: "нет синхронизации", x: 670, y: 260, color: "#ea580c" },
  { label: "Email-согласования", sub: "цепочки на недели", x: 230, y: 370, color: "#2563eb" },
  { label: "Разрозненный склад", sub: "кассовые разрывы", x: 570, y: 370, color: "#0891b2" },
];

const unifiedNodes = [
  { label: "Сквозная Аналитика", angle: 0 },
  { label: "HRTech & LMS", angle: 60 },
  { label: "Финансы & Биллинг", angle: 120 },
  { label: "Производство & IoT", angle: 180 },
  { label: "AI-Агенты OMIS", angle: 240 },
  { label: "BI Дашборды KPI", angle: 300 },
];

export default function ChaosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"chaos" | "transition" | "unified">("chaos");
  const { tr } = useLang();

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPhase("chaos");
          t1 = setTimeout(() => setPhase("transition"), 1400);
          t2 = setTimeout(() => setPhase("unified"), 3000);
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Compute exact coordinates on 800x440 canvas
  const cx = 400;
  const cy = 220;
  const rx = 270;
  const ry = 150;

  return (
    <section
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0a0f1d 0%, #0d1527 100%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="grid-pattern"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="eyebrow" style={{ marginBottom: 14, display: "inline-flex" }}>
            {tr.sections.chaosEyebrow}
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
            {tr.sections.chaosH2a}{" "}
            <span className="text-gradient-cyan">{tr.sections.chaosH2b}</span>
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
            Информация существует в каждом отделе, но не образует единой системы.
            OMIS объединяет цифровой контур бизнеса в управляемую архитектуру.
          </p>
        </div>

        {/* Phase Toggle Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 30,
          }}
        >
          <button
            onClick={() => setPhase("chaos")}
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              border: phase === "chaos" ? "1.5px solid #ef4444" : "1px solid rgba(255, 255, 255, 0.15)",
              background: phase === "chaos" ? "rgba(239, 68, 68, 0.15)" : "rgba(255, 255, 255, 0.05)",
              color: phase === "chaos" ? "#fca5a5" : "#a1a1aa",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            1. Фрагментация бизнеса
          </button>
          <button
            onClick={() => setPhase("unified")}
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              border: phase === "unified" ? "1.5px solid #a855f7" : "1px solid rgba(255, 255, 255, 0.15)",
              background: phase === "unified" ? "rgba(168, 85, 247, 0.15)" : "rgba(255, 255, 255, 0.05)",
              color: phase === "unified" ? "#d8b4fe" : "#a1a1aa",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            2. Единый контур OMIS
          </button>
        </div>

        {/* Unified Mathematical SVG Canvas (viewBox 0 0 800 440) */}
        <div
          ref={ref}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 820,
            margin: "0 auto",
            borderRadius: 24,
            background: "linear-gradient(180deg, rgba(19, 5, 38, 0.5) 0%, rgba(24, 9, 45, 0.85) 100%)",
            border: "1px solid rgba(168, 85, 247, 0.15)",
            boxShadow: "0 16px 40px -12px rgba(168, 85, 247, 0.1)",
            overflow: "hidden",
            aspectRatio: "800 / 440",
          }}
        >
          <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />

          <svg
            viewBox="0 0 800 440"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            <defs>
              <linearGradient id="coreUnifiedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>

              <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* ── PHASE 1: CHAOS ITEMS ── */}
            <g
              style={{
                opacity: phase === "unified" ? 0 : phase === "transition" ? 0.3 : 1,
                transition: "opacity 0.6s ease",
                pointerEvents: phase === "unified" ? "none" : "auto",
              }}
            >
              {/* Broken dashed link lines */}
              <line x1="150" y1="80" x2="400" y2="50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5 5" strokeOpacity="0.3" />
              <line x1="650" y1="90" x2="400" y2="50" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 5" strokeOpacity="0.3" />
              <line x1="130" y1="240" x2="230" y2="370" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 5" strokeOpacity="0.3" />
              <line x1="670" y1="260" x2="570" y2="370" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="5 5" strokeOpacity="0.3" />

              {/* Chaos Center Badge */}
              <rect x="290" y="200" width="220" height="38" rx="19" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeDasharray="4 4" />
              <text x="400" y="224" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="800" letterSpacing="1">
                РАЗРЫВ ДАННЫХ И ПРОЦЕССОВ
              </text>

              {/* Chaos nodes */}
              {chaosItems.map((item, i) => (
                <g key={i}>
                  <rect
                    x={item.x - 90}
                    y={item.y - 20}
                    width="180"
                    height="40"
                    rx="10"
                    fill="rgba(255, 255, 255, 0.05)"
                    stroke={item.color}
                    strokeWidth="1.5"
                    filter="url(#shadowFilter)"
                  />
                  <line
                    x1={item.x - 90}
                    y1={item.y - 20}
                    x2={item.x - 90}
                    y2={item.y + 20}
                    stroke={item.color}
                    strokeWidth="5"
                  />
                  <circle cx={item.x - 72} cy={item.y} r="4" fill={item.color} />
                  <text x={item.x - 60} y={item.y - 2} fill="#ffffff" fontSize="12" fontWeight="700">
                    {item.label}
                  </text>
                  <text x={item.x - 60} y={item.y + 11} fill="#cbd5e1" fontSize="9.5" fontWeight="600">
                    {item.sub}
                  </text>
                </g>
              ))}
            </g>

            {/* ── PHASE 2: UNIFIED CONTOUR ── */}
            <g
              style={{
                opacity: phase === "unified" ? 1 : 0,
                transition: "opacity 0.7s ease",
                pointerEvents: phase === "unified" ? "auto" : "none",
              }}
            >
              {/* Radial connection lines linking STRICTLY from center (400, 220) to satellite nodes */}
              {unifiedNodes.map((n, i) => {
                const rad = ((n.angle - 90) * Math.PI) / 180;
                const px = cx + rx * Math.cos(rad);
                const py = cy + ry * Math.sin(rad);

                return (
                  <g key={i}>
                    {/* Exact line */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={px}
                      y2={py}
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                      strokeOpacity="0.45"
                    />

                    {/* Mathematically aligned pulse moving along the EXACT line */}
                    <circle r="4" fill="#7c3aed">
                      <animateMotion
                        path={`M ${cx} ${cy} L ${px} ${py}`}
                        dur={`${1.8 + (i % 3) * 0.4}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Center Core Badge */}
              <circle cx={cx} cy={cy} r="65" fill="#7c3aed" opacity="0.1" />
              <circle cx={cx} cy={cy} r="52" fill="url(#coreUnifiedGrad)" />
              <circle cx={cx} cy={cy} r="48" fill="#4c1d95" />

              <text x={cx} y={cy - 6} textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="900" letterSpacing="1">
                OMIS
              </text>
              <text x={cx} y={cy + 12} textAnchor="middle" fill="#c4b5fd" fontSize="8.5" fontWeight="800" letterSpacing="1">
                UNIFIED CORE
              </text>

              {/* Satellite badges centered mathematically on (px, py) */}
              {unifiedNodes.map((n, i) => {
                const rad = ((n.angle - 90) * Math.PI) / 180;
                const px = cx + rx * Math.cos(rad);
                const py = cy + ry * Math.sin(rad);

                return (
                  <g key={i}>
                    <rect
                      x={px - 85}
                      y={py - 18}
                      width="170"
                      height="36"
                      rx="10"
                      fill="rgba(168, 85, 247, 0.15)"
                      stroke="rgba(168, 85, 247, 0.4)"
                      strokeWidth="1.5"
                      filter="url(#shadowFilter)"
                    />
                    <circle cx={px - 68} cy={py} r="4" fill="#34d399" />
                    <text x={px - 56} y={py + 4} fill="#ffffff" fontSize="12" fontWeight="800">
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
