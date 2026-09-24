import { NextRequest, NextResponse } from "next/server";

// ── Telegram config ───────────────────────────────────────────────────────
// Set these in .env.local:
//   TELEGRAM_BOT_TOKEN=123456:ABCDEF...
//   TELEGRAM_CHAT_ID=-100123456789  (group or personal chat id)
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID   ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, company, projectType, message, lang } = body;

    const langEmoji: Record<string, string> = { RU: "🇷🇺", KZ: "🇰🇿", EN: "🇬🇧" };

    const text = [
      `🔔 *Новая заявка с omis.kz* ${langEmoji[lang] ?? ""}`,
      ``,
      `👤 *Имя:* ${name}`,
      `📞 *Телефон:* ${phone}`,
      `🏢 *Компания:* ${company || "—"}`,
      `📂 *Тип проекта:* ${projectType}`,
      ``,
      `💬 *Задача:*`,
      `${message || "—"}`,
      ``,
      `⏰ ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })} (Алматы)`,
    ].join("\n");

    if (!BOT_TOKEN || !CHAT_ID) {
      // Dev mode — just log, don't fail
      console.log("[OMIS Telegram] BOT_TOKEN or CHAT_ID not set, skipping send.");
      console.log(text);
      return NextResponse.json({ ok: true, dev: true });
    }

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await res.json();
    if (!data.ok) {
      console.error("[Telegram API Error]", data);
      return NextResponse.json({ ok: false, error: data.description }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[OMIS /api/contact] Error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
