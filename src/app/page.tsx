import HeroSection from "@/components/sections/HeroSection";
import StackSection from "@/components/sections/StackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Divider from "@/components/ui/Divider";

// IMPORTAMOS NUESTRO MODELO (Datos)
import { profileData, educationData } from "@/data/profile";
import { stack } from "@/data/stack";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social-links";

export default function Home() {
  // El Controlador (este archivo) inyecta el Modelo en las Vistas
  return (
    <>
      <HeroSection profile={profileData} />
      <Divider />
      <StackSection stack={stack} />
      <Divider />
      <ProjectsSection projects={projects} />
      <Divider />
      <EducationSection education={educationData} />
      <ContactSection socialLinks={socialLinks} profile={profileData} />
    </>
  );
}
