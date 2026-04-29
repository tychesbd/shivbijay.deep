'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t border-[#1F2937] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="text-sm font-bold text-white">
            SHIV DEEP <span className="text-primary">RPA</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>

        {/* Social + Copyright */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tychesbd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#1F2937] flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/50 transition-all duration-200"
            aria-label="GitHub"
          >
            <Icon name="CodeBracketIcon" size={16} />
          </a>
          <span className="text-xs text-muted-foreground">
            © {year} Shiv Bijay Deep
          </span>
        </div>
      </div>
    </footer>
  );
}