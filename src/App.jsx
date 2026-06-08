import './App.css'
import projects from './data/projects'
import profileImage from "./assets/profile-image.png";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa"

function App() {

  return (
    <div className="app">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="profile-section">

          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />

          <h1>Dilshan</h1>

          <h3>Full Stack Software Engineer</h3>

        </div>

        {/* INFO SECTION */}
        <div className="info-section">

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>duludulu71@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>
              <p>0719947085</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>
              <p>Gampaha, Sri Lanka</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaGithub />
            </div>

            <div>
              <h4>GitHub</h4>

              <a
                href="https://github.com/dilshan-d"
                target="_blank"
                rel="noreferrer"
              >
                github.com/dilshan-d
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaLinkedin />
            </div>

            <div>
              <h4>LinkedIn</h4>

              <a
                href="https://www.linkedin.com/in/dilshan-diluminda-392137408"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/dilshan-diluminda-392137408
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        <section className="hero">

          <h1>
            Hi, I'm <span>Dilshan</span>
          </h1>

          <p>
            Passionate Full-Stack Developer specializing in MERN stack
            applications with experience building scalable web and mobile
            applications using React, Node.js, Express, and MongoDB.
          </p>

        </section>

        {/* PROJECTS */}
        <section className="section">

          <h2>Projects</h2>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <div
                className="project-card"
                key={index}
              >

                <h3>
                  {project.icon} {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="feature-list">

                  <h4>Key Features</h4>

                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  )
}

export default App
