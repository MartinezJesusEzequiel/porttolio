import HeroSection from "@/components/sections/HeroSection";
import StackSection from "@/components/sections/StackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <StackSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <AboutSection />
      <Divider />
      <EducationSection />
      <Divider />
      <ContactSection />
    </>
  );
}
