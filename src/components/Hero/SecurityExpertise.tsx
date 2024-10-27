import React from 'react';

const securitySkills = [
  'Python for Security',
  'Linux Systems',
  'SQL Security',
  'SIEM Tools',
  'IDS Systems',
  'Risk Assessment'
];

export default function SecurityExpertise() {
  return (
    <div className="card-hover bg-[var(--editor-line)]/30 rounded-xl p-6 backdrop-blur-sm mb-8 max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-[var(--function)] mb-4">Cybersecurity Expertise</h3>
      <ul className="text-sm text-[var(--variable)] grid md:grid-cols-2 gap-3">
        {securitySkills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 hover:translate-x-2 transition-transform">
            <span className="w-2 h-2 bg-[var(--keyword)] rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}