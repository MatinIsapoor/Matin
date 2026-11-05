"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin, GitFork, Link2, Send, Mail, Globe } from "lucide-react";
import { profile } from "@/data/profile";
import { socials, type SocialLink } from "@/data/socials";
import { site } from "@/data/site";

const socialIcons: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: GitFork,
  linkedin: Link2,
  telegram: Send,
  email: Mail,
  twitter: Globe,
};

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <motion.div aria-hidden className="pointer-events-none absolute -top-24 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-900/30" animate={reduced ? undefined : { y: [0, -18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="pointer-events-none absolute bottom-[-6rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-brand-100/50 blur-3xl dark:bg-brand-800/20" animate={reduced ? undefined : { y: [0, 14, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-6 py-20">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={false} animate={reduced ? undefined : { opacity: [0, 1], y: [24, 0] }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle glass px-4 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {site.availability}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              سلام، من {profile.name}م.
              <span className="mt-4 block text-muted">
                من یک {profile.title}م که تجربه‌های وب آرام و قابل اتکا می‌سازم.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{profile.tagline}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={profile.resume} download className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]">
                دانلود رزومه
              </a>
              <a href="#contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-border-subtle px-6 text-sm font-medium transition-colors hover:bg-card">
                تماس با من
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-muted transition-colors hover:text-foreground">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
            </div>
          </motion.div>

          <motion.div initial={false} animate={reduced ? undefined : { opacity: [0, 1], y: [24, 0] }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }} className="relative mx-auto w-64 sm:w-72">
            <motion.div animate={reduced ? undefined : { y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/30 via-brand-300/20 to-transparent blur-xl" aria-hidden />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-border-subtle bg-card shadow-2xl shadow-brand-900/10">
                <Image src={profile.avatar} alt={`پرتره ${profile.name}`} fill priority sizes="(max-width: 768px) 16rem, 18rem" className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a href="#about" aria-label="اسکرول به بخش درباره من" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-foreground" animate={reduced ? undefined : { y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
