export function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description?: string }) {
  return <div className="mb-12 max-w-2xl"><p className="mb-4 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300"><span className="text-muted">{number} /</span>{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>{description && <p className="mt-5 text-base leading-8 text-muted">{description}</p>}</div>;
}
