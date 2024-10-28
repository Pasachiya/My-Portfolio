import React from 'react';
import { Github, Linkedin, Mail, FileDown, FileText } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />,
    href: "https://github.com/Pasachiya",
    label: "GitHub",
    external: true
  },
  {
    icon: <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />,
    href: "https://www.linkedin.com/in/sachindu-dilshan",
    label: "LinkedIn",
    external: true
  },
  {
    icon: <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />,
    href: "mailto:pasachiya@gmail.com",
    label: "Email"
  }
];

const cvLinks = [
  {
    icon: <FileDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />,
    href: "https://drive.google.com/file/d/1nM2XwnVHIJtf6Yyvu5LPe76T7pScL9pN/view?usp=sharing",
    label: "Download CV",
    className: "bg-[var(--function)] hover:bg-[var(--keyword)] text-black"
  },
  
];

export default function SocialLinks() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4">
        {socialLinks.map(({ icon, href, label, external }) => (
          <a
            key={label}
            href={href}
            className="group social-link text-[var(--variable)] hover:text-[var(--function)] transition-all duration-300 hover:scale-110"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
      
      <div className="flex justify-center gap-4">
        {cvLinks.map(({ icon, href, label, className, external }) => (
          <a
            key={label}
            href={href}
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--function)]/20 ${className}`}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {icon}
            <span className="font-medium">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}