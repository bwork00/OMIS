"use client";

import { useEffect, useRef } from "react";
import HeroVisual from "./HeroVisual";
import { useLang } from "./LanguageContext";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { tr } = useLang();
  const h = tr.hero;

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 110)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const stats = [
    { value: h.s1val, label: h.s1label },
    { value: h.s2val, label: h.s2label },
    { value: h.s3val, label: h.s3label },
    { value: h.s4val, label: h.s4label },
  ];

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(150deg, #090d16 0%, #0f172a 50%, #0b0f19 100%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none" }} />

      {/* Ambient glowing floating orbs */}
      <div className="floating-orb-1" style={{ position: "absolute", top: "-100px", left: "-60px", width: 520, height: 520, background: "radial-gradient(circle, rgba(6,182,212,.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="floating-orb-2" style={{ position: "absolute", bottom: "-60px", right: "-40px", width: 500, height: 500, background: "radial-gradient(circle, rgba(139,92,246,.18) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent 0%, #06b6d4 30%, #8b5cf6 70%, transparent 100%)" }} />

      <div className="site-container" style={{ paddingTop: 130, paddingBottom: 80 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}
          className="hero-grid"
        >
          {/* ── LEFT: Content ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            {/* Badges */}
            <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span className="eyebrow" style={{ background: "rgba(6, 182, 212, 0.12)", borderColor: "rgba(6, 182, 212, 0.35)", color: "#38bdf8" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 2px rgba(16,185,129,.3)", display: "inline-block", animation: "pulse-ring 2s ease-out infinite" }} />
                {h.badge1}
              </span>
              <span className="eyebrow" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.15)", color: "#94a3b8" }}>
                {h.badge2}
              </span>
            </div>

            {/* H1 */}
            <div className="reveal reveal-delay-1">
              <h1 style={{ fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#ffffff" }}>
                {h.h1line1}{" "}
                <span className="text-gradient-cyan">{h.h1grad}</span>{" "}
                {h.h1line2}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="reveal reveal-delay-2" style={{ fontSize: "clamp(16px,1.8vw,18px)", color: "#cbd5e1", lineHeight: 1.65, maxWidth: 520 }}>
              {h.sub}
            </p>

            {/* Tagline */}
            <div className="reveal reveal-delay-3" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <span style={{ width: 24, height: 2, background: "#06b6d4", borderRadius: 2, display: "block" }} />
                <span style={{ width: 10, height: 2, background: "#8b5cf6", borderRadius: 2, display: "block" }} />
              </div>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#38bdf8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {h.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="reveal reveal-delay-4" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: "14px 30px", fontSize: 15, background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", boxShadow: "0 8px 24px rgba(6,182,212,0.35)", border: "none" }}>
                {h.cta1}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#solutions" className="btn btn-secondary" style={{ padding: "14px 28px", fontSize: 15, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff" }}>
                {h.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, paddingTop: 24, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              {stats.map((s, i) => (
                <div key={i} style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : "none", paddingRight: i < stats.length - 1 ? 12 : 0 }}>
                  <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 5, background: "linear-gradient(135deg, #38bdf8, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.35, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="reveal reveal-delay-2 hero-visual-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.6 }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#94a3b8" }}>{h.scroll}</span>
        <div style={{ width: 20, height: 30, borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.3)", display: "flex", justifyContent: "center", paddingTop: 4 }}>
          <div style={{ width: 3, height: 6, borderRadius: 2, background: "#06b6d4", animation: "float 1.8s ease-in-out infinite" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 990px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .hero-visual-wrap { display: none !important; }
          .hero-grid { gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
