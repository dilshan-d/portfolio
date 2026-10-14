import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      {/* Brand */}
      <div className="footer-brand">
        <div className="footer-logo-mark">D</div>
        <div>
          <p className="footer-brand-title">Dilshan Diluminda</p>
          <p className="footer-brand-desc">
            Full-Stack Developer & IoT enthusiast based in Sri Lanka.
            Building MERN apps, mobile experiences, and embedded systems
            that solve real problems.
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="footer-links-col">
        <p className="footer-col-title">Quick Links</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Social */}
      <div className="footer-links-col">
        <p className="footer-col-title">Find me online</p>
        <ul>
          <li>
            <a href="https://github.com/dilshan-d" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dilshan-diluminda-392137408" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:duludulu71@gmail.com">
              duludulu71@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      © {new Date().getFullYear()} <span>Dilshan Diluminda</span> · Built with React & ❤️
    </div>
  </footer>
);

export default Footer;
