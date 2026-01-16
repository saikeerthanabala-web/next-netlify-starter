import { useState } from 'react'
import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <Head>
        <title>Sai Keerthana Bala | SDET</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>

      <main>
        {/* ===== HEADER ===== */}
        <section className="top-section">
          <img src="/profile.jpg" className="profile-pic" />

          <div className="title-area">
            <h1 className="name">Sai Keerthana Bala</h1>
            <h2 className="role">Automation Test Engineer / SDET</h2>
          </div>

          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌙' : '🌞'}
          </button>
        </section>

        {/* ===== SUMMARY ===== */}
        <section className="summary">
          <p>
            <strong>Software Development Engineer in Test (SDET)</strong> with
            <strong> 5+ years of experience</strong> delivering scalable,
            high-quality automation solutions for web, API, and backend systems
            in Agile environments.
          </p>

          <p>
            Strong expertise in <strong>Selenium, Playwright, Cypress, Java,
            Python</strong> and <strong>REST API testing</strong>, CI/CD pipelines,
            and AI-assisted testing strategies.
          </p>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="skills">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>Selenium · Playwright · Cypress</li>
            <li>Java · Python · JavaScript</li>
            <li>REST API · Postman · SOAP UI</li>
            <li>CI/CD · Jenkins · GitHub Actions</li>
            <li>SQL · Test Data Validation</li>
            <li>AI Testing · Prompt Engineering</li>
          </ul>
        </section>

        {/* ===== PROJECTS ===== */}
        <section className="projects">
          <h2 className="section-title">Projects</h2>

          <div className="project-card">
            <h3>Kanban Project</h3>
            <a href="https://github.com/saikeerthanabala-web/Kanban_Project" target="_blank">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Playwright Automation Framework</h3>
            <a href="https://github.com/saikeerthanabala-web/my-playwright-project" target="_blank">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </section>

        {/* ===== CERTIFICATIONS ===== */}
        <section className="certifications">
          <h2 className="section-title">Certifications & Awards</h2>

          <div className="cert-row">
            <div className="cert-card">🏆 Hackathon Winner</div>

            <a className="cert-card" href="https://www.linkedin.com/learning/certificates/3616a12236061050059b49340236f011119a47345425794615a06bfd38fbf5be" target="_blank">
              <i className="fab fa-linkedin"></i> GitHub
            </a>

            <a className="cert-card" href="https://www.datacamp.com/completed/statement-of-accomplishment/course/3649e0f53166c62e201654ebda46850a19bf688e" target="_blank">
              🤖 AI Testing
            </a>

            <a className="cert-card" href="https://www.datacamp.com/completed/statement-of-accomplishment/course/4b9b3f1ecb92c140e55dafeeac0ddb25fdd49790" target="_blank">
              🐍 Python
            </a>

            <div className="cert-card">🔒 IBM HIPAA</div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="contact">
          <h2 className="section-title big">Contact Me</h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input name="name" placeholder="Your Name" />
            <input name="email" type="email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message" />
            <button type="submit">Send Message</button>
          </form>
        </section>

        {/* ===== ACTIONS ===== */}
        <div className="actions">
          <a href="/SaiKeerthanaResume.pdf" className="resume-btn">Resume</a>
          <a href="https://www.linkedin.com/in/sai-keerthana-bala/" target="_blank">
            <i className="fab fa-linkedin linkedin-icon"></i>
          </a>
        </div>
      </main>

      <footer className="footer">
        © 2026 Sai Keerthana Bala. All rights reserved.
      </footer>

      <style jsx>{`
        .container {
          font-family: Calibri, 'Calibri Light', Arial, sans-serif;
          background: #fff;
          color: #111;
        }

        .dark {
          background: #0f172a;
          color: #e5e7eb;
        }

        .top-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin: 3rem auto;
          max-width: 1000px;
        }

        .profile-pic {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 4px solid #2563eb;
        }

        .name {
          font-size: 3rem;
          font-weight: 600;
        }

        .role {
          font-size: 1.4rem;
          color: #64748b;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .big {
          font-size: 2.4rem;
        }

        .summary,
        .skills,
        .projects,
        .certifications,
        .contact {
          max-width: 1000px;
          margin: 3rem auto;
          font-size: 1.15rem;
        }

        .cert-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cert-card {
          padding: 1rem 1.5rem;
          background: #f1f5f9;
          border-radius: 14px;
          font-size: 1.1rem;
          text-align: center;
        }

        .contact form input,
        .contact form textarea {
          font-size: 1.1rem;
          padding: 0.9rem;
          border-radius: 10px;
        }

        .contact button {
          padding: 1rem;
          font-size: 1.2rem;
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 3rem 0;
        }

        .footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  )
}
