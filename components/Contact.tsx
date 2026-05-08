"use client";

import { useState } from "react";
import type { Translations } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ t }: { t: Translations["contact"] }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-beige/20 text-beige placeholder:text-beige/30 px-4 py-3 text-sm focus:outline-none focus:border-beige/60 transition-colors";

  return (
    <section id="contact" className="bg-navy py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-beige/40 text-[10px] tracking-[0.4em] uppercase mb-3">
              {t.label}
            </p>
            <h2 className="text-beige text-5xl md:text-6xl font-extralight mb-8 leading-tight">
              {t.heading}
            </h2>
            <p className="text-beige/65 text-sm leading-relaxed max-w-xs">
              {t.body}
            </p>
          </div>

          <div className="mt-12 space-y-4 text-sm">
            <a
              href="mailto:hello@techity.io"
              className="block text-beige/70 hover:text-beige transition-colors tracking-wide"
            >
              hello@techity.io
            </a>
            <a
              href="https://www.linkedin.com/company/techity"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-beige/70 hover:text-beige transition-colors tracking-wide"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {status === "sent" ? (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-px bg-beige/30 mx-auto mb-6" />
              <p className="text-beige text-lg font-light">{t.successTitle}</p>
              <p className="text-beige/50 text-sm mt-2">{t.successSub}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-beige/40 text-xs tracking-widest uppercase hover:text-beige/80 transition-colors"
              >
                {t.sendAnother}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder={t.namePlaceholder}
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              placeholder={t.emailPlaceholder}
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder={t.messagePlaceholder}
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 px-8 py-3.5 bg-beige text-navy text-xs tracking-[0.25em] uppercase hover:bg-beige/85 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? t.sending : t.sendButton}
            </button>
            {status === "error" && (
              <p className="text-red-400/80 text-xs text-center tracking-wide">
                {t.errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
