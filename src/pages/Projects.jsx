import React, { useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import './Projects.css';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Projects() {
  const headerRef = useReveal();
  const gridRef   = useReveal();

  return (
    <main className="projects-page">
      <div className="projects-header reveal-up" ref={headerRef}>
        <p className="section-label">Portfolio</p>
        <h1 className="section-title">Projects</h1>
        <p className="section-description">
          A collection of real-world applications — from MERN stack web platforms and
          React Native mobile apps to embedded IoT systems and Chrome extensions.
          All source code is open on GitHub.
        </p>
      </div>

      <div className="projects-grid reveal-up" ref={gridRef}>
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
