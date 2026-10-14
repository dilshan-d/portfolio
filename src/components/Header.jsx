import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/about',    label: 'About'    },
  { to: '/contact',  label: 'Contact'  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  /* Close on outside click */
  useEffect(() => {
    function handleOutside(e) {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [menuOpen]);

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') setMenuOpen(false); }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  /* Prevent body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="header" ref={navRef}>
      <NavLink to="/" className="header-brand" aria-label="Home — Dilshan Diluminda">
        <div className="header-logo-mark">D</div>
        <div className="header-title">Dilshan Diluminda</div>
      </NavLink>

      <nav
        id="header-nav"
        className={`header-links-container ${menuOpen ? 'active' : ''}`}
        aria-label="Site navigation"
      >
        <ul className="header-links" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-controls">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="header-nav"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="header-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;
