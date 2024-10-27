import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Terminal, Code2, Cpu } from 'lucide-react';

export default function Footer() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const commands = [
      'Initializing connection...',
      'Loading social links...',
      'Establishing secure channel...',
      'Connection established!'
    ];

    let commandIndex = 0;
    let charIndex = 0;

    const typeCommand = () => {
      if (!terminalRef.current) return;
      
      const currentCommand = commands[commandIndex];
      const terminal = terminalRef.current;

      if (charIndex < currentCommand.length) {
        terminal.textContent = currentCommand.slice(0, charIndex + 1) + '▋';
        charIndex++;
        setTimeout(typeCommand, 50);
      } else {
        setTimeout(() => {
          charIndex = 0;
          commandIndex = (commandIndex + 1) % commands.length;
          if (terminal) terminal.textContent = '';
          typeCommand();
        }, 2000);
      }
    };

    typeCommand();
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[var(--editor-bg)] border-t border-[var(--editor-line)]">
      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[var(--function)] to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-100%',
                width: '100%',
                animation: `circuit ${2 + Math.random() * 4}s linear ${Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Terminal Section */}
          <div className="card-hover bg-[var(--editor-line)]/50 p-6 rounded-xl backdrop-blur-sm">
            <Terminal className="w-6 h-6 text-[var(--function)] mb-4" />
            <div className="font-mono text-sm text-[var(--variable)]">
              <div ref={terminalRef} className="h-6" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="card-hover bg-[var(--editor-line)]/50 p-6 rounded-xl backdrop-blur-sm">
            <Code2 className="w-6 h-6 text-[var(--function)] mb-4" />
            <nav className="grid grid-cols-2 gap-2">
              {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
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

          {/* Social Links */}
          <div className="card-hover bg-[var(--editor-line)]/50 p-6 rounded-xl backdrop-blur-sm">
            <Cpu className="w-6 h-6 text-[var(--function)] mb-4" />
            <div className="flex justify-around">
              <a
                href="https://github.com/Pasachiya"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sachindu-dilshan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="social-icon-link"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-[var(--comment)] text-sm">
          <p className="code-line" data-line="42">
            <span className="keyword">const</span>{' '}
            <span className="variable">copyright</span> = {' '}
            <span className="string">"© {new Date().getFullYear()} Sachindu Dilshan"</span>;
          </p>
        </div>
      </div>
    </footer>
  );
}