import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutParagraphs, aboutHighlights, stats } from "@/data/profile";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading number="۰۱" eyebrow="درباره من" title="توسعه‌دهنده‌ای که به جزئیات اهمیت می‌دهد." />
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-6">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-8 text-muted">
                {paragraph}
              </p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-2">
              {aboutHighlights.map((highlight) => (
                <li key={highlight} className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-card px-3.5 py-1.5 text-sm text-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border-subtle bg-border-subtle">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2 bg-background p-8">
                  <dd className="text-4xl font-semibold tracking-tight">{stat.value}</dd>
                  <dt className="text-sm text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
