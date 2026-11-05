/**
 * Social links rendered in the Hero, Contact and Footer.
 * `label` doubles as the accessible name for screen readers.
 */
export type SocialLink = {
  label: string;
  href: string;
  // Kept as plain strings so this file stays serializable and easy to edit;
  // components map them to Lucide icons via the `icon` key.
  icon: "github" | "linkedin" | "telegram" | "email" | "twitter";
};

export const socials: SocialLink[] = [
  { label: "گیت‌هاب", href: "https://github.com/username", icon: "github" },
  {
    label: "لینکدین",
    href: "https://linkedin.com/in/username",
    icon: "linkedin",
  },
  { label: "تلگرام", href: "https://t.me/username", icon: "telegram" },
  {
    label: "ایمیل",
    href: "mailto:matin.dev@gmail.com",
    icon: "email",
  },
];
