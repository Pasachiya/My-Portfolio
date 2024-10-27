import React, { useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

export default function FooterTerminal() {
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
    <div className="card-hover bg-[var(--editor-line)]/50 p-6 rounded-xl backdrop-blur-sm">
      <Terminal className="w-6 h-6 text-[var(--function)] mb-4" />
      <div className="font-mono text-sm text-[var(--variable)]">
        <div ref={terminalRef} className="h-6" />
      </div>
    </div>
  );
}