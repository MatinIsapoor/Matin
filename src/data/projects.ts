export type ProjectCategory = "Frontend" | "Backend" | "Full-Stack" | "Bots";
export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string | null;
  githubUrl: string | null;
};

/** Persian labels for the internal English category values. */
export const categoryLabels: Record<ProjectCategory, string> = {
  Frontend: "فرانت‌اند",
  Backend: "بک‌اند",
  "Full-Stack": "فول‌استک",
  Bots: "بات‌ها",
};

export const projects: Project[] = [
  { title: "Orbit — فضای کاری یکپارچه برای تیم‌ها", category: "Full-Stack", description: "یک فضای کاری آرام و مشارکتی برای تیم‌های بلندپرواز؛ پروژه‌ها، داک‌ها و گفت‌وگوها همه در یک جای خوش‌فکر و مرتب.", technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"], image: "/projects/orbit.svg", liveUrl: null, githubUrl: null },
  { title: "Forma — خرید کمتر، زندگی بهتر", category: "Frontend", description: "یک فروشگاه مینیمال و ادیتوریال برای نیازهای روزمره، با کاتالوگ واکنش‌گرا و تجربه خریدی ساده و بی‌حاشیه.", technologies: ["React", "Tailwind CSS", "Framer Motion"], image: "/projects/forma.svg", liveUrl: null, githubUrl: null },
  { title: "Pulse — تحلیل بدون نویز", category: "Backend", description: "یک کانسپت تحلیلی API-first که ایونت‌های محصول را به بینش‌های کاربردی تبدیل می‌کند؛ با اندپوینت‌های تایپ‌شده و داک واضح.", technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"], image: "/projects/pulse.svg", liveUrl: null, githubUrl: null },
  { title: "Relay — اتوماسیون روزمره", category: "Bots", description: "یک کانسپت دستیار کامیونیتی برای یادآوری‌ها، دستورهای کاربردی و در جریان نگه‌داشتن همه، بدون کارهای تکراری.", technologies: ["TypeScript", "Node.js", "Telegram API"], image: "/projects/relay.svg", liveUrl: null, githubUrl: null },
];
