import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

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

const CONTACT_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'duludulu71@gmail.com',
    href: 'mailto:duludulu71@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/dilshan-d',
    href: 'https://github.com/dilshan-d',
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'dilshan-diluminda-392137408',
    href: 'https://www.linkedin.com/in/dilshan-diluminda-392137408',
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+94 71 994 7085',
    href: 'tel:+94719947085',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Gampaha, Sri Lanka',
    href: null,
  },
];

function Contact() {
  const headerRef = useReveal();
  const cardsRef  = useReveal();
  const formRef   = useReveal();

  /* Simple form state — no backend, just mailto fallback */
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:duludulu71@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="contact-page">

      <div className="contact-header reveal-up" ref={headerRef}>
        <p className="section-label">Get in Touch</p>
        <h1 className="section-title">Contact</h1>
        <p className="section-description">
          Whether you want to collaborate on a project, have a question,
          or just want to say hi — feel free to reach out through any
          of these channels.
        </p>
      </div>

      <div className="contact-body">

        {/* ── Contact cards ── */}
        <div className="contact-cards reveal-up" ref={cardsRef}>
          {CONTACT_CARDS.map((card, i) => (
            card.href ? (
              <a
                key={i}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="contact-card"
              >
                <div className="contact-card-icon">{card.icon}</div>
                <div>
                  <p className="contact-card-label">{card.label}</p>
                  <p className="contact-card-value">{card.value}</p>
                </div>
              </a>
            ) : (
              <div key={i} className="contact-card contact-card--static">
                <div className="contact-card-icon">{card.icon}</div>
                <div>
                  <p className="contact-card-label">{card.label}</p>
                  <p className="contact-card-value">{card.value}</p>
                </div>
              </div>
            )
          ))}
        </div>

        {/* ── Contact form ── */}
        <div className="contact-form-wrap reveal-up" ref={formRef}>
          {sent ? (
            <div className="contact-sent">
              <span className="contact-sent-icon">✉️</span>
              <h3>Opening your email client…</h3>
              <p>If it didn't open, email me directly at duludulu71@gmail.com</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="What's on your mind?"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary contact-submit" id="contact-send-btn">
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}

export default Contact;
