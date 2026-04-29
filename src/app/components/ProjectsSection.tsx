import React from 'react';

import AppImage from '@/components/ui/AppImage';

const PROJECTS = [
{
  title: 'Procurement Approval Bot',
  client: 'RTX (Raytheon Technologies)',
  type: 'End-to-end Unattended SAP Bot',
  typeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc55b798-1767533845086.png",
  imageAlt: 'Dark analytics dashboard with glowing orange data visualizations on black background, enterprise software interface',
  tech: ['UiPath Studio', 'Orchestrator Queues', 'SQL', 'RE Framework', 'SAP'],
  metrics: [
  { label: 'Daily Transactions', value: '500+' },
  { label: 'Man-Hours Saved/Year', value: '1,200+' },
  { label: 'Bot Success Rate', value: '99.8%' }],

  description:
  'Architected a fully automated procurement approval pipeline for RTX, processing 500+ SAP transactions daily with queue-based retry logic and zero manual intervention.'
},
{
  title: 'Compliance Reporting Bot',
  client: 'American Electric Power (AEP)',
  type: 'Orchestrator Queue-Driven Compliance Bot',
  typeColor: 'border-green-500/30 bg-green-500/10 text-green-300',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e17ec1e-1774515743644.png",
  imageAlt: 'Business data analytics on dark screen with charts and metrics, warm amber glow from monitor in dark office environment',
  tech: ['UiPath Orchestrator', 'Excel Automation', 'Custom Logging', 'Email Distribution'],
  metrics: [
  { label: 'Docs Generated/Cycle', value: '1,000+' },
  { label: 'Cycle Time Reduction', value: '87%' },
  { label: 'Time Saved', value: '3d → 4hr' }],

  description:
  'Built a queue-driven compliance bot that auto-generates 1,000+ regulatory documents per cycle from Excel data with automated email distribution and full audit trails.'
},
{
  title: 'ITSM Incident Resolution Bot',
  client: 'Hitachi Vantara',
  type: 'Hybrid Attended / Unattended Bot',
  typeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_151a1155e-1772142294976.png",
  imageAlt: 'Server room with glowing network cables and dark atmospheric lighting, IT infrastructure in dim blue-orange light',
  tech: ['REST API', 'JSON/XML', 'Screenshot Capture', 'JS/HTML UI Layers'],
  metrics: [
  { label: 'Incident Resolution Cut', value: '50%' },
  { label: 'Manual Triage Cut', value: '80%' },
  { label: 'Client Incidents Reduced', value: '70%' }],

  description:
  'Developed a hybrid bot that auto-classifies and resolves ITSM incidents via REST API, with human-in-the-loop attended layers and screenshot-capture exception alerting.'
}];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
            Key RPA Projects
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-xl">
            Production-grade automation bots with measurable business impact across Fortune 500 enterprises.
          </p>
        </div>

        {/* Project cards — uniform 3-col with visual variety */}
        {/* STEP 1: Array has 3 cards: [ProcurementBot, ComplianceBot, ITSMBot] */}
        {/* STEP 2: Row 1: [col-1: ProcurementBot cs-1] [col-2: ComplianceBot cs-1] [col-3: ITSMBot cs-1] */}
        {/* STEP 3: Placed 3/3 cards ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS?.map((project, i) => (
          /* STEP 4: Card [i]: {project.title} */
          <div
            key={project?.title}
            className="reveal flex flex-col rounded-xl border border-[#1F2937] bg-[#111827] overflow-hidden hover:border-primary/40 hover:glow-orange-sm transition-all duration-300 group"
            style={{ transitionDelay: `${i * 100}ms` }}>

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={project?.image}
                alt={project?.imageAlt}
                fill
                className="object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex px-2 py-1 rounded border text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${project?.typeColor}`}>
                    {project?.type}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  {project?.client}
                </p>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {project?.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project?.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-[#1F2937]">
                  {project?.metrics?.map((m) =>
                <div key={m?.label} className="text-center">
                      <p className="text-base font-extrabold text-primary">{m?.value}</p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wide leading-tight mt-0.5">
                        {m?.label}
                      </p>
                    </div>
                )}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project?.tech?.map((t) =>
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#0D0D0D] border border-[#1F2937] text-muted-foreground">

                      {t}
                    </span>
                )}
                </div>
              </div>
            </div>)
          )}
        </div>
      </div>
    </section>);

}