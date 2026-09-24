"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang, type Lang } from "./LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { lang, setLang, tr }   = useLang();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = [
    { label: tr.nav.solutions,  href: "#solutions"  },
    { label: tr.nav.industries, href: "#industries" },
    { label: tr.nav.aiAgents,   href: "#ai-agents"  },
    { label: tr.nav.products,   href: "#products"   },
    { label: tr.nav.cases,      href: "#cases"      },
    { label: tr.nav.audit,      href: "#audit"      },
    { label: tr.nav.career,     href: "#career"     },
    { label: tr.nav.about,      href: "#about"      },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all .3s ease",
        ...(scrolled
          ? {
              background: "rgba(9, 13, 22, 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.5)",
              padding: "10px 0",
            }
          : {
              background: "transparent",
              padding: "18px 0",
            }),
      }}
    >
      <div className="site-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 36, height: 36,
              background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(6, 182, 212, 0.4)",
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9L9 3L15 9L9 15L3 9Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
                <path d="M9 6L12 9L9 12L6 9L9 6Z" fill="white"/>
              </svg>
            </div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#ffffff", letterSpacing: "-.02em" }}>
              OMIS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="desktop-nav">
            {nav.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "all .2s",
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = "#38bdf8";
                  (e.target as HTMLElement).style.background = "rgba(6, 182, 212, 0.12)";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = "#cbd5e1";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Language Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
            {/* Language Switcher */}
            <div style={{
              display: "flex", alignItems: "center",
              background: "rgba(255, 255, 255, 0.06)", borderRadius: 999,
              padding: "2px 4px", border: "1px solid rgba(255, 255, 255, 0.15)",
              fontSize: 11, fontWeight: 700,
            }}>
              {(["RU", "KZ", "EN"] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: "3px 8px", borderRadius: 999, border: "none",
                    cursor: "pointer",
                    background: lang === l ? "#06b6d4" : "transparent",
                    color: lang === l ? "#ffffff" : "#94a3b8",
                    fontWeight: 700, transition: "all 0.15s",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            <a href="tel:+77020000000" style={{
              fontSize: 13, fontWeight: 600, color: "#cbd5e1",
              textDecoration: "none", display: "flex", alignItems: "center", gap: 5,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +7 (702) 000-00-00
            </a>

            <a href="#contact" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: 13.5, background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", boxShadow: "0 4px 14px rgba(6,182,212,0.35)", border: "none" }}>
              {tr.nav.cta}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-nav-toggle"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, borderRadius: 8, color: "#ffffff" }}
            aria-label="Меню"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
                : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            marginTop: 12,
            background: "rgba(15, 23, 42, 0.98)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 16, padding: "16px 0",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}>
            {nav.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block", padding: "10px 20px",
                  fontSize: 15, fontWeight: 600, color: "#e4e4e7",
                  textDecoration: "none", borderRadius: 8, margin: "0 8px",
                  transition: "background .15s",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Language switcher in mobile menu */}
            <div style={{ padding: "12px 20px 8px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", marginTop: 8, display: "flex", gap: 8 }}>
              {(["RU", "KZ", "EN"] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: "6px 14px", borderRadius: 999, border: "none",
                    cursor: "pointer", fontWeight: 700, fontSize: 12,
                    background: lang === l ? "linear-gradient(135deg, #06b6d4, #3b82f6)" : "rgba(255, 255, 255, 0.1)",
                    color: lang === l ? "#fff" : "#cbd5e1",
                    transition: "all 0.15s",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            <div style={{ padding: "8px 16px 4px" }}>
              <a href="#contact" className="btn btn-primary" style={{ width: "100%", padding: "12px" }}>
                {tr.nav.cta}
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1080px) { .desktop-nav { display: none !important; } }
        @media (min-width: 1081px) { .mobile-nav-toggle { display: none !important; } }
      `}</style>
    </header>
  );
}
