'use client';

import React, { useEffect, useState, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const TYPEWRITER_STRINGS = [
'RPA Developer',
'UiPath Specialist',
'Automation Engineer',
'RE Framework Expert',
'Agentic Automation Developer'];


// Pre-computed neon line data (avoids Math.random in render)
const H_LINES = [
{ y: '22%', duration: '8s', delay: '0s', width: '35%' },
{ y: '48%', duration: '11s', delay: '2.5s', width: '28%' },
{ y: '73%', duration: '9.5s', delay: '5s', width: '40%' }];


const V_LINES = [
{ x: '20%', duration: '10s', delay: '1s', height: '30%' },
{ x: '50%', duration: '13s', delay: '3.5s', height: '25%' },
{ x: '78%', duration: '8.5s', delay: '6s', height: '35%' }];


const STAT_CARDS = [
{ label: 'Daily Transactions', value: '500+', icon: 'BoltIcon' as const },
{ label: 'Man-Hours Saved / Year', value: '1,200+', icon: 'ClockIcon' as const },
{ label: 'Bot Success Rate', value: '99.8%', icon: 'CheckCircleIcon' as const }];


export default function HeroSection() {
  const [typeText, setTypeText] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPEWRITER_STRINGS[typeIndex];
    const speed = deleting ? 50 : 90;

    intervalRef.current = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypeText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setTypeText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setTypeIndex((i) => (i + 1) % TYPEWRITER_STRINGS.length);
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [typeText, deleting, typeIndex, charIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden pt-16">

      {/* Animated SVG neon background lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">

          <defs>
            <linearGradient id="hGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FA4616" stopOpacity="0" />
              <stop offset="30%" stopColor="#FA4616" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#FF6B2B" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FA4616" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="vGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FA4616" stopOpacity="0" />
              <stop offset="30%" stopColor="#FA4616" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#FF6B2B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FA4616" stopOpacity="0" />
            </linearGradient>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Horizontal neon sweeps */}
          {H_LINES.map((line, i) =>
          <rect
            key={`h-${i}`}
            x="-40%"
            y={line.y}
            width={line.width}
            height="1.5"
            fill="url(#hGrad)"
            filter="url(#neonGlow)"
            style={{
              animation: `neon-sweep-h ${line.duration} linear ${line.delay} infinite`
            }} />

          )}

          {/* Vertical neon sweeps */}
          {V_LINES.map((line, i) =>
          <rect
            key={`v-${i}`}
            x={line.x}
            y="-40%"
            width="1.5"
            height={line.height}
            fill="url(#vGrad)"
            filter="url(#neonGlow)"
            style={{
              animation: `neon-sweep-v ${line.duration} linear ${line.delay} infinite`
            }} />

          )}
        </svg>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
            'linear-gradient(rgba(250,70,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,70,22,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />


        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      {/* 4-column asymmetric grid (Template 2 pattern) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-0 border border-[#1F2937] min-h-[calc(100vh-4rem)]">

        {/* Left col — identity */}
        <div className="lg:col-span-1 flex flex-col justify-between p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#1F2937]">
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Available for Hire
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter leading-none mb-3">
              SHIV
              <br />
              BIJAY
              <br />
              <span className="text-gradient-orange">DEEP</span>
            </h1>

            <div className="h-px w-full bg-gradient-to-r from-primary/60 to-transparent my-5" />

            {/* Typewriter */}
            <div className="text-sm font-semibold text-muted-foreground tracking-wide min-h-[1.5rem]">
              <span className="text-white">{typeText}</span>
              <span className="cursor-blink text-primary">|</span>
            </div>
          </div>

          {/* Category icons */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
            { icon: 'CpuChipIcon' as const, label: 'Unattended', sub: 'Bots' },
            { icon: 'UserIcon' as const, label: 'Attended', sub: 'Bots' }].
            map((item) =>
            <div key={item.label} className="group">
                <Icon
                name={item.icon}
                size={32}
                className="text-primary mb-3 group-hover:text-accent transition-colors" />

                <p className="text-sm font-bold text-white leading-tight">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
                <div className="w-4 h-0.5 mt-2 bg-primary/40 group-hover:w-8 transition-all duration-300" />
              </div>
            )}
          </div>

          {/* Quick links */}
          <div className="flex gap-6 mt-8 text-xs font-semibold tracking-wide text-white/70">
            <a
              href="#projects"
              className="hover:text-primary flex items-center gap-1.5 transition-colors">

              Projects
              <Icon name="ChevronRightIcon" size={12} />
            </a>
            <a
              href="https://github.com/tychesbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-1.5 transition-colors">

              GitHub
              <Icon name="ArrowTopRightOnSquareIcon" size={12} />
            </a>
          </div>
        </div>

        {/* Center col (span 2) — main visual + summary */}
        <div className="lg:col-span-2 flex flex-col border-b lg:border-b-0 lg:border-r border-[#1F2937]">
          {/* Image */}
          <div className="relative flex-1 min-h-[280px] lg:min-h-0 overflow-hidden group">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_112ec67ba-1772563031801.png"
              alt="Dark circuit board with glowing orange elements, close-up of electronic automation hardware, deep shadows and warm amber highlights"
              fill
              className="object-cover opacity-40 group-hover:opacity-55 transition-all duration-1000"
              priority />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />

            {/* Floating stat cards */}
            <div className="absolute bottom-0 left-0 p-6 lg:p-8 transform transition-transform duration-500 group-hover:-translate-y-2 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded border border-primary/40 bg-primary/10 text-[10px] font-mono uppercase text-primary tracking-widest">
                  Enterprise RPA
                </span>
              </div>
              <p className="text-xl lg:text-2xl font-bold tracking-tight text-white mb-1">
                Fortune 500 Automation
              </p>
              <p className="text-sm text-white/60 line-clamp-2 max-w-md">RTX · AEP · Hitachi Vantara — 3 years of enterprise-grade bot delivery

              </p>
            </div>
          </div>

          {/* Summary text */}
          <div className="p-6 lg:p-8 bg-[#0D0D0D]/80">
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Software Engineer RPA Developer with{' '}
              <span className="text-white font-semibold">3  years</span> delivering enterprise automation for Fortune 500 clients using{' '}
              <span className="text-primary font-semibold">UiPath Studio</span>,{' '}
              <span className="text-primary font-semibold">Orchestrator</span>, and{' '}
              <span className="text-primary font-semibold">RE Framework, Agentic Automation</span>. Skilled in queue-based bots, Business/Application exception handling, selector optimization, REST API integration, and Agile delivery.
            </p>

            {/* Education */}
            <div className="mt-5 pt-5 border-t border-[#1F2937] flex items-start gap-3">
              <Icon name="AcademicCapIcon" size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">B.Tech — Computer Science & Engineering</p>
                <p className="text-xs text-muted-foreground">Dr. A.P.J Abdul Kalam Technical University, U.P.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right col — stats */}
        <div className="lg:col-span-1 flex flex-col p-6 lg:p-8">
          {/* Year badge */}
          <div className="text-right mb-6">
            <p className="text-[10px] uppercase font-semibold text-white/40 tracking-widest mb-1">
              Experience Since
            </p>
            <span className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-gradient-orange">
              21
            </span>
          </div>

          {/* Stat cards */}
          <div className="flex flex-col gap-4 flex-1">
            {STAT_CARDS.map((stat) =>
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-[#1F2937] bg-[#111827] hover:border-primary/40 hover:glow-orange-sm transition-all duration-300 group">

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon} size={16} className="text-primary" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    {stat.label}
                  </p>
                </div>
                <p className="text-2xl font-extrabold text-white group-hover:text-primary transition-colors">
                  {stat.value}
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-[#1F2937]">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-accent transition-all duration-200 hover:shadow-[0_0_25px_rgba(250,70,22,0.4)]">

              Get in Touch
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>);

}