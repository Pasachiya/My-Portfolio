import React from 'react';
import { Code2, Server, Award } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, items }) => (
  <div className="card-hover bg-[var(--editor-line)] rounded-xl p-6 backdrop-blur-sm">
    {icon}
    <h3 className="font-semibold text-lg mb-2 text-[var(--keyword)]">{title}</h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <p key={index} className="text-[var(--comment)] text-sm">{item}</p>
      ))}
    </div>
  </div>
);

export default function HeroStats() {
  const stats = [
    {
      icon: <Code2 className="w-8 h-8 text-[var(--function)] mx-auto mb-4" />,
      title: "Full Stack Development",
      items: ["Python, Java, JavaScript, C#", "React, Node.js, Flask"]
    },
    {
      icon: <Server className="w-8 h-8 text-[var(--function)] mx-auto mb-4" />,
      title: "DevOps & Cloud",
      items: ["Docker, Kubernetes, Jenkins", "Azure, Git, Linux, CI/CD"]
    },
    {
      icon: <Award className="w-8 h-8 text-[var(--function)] mx-auto mb-4" />,
      title: "Certifications",
      items: ["Google Cybersecurity Certificate", "Microsoft Azure (AZ-900)"]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}