import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sai Keerthana Bala | Software Automation Engineer</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Font Awesome for LinkedIn icon */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>

      <main>
        <Header title="Sai Keerthana Bala" />

        <p className="role">
          Automation Test Engineer / SDET
        </p>

        <section className="summary">
          <p>
            Software Development Engineer in Test (SDET) with 5+ years of experience
            delivering high-quality, scalable test solutions for web-based,
            API-driven, and technically complex applications in Agile environments.
          </p>

          <p>
            Specialized in automation and backend testing, with hands-on experience
            in Selenium, Playwright, Cypress, Java, and Python, along with deep
            expertise in REST API, SDK, and system-level validation. Led end-to-end
            testing efforts including functional, regression, exploratory, and
            integration testing, ensuring reliability across complex workflows
            and integrations.
          </p>

          <p><strong>My strengths include:</strong></p>
          <ul>
            <li>Designing automation frameworks and robust regression strategies</li>
            <li>Translating requirements and user stories into effective test scenarios</li>
            <li>Root cause analysis, defect triage, and validation of fixes</li>
            <li>CI/CD integration using Jenkins, GitHub, and test management via JIRA & ALM</li>
          </ul>

          <p>
            Currently expanding my skill set in AI-assisted testing, leveraging
            AI/ML concepts for test case generation, test data creation, defect
            analysis, and automation optimization.
          </p>
        </section>

        <div className="actions">
          {/* Resume Download Button */}
          <a
            href="/Sai_Keerthana_Bala_Resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/sai-keerthana-bala/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .role {
          font-size: 1.2rem;
          margin-top: 0.5rem;
          color: #555;
        }

        .summary {
          max-width: 900px;
          margin: 2rem auto;
          line-height: 1.6;
          font-size: 1rem;
        }

        .summary ul {
          margin-left: 1.2rem;
        }

        .actions {
          margin-top: 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .resume-btn {
          padding: 0.6rem 1.2rem;
          background-color: #0070f3;
          color: #fff;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
        }

        .resume-btn:hover {
          background-color: #0059c1;
        }

        .linkedin-icon {
          font-size: 1.8rem;
          color: #0a66c2;
        }

        .linkedin-icon:hover {
          color: #004182;
        }
      `}</style>
    </div>
  )
}

