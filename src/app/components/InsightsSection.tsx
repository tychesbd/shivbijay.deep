'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface InsightMetric {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  sub?: string;
  icon: 'BoltIcon' | 'ClockIcon' | 'CheckCircleIcon' | 'ChartBarIcon' | 'ArrowTrendingDownIcon' | 'DocumentTextIcon' | 'WrenchScrewdriverIcon' | 'UserGroupIcon' | 'CpuChipIcon' | 'BuildingOfficeIcon';
  highlight?: boolean;
}

const INSIGHTS: InsightMetric[] = [
  { value: '500+', numericTarget: 500, suffix: '+', label: 'Daily Transactions Automated', icon: 'BoltIcon', highlight: true },
  { value: '~1,200', label: 'Man-Hours Saved Per Year', icon: 'ClockIcon', highlight: true },
  { value: '99.8%', label: 'Bot Success Rate', icon: 'CheckCircleIcon', highlight: true },
  { value: '65%', numericTarget: 65, suffix: '%', label: 'Processing Time Reduction', sub: 'RTX Procurement', icon: 'ArrowTrendingDownIcon' },
  { value: '87%', numericTarget: 87, suffix: '%', label: 'Turnaround Reduction', sub: '3 days → 4 hours', icon: 'ChartBarIcon' },
  { value: '50%', numericTarget: 50, suffix: '%', label: 'Incident Resolution Cut', sub: 'Hitachi Vantara', icon: 'WrenchScrewdriverIcon' },
  { value: '70%', numericTarget: 70, suffix: '%', label: 'Client Incidents Reduced', sub: 'Hitachi Vantara', icon: 'ArrowTrendingDownIcon' },
  { value: '80%', numericTarget: 80, suffix: '%', label: 'Manual Triage Cut', sub: 'ITSM Bot', icon: 'ChartBarIcon' },
  { value: '1,000+', label: 'Compliance Docs / Cycle', sub: 'AEP Compliance Bot', icon: 'DocumentTextIcon' },
  { value: '40%', numericTarget: 40, suffix: '%', label: 'Cross-Team Dev Effort Reduced', icon: 'ArrowTrendingDownIcon' },
  { value: '15+', numericTarget: 15, suffix: '+', label: 'Production Bugs Resolved', sub: 'Critical integrations', icon: 'WrenchScrewdriverIcon' },
  { value: '3+', label: 'UiPath Tools Mastered', sub: 'Studio · Orchestrator · RE Framework', icon: 'CpuChipIcon' },
  { value: '2', label: 'Bot Types Deployed', sub: 'Attended & Unattended', icon: 'BoltIcon' },
  { value: '3', label: 'Fortune 500 Clients', sub: 'RTX · AEP · Hitachi Vantara', icon: 'BuildingOfficeIcon', highlight: true },
];

function AnimatedCounter({ target, suffix, duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function InsightsSection() {
  return (
    <section id="insights" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
            UiPath Analytics
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
            UiPath Key Insights
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-xl">
            Quantified automation impact across 3+ years of enterprise RPA delivery — every metric earned in production.
          </p>
        </div>

        {/* UiPath Orchestrator-style dashboard header */}
        <div className="reveal mb-6 p-4 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="ChartBarIcon" size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">UiPath Insights Dashboard</p>
              <p className="text-[10px] text-muted-foreground">Real-world production metrics · 2021–2023</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            All Bots Active
          </div>
        </div>

        {/* Insights metric grid */}
        {/* STEP 1: Array has 14 metrics */}
        {/* STEP 2: 4-col responsive grid, all 14 cells filled */}
        {/* STEP 3: Placed 14/14 cards ✓ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INSIGHTS.map((insight, i) => (
            /* STEP 4: Card [i]: {insight.label} */
            <div
              key={insight.label}
              className={`reveal p-5 rounded-xl border transition-all duration-300 group cursor-default ${
                insight.highlight
                  ? 'border-primary/40 bg-gradient-to-br from-primary/15 to-primary/5 hover:border-primary/60 hover:glow-orange-sm' :'border-[#1F2937] bg-[#111827] hover:border-primary/30'
              }`}
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${insight.highlight ? 'bg-primary/20' : 'bg-[#0D0D0D]'}`}>
                  <Icon
                    name={insight.icon}
                    size={16}
                    className={insight.highlight ? 'text-primary' : 'text-muted-foreground group-hover:text-primary transition-colors'}
                  />
                </div>
                {insight.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </div>

              <div className={`text-2xl sm:text-3xl font-extrabold mb-1 ${insight.highlight ? 'text-primary' : 'text-white group-hover:text-primary transition-colors'}`}>
                {insight.numericTarget ? (
                  <AnimatedCounter target={insight.numericTarget} suffix={insight.suffix} />
                ) : (
                  insight.value
                )}
              </div>

              <p className="text-[11px] font-semibold text-white leading-tight mb-1">
                {insight.label}
              </p>
              {insight.sub && (
                <p className="text-[10px] text-muted-foreground leading-tight">
                  {insight.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}