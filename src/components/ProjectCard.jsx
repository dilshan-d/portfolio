import React, { useEffect, useState } from 'react';
import './ProjectCard.css';

const TYPE_BADGE = {
  fullstack: { label: 'Full Stack', cls: 'badge-fullstack' },
  mobile:    { label: 'Mobile',     cls: 'badge-mobile'    },
  iot:       { label: 'IoT',        cls: 'badge-iot'       },
  extension: { label: 'Extension',  cls: 'badge-extension' },
  desktop:   { label: 'Desktop',    cls: 'badge-desktop'   },
};

function formatNum(n) {
  if (n == null) return '—';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

const LANG_COLOR = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5',
  HTML: '#e34c26', CSS: '#563d7c', 'C++': '#f34b7d',
};

function ProjectCard({ project }) {
  const [repoData,  setRepoData]  = useState(null);
  const [latestTag, setLatestTag] = useState(null);
  const [loading,   setLoading]   = useState(true);

  const { label, cls } = TYPE_BADGE[project.type] || { label: project.type, cls: 'badge-fullstack' };

  useEffect(() => {
    if (!project.api_url) { setLoading(false); return; }
    fetch(project.api_url)
      .then(r => r.ok ? r.json() : null)
      .then(d => { setRepoData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [project.api_url]);

  useEffect(() => {
    if (!project.api_url) return;
    fetch(`${project.api_url}/releases/latest`)
      .then(r => r.ok ? r.json() : null)
      .then(d => d && setLatestTag(d.tag_name))
      .catch(() => {});
  }, [project.api_url]);

  return (
    <article className="project-card">

      {/* ── Header ── */}
      <div className="pc-header">
        <div className="pc-title-row">
          <h3 className="pc-title">{project.title}</h3>
          <span className={`badge ${cls}`}>{label}</span>
        </div>
        {project.status === 'wip' && (
          <span className="pc-wip">In Progress</span>
        )}
      </div>

      {/* ── Description ── */}
      <p className="pc-description">{project.description}</p>

      {/* ── Features ── */}
      <div className="pc-features">
        <p className="pc-features-label">Key Features</p>
        <ul className="pc-features-list">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* ── GitHub stats ── */}
      <div className="pc-stats">
        {loading ? (
          <>
            <span className="pc-stat-skeleton" aria-hidden="true" />
            <span className="pc-stat-skeleton pc-stat-skeleton--sm" aria-hidden="true" />
          </>
        ) : repoData ? (
          <>
            <span className="pc-stat">
              <span className="pc-stat-icon">⭐</span>
              <span className="pc-stat-val">{formatNum(repoData.stargazers_count)}</span>
              &nbsp;Stars
            </span>
            <span className="pc-stat">
              <span className="pc-stat-icon">🍴</span>
              <span className="pc-stat-val">{formatNum(repoData.forks_count)}</span>
              &nbsp;Forks
            </span>
            {repoData.language && (
              <span className="pc-stat">
                <span
                  className="pc-lang-dot"
                  style={{ background: LANG_COLOR[repoData.language] ?? '#06b6d4' }}
                />
                {repoData.language}
              </span>
            )}
            {latestTag && <span className="pc-version">{latestTag}</span>}
          </>
        ) : null}
      </div>

      {/* ── Tech tags ── */}
      <div className="pc-tech-row">
        {project.tech.map((t, i) => (
          <span className="pc-tech-tag" key={i}>{t}</span>
        ))}
      </div>

      {/* ── Actions ── */}
      <div className="pc-actions">
        <a
          href={project.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-action-btn github"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="pc-action-icon" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Source Code
        </a>

        {project['publish-url'] && (
          <a
            href={project['publish-url']}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-action-btn publish"
          >
            🚀 Live Demo
          </a>
        )}
      </div>

    </article>
  );
}

export default ProjectCard;
