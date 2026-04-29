'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const CONTACT_INFO = [
  {
    icon: 'EnvelopeIcon' as const,
    label: 'Email',
    value: 'tychesbd@gmail.com',
    href: 'mailto:tychesbd@gmail.com',
  },
  {
    icon: 'PhoneIcon' as const,
    label: 'Phone',
    value: '+91-7061604121',
    href: 'tel:+917061604121',
  },
  {
    icon: 'CodeBracketIcon' as const,
    label: 'GitHub',
    value: 'github.com/tychesbd',
    href: 'https://github.com/tychesbd',
    external: true,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only: simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
            Contact Me
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-xl">
            Available for RPA consulting, automation development, or full-time roles. Let&apos;s discuss your automation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="reveal">
            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.external ? '_blank' : undefined}
                  rel={info.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1F2937] bg-[#111827] hover:border-primary/40 hover:glow-orange-sm transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={info.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-muted-foreground group-hover:text-primary ml-auto transition-colors" />
                </a>
              ))}
            </div>

            {/* Bio blurb */}
            <div className="p-5 rounded-xl border border-[#1F2937] bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold text-green-400">Open to Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently available for enterprise RPA development roles, UiPath consulting, or automation strategy engagements. Based in India · Remote-friendly.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['UiPath Development', 'RE Framework', 'Orchestrator Setup', 'Bot Consulting'].map((tag) => (
                  <span key={tag} className="skill-chip text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="reveal">
            <div className="p-6 lg:p-8 rounded-xl border border-[#1F2937] bg-[#111827]">
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-4">
                    <Icon name="CheckCircleIcon" size={28} className="text-green-400" />
                  </div>
                  <p className="text-lg font-bold text-white mb-2">Message Sent!</p>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                    className="mt-6 px-4 py-2 rounded-lg border border-[#1F2937] text-sm font-semibold text-muted-foreground hover:text-white hover:border-primary/40 transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-[#1F2937] bg-[#0D0D0D] text-white text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#1F2937] bg-[#0D0D0D] text-white text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your automation project or opportunity..."
                      className="w-full px-4 py-3 rounded-lg border border-[#1F2937] bg-[#0D0D0D] text-white text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-primary text-white font-bold text-sm hover:bg-accent transition-all duration-200 hover:shadow-[0_0_25px_rgba(250,70,22,0.4)] flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Icon name="PaperAirplaneIcon" size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}