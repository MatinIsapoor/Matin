"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const groupIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  database: Database,
  tools: Wrench,
};

export function Skills() {
  const reduced = useReducedMotion();
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          number="۰۲"
          eyebrow="مهارت‌ها"
          title="جعبه‌ابزاری برای رساندن محصول."
          description="ابزار را بر اساس کار انتخاب می‌کنم، ولی این‌ها چیزهایی است که بیشتر روزها با آن‌ها کار می‌کنم."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = groupIcons[group.icon];
            return (
              <Reveal key={group.title} delay={groupIndex * 0.08}>
                <div className="group h-full rounded-3xl border border-border-subtle bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300 transition-colors group-hover:bg-brand-500/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{group.description}</p>
                  <ul className="mt-6 space-y-4">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-xs text-muted">{skill.level}</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
                            initial={false}
                            whileInView={reduced ? { scaleX: 1 } : { scaleX: 1 }}
                            style={{ transformOrigin: "right", width: skill.level === "پیشرفته" ? "90%" : skill.level === "مسلط" ? "75%" : "55%" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
