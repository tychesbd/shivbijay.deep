import React from 'react';
import Icon from '@/components/ui/AppIcon';

const CERTS = [
  {
    title: 'UiPath Automation Developer Associate Training',
    issuer: 'UiPath',
    year: '2023',
    category: 'RPA / Automation',
    categoryColor: 'border-primary/40 bg-primary/10 text-primary',
    icon: '⚡',
    description:
      'Official UiPath certification covering Studio, Orchestrator, RE Framework, queue-based automation, exception handling, and production bot deployment.',
    skills: ['UiPath Studio', 'Orchestrator', 'RE Framework', 'Queue Management'],
    badge: '#FA4616',
  },
  {
    title: 'Python, SQL, Relational DB & Analytics',
    issuer: 'Alma Better',
    year: '2024–25',
    category: 'Data & Programming',
    categoryColor: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    icon: '🐍',
    description:
      'Comprehensive certification in Python programming, SQL querying, relational database design, and data analytics for automation and integration workflows.',
    skills: ['Python', 'SQL', 'Relational Databases', 'Data Analytics'],
    badge: '#3B82F6',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
            Credentials
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
            Certifications
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-xl">
            Verified credentials across RPA automation, Python development, and data management.
          </p>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {CERTS?.map((cert, i) => (
            <div
              key={cert?.title}
              className="reveal p-6 lg:p-8 rounded-xl border border-[#1F2937] bg-[#111827] hover:border-primary/40 hover:glow-orange-sm transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Badge header */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border-2 group-hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: cert?.badge, background: `${cert?.badge}18` }}
                >
                  {cert?.icon}
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${cert?.categoryColor}`}>
                    {cert?.category}
                  </span>
                  <p className="text-[10px] text-muted-foreground mt-1.5 flex items-center justify-end gap-1">
                    <Icon name="CalendarIcon" size={10} />
                    {cert?.year}
                  </p>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-white leading-tight mb-1.5">
                {cert?.title}
              </h3>
              <p className="text-xs font-semibold text-primary mb-3 flex items-center gap-1.5">
                <Icon name="BuildingOfficeIcon" size={12} />
                {cert?.issuer}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {cert?.description}
              </p>

              {/* Skills covered */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1F2937]">
                {cert?.skills?.map((skill) => (
                  <span key={skill} className="skill-chip text-[10px]">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verified badge */}
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-green-400">
                <Icon name="CheckBadgeIcon" size={14} className="text-green-400" />
                Verified Credential
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}