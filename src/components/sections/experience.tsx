import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          number="۰۴"
          eyebrow="تجربه‌ها"
          title="کجا بوده‌ام و چه چیزهایی یاد گرفته‌ام."
        />
        <ol className="relative ml-3 space-y-12 border-l border-border-subtle pl-8">
          {experience.map((item, index) => (
            <li key={`${item.period}-${item.role}`} className="relative">
              <span className="absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-background" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-brand-500" />
              </span>
              <Reveal delay={index * 0.06}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{item.period}</p>
                <div className="mt-2 flex items-center gap-2">
                  {item.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-brand-600 dark:text-brand-400" aria-hidden />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-brand-600 dark:text-brand-400" aria-hidden />
                  )}
                  <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">{item.organization}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-border-subtle bg-card px-3 py-1 text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
