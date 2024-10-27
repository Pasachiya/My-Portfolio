import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Star, Users, Calendar } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-300 mb-4">Project not found</h2>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">Return home</Link>
        </div>
      </div>
    );
  }

  // Additional content for travel agency project
  const isTravelAgency = project.slug === 'travel-agency';
  const travelAgencyContent = isTravelAgency ? (
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      <div className="bg-gray-800/50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Popular Destinations</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors">
            <img 
              src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070" 
              alt="Bali"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-[var(--variable)]">Bali, Indonesia</h3>
              <p className="text-sm text-[var(--comment)]">Tropical Paradise</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors">
            <img 
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020" 
              alt="Paris"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-[var(--variable)]">Paris, France</h3>
              <p className="text-sm text-[var(--comment)]">City of Love</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors">
            <img 
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070" 
              alt="Tokyo"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-[var(--variable)]">Tokyo, Japan</h3>
              <p className="text-sm text-[var(--comment)]">Modern Metropolis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Project Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-900/50 rounded-lg">
            <Users className="w-6 h-6 text-[var(--function)] mb-2" />
            <h3 className="font-semibold text-[var(--variable)]">Active Users</h3>
            <p className="text-2xl font-bold text-[var(--number)]">10,000+</p>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg">
            <Globe className="w-6 h-6 text-[var(--function)] mb-2" />
            <h3 className="font-semibold text-[var(--variable)]">Destinations</h3>
            <p className="text-2xl font-bold text-[var(--number)]">50+</p>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg">
            <Star className="w-6 h-6 text-[var(--function)] mb-2" />
            <h3 className="font-semibold text-[var(--variable)]">Reviews</h3>
            <p className="text-2xl font-bold text-[var(--number)]">4.8/5.0</p>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg">
            <Calendar className="w-6 h-6 text-[var(--function)] mb-2" />
            <h3 className="font-semibold text-[var(--variable)]">Bookings</h3>
            <p className="text-2xl font-bold text-[var(--number)]">5,000+</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
        
        <div className="relative rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
          <div className="relative bg-gray-900/90 p-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Technical Details</h2>
            <div className="space-y-4 text-gray-300">
              <p>This project utilizes a modern tech stack including:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {travelAgencyContent}
      </div>
    </div>
  );
}