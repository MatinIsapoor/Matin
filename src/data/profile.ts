/**
 * Central place for all personal information.
 * Edit this file to customize the entire site — no component changes needed.
 */

export const profile = {
  name: "متین",
  // Shown in the navbar / footer; keep it short
  shortName: "متین",
  title: "توسعه‌دهنده فول‌استک",
  tagline:
    "وب‌اپ‌های سریع و دسترس‌پذیر می‌سازم با میکرواینترکشن‌های لذت‌بخش — از رابط‌های تمیز و دقیق تا ای‌پی‌آی‌های قابل اتکا.",
  // 1-2 sentence elevator pitch used for SEO description & hero subtitle
  pitch:
    "متین، توسعه‌دهنده فول‌استک متخصص در Next.js، تایپ‌اسکریپت و Node.js. مسئله‌های پیچیده را به محصول‌های تمیز و قابل نگهداری تبدیل می‌کنم که کار کردن با آن‌ها لذت‌بخش است.",
  location: "تهران، ایران",
  email: "matin.dev@gmail.com",
  // Path to files in /public — drop your own files there
  avatar: "/avatar.svg",
  resume: "/resume.txt",
  // Optional: link to a printable online CV
  resumeUrl: "",
} as const;

/** Two short paragraphs for the About section. */
export const aboutParagraphs: string[] = [
  "من توسعه‌دهنده فول‌استک هستم با بیش از ۴ سال تجربه در ساخت و انتشار وب‌اپلیکیشن‌های واقعی برای استارتاپ‌ها و تیم‌های محصول. نقطه قوتم جایی است که طراحی خوب و مهندسی درست به هم می‌رسند؛ هم به انیمیشن نرم ۶۰ فریمی اهمیت می‌دهم، هم به تایپ‌سیف بودن کد و پوشش تست.",
  "این اواخر بیشتر در اکوسیستم Next.js و تایپ‌اسکریپت کار کرده‌ام؛ از داشبوردهای realtime تا فروشگاه‌های اینترنتی. معتقدم نرم‌افزار خوب باید به‌صورت پیش‌فرض دسترس‌پذیر باشد، روی گوشی‌های معمولی سریع اجرا شود و نگهداری آن لذت‌بخش باشد. وقتی کد نمی‌زنم، به توسعه‌دهنده‌های جوان‌تر منتور می‌دهم، در اوپن‌سورس مشارکت می‌کنم یا دنبال یک قهوه خوب می‌گردم.",
];

/** Short punchy highlights rendered as chips under the bio. */
export const aboutHighlights: string[] = [
  "بیش از ۴ سال ساخت محصول واقعی",
  "عاشق دیزاین‌سیستم",
  "مشارکت‌کننده اوپن‌سورس",
  "منتور و فعال کامیونیتی",
];

/** Quick stats shown in the About section. */
export const stats = [
  { label: "سال تجربه", value: "۴+" },
  { label: "پروژه تحویل‌شده", value: "۳۰+" },
  { label: "پی‌آر اوپن‌سورس", value: "۱۲۰+" },
  { label: "منتورشیپ موفق", value: "۱۵" },
] as const;
