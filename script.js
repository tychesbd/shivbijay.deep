/* ================================================================
   SHIV BIJAY DEEP — PORTFOLIO SCRIPT
   Features: Navbar, Typing, Scroll Reveal, Theme, Active Nav,
             Skill Bar Animation, Contact Form, Scroll-to-Top
================================================================ */

'use strict';

/* ---- 1. TYPED TEXT EFFECT ---- */
(function initTyped() {
  const el = document.getElementById('typedText');
  if (!el) return;

  const roles = [
    'Software Engineer',
    'Data Analyst',
    'Data Scientist',
    'ReactJS Developer',
    'Python Developer',
  ];

  let roleIdx = 0, charIdx = 0, isDeleting = false;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      el.textContent = current.slice(0, --charIdx);
    } else {
      el.textContent = current.slice(0, ++charIdx);
    }

    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && charIdx === current.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
})();


/* ---- 2. NAVBAR SCROLL EFFECT ---- */
(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  function handleScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
})();


/* ---- 3. MOBILE HAMBURGER MENU ---- */
(function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on nav link click
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
    }
  });
})();


/* ---- 4. ACTIVE NAV LINK ON SCROLL ---- */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  if (!sections.length || !navLinks.length) return;

  const IO = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const isActive = link.dataset.section === entry.target.id;
            link.classList.toggle('active', isActive);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(s => IO.observe(s));
})();


/* ---- 5. SCROLL REVEAL ANIMATIONS ---- */
(function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const IO = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          IO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(el => IO.observe(el));
})();


/* ---- 6. SKILL BAR ANIMATIONS ---- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const IO = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          IO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => IO.observe(bar));
})();


/* ---- 7. THEME TOGGLE (DARK / LIGHT) ---- */
(function initTheme() {
  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;
  if (!btn) return;

  // Restore saved theme
  const saved = localStorage.getItem('sbd-theme');
  if (saved) html.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('sbd-theme', next);
  });
})();


/* ---- 8. SMOOTH SCROLL FOR ALL ANCHORS ---- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();


/* ---- 9. SCROLL TO TOP BUTTON ---- */
(function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ---- 10. CONTACT FORM ---- */
(function initContactForm() {
  const sendBtn = document.getElementById('sendBtn');
  const successEl = document.getElementById('formSuccess');
  if (!sendBtn) return;

  const fields = {
    name: document.getElementById('fname'),
    email: document.getElementById('femail'),
    subject: document.getElementById('fsubject'),
    message: document.getElementById('fmessage'),
  };

  function validate() {
    let valid = true;

    Object.values(fields).forEach(f => {
      if (!f) return;
      f.style.borderColor = '';
    });

    if (!fields.name?.value.trim()) {
      if (fields.name) fields.name.style.borderColor = '#ef4444';
      valid = false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(fields.email?.value || '')) {
      if (fields.email) fields.email.style.borderColor = '#ef4444';
      valid = false;
    }

    if (!fields.message?.value.trim()) {
      if (fields.message) fields.message.style.borderColor = '#ef4444';
      valid = false;
    }

    return valid;
  }

  sendBtn.addEventListener('click', () => {
    if (!validate()) return;

    // Build mailto link
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const subject = fields.subject.value.trim() || 'Portfolio Contact';
    const message = fields.message.value.trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:tychesbd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    // Show success message
    if (successEl) {
      successEl.classList.add('visible');
      setTimeout(() => successEl.classList.remove('visible'), 5000);
    }

    // Clear form
    Object.values(fields).forEach(f => { if (f) f.value = ''; });
  });
})();


/* ---- 11. RESUME BUTTON (downloads or links) ---- */
(function initResume() {
  const btn = document.getElementById('resumeBtn');
  if (!btn) return;

  // Point to the portfolio/resume page (update path when resume PDF is ready)
  btn.href = 'https://tychesbd.github.io/shivbijay.deep/';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.removeAttribute('download');
})();


/* ---- 12. TIMELINE ANIMATE ON SCROLL ---- */
(function initTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const IO = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${i * 0.15}s`;
          entry.target.classList.add('visible');
          IO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach(item => {
    item.classList.add('reveal-left');
    IO.observe(item);
  });
})();


/* ---- 13. STAT CARD NUMBER COUNT-UP ANIMATION ---- */
(function initCountUp() {
  const cards = document.querySelectorAll('.stat-num');
  if (!cards.length) return;

  const IO = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const text = el.textContent;
        const num = parseFloat(text);
        if (isNaN(num)) return;

        const suffix = text.replace(/[\d.]/g, '');
        const duration = 1500;
        const steps = 40;
        const step = num / steps;
        let current = 0;
        let count = 0;

        const interval = setInterval(() => {
          current += step;
          count++;
          el.textContent = (count >= steps ? num : Math.floor(current)) + suffix;
          if (count >= steps) clearInterval(interval);
        }, duration / steps);

        IO.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  cards.forEach(el => IO.observe(el));
})();


/* ---- 14. NAVBAR LOGO GLITCH EFFECT (subtle) ---- */
(function initLogoHover() {
  const logo = document.querySelector('.nav-logo');
  if (!logo) return;

  logo.addEventListener('mouseenter', () => {
    logo.style.letterSpacing = '-0.01em';
    setTimeout(() => { logo.style.letterSpacing = ''; }, 200);
  });
})();
