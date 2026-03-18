import React, { Suspense, lazy } from "react";
import { TypeAnimation } from "react-type-animation";
import "../style/Header.css";
import profilePic from "../pic/me2.png";

const ThreeHero = lazy(() => import("./ThreeHero"));

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Header() {
  return (
    <section className="hero" id="top">
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
