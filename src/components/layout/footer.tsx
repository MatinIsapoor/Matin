import { navigation } from "@/data/site";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">© {new Date().getFullYear()} · همه حقوق محفوظ است</p>
        </div>
        <ul className="flex flex-wrap items-center gap-6 text-sm text-muted">
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">ساخته‌شده با Next.js و Tailwind CSS</p>
      </div>
    </footer>
  );
}
