import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import SkillsSection from '@/app/components/SkillsSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import InsightsSection from '@/app/components/InsightsSection';
import CertificationsSection from '@/app/components/CertificationsSection';
import ContactSection from '@/app/components/ContactSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground noise-overlay overflow-x-hidden">
      <ScrollRevealInit />
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider mx-8" />
        <SkillsSection />
        <div className="section-divider mx-8" />
        <ExperienceSection />
        <div className="section-divider mx-8" />
        <ProjectsSection />
        <div className="section-divider mx-8" />
        <InsightsSection />
        <div className="section-divider mx-8" />
        <CertificationsSection />
        <div className="section-divider mx-8" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}