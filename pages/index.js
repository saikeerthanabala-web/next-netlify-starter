import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sai Keerthana Bala | SDET</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NAV */}
      <nav className="nav">
        <h2>Sai Keerthana Bala</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)}>🌗</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="hero animate">
        <img
          src="/profile.jpg"
          alt="Sai Keerthana Bala"
          onClick={() => setShowImage(true)}
        />
        <div>
          <h1>Sai Keerthana Bala</h1>
          <h3>Senior Automation Test Engineer | SDET</h3>
          <p>
            SDET with 5+ years of experience delivering high-quality automation,
            backend, and API testing solutions across Healthcare and Financial
            domains. Strong expertise in Selenium, Playwright, Cypress, CI/CD,
            and AI-assisted testing.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="animate">
        <h2 className="section-title">Skills</h2>
        <div className="skill-chips">
          {[
            "Selenium",
            "Playwright",
            "Cypress",
            "Java",
            "Python",
            "REST API Testing",
            "CI/CD",
            "Jenkins",
            "GitHub",
            "Agile",
            "JIRA",
            "SQL"
          ].map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="animate">
        <h2 className="section-title">Professional Experience</h2>
        <div className="cards">
          <div className="card">
            <h3>🏥 DHCS – California State Client</h3>
            <p>
              Led system-level and end-to-end testing for large-scale Medicaid
              systems. Automated regression suites, validated backend data using
              SQL, and ensured compliance across provider enrollment and claims
              processing workflows.
            </p>
          </div>

          <div className="card">
            <h3>💳 Creditsafe – Financial Domain</h3>
            <p>
              Designed scalable automation frameworks for credit risk platforms.
              Implemented Selenium, Cypress, API testing, and CI/CD pipelines to
              ensure release stability and high data accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="animate">
        <h2 className="section-title">Certifications</h2>
        <div className="certs">
          <a href="https://www.linkedin.com/learning/certificates/3616a12236061050059b49340236f011119a47345425794615a06bfd38fbf5be" target="_blank">🐙 GitHub</a>
          <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/3649e0f53166c62e201654ebda46850a19bf688e" target="_blank">🤖 AI Testing</a>
          <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/4b9b3f1ecb92c140e55dafeeac0ddb25fdd49790" target="_blank">🐍 Python</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="animate">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          Open to Automation / SDET roles — let’s connect!
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-links">
          <a href="/Sai_Keerthana_Bala_Resume.pdf" download>📄 Resume</a>
          <a href="https://www.linkedin.com/in/saikeerthanabala" target="_blank">🔗 LinkedIn</a>
        </div>
        <p>@copyright saikeerthana bala all rights are reserved.</p>
      </footer>

      {/* IMAGE MODAL */}
      {showImage && (
        <div className="modal" onClick={() => setShowImage(false)}>
          <img src="/profile.jpg" alt="Profile Enlarged" />
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        * {
          font-family: "Poppins", sans-serif;
        }
        body {
          margin: 0;
        }
        .dark {
          background: #0f172a;
          color: #fff;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          background: inherit;
        }
        .nav a {
          margin-right: 1rem;
          font-weight: 500;
        }
        .hero {
          display: flex;
          gap: 2rem;
          padding: 4rem 2rem;
          align-items: center;
        }
        .hero img {
          width: 200px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .hero img:hover {
          transform: scale(1.08);
          box-shadow: 0 0 30px rgba(59,130,246,0.7);
        }
        .section-title {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
        }
        .skill-chips span {
          display: inline-block;
          margin: 0.4rem;
          padding: 0.6rem 1rem;
          border-radius: 999px;
          background: #1e293b;
          transition: transform 0.3s;
        }
        .skill-chips span:hover {
          transform: scale(1.1);
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .card {
          padding: 1.8rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          transition: transform 0.3s;
        }
        .card:hover {
          transform: translateY(-8px);
        }
        .certs a {
          font-size: 1.4rem;
          margin-right: 1.5rem;
          display: inline-block;
          transition: transform 0.3s;
        }
        .certs a:hover {
          transform: scale(1.2);
        }
        footer {
          padding: 2rem;
          text-align: center;
        }
        .footer-links a {
          margin: 0 1rem;
          font-size: 1.2rem;
        }
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .modal img {
          width: 300px;
          border-radius: 50%;
        }
        .animate {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease;
        }
        .animate.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
