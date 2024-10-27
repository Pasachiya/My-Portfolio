import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  slug: string;
  imageUrl: string;
}

export default function ProjectCard({ title, description, technologies, slug, imageUrl }: ProjectCardProps) {
  return (
    <div className="fade-in group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-all duration-300">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 text-cyan-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link 
          to={`/project/${slug}`}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}