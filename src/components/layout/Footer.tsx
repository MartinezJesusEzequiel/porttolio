import { socialLinks } from "@/data/social-links";
import SocialLink from "@/components/ui/SocialLink";

export default function Footer() {
  return (
    <footer className="border-t border-tinta/5 dark:border-crema/5">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-tinta/50 dark:text-crema/50">
          © {new Date().getFullYear()} Ezequiel Martínez
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
