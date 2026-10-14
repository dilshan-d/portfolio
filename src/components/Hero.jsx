import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { useTheme } from '../context/ThemeContext';

/* ── Scroll-reveal hook ── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return ref;
}

/* ── Decorative code lines — MERN / IoT flavour ── */
const CODE_LINES = [
  { indent: 0, token: 'keyword', text: 'async', suffix: ' function fetchProducts(query) {' },
  { indent: 1, token: 'keyword', text: 'const', suffix: ' filter = buildFilter(query);' },
  { indent: 1, token: 'keyword', text: 'const', suffix: ' products = await Product' },
  { indent: 2, token: 'fn',      text: '.find', suffix: '(filter)' },
  { indent: 2, token: 'fn',      text: '.sort', suffix: '({ createdAt: -1 })' },
  { indent: 2, token: 'fn',      text: '.limit', suffix: '(20)' },
  { indent: 2, token: 'fn',      text: '.lean', suffix: '();' },
  { indent: 1, token: 'keyword', text: 'return', suffix: ' res.status(200).json({' },
  { indent: 2, token: 'var',     text: 'success', suffix: ': true,' },
  { indent: 2, token: 'var',     text: 'count',   suffix: ': products.length,' },
  { indent: 2, token: 'var',     text: 'data',    suffix: ': products,' },
  { indent: 1, token: 'keyword', text: '});',     suffix: '' },
  { indent: 0, token: 'keyword', text: '}',       suffix: '' },
  { indent: 0, token: 'comment', text: '// Tech-Store · routes/products.js', suffix: '' },
];

const STATS = [
  { value: '5+', label: 'Projects Built' },
  { value: 'MERN', label: 'Core Stack' },
  { value: 'IoT', label: 'Hardware & Embedded' },
];

const CHIPS = ['Full Stack', 'MERN', 'React Native', 'IoT / ESP32', 'Open Source'];

const Hero = () => {
  const leftRef  = useReveal(0);
  const rightRef = useReveal(120);
  const statsRef = useReveal(240);

  return (
    <section className="hero-section" aria-label="Introduction">

      {/* ── Main content row ── */}
      <div className="hero-content">

        {/* ── LEFT: Decorative code card ── */}
        <div className="hero-terminal-wrap reveal-left" ref={leftRef} aria-hidden="true">
          <div className="hero-terminal">
            <div className="hero-terminal-bar">
              <span className="hero-terminal-dot" style={{ background: '#ff5f57' }} />
              <span className="hero-terminal-dot" style={{ background: '#febc2e' }} />
              <span className="hero-terminal-dot" style={{ background: '#28c840' }} />
              <a
                href="https://github.com/dilshan-d/Tech-Store"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-terminal-filename hero-terminal-filename--link"
              >Tech-Store / routes / products.js</a>
            </div>
            <pre className="hero-terminal-code">
              {CODE_LINES.map((line, i) => (
                <div key={i} className={`hero-code-line token-${line.token}`}>
                  {'\u00a0'.repeat(line.indent * 2)}
                  <span className={`hero-token hero-token--${line.token}`}>{line.text}</span>
                  <span className="hero-token--suffix">{line.suffix}</span>
                </div>
              ))}
            </pre>
          </div>

          {/* Profile photo overlaid at bottom-right */}
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-ring" />
            <img
              src="/profile.jpeg"
              alt="Dilshan Diluminda"
              className="hero-avatar"
              loading="eager"
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* ── RIGHT: Headline, CTAs ── */}
        <div className="hero-text reveal-right" ref={rightRef}>

          <p className="hero-pre-label">
            <span className="hero-pre-label-dot" aria-hidden="true" />
            Available for opportunities
          </p>

          <h1 className="hero-title">
            I build full-stack<br />
            <span className="hero-title-accent">web & IoT solutions.</span>
          </h1>

          <p className="hero-subtitle">
            Full-Stack Developer specialising in the MERN stack, React Native
            mobile apps, and embedded IoT systems — based in Gampaha, Sri Lanka.
            I take ideas from database schema to deployed product and hardware
            prototype to cloud-connected device.
          </p>

          <div className="hero-chips" aria-label="Specialisations">
            {CHIPS.map(t => (
              <span className="hero-chip" key={t}>{t}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="/projects" className="btn btn-primary" id="hero-cta-projects">
              View Projects →
            </a>
            <a href="/contact" className="btn btn-secondary" id="hero-cta-contact">
              Get in Touch
            </a>
          </div>

          {/* Social micro-links */}
          <div className="hero-social-row">
            <a
              href="https://github.com/dilshan-d"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub profile"
            >
              <svg className="hero-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            <span className="hero-social-sep" aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/dilshan-diluminda-392137408"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn profile"
            >
              <svg className="hero-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <span className="hero-social-sep" aria-hidden="true">·</span>
            <a
              href="mailto:duludulu71@gmail.com"
              className="hero-social-link"
              aria-label="Email Dilshan"
            >
              <svg className="hero-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
          </div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="hero-stats reveal-up" ref={statsRef} aria-label="Highlights">
        {STATS.map((s, i) => (
          <div className="hero-stat" key={i}>
            <span className="hero-stat-value">{s.value}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Hero;
