import React from 'react';
import Icon from '@/components/ui/AppIcon';

const EXPERIENCES = [
  {
    company: 'AgilePoint Software Pvt. Ltd.',
    location: 'Bangalore, India',
    role: 'Software Engineer — RPA Developer',
    period: 'Jun 2021 – Nov 2023',
    clients: [
      {
        name: 'RTX (Raytheon Technologies)',
        sector: 'Aerospace & Defence',
        sectorColor: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
        highlights: [
          {
            metric: '65%',
            label: 'Processing Time Reduction',
            detail:
              'Architected unattended bots using UiPath Studio & RE Framework for procurement approvals and compliance reporting across 500+ daily transactions.',
          },
          {
            metric: '500+',
            label: 'Daily Transactions',
            detail:
              'Implemented Orchestrator queue-based processing with retry logic and Business/Application exception handling; configured Assets and Environment variables for Dev → UAT → Prod deployments.',
          },
        ],
      },
      {
        name: 'American Electric Power (AEP)',
        sector: 'Utility Sector',
        sectorColor: 'border-green-500/30 bg-green-500/10 text-green-300',
        highlights: [
          {
            metric: '87%',
            label: 'Turnaround Reduction',
            detail:
              'Automated field service workflows and regulatory document generation, reducing turnaround from 3 days to 4 hours with structured Orchestrator logging and full audit trails.',
          },
          {
            metric: '40%',
            label: 'Dev Effort Reduced',
            detail:
              'Developed reusable RE Framework-aligned components and Excel automation templates, cutting cross-team development effort; reported bot metrics and risks weekly in JIRA sprints.',
          },
        ],
      },
      {
        name: 'Hitachi Vantara',
        sector: 'IT Services & Data Management',
        sectorColor: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
        highlights: [
          {
            metric: '50%',
            label: 'Incident Resolution Reduction',
            detail:
              'Automated ITSM workflows via REST API integration (JSON/XML), reducing incident resolution time; built attended bots with JS/HTML UI layers for human-in-the-loop tasks.',
          },
          {
            metric: '70%',
            label: 'Client Incidents Reduced',
            detail:
              'Resolved 15+ critical production integration bugs, reducing client-reported incidents; maintained VPAT accessibility and enforced security policies across all deliverables.',
          },
        ],
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
            Work History
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
            Work Experience
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-xl">
            Enterprise automation delivery for Fortune 500 clients — measurable ROI, production-grade bots, Agile execution.
          </p>
        </div>

        {EXPERIENCES?.map((exp) => (
          <div key={exp?.company} className="reveal">
            {/* Company header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 p-5 rounded-xl border border-[#1F2937] bg-[#111827]">
              <div>
                <h3 className="text-xl font-bold text-white">{exp?.company}</h3>
                <p className="text-sm text-primary font-semibold mt-0.5">{exp?.role}</p>
                <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                  <Icon name="MapPinIcon" size={12} />
                  {exp?.location}
                </p>
              </div>
              <div className="mt-3 sm:mt-0 text-right">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1F2937] bg-[#0D0D0D] text-xs font-semibold text-muted-foreground">
                  <Icon name="CalendarIcon" size={12} />
                  {exp?.period}
                </span>
              </div>
            </div>

            {/* Client cards */}
            <div className="space-y-6">
              {exp?.clients?.map((client, ci) => (
                <div
                  key={client?.name}
                  className="reveal p-6 rounded-xl border border-[#1F2937] bg-[#0D0D0D] hover:border-primary/30 transition-all duration-300 group"
                  style={{ transitionDelay: `${ci * 100}ms` }}
                >
                  {/* Client header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="BuildingOfficeIcon" size={16} className="text-primary" />
                      </div>
                      <h4 className="text-base font-bold text-white">{client?.name}</h4>
                    </div>
                    <span className={`mt-2 sm:mt-0 self-start sm:self-auto inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${client?.sectorColor}`}>
                      {client?.sector}
                    </span>
                  </div>

                  {/* Impact highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {client?.highlights?.map((h) => (
                      <div
                        key={h?.label}
                        className="p-4 rounded-lg border border-[#1F2937] bg-[#111827] hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-2xl font-extrabold text-gradient-orange">
                            {h?.metric}
                          </span>
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            {h?.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {h?.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}