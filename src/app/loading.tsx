export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32" aria-busy="true" aria-label="در حال بارگذاری نمونه‌کار">
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-48 rounded-full bg-border-subtle" />
        <div className="h-16 w-3/4 rounded-2xl bg-border-subtle" />
        <div className="h-4 w-2/3 rounded-full bg-border-subtle" />
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-64 rounded-3xl bg-border-subtle" />
          ))}
        </div>
      </div>
    </div>
  );
}
