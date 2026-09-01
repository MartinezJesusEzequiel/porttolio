import type { SocialLink, NavItem, EducationItem } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/MartinezJesusEzequiel",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ezequiel-martinezz/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:ezequieljemartinez@gmail.com",
    icon: "email",
  },
];

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export const education: EducationItem[] = [
  {
    institution: 'ITEC "El Molino"',
    title: "Tecnicatura en Software Informático",
    period: "2024 – 2026",
    type: "degree",
  },
  {
    institution: "CEIT",
    title: "Desarrollo Web — Certificado Profesional",
    period: "2024",
    type: "certificate",
  },
];
