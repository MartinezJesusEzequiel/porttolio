import { socialLinks } from "@/data/social-links";
import SocialLink from "@/components/ui/SocialLink";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-auto">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between text-zinc-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Ezequiel Martínez.
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} link={link} className="!px-3 !py-2" />
          ))}
        </div>
      </div>
    </footer>
  );
}
