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

        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>

      <main>
        {/* Header Section */}
        <div className="top-section">
          <img
            src="/profile.jpg"
            alt="Sai Keerthana Bala"
            className="profile-pic clickable"
            onClick={() => setShowImage(true)}
            />

          <div className="title-area">
            <Header title="Sai Keerthana Bala" />
            <h2 className="role">Automation Test Engineer / SDET</h2>
          </div>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            {darkMode ? '🌙' : '🌞'}
          </button>
        </div>

        {/* Professional Summary */}
        <section className="summary">
          <p className="summary-text">
            <strong>Software Development Engineer in Test (SDET)</strong> with
            <strong> 5+ years of experience</strong> delivering high-quality,
            scalable test solutions for web-based, API-driven, and technically
            complex applications in Agile environments.
          </p>

          <p className="summary-text">
            Specialized in <strong>automation and backend testing</strong>, with
            hands-on experience in <strong>Selenium, Playwright, Cypress, Java,
            and Python</strong>, along with deep expertise in
            <strong> REST API, SDK, and system-level validation</strong>.
            Led end-to-end testing including functional, regression,
            exploratory, and integration testing.
          </p>

          <p className="summary-heading">Core Strengths</p>
          <ul>
            <li>Designing automation frameworks & regression strategies</li>
            <li>Translating requirements into effective test scenarios</li>
            <li>Root cause analysis, defect triage & fix validation</li>
            <li>CI/CD integration using Jenkins, GitHub, JIRA & ALM</li>
          </ul>

          <p className="summary-text">
            Currently expanding expertise in
            <strong> AI-assisted testing</strong>, leveraging AI/ML concepts for
            test case generation, test data creation, defect analysis, and
            automation optimization.
          </p>
        </section>

        {/* Actions */}
        <div className="actions">
          <a href="/SaiKeerthanaResume.pdf" download className="resume-btn">
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/sai-keerthana-bala/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        {showImage && (
        <div className="image-overlay" onClick={() => setShowImage(false)}>
        <div className="image-modal" onClick={(e) => e.stopPropagation()}>
        <img src="/profile.jpg" alt="Sai Keerthana Bala Full View" />
        <button className="close-btn" onClick={() => setShowImage(false)}>
        ✕
        </button>
       </div>
      </div>
      )}
      </main>

      <Footer />

      {/* Styles */}
      <style jsx>{`
        .container {
          font-family: 'Inter', sans-serif;
          background: #ffffff;
          color: #1a1a1a;
          transition: all 0.3s ease;
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
        object-fit: cover;
        border: 4px solid #2563eb;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .profile-pic:hover {
        transform: scale(1.05);
        }
      .image-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
    }

    .image-modal {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    
    .image-modal img {
      width: 100%;
      max-height: 80vh;
      border-radius: 12px;
    }
    
    .close-btn {
      position: absolute;
      top: -12px;
      right: -12px;
      background: #ffffff;
      border: none;
      font-size: 1.2rem;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      cursor: pointer;
    }

        .title-area h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .role {
          font-size: 1.2rem;
          font-weight: 500;
          margin-top: 0.3rem;
          color: #64748b;
        }

        .container.dark .role {
          color: #cbd5f5;
        }

        .theme-toggle {
          margin-left: auto;
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .summary {
          max-width: 950px;
          margin: 2.5rem auto;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .summary-text {
          margin-bottom: 1rem;
        }

        .summary-heading {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.3rem;
          margin-top: 1.5rem;
        }

        ul {
          margin-left: 1.2rem;
        }

        .actions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-top: 2rem;
        }

        .resume-btn {
          padding: 0.7rem 1.4rem;
          background: #2563eb;
          color: #fff;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
        }

        .resume-btn:hover {
          background: #1d4ed8;
        }

        .linkedin-icon {
          font-size: 1.9rem;
          color: #0a66c2;
        }

        .container.dark .linkedin-icon {
          color: #93c5fd;
        }
      `}</style>
    </div>
  )
}
