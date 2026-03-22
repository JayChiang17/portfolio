import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/ResumePage.css";
import "../style/HighlightEffects.css";
import SkillsSection from "../components/skills";
import umichLogo from "../pic/umich_logo.png";
import ucscLogo from "../pic/The_University_of_California_UCSC.png";

gsap.registerPlugin(ScrollTrigger);

/* ── Experience card with collapse ── */
const ExperienceCard = ({ company, location, role, dates, current, techTags, bullets, delay }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const visibleCount = 3;
  const shown = expanded ? bullets : bullets.slice(0, visibleCount);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 88%", toggleActions: "play none none none" },
          delay: delay || 0,
        }
      );
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      perspective={1400}
      transitionSpeed={500}
      scale={1.01}
      className="tilt-card exp-tilt"
    >
      <div ref={cardRef} className="experience-card">
        {/* Header row */}
        <div className="exp-card-header">
          <div className="exp-company-info">
            <h3 className="exp-company">{company}</h3>
            <span className="exp-location">{location}</span>
          </div>
          {current && <span className="exp-badge-current">Current</span>}
        </div>

        {/* Role + date */}
        <div className="exp-role-row">
          <span className="exp-role">{role}</span>
          <span className="exp-dates">{dates}</span>
        </div>

        {/* Tech tags */}
        <div className="exp-tags">
          {techTags.map((tag) => (
            <span key={tag} className="exp-tag">{tag}</span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="exp-bullets">
          {shown.map((b, i) => (
            <li key={i} className="stagger-item">{b}</li>
          ))}
        </ul>

        {bullets.length > visibleCount && (
          <button className="exp-toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? "▲ Show less" : `▼ Show ${bullets.length - visibleCount} more`}
          </button>
        )}
      </div>
    </Tilt>
  );
};

/* ── Section title with eyebrow + GSAP reveal ── */
const SectionTitle = ({ children, id, eyebrow, secNum }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} id={id}>
      {secNum && <span className="sec-num" aria-hidden="true">{secNum}</span>}
      {eyebrow && (
        <div className="sec-eyebrow" style={{ marginBottom: "14px" }}>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
        fontWeight: 800,
        color: "var(--c-accent-dark)",
        letterSpacing: "-0.5px",
        marginBottom: "48px",
        lineHeight: 1.1,
      }}>{children}</h2>
    </div>
  );
};

/* ── Project card ── */
const ProjectCard = ({ title, subtitle, location, dates, description, tags, bullets, githubUrl, demoUrl, delay }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 88%", toggleActions: "play none none none" },
          delay: delay || 0,
        }
      );
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1400} transitionSpeed={500} scale={1.01} className="proj-tilt">
      <div ref={cardRef} className="proj-card">
        <div className="proj-card-header">
          <div className="proj-meta">
            <span className="proj-location">{location}</span>
            <span className="proj-dates">{dates}</span>
          </div>
        </div>
        <h3 className="proj-title">{title}</h3>
        {subtitle && <p className="proj-subtitle">{subtitle}</p>}
        <p className="proj-description">{description}</p>
        <div className="proj-tags">
          {tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
        </div>
        {bullets && (
          <>
            <ul className={`proj-bullets ${expanded ? "proj-bullets--expanded" : ""}`}>
              {(expanded ? bullets : bullets.slice(0, 2)).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {bullets.length > 2 && (
              <button className="exp-toggle" onClick={() => setExpanded(!expanded)}>
                {expanded ? "▲ Show less" : `▼ Show ${bullets.length - 2} more`}
              </button>
            )}
          </>
        )}
        <div className="proj-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="proj-link proj-link--github">
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="proj-link proj-link--demo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Report
            </a>
          )}
          {!githubUrl && !demoUrl && (
            <span className="proj-link proj-link--private">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Private
            </span>
          )}
        </div>
      </div>
    </Tilt>
  );
};

/* ── Certification card ── */
const CertCard = ({ title, issuer, issued, url, delay }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 90%", toggleActions: "play none none none" },
          delay: delay || 0,
        }
      );
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={cardRef} className="cert-card">
      <div className="cert-card-body">
        <span className="cert-issuer">{issuer}</span>
        <h4 className="cert-title">{title}</h4>
        <span className="cert-date">{issued}</span>
      </div>
      <a href={url} target="_blank" rel="noreferrer" className="cert-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        View
      </a>
    </div>
  );
};

const CERTS = [
  { title: "Google Data Analytics Certificate", issuer: "Google Career Certificates", issued: "Jul 2023", url: "https://www.coursera.org/account/accomplishments/professional-cert/FE5YJM52STTV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof" },
  { title: "Advanced Data Science with IBM", issuer: "Coursera / IBM", issued: "Jun 2024", url: "https://coursera.org/share/5b7e042e621d0d7b4b575491c53102c5" },
  { title: "Tableau for Data Scientists", issuer: "LinkedIn Learning", issued: "Jun 2023", url: "https://www.linkedin.com/learning/certificates/9cb5db6a57c90edeb08b36aed6b0e78cdac1b2f38241005ad540f4ea12f69f12" },
  { title: "IBM Data Science Professional Certificate (V2)", issuer: "Coursera / IBM", issued: "Jul 2023", url: "https://coursera.org/share/b648c5b422ba4d76dd82fec13e981be2" },
  { title: "Spark and Python for Big Data with PySpark", issuer: "Udemy", issued: "Sep 2023", url: "https://www.udemy.com/certificate/UC-1e2bffd1-eb8e-47f9-a6bf-086f4ffb8221/" },
  { title: "IBM Machine Learning", issuer: "Coursera / IBM", issued: "Oct 2023", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/KUQ9VMC458FM" },
  { title: "Full-Stack Web Development", issuer: "Udemy", issued: "Feb 2024", url: "https://www.udemy.com/certificate/UC-c77f0912-0982-42d0-8c5d-f5ab06d5742d/" },
  { title: "Deep Learning: Neural Networks, AI & ChatGPT", issuer: "Udemy", issued: "Mar 2024", url: "https://www.udemy.com/certificate/UC-5b6a6c55-64a1-495c-ba73-ef38150cbd89/" },
  { title: "Master LangChain: Build AI Apps with OpenAI, LLAMA2, HuggingFace", issuer: "Udemy", issued: "Jun 2024", url: "https://www.udemy.com/certificate/UC-5e914800-51cd-41c3-a208-f9c9763c3c9d/" },
];

/* ══════════════════════════════════════════ */

const ResumePage = () => {
  return (
    <div>
      <div className="resumepage">
        <h1 id="resume">Resume</h1>
        <div className="resume_content">

          {/* ── EDUCATION ── */}
          <section className="education">
            <SectionTitle eyebrow="Academic Background" secNum="00">Education</SectionTitle>
            <div className="education-item">
              <img src={umichLogo} alt="University of Michigan" className="school-logo" />
              <div className="education-info">
                <strong>University of Michigan - Ann Arbor</strong>
                <br />
                M.S. Applied Data Science, Jan 2026 - Present
                <br />
                Focus: ML pipelines, deep learning, NLP, causal inference, scalable data processing
              </div>
            </div>
            <div className="education-item">
              <img src={ucscLogo} alt="UC Santa Cruz" className="school-logo" />
              <div className="education-info">
                <strong>University of California, Santa Cruz</strong>
                <br />
                B.S. Technology Information Management, Sep 2020 - Jun 2023
                <br />
                Focus: data systems and databases, software project work, and applied analytics
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section id="experience" className="experience-section">
            <SectionTitle eyebrow="Work History" secNum="02" id="experience-title">Work Experience</SectionTitle>

            {/* Timeline wrapper */}
            <div className="exp-timeline">

              <ExperienceCard
                company="Leadman Electronics"
                location="Santa Clara, California"
                role="Data Engineer"
                dates="Jan 2024 – Present"
                current={true}
                delay={0}
                techTags={["React", "FastAPI", "WebSocket", "Python", "PostgreSQL", "Azure SQL", "Docker", "Kubernetes", "Airflow", "FAISS", "Ollama"]}
                bullets={[
                  <>Built <strong>real-time production dashboards</strong> using React, WebSocket, and FastAPI, <span className="stat-highlight">increasing line throughput by 30%</span> through live WIP, throughput, cycle time, and NG visibility.</>,
                  <>Redesigned PostgreSQL data model and migrated workloads from local PostgreSQL to Azure SQL, <span className="stat-highlight">improving API query response performance by 20%</span> and stabilizing reporting under higher concurrency.</>,
                  <>Customized MES execution system and automated information workflows using Python, FastAPI, and SQL, <span className="stat-highlight">reducing manual man-hours by 30%</span> while supporting standardized operations across 3 factories.</>,
                  <>Enforced routing gates and station validation at API boundaries to block invalid transitions, <span className="stat-highlight">reducing rework by 10%</span> and stabilizing execution flow during NPI ramps.</>,
                  <>Delivered operator-facing full-stack execution tools using React, REST APIs, and PostgreSQL, <span className="stat-highlight">improving ETL completion rate by 43%</span> through guided input validation and automated data capture.</>,
                  <>Built analytics pipelines using Python, Pandas, NumPy, and SQL, <span className="stat-highlight">improving query efficiency by 60%</span> and reducing recurring manual data preparation by 40% across daily operational reports.</>,
                  <>Implemented production AI retrieval for SOP and data using FAISS, FTS5, HyDE, and Ollama GPT OSS 120B, <span className="stat-highlight">reducing troubleshooting lookup time by 31%</span> and improving cross-shift consistency by 20%.</>,
                  <>Built multi-service containerized dev environment using Docker Compose, <span className="stat-highlight">reducing environment setup time by 20%</span> and reducing image size by 50% through shared base layers and dependency pruning.</>,
                  <>Deployed containerized services to Kubernetes using Deployments, Services, and Ingress with health checks, <span className="stat-highlight">improving release reliability by 30%</span> and reducing rollback rate by 10%.</>,
                  <>Designed Airflow DAGs orchestrating 12 daily ETL tasks with dependency management and SLA monitoring, <span className="stat-highlight">improving pipeline success rate from 85% to 98%</span>.</>,
                ]}
              />

              <ExperienceCard
                company="Meritronics Inc"
                location="Milpitas, California"
                role="Software Engineer, Manufacturing Data Systems"
                dates="Sep 2025 – Dec 2025"
                current={false}
                delay={0.1}
                techTags={["Python", "FastAPI", "PostgreSQL", "React", "WebSocket", "Docker", "Kubernetes", "Pandas", "SQL"]}
                bullets={[
                  <>Built SN-level traceability and routing enforcement system for SMT, ICT, and FCT lines using Python, FastAPI, and PostgreSQL, <span className="stat-highlight">preventing misrouting incidents by 90%</span> and improving FPY by 8%.</>,
                  <>Aggregated SPI, AOI, ICT, and FCT test logs using Python, Pandas, and SQL, generating fail-code ranking dashboards that <span className="stat-highlight">reduced repeat repair rate by 20%</span>.</>,
                  <>Developed real-time WIP, cycle time, and station utilization dashboards using React, WebSocket, and REST APIs, <span className="stat-highlight">reducing bottleneck identification time by 40%</span> across 5+ production lines.</>,
                  <>Standardized test result schema across SPI, AOI, ICT, and FCT stations in PostgreSQL, <span className="stat-highlight">improving audit traceability coverage to 100%</span> and reducing manual data reconciliation by 60%.</>,
                  <>Deployed containerized MES and analytics services using Docker and Kubernetes with readiness probes and rolling updates, <span className="stat-highlight">improving deployment stability by 30%</span> and reducing production incident recurrence by 20%.</>,
                ]}
              />

              <ExperienceCard
                company="Reliable Power, Inc."
                location="Santa Clara, California"
                role="Data Analyst"
                dates="Jan 2024 – Sep 2025"
                current={false}
                delay={0.2}
                techTags={["SQL", "Python", "Pandas", "Tableau", "Reporting"]}
                bullets={[
                  <>Built SQL and Python reporting datasets for inverter sales, repair, and warranty operations, <span className="stat-highlight">reducing weekly reporting turnaround time by 60%</span> and improving SKU-level visibility by 50%.</>,
                  <>Reduced unit defect rate from <span className="stat-highlight">6.6% to 5%</span> by analyzing failure patterns and surfacing actionable drivers, improving corrective action effectiveness by 20%.</>,
                ]}
              />
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section id="skills" className="skills page-section page-section--alt">
            <span className="sec-num" aria-hidden="true">03</span>
            <div className="sec-eyebrow" style={{ marginBottom: "14px" }}><span>Technical Proficiency</span></div>
            <SkillsSection />
          </section>

          <br />

          {/* ── PROJECTS ── */}
          <section id="projects" className="projects">
            <SectionTitle eyebrow="Selected Work" secNum="04">Projects</SectionTitle>
            <div className="projects-grid">
              <ProjectCard
                title="Intelligent House Water Filtration & Monitor System"
                location="Santa Cruz, CA"
                dates="Feb 2023 – Apr 2023"
                description="IoT-based smart home water quality monitoring system with adaptive forecasting, real-time analytics, and demand optimization using ML."
                tags={["Python", "Scikit-learn", "Linear Regression", "IoT", "Slack API", "Pandas"]}
                bullets={[
                  "Used static and adaptive forecasting, enhancing product quality and inventory management.",
                  "Used sensitivity analysis techniques to optimize development costs, sales volume, and production costs.",
                  "Analyzed logistics for cost savings and used Slack for real-time collaboration and data exchange.",
                  "Product demand forecasting using Linear Regression in Scikit-learn.",
                ]}
              />
              <ProjectCard
                title="LSTM Deep Learning Sales Forecasting"
                subtitle="For Retail Sales Management"
                location="San Jose, CA"
                dates="Jun 2024 – Jul 2024"
                description="Deep learning time-series model for retail sales forecasting, achieving 74% accuracy on 100,000+ records using bidirectional LSTM architecture."
                tags={["Python", "PyTorch", "LSTM", "Bidirectional LSTM", "Pandas", "Matplotlib"]}
                demoUrl="https://drive.google.com/file/d/1_Ye92Sg9SeCVqgwhFUaLo2xQVA2QeVe1/view?usp=sharing"
                bullets={[
                  "Preprocessed and engineered features on 100,000+ sales records to enhance model input quality.",
                  "Developed and optimized an LSTM model, increasing accuracy from 3% to 74% by refining the architecture.",
                  "Implemented bidirectional LSTMs and regularization, improving prediction accuracy and performance.",
                  "Created visualizations of historical data and forecasts, aiding stakeholder decisions.",
                ]}
              />
            </div>
          </section>

          {/* ── CERTIFICATIONS ── */}
          <section className="Certifications">
            <SectionTitle eyebrow="Continuous Learning" secNum="05">Certifications</SectionTitle>
            <div className="cert-grid">
              {CERTS.map((cert, i) => (
                <CertCard key={i} {...cert} delay={i * 0.05} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
