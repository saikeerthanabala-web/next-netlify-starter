import { useState } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
   const [darkMode, setDarkMode] = useState(false)
   const [showImage, setShowImage] = useState(false)

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <Head>
        <title>Sai Keerthana Bala | SDET</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>

      <main>
        {/* ================= HEADER ================= */}
        <div className="top-section">
          <a href="/profile.jpg" target="_blank">
            <img src="/profile.jpg" alt="Sai Keerthana Bala" className="profile-pic" />
          </a>

          <div className="title-area">
            <Header title="Sai Keerthana Bala" />
            <h2 className="role">Automation Test Engineer / SDET</h2>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            {darkMode ? '🌙' : '🌞'}
          </button>
        </div>

        {/* ================= SUMMARY ================= */}
        <section className="summary">
          <p>
            <strong>SDET</strong> with <strong>5+ years of experience</strong>
            delivering scalable automation solutions for web, API, and backend systems.
          </p>

          <p>
            Expertise in <strong>Selenium, Playwright, Cypress, Java, Python</strong> and
            <strong> REST API testing</strong> within Agile environments.
          </p>

          <p className="summary-heading">Core Strengths</p>
          <ul>
            <li>Automation framework design & maintenance</li>
            <li>CI/CD integration & test strategy</li>
            <li>Defect analysis & root cause investigation</li>
            <li>AI-assisted testing & prompt engineering</li>
          </ul>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="skills">
          <h3 className="section-title">Skills</h3>
          <ul className="skills-list">
            <li>Selenium, Playwright, Cypress</li>
            <li>Java, Python, JavaScript</li>
            <li>REST API, Postman, SOAP UI</li>
            <li>CI/CD – Jenkins, GitHub Actions</li>
            <li>Agile / Scrum</li>
            <li>SQL & Test Data Validation</li>
            <li>AI Testing & Prompt Engineering</li>
          </ul>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="projects">
          <h3 className="section-title">Projects</h3>

          <div className="project-card">
            <h4>Kanban Project</h4>
            <p>Task management system implementing Kanban workflow.</p>
            <a href="https://github.com/saikeerthanabala-web/Kanban_Project" target="_blank">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h4>Playwright Automation Framework</h4>
            <p>End-to-end automation framework using Playwright.</p>
            <a href="https://github.com/saikeerthanabala-web/my-playwright-project" target="_blank">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="certifications">
          <h3 className="section-title">Certifications & Awards</h3>

          <div className="cert-grid">
            <div className="cert-card">🏆 1st Place – Internal Hackathon</div>

            <a className="cert-card" href="https://www.linkedin.com/learning/certificates/3616a12236061050059b49340236f011119a47345425794615a06bfd38fbf5be" target="_blank">
              <i className="fab fa-linkedin"></i> GitHub Certification
            </a>

            <a className="cert-card" href="https://www.datacamp.com/completed/statement-of-accomplishment/course/3649e0f53166c62e201654ebda46850a19bf688e" target="_blank">
              🤖 AI Testing & Prompt Engineering
            </a>

            <a className="cert-card" href="https://www.datacamp.com/completed/statement-of-accomplishment/course/4b9b3f1ecb92c140e55dafeeac0ddb25fdd49790" target="_blank">
              🐍 Python Programming
            </a>

            <div className="cert-card">💻 HackerRank – Java, CSS</div>
            <div className="cert-card">🔒 IBM – HIPAA Compliance</div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact">
          <h2 className="section-title">Contact Me</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Required hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
        
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
        
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
        
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
        
            <button type="submit">Send Message</button>
          </form>
        </section>


        {/* ================= ACTIONS ================= */}
        <div className="actions">
          <a href="/SaiKeerthanaResume.pdf" download className="resume-btn">
            Resume
          </a>

          <a href="https://www.linkedin.com/in/sai-keerthana-bala/" target="_blank">
            <i className="fab fa-linkedin linkedin-icon"></i>
          </a>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2026 Sai Keerthana Bala. All rights reserved.
      </footer>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .container {
          font-family: 'Inter', sans-serif;
          background: #fff;
          color: #111;
          transition: 0.3s;
        }

        .container.dark {
          background: #0f172a;
          color: #e5e7eb;
        }

        .top-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .profile-pic {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 3px solid #2563eb;
          cursor: zoom-in;
        }

        .role {
          font-size: 1.2rem;
          color: #64748b;
        }

        .theme-toggle {
          margin-left: auto;
          font-size: 1.6rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .section-title {
          font-family: 'Poppins';
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }

        .skills-list,
        ul {
          margin-left: 1.2rem;
        }

        .projects,
        .skills,
        .summary,
        .certifications,
        .contact {
          max-width: 950px;
          margin: 3rem auto;
        }

        .project-card,
        .cert-card {
          padding: 1rem;
          border-radius: 12px;
          background: #f1f5f9;
          margin-bottom: 1rem;
          text-align: center;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }

        .contact form {
          max-width: 450px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        input, textarea {
          padding: 0.6rem;
          border-radius: 8px;
          border: 1px solid #cbd5f5;
        }

        button {
          padding: 0.6rem;
          border-radius: 8px;
          background: #2563eb;
          color: white;
          border: none;
        }

        .resume-btn {
          padding: 0.7rem 1.4rem;
          background: #2563eb;
          color: white;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
        }

        .linkedin-icon {
          font-size: 2rem;
          color: #0a66c2;
        }

        .footer {
          text-align: center;
          margin: 3rem 0;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  )
}
