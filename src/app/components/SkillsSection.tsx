import React from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'RPA / UiPath',
    icon: '⚡',
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
    skills: [
      'UiPath Studio',
      'Orchestrator',
      'RE Framework',
      'Attended Bots',
      'Unattended Bots',
      'Queue Management',
      'Asset Management',
      'Dispatcher / Performer',
      'Agentic Automation'
    ],
  },
  {
    title: 'Automation',
    icon: '🤖',
    color: 'from-orange-500/20 to-orange-500/5',
    borderColor: 'border-orange-500/30',
    skills: [
      'Exception Handling',
      'Selector Optimization',
      'Anchor Base',
      'Logging & Debugging',
      'Screen Scraping',
      'Data Scraping',
      'Excel Automation',
      'Email Automation',
    ],
  },
  {
    title: 'Integration',
    icon: '🔗',
    color: 'from-amber-500/20 to-amber-500/5',
    borderColor: 'border-amber-500/30',
    skills: [
      'REST API',
      'JSON / XML',
      'HTTP Activities',
      'AgilePoint NX',
      'SQL',
      'SAP Automation',
      'ITSM Integration',
    ],
  },
  {
    title: 'Dev & Tools',
    icon: '🛠',
    color: 'from-red-500/20 to-red-500/5',
    borderColor: 'border-red-500/30',
    skills: [
      'VB.Net',
      'Python',
      'JavaScript',
      'Git',
      'JIRA',
      'Agile / Scrum',
      'VPAT Compliance',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
            Skills &amp; Tech Stack
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-xl">
            Full-stack RPA capability — from bot design to Orchestrator deployment, REST API integration to enterprise exception handling.
          </p>
        </div>

        {/* Bento grid — 2×2 */}
        {/* STEP 1: Array has 4 cards: [RPA/UiPath, Automation, Integration, Dev & Tools] */}
        {/* STEP 2: Row 1: [col-1: RPA/UiPath cs-1] [col-2: Automation cs-1] | Row 2: [col-1: Integration cs-1] [col-2: Dev & Tools cs-1] */}
        {/* STEP 3: Placed 4/4 cards ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES?.map((cat, i) => (
            /* STEP 4: Card index comment */
            (<div
              key={cat?.title}
              className={`reveal p-6 lg:p-8 rounded-xl border ${cat?.borderColor} bg-gradient-to-br ${cat?.color} backdrop-blur-sm hover:border-primary/50 hover:glow-orange-sm transition-all duration-300 group`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat?.icon}</span>
                <h3 className="text-lg font-bold text-white tracking-tight">{cat?.title}</h3>
              </div>
              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {cat?.skills?.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>)
          ))}
        </div>
      </div>
    </section>
  );
}