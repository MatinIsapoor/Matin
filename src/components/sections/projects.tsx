"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const filters: { value: ProjectCategory | "All"; label: string }[] = [
  { value: "All", label: "همه" },
  { value: "Frontend", label: "فرانت‌اند" },
  { value: "Backend", label: "بک‌اند" },
  { value: "Full-Stack", label: "فول‌استک" },
  { value: "Bots", label: "بات‌ها" },
];
type Filter = (typeof filters)[number]["value"];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const reduced = useReducedMotion();

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          number="۰۳"
          eyebrow="پروژه‌ها"
          title="کارهای منتخبی که به آن‌ها افتخار می‌کنم."
          description="چند نمونه از چیزهایی که طراحی، پیاده‌سازی و منتشر کرده‌ام. لینک هر پروژه وقتی عمومی شود اضافه می‌شود."
        />

        <Reveal>
          <div role="tablist" aria-label="فیلتر پروژه‌ها بر اساس دسته‌بندی" className="mb-10 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const selected = active === filter.value;
              return (
                <button
                  key={filter.value}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(filter.value)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selected ? "text-background" : "text-muted hover:text-foreground"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-foreground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.ul layout className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.li
                key={project.title}
                layout
                initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/10">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border-subtle">
                    <Image
                      src={project.image}
                      alt={`پیش‌نمایش ${project.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium text-foreground">
                      {categoryLabels[project.category]}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="rounded-md bg-brand-500/10 px-2 py-1 font-mono text-[11px] font-medium text-brand-700 dark:text-brand-300">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center gap-4 border-t border-border-subtle pt-5">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline">
                          <ExternalLink className="h-4 w-4" aria-hidden />
                          دموی زنده
                        </a>
                      ) : (
                        <span className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm text-muted/60" aria-disabled>
                          <ExternalLink className="h-4 w-4" aria-hidden />
                          دمو به‌زودی
                        </span>
                      )}
                      {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline">
                          <GitFork className="h-4 w-4" aria-hidden />
                          سورس
                        </a>
                      ) : (
                        <span className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm text-muted/60" aria-disabled>
                          <GitFork className="h-4 w-4" aria-hidden />
                          ریپوی خصوصی
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
