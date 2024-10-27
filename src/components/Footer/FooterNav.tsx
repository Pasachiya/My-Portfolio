import React from 'react';
import { Code2 } from 'lucide-react';

const navItems = ['Projects', 'About', 'Skills', 'Contact'];

export default function FooterNav() {
  return (
    <div className="card-hover bg-[var(--editor-line)]/50 p-6 rounded-xl backdrop-blur-sm">
      <Code2 className="w-6 h-6 text-[var(--function)] mb-4" />
      <nav className="grid grid-cols-2 gap-2">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[var(--variable)] hover:text-[var(--function)] transition-colors py-1 px-2 rounded hover:bg-[var(--editor-line)] relative overflow-hidden group"
          >
            <span className="relative z-10">{item}</span>
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-[var(--function)]/10 to-transparent group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>
    </div>
  );
}