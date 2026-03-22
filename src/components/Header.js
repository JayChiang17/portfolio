import React, { Suspense, lazy, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "../style/Header.css";
import profilePic from "../pic/me2.png";
import PDFModal from "./PDFModal";

const ThreeHero = lazy(() => import("./ThreeHero"));

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Header() {
  const [showPDF, setShowPDF] = useState(false);
  return (
    <section className="hero" id="top">
      {showPDF && <PDFModal onClose={() => setShowPDF(false)} />}
      {/* ── Left: Text content ── */}
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span>Data Engineer &amp; Full-Stack Developer</span>
        </div>

        <h1 className="hero-name">
          <span className="hero-name-first">Jay</span>
          <span className="hero-name-last">Chiang</span>
        </h1>

        <div className="hero-subtitle">
          <TypeAnimation
            sequence={[
              "Building real-time MES dashboards",
              2200,
              "Designing analytics pipelines at scale",
              2200,
              "Applied Data Science @ UMich",
              2200,
              "AI-powered retrieval systems",
              2200,
              "Attention is all you need",
              2800,
            ]}
            wrapper="span"
            speed={52}
            repeat={Infinity}
          />
        </div>

        <p className="hero-tagline">
          2+ years building production-grade data systems<br />
          across manufacturing, MES, and analytics.
        </p>

        <div className="hero-actions">
          <button className="hero-btn hero-btn--primary" onClick={() => scrollTo("experience")}>
            View Experience
          </button>
          <button className="hero-btn hero-btn--ghost" onClick={() => scrollTo("contactme")}>
            Contact Me
          </button>
          <button
            className="hero-btn hero-btn--ghost"
            onClick={() => setShowPDF(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Resume
          </button>
          <a
            href="/portfolio/Jay_Chiang_Resume.pdf"
            download
            className="hero-btn hero-btn--download"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </a>
        </div>

        {/* Key stats row */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">2+</span>
            <span className="hero-stat-label">Years Exp.</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">3</span>
            <span className="hero-stat-label">Companies</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">10+</span>
            <span className="hero-stat-label">Tech Stack</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">M.S.</span>
            <span className="hero-stat-label">UMich ADS</span>
          </div>
        </div>
      </div>

      {/* ── Right: Visual ── */}
      <div className="hero-right">
        {/* Three.js canvas fills this area */}
        <Suspense fallback={null}>
          <ThreeHero />
        </Suspense>

        {/* Profile photo */}
        <div className="hero-photo-wrap">
          <img src={profilePic} alt="Jay Chiang" className="hero-photo" />
        </div>

        {/* Floating label cards */}
        <div className="hero-float hero-float--tl">
          <span>Real-time Systems</span>
        </div>
        <div className="hero-float hero-float--br">
          <span>AI / ML Pipelines</span>
        </div>
      </div>
    </section>
  );
}

export default Header;
