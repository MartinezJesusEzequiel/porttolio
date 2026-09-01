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
  color?: string; // hex color code
}

export interface Project {
  title: string;
  description: string;
  descriptionEn?: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
  mainLanguage?: string;
  languageColor?: string; // e.g. "bg-yellow-400"
  imageUrl?: string;
  stars?: number;
  forks?: number;
  updatedAt?: string;
}

export interface EducationItem {
  institution: string;
  title: string;
  titleEn?: string;
  period: string;
  type: "degree" | "certificate";
  certificateUrl?: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  aboutText: string[];
  aboutTextEn?: string[];
}
