import { useState } from "react";
import Head from "next/head";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Head>
        <title>Keerthana Bala | SDET</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NAVBAR */}
      <nav className="nav">
        <h3>Keerthana Bala</h3>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img
          src="/profile.jpg"
          alt="profile"
          className="profile"
          onClick={() => setShowImage(true)}
        />
        <h1>Software Development Engineer in Test</h1>
        <p>
          Automation • API • Backend Testing • AI-Assisted QA
        </p>
      </section>

      {/* IMAGE MODAL */}
      {showImage && (
        <div className="modal" onClick={() => setShowImage(false)}>
          <img src="/profile.jpg" className="modal-img" />
        </div>
      )}

      {/* ABOUT */}
      <section id="about" className="section animate">
        <h2>About Me</h2>
        <p>
          I’m an SDET with <b>5+ years of experience</b> delivering scalable,
          high-quality test solutions for web and API-driven systems.
        </p>
        <p>
          I specialize in automation, backend validation, CI/CD pipelines, and
          modern AI-assisted testing approaches.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section animate">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <h4>Automation</h4>
            <p>Selenium, Playwright, Cypress</p>
          </div>
          <div>
            <h4>Programming</h4>
            <p>Java, Python, JavaScript</p>
          </div>
          <div>
            <h4>API & Backend</h4>
            <p>REST API, SOAP, SQL</p>
          </div>
          <div>
            <h4>CI/CD & Tools</h4>
            <p>GitHub, Jenkins, JIRA</p>
          </div>
          <div>
            <h4>Testing Types</h4>
            <p>Functional, Regression, E2E</p>
          </div>
          <div>
            <h4>AI-Driven QA</h4>
            <p>Test generation, defect analysis</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section animate">
        <h2>Projects</h2>
        <div className="card">
          <h4>Automation Framework</h4>
          <p>Built scalable Selenium & Playwright framework integrated with CI.</p>
        </div>
        <div className="card">
          <h4>API Validation Suite</h4>
          <p>Designed REST API tests with Python and SQL validation.</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section animate">
        <h2>Certifications</h2>
        <ul className="cert-list">
          <li>✔ Python Programming – DataCamp</li>
          <li>✔ AI Testing & Prompt Engineering</li>
          <li>✔ Java & Problem Solving – HackerRank</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section animate">
        <h2>Contact</h2>
        <p>Email: keerthanabala@example.com</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="https://linkedin.com/in/yourprofile" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourprofile" target="_blank">
          <FaGithub />
        </a>
        <a href="/resume.pdf" target="_blank">
          <FaFilePdf />
        </a>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        section {
          scroll-margin-top: 90px;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          padding: 1.2rem 2rem;
          background: #0f172a;
        }

        .nav h3 {
          color: #38bdf8;
        }

        .nav-links a {
          margin-left: 1.5rem;
          color: #e5e7eb;
          text-decoration: none;
          font-size: 0.95rem;
        }
