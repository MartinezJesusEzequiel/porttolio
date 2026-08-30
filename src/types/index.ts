export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // nombre del archivo SVG en public/icons/
}

export interface StackItem {
  name: string;
  icon: string; // nombre del archivo SVG en public/icons/
  category: "backend" | "frontend" | "language" | "database" | "tool";
  status: "proficient" | "learning";
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  institution: string;
  title: string;
  period: string;
  type: "degree" | "certificate";
}
