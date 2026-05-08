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
    "w-full bg-transparent border-0 border-b border-[var(--color-hair-on-navy-strong)] text-beige placeholder:text-beige/40 px-0 py-4 text-[16px] font-light focus:border-beige focus:outline-none transition-colors";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy px-6 pb-24 pt-24 text-beige md:px-20 md:pb-40 md:pt-36"
    >
      {/* Section header */}
      <div className="flex items-center justify-between gap-6 border-b border-[var(--color-hair-on-navy)] pb-7">
        <span
          className="text-[11px] font-medium uppercase leading-none text-beige opacity-55 md:text-[12px]"
          style={{ letterSpacing: "0.4em" }}
        >
          {t.eyebrow}
        </span>
        <a
          href={`mailto:${t.countEmail}`}
          className="text-[11px] font-medium uppercase leading-none text-beige opacity-40 transition-opacity hover:opacity-100 md:text-[12px]"
          style={{ letterSpacing: "0.22em" }}
        >
          {t.countEmail}
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-[1.1fr_1fr] md:gap-[120px]">
        {/* Left — headline + meta */}
        <div>
          <h2
            className="m-0 font-thin text-beige"
            style={{
              fontSize: "clamp(44px, 8vw, 112px)",
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              fontWeight: 100,
            }}
          >
            {t.heading1}
            <br />
            <em className="accent">{t.heading2}</em>
          </h2>

          <p className="m-0 mt-9 max-w-[440px] text-[16px] font-light leading-[1.6] text-beige opacity-65 md:text-[18px]">
            {t.body}
          </p>

          <div className="mt-10 flex flex-col gap-3.5 md:mt-12">
            <a
              href={`mailto:${t.email}`}
              className="text-[13px] font-medium uppercase text-beige opacity-70 transition-opacity hover:opacity-100 md:text-[14px]"
              style={{ letterSpacing: "0.18em" }}
            >
              {t.email}
            </a>
            <a
              href="https://www.linkedin.com/company/techity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium uppercase text-beige opacity-70 transition-opacity hover:opacity-100 md:text-[14px]"
              style={{ letterSpacing: "0.18em" }}
            >
              {t.linkedin}
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="md:pt-6">
          {status === "sent" ? (
            <div className="flex h-full min-h-[300px] flex-col items-start justify-center gap-3 border-t border-[var(--color-hair-on-navy-strong)] pt-12">
              <p className="m-0 text-[20px] font-light text-beige md:text-[24px]">
                {t.successTitle}
              </p>
              <p className="m-0 text-[14px] font-light text-beige opacity-60 md:text-[15px]">
                {t.successSub}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-[10px] font-medium uppercase text-beige opacity-50 transition-opacity hover:opacity-100"
                style={{ letterSpacing: "0.22em" }}
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col">
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
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-beige px-11 py-4 text-[12px] font-semibold uppercase text-navy transition-opacity duration-200 hover:opacity-90 disabled:opacity-50"
                  style={{ letterSpacing: "0.22em" }}
                >
                  {status === "sending" ? t.sending : t.sendButton}
                </button>
              </div>
              {status === "error" && (
                <p
                  className="mt-4 text-[10px] font-medium uppercase text-red-300 opacity-80"
                  style={{ letterSpacing: "0.22em" }}
                >
                  {t.errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
