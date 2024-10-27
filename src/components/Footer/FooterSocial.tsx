import React from 'react';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/Pasachiya",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://linkedin.com/in/sachindu-dilshan",
    label: "LinkedIn"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:pasachiya@gmail.com",
    label: "Email"
  }
];

export default function FooterSocial() {
  return (
    <div className="card-hover bg-[var(--editor-line)]/50 p-6 rounded-xl backdrop-blur-sm">
      <Cpu className="w-6 h-6 text-[var(--function)] mb-4" />
      <div className="flex justify-around">
        {socialLinks.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}