"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { socials, type SocialLink } from "@/data/socials";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GitFork, Link2 } from "lucide-react";

const socialIcons: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: GitFork,
  linkedin: Link2,
  telegram: Send,
  email: Mail,
  twitter: Send,
};

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!site.formspreeId) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree error: ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-brand-500 focus:outline-none";

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          number="۰۵"
          eyebrow="تماس"
          title="بیا چیزی بسازیم که ارزش استفاده کردن داشته باشد."
          description="پروژه‌ای در ذهن داری، دنبال نیرو هستی یا فقط می‌خواهی سلام کنی؟ اینباکسم همیشه باز است."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">راه مستقیم را ترجیح می‌دهی؟</h3>
                <a href={`mailto:${profile.email}`} className="mt-3 inline-flex items-center gap-2 text-lg text-brand-700 underline-offset-4 hover:underline dark:text-brand-300">
                  <Mail className="h-5 w-5" aria-hidden />
                  {profile.email}
                </a>
              </div>
              <ul className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-card text-muted transition-all hover:-translate-y-0.5 hover:text-foreground"
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border-subtle bg-card p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">نام</label>
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="علی رضایی" className={inputClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">ایمیل</label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="ali@example.com" className={inputClasses} />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">پیام</label>
                <textarea id="message" name="message" required rows={5} placeholder="درباره پروژه‌ات بگو…" className={`${inputClasses} resize-y`} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "در حال ارسال…" : "ارسال پیام"}
                <Send className="h-4 w-4" aria-hidden />
              </button>

              <div aria-live="polite" className="mt-4 min-h-5 text-sm">
                {status === "success" && <p className="text-emerald-600 dark:text-emerald-400">ممنون — پیامت در راه است. به‌زودی جوابت را می‌دهم.</p>}
                {status === "error" && (
                  <p className="text-red-600 dark:text-red-400">
                    مشکلی پیش آمد. مستقیم بهم ایمیل بزن:{" "}
                    <a href={`mailto:${profile.email}`} className="underline underline-offset-4">{profile.email}</a>.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
