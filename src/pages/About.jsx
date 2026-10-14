import React, { useEffect, useRef } from 'react';
import './About.css';

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return ref;
}

const SKILLS = [
  {
    category: 'Frontend',
    icon: '🖥️',
    items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket', 'JWT Auth'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'Mongoose', 'Supabase'],
  },
  {
    category: 'IoT & Embedded',
    icon: '🔌',
    items: ['ESP32', 'Arduino', 'C++', 'Python', 'Flask', 'Ultrasonic / TDS Sensors'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm / pnpm'],
  },
];

const TIMELINE = [
  {
    year: '2024 – Present',
    title: 'Full-Stack Developer (Projects)',
    desc: 'Building production-quality MERN stack applications: e-commerce platforms, LMS systems, and IoT dashboards.',
  },
  {
    year: '2024',
    title: 'IoT Development',
    desc: 'Designed and built a cloud-connected Smart Water Tank System using ESP32 microcontrollers with real-time sensor data streaming.',
  },
  {
    year: '2024',
    title: 'Mobile Development',
    desc: 'Developed LearnMate, a full-featured LMS with a React Native mobile app and WebSocket-powered real-time notifications.',
  },
  {
    year: '2023',
    title: 'Started Open-Source Journey',
    desc: 'First Python desktop app (Todo List) published on GitHub. Began exploring full-stack web and cross-platform development.',
  },
];

function About() {
  const introRef    = useReveal(0);
  const skillsRef   = useReveal(80);
  const timelineRef = useReveal(160);

  return (
    <main className="about-page">

      {/* ── Intro ── */}
      <section className="about-intro reveal-up" ref={introRef}>
        <div className="about-intro-text">
          <p className="section-label">About Me</p>
          <h1 className="section-title">Dilshan Diluminda</h1>
          <p className="about-subtitle">Full-Stack Developer · Gampaha, Sri Lanka</p>
          <p className="about-bio">
            I'm a passionate Full-Stack Developer specialising in the MERN stack —
            React, Node.js, Express, and MongoDB. I've shipped e-commerce platforms,
            Learning Management Systems, IoT cloud dashboards, and Chrome extensions,
            each built end-to-end from database schema to deployed UI.
          </p>
          <p className="about-bio">
            Beyond the browser, I work with ESP32 microcontrollers and embedded C++
            to build IoT systems that bridge hardware and software. I enjoy the challenge
            of every layer of the stack — from sensor firmware to REST API to responsive
            React UI.
          </p>

          <div className="about-contact-chips">
            <a href="mailto:duludulu71@gmail.com" className="about-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="about-chip-icon" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              duludulu71@gmail.com
            </a>
            <a href="https://github.com/dilshan-d" target="_blank" rel="noopener noreferrer" className="about-chip">
              <svg viewBox="0 0 24 24" fill="currentColor" className="about-chip-icon" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              github.com/dilshan-d
            </a>
            <a href="https://www.linkedin.com/in/dilshan-diluminda-392137408" target="_blank" rel="noopener noreferrer" className="about-chip">
              <svg viewBox="0 0 24 24" fill="currentColor" className="about-chip-icon" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <span className="about-chip location-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="about-chip-icon" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Gampaha, Sri Lanka
            </span>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="about-skills-section reveal-up" ref={skillsRef}>
        <p className="section-label">Skill Set</p>
        <h2 className="section-title">Technologies I Work With</h2>
        <div className="about-skills-grid">
          {SKILLS.map((cat) => (
            <div className="about-skill-card" key={cat.category}>
              <div className="about-skill-card-header">
                <span className="about-skill-icon">{cat.icon}</span>
                <h3 className="about-skill-category">{cat.category}</h3>
              </div>
              <div className="about-skill-tags">
                {cat.items.map(item => (
                  <span className="about-skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="about-timeline-section reveal-up" ref={timelineRef}>
        <p className="section-label">Journey</p>
        <h2 className="section-title">Experience Timeline</h2>
        <div className="about-timeline">
          {TIMELINE.map((item, i) => (
            <div className="about-timeline-item" key={i}>
              <div className="about-timeline-dot" />
              <div className="about-timeline-content">
                <p className="about-timeline-year">{item.year}</p>
                <h3 className="about-timeline-title">{item.title}</h3>
                <p className="about-timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default About;
