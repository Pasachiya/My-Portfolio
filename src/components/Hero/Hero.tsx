import React, { useEffect } from 'react';
import MatrixBackground from './MatrixBackground';
import CustomCursor from './CustomCursor';
import HeroStats from './HeroStats';
import SecurityExpertise from './SecurityExpertise';
import SocialLinks from './SocialLinks';

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.section-transition');
    elements.forEach(el => observer.observe(el));

    const handleCardHover = (e: MouseEvent, card: Element) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
    };

    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleCardHover(e as MouseEvent, card));
    });

    return () => {
      observer.disconnect();
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleCardHover(e as MouseEvent, card));
      });
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <CustomCursor />
      <MatrixBackground />
      <div className="background-grid" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto section-transition">
          <div className="mb-8 relative">
            <br/>
            <img
              src="/Public/Sachindu profile photo.png"
              alt="Sachindu Dilshan"
              className="w-40 h-40 rounded-full mx-auto border-4 border-[var(--variable)] p-1 hover:scale-110 transition-all duration-300 hover:border-[var(--function)] hover:shadow-lg hover:shadow-[var(--function)]/20"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
            <div className="absolute inset-0 rounded-full glitch-effect opacity-50" />
          </div>

          <div className="code-line hover-lift" data-line="01">
            <h1 className="text-5xl font-bold mb-4 glitch-effect" data-text="Sachindu Dilshan">
              <span className="text-[var(--keyword)]">const</span>{' '}
              <span className="text-[var(--variable)]">developer</span> ={' '}
              <span className="text-[var(--string)]">"Sachindu Dilshan"</span>;
            </h1>
          </div>

          <div className="code-line hover-bright" data-line="02">
            <p className="text-xl mb-8">
              <span className="text-[var(--comment)]">// DevOps & Full-Stack Developer</span>
            </p>
          </div>
          
          <HeroStats />
          <SecurityExpertise />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}