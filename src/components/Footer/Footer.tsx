import React from 'react';
import FooterTerminal from './FooterTerminal';
import FooterNav from './FooterNav';
import FooterSocial from './FooterSocial';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--editor-bg)] border-t border-[var(--editor-line)]">
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
          <FooterTerminal />
          <FooterNav />
          <FooterSocial />
        </div>

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