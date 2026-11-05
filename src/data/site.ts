export const navigation = [
  { id: "about", label: "درباره من" },
  { id: "skills", label: "مهارت‌ها" },
  { id: "projects", label: "پروژه‌ها" },
  { id: "experience", label: "تجربه‌ها" },
  { id: "contact", label: "تماس" },
] as const;

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
  availability: "مشتاق همکاری در پروژه‌های خوب و معنادار",
};
