"use client";

import { useEffect, useState } from "react";

// Fixed mathematical coordinate plane (width: 560, height: 260)
// Center node is strictly at (280, 130)
const nodes = [
  { id: "erp", label: "ERP / 1С", sub: "Учёт & Склад", x: 90, y: 55, color: "#8b5cf6", stat: "14.2k ops/s" },
  { id: "crm", label: "CRM & Sales", sub: "Воронка & Лиды", x: 470, y: 55, color: "#6366f1", stat: "99.4% SLA" },
  { id: "ai", label: "AI Агенты", sub: "Автономные задачи", x: 470, y: 205, color: "#ec4899", stat: "15s ответ" },
  { id: "energy", label: "EnergyTech", sub: "Телеметрия & IoT", x: 90, y: 205, color: "#f59e0b", stat: "−24% пик" },
];

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const active = nodes[activeNode];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 580,
        margin: "0 auto",
        perspective: "1200px",
      }}
    >
      {/* 3D Ambient multi-layer glow behind the card */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          right: "10%",
          bottom: "10%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
          filter: "blur(46px)",
          pointerEvents: "none",
          transform: "translateZ(-30px)",
        }}
      />

      {/* Main 3D Enterprise Console Card */}
      <div
        style={{
          position: "relative",
          background: "linear-gradient(145deg, rgba(19, 5, 38, 0.96) 0%, rgba(24, 9, 45, 0.92) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: 24,
          border: "1px solid rgba(168, 85, 247, 0.25)",
          boxShadow: hovered
            ? "0 30px 70px -10px rgba(168, 85, 247, 0.25), 0 8px 24px rgba(0, 0, 0, 0.3)"
            : "0 20px 50px -12px rgba(168, 85, 247, 0.15), 0 4px 16px rgba(0, 0, 0, 0.2)",
          padding: "24px 26px",
          transform: hovered
            ? "rotateX(2deg) rotateY(-2deg) translateY(-4px)"
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Console Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 14,
            borderBottom: "1px solid rgba(124, 58, 237, 0.1)",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ef4444", opacity: 0.85 }} />
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#f59e0b", opacity: 0.85 }} />
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#10b981", opacity: 0.85 }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em" }}>
                OMIS Telemetry 3D
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 7px",
                  borderRadius: 999,
                  background: "rgba(168, 85, 247, 0.2)",
                  color: "#d8b4fe",
                  border: "1px solid rgba(168, 85, 247, 0.35)",
                }}
              >
                Ecosystem Core
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.25)",
              }}
            />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#34d399" }}>
              Live 99.98%
            </span>
          </div>
        </div>

        {/* Mathematical Exact Coordinate Space for 3D Flow (viewBox 0 0 560 260) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 240,
            background: "linear-gradient(180deg, rgba(19, 5, 38, 0.5) 0%, rgba(24, 9, 45, 0.85) 100%)",
            borderRadius: 16,
            border: "1px solid rgba(168, 85, 247, 0.15)",
            overflow: "hidden",
          }}
        >
          {/* Subtle 3D grid perspective */}
          <div
            className="grid-pattern"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />

          <svg
            viewBox="0 0 560 260"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.9" />
              </linearGradient>

              <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting lines from strictly center (280, 130) to each satellite */}
            {nodes.map((node, i) => {
              const isActive = activeNode === i;
              return (
                <g key={node.id}>
                  {/* Base track line */}
                  <line
                    x1="280"
                    y1="130"
                    x2={node.x}
                    y2={node.y}
                    stroke={isActive ? "url(#activeGrad)" : "rgba(255, 255, 255, 0.15)"}
                    strokeWidth={isActive ? "2.5" : "1.5"}
                    strokeDasharray={isActive ? "none" : "4 4"}
                    style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
                  />

                  {/* Animated pulse dot moving PRECISELY along the exact line path */}
                  {isActive && (
                    <circle r="4.5" fill="#7c3aed" filter="url(#glowEffect)">
                      <animateMotion
                        path={`M 280 130 L ${node.x} ${node.y}`}
                        dur="1.2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Center Core Circle Badge in SVG */}
            <circle cx="280" cy="130" r="44" fill="#6d28d9" filter="url(#glowEffect)" opacity="0.15" />
            <circle cx="280" cy="130" r="38" fill="url(#activeGrad)" />
            <circle cx="280" cy="130" r="35" fill="#4c1d95" />

            <text x="280" y="125" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" letterSpacing="1">
              OMIS
            </text>
            <text x="280" y="140" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="700" letterSpacing="0.8">
              CORE 3D
            </text>

            {/* Satellite SVG nodes rendered on exact mathematical points */}
            {nodes.map((node, i) => {
              const isActive = activeNode === i;
              return (
                <g
                  key={node.id}
                  onClick={() => setActiveNode(i)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Background container pill */}
                  <rect
                    x={node.x - 65}
                    y={node.y - 20}
                    width="130"
                    height="40"
                    rx="10"
                    fill={isActive ? "rgba(168, 85, 247, 0.15)" : "rgba(255, 255, 255, 0.04)"}
                    stroke={isActive ? node.color : "rgba(255, 255, 255, 0.1)"}
                    strokeWidth={isActive ? "1.8" : "1"}
                    filter={isActive ? "url(#glowEffect)" : "none"}
                    style={{ transition: "all 0.25s ease" }}
                  />

                  {/* Status dot */}
                  <circle
                    cx={node.x - 50}
                    cy={node.y}
                    r="4"
                    fill={node.color}
                  />

                  {/* Label */}
                  <text
                    x={node.x - 38}
                    y={node.y - 3}
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="800"
                  >
                    {node.label}
                  </text>

                  {/* Subtext */}
                  <text
                    x={node.x - 38}
                    y={node.y + 11}
                    fill="#a1a1aa"
                    fontSize="9"
                    fontWeight="500"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* 3D Telemetry Statistics Mini-Dashboard */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            marginTop: 14,
          }}
        >
          <div
            style={{
              padding: "9px 12px",
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase" }}>
              Поток данных (Core)
            </div>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#ffffff", marginTop: 2 }}>
              1.2M событий/день
            </div>
          </div>

          <div
            style={{
              padding: "9px 12px",
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase" }}>
              Задержка шины
            </div>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#d8b4fe", marginTop: 2 }}>
              &lt; 24 ms API Sync
            </div>
          </div>

          <div
            style={{
              padding: "9px 12px",
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase" }}>
              Статус узла {active.label}
            </div>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#34d399", marginTop: 2 }}>
              {active.stat}
            </div>
          </div>
        </div>

        {/* Live Active Stream Banner */}
        <div
          style={{
            marginTop: 12,
            padding: "8px 14px",
            borderRadius: 10,
            background: "rgba(168, 85, 247, 0.15)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: active.color,
              }}
            />
            <span style={{ fontSize: 11, color: "#d8b4fe", fontWeight: 600 }}>
              Шина обмена: синхронизация пакетов данных <strong>{active.label}</strong> с ядром архитектуры
            </span>
          </div>
          <span style={{ fontSize: 10, color: "#c084fc", fontWeight: 800 }}>SYNC ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
