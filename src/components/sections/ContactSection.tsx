"use client";

import { SocialLink as SocialLinkType, Profile } from "@/types";
import SocialLink from "@/components/ui/SocialLink";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ContactSectionProps {
  socialLinks: SocialLinkType[];
  profile: Profile;
}

export default function ContactSection({ socialLinks, profile }: ContactSectionProps) {
  const { t } = useLanguage();

  return (
    <motion.footer 
      id="contacto" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-32 border-t border-white/10 pt-16 pb-12 text-center"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl font-bold text-white mb-6">{t("contact.title")}</h2>
        <p className="text-zinc-400 mb-10 max-w-md">
          {t("contact.subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((social) => (
            <SocialLink key={social.label} link={social} showLabel />
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span>{profile.location}</span>
        </div>
      </div>
    </motion.footer>
  );
}
