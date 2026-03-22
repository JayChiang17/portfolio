import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Popup from "../components/Popup";
import MainNav from "./MainNav";
import Header from "../components/Header";
import MouseParallaxBg from "./MouseParallaxBg";
import ResumePage from "../components/ResumePage";
import BlogSection from "../components/BlogSection";
import ContactMe from "../components/ContactPage";
import TerminalAbout from "../components/TerminalAbout";
import "../style/SocialLinks.css";
import "../style/Homepages.css";
import "../style/HighlightEffects.css";

const HomePage = ({ isDark, toggleTheme }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-layout">
      {/* ── Left sidebar (sticky scroll-spy nav) ── */}
      <MainNav isDark={isDark} toggleTheme={toggleTheme} />

      {/* ── Right: all content ── */}
      <div className="content-area">
        <MouseParallaxBg />
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}

        {/* Hero — full viewport */}
        <Header />

        {/* ── ABOUT ── */}
        <section id="aboutMe" className="page-section about-section">
          <span className="sec-num" aria-hidden="true">01</span>
          <div className="sec-eyebrow"><span>About Me</span></div>
          <h2 className="sec-heading">Bridging Data Engineering<br/>and Applied AI</h2>

          <div className="about-grid">
            {/* Bio */}
            <div className="about-bio">
              <p>
                Data engineer with experience building <strong>data platforms and backend data services</strong> using
                Python, SQL, PostgreSQL, and FastAPI. Worked on schema migration, batch data ingestion,
                validation, scheduled jobs, reporting datasets, and ML output storage for manufacturing
                systems including MES, QC, downtime, traceability, and KPI reporting.
              </p>
              <p>
                Currently pursuing an <strong>M.S. in Data Science</strong> at the{" "}
                <a href="https://www.si.umich.edu/programs/master-applied-data-science" target="_blank" rel="noopener noreferrer">
                  University of Michigan - Ann Arbor
                </a>.
              </p>
              <p>
                Previously earned a B.S. in Technology Information Management from{" "}
                <a href="https://admissions.ucsc.edu/programs/technology-and-information-management" target="_blank" rel="noopener noreferrer">
                  UC Santa Cruz
                </a>.
              </p>

              <div className="about-tags">
                {["Python","PostgreSQL","FastAPI","psycopg2","APScheduler","WebSocket","FAISS","XGBoost","Docker","Kubernetes","SQL","Pandas"].map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

            {/* Stats / highlights */}
            <div className="about-highlights">
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000} scale={1.02} className="tilt-card">
                <div className="highlight-card">
                  <div className="highlight-metric">161</div>
                  <div className="highlight-desc">FastAPI endpoints built for manufacturing data platform</div>
                </div>
              </Tilt>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000} scale={1.02} className="tilt-card">
                <div className="highlight-card">
                  <div className="highlight-metric">31%</div>
                  <div className="highlight-desc">Faster SOP lookup via FAISS retrieval workflow</div>
                </div>
              </Tilt>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000} scale={1.02} className="tilt-card">
                <div className="highlight-card">
                  <div className="highlight-metric">90%</div>
                  <div className="highlight-desc">Process errors reduced via API-level validation rules</div>
                </div>
              </Tilt>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000} scale={1.02} className="tilt-card">
                <div className="highlight-card">
                  <div className="highlight-metric">60%</div>
                  <div className="highlight-desc">Faster reporting turnaround with SQL & Python datasets</div>
                </div>
              </Tilt>
            </div>

          {/* Terminal */}
          <TerminalAbout />
          </div>
        </section>

        {/* Resume: Experience / Skills / Projects / Certs */}
        <ResumePage />

        {/* Blog */}
        <BlogSection />

        {/* Contact */}
        <ContactMe />
      </div>
    </div>
  );
};

export default HomePage;
