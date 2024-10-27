import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const currentObserver = observerRef.current;
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => currentObserver.observe(element));

    return () => {
      if (currentObserver) {
        elements.forEach(element => currentObserver.unobserve(element));
        currentObserver.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}