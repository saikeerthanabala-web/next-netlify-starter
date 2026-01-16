import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const sections = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sai Keerthana Bala | SDET</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
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
      <section className="hero animate" id="about">
        <img src="/profile.jpg" alt="Sai Keerthana Bala" />
        <div>
          <h1>Sai Keerthana Bala</h1>
          <h3>Automation Test Engineer / SDET</h3>
          <p className="summary">
            Software Development Engineer in Test (SDET) with 5+ years of experience
            delivering high-quality automation and backend testing solutions across
            Agile environments. Expertise in Selenium, Playwright, Cypress, Java,
            Python, REST APIs, CI/CD, and AI-assisted testing.
          </p>

          <div className="buttons">
            <a className="btn" href="/Sai_Keerthana_Bala_Resume.pdf" download>
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/saikeerthanabala"
              target="_blank"
              className="btn outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="animate">
        <h2>Skills</h2>
        <ul className="grid">
          <li>Selenium / Playwright / Cypress</li>
          <li>Java / Python</li>
          <li>REST API & Backend Testing</li>
          <li>CI/CD – Jenkins, GitHub</li>
          <li>Test Framework Design</li>
          <li>Agile & JIRA / ALM</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="animate">
        <h2>Projects</h2>
        <div className="cards">
          <a href="https://github.com/saikeerthanabala-web/Kanban_Project" target="_blank">
            <h3>Kanban Automation Project</h3>
            <p>End-to-end automation framework</p>
          </a>
          <a
            href="https://github.com/saikeerthanabala-web/my-playwright-project"
            target="_blank"
          >
            <h3>Playwright Automation Project</h3>
            <p>Modern UI & API testing</p>
          </a>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="animate">
        <h2>Certifications</h2>
        <div className="cards">
          <a href="https://www.linkedin.com/learning/certificates/3616a12236061050059b49340236f011119a47345425794615a06bfd38fbf5be" target="_blank">
            🏅 LinkedIn – GitHub
          </a>
          <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/3649e0f53166c62e201654ebda46850a19bf688e" target="_blank">
            🤖 DataCamp – AI Testing
          </a>
          <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/4b9b3f1ecb92c140e55dafeeac0ddb25fdd49790" target="_blank">
            🐍 DataCamp – Python
          </a>
        </div>
      </section>

      {/* CONTACT – NETLIFY FORMS */}
      <section id="contact" className="animate">
        <h2>Contact Me</h2>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" placeholder="Name" required />
          <input name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Sai Keerthana Bala. All rights reserved.
      </footer>

      {/* STYLES */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          font-family: system-ui;
        }
        .dark {
          background: #111;
          color: #fff;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          position: sticky;
          top: 0;
          background: inherit;
          z-index: 10;
        }
        .nav a {
          margin-right: 1rem;
        }
        .hero {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 3rem 1rem;
          align-items: center;
        }
        img {
          width: 180px;
          border-radius: 50%;
        }
        .buttons {
          margin-top: 1rem;
        }
        .btn {
          padding: 0.6rem 1.2rem;
          background: #0070f3;
          color: white;
          border-radius: 6px;
          margin-right: 1rem;
        }
        .outline {
          background: transparent;
          border: 2px solid #0070f3;
        }
        section {
          padding: 3rem 1rem;
          max-width: 1000px;
          margin: auto;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .cards a {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        form {
          display: grid;
          gap: 1rem;
          max-width: 500px;
          margin: auto;
        }
        footer {
          text-align: center;
          padding: 1rem;
        }

        /* Animations */
        .animate {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease;
        }
        .animate.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .hero {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
