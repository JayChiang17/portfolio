import React, { useRef, useState, useEffect } from "react";
import Popup from "../components/Popup";
import MainNav from "./MainNav";
import Header from "../components/Header";
import profilePic from "../pic/me2.png";
import ResumePage from "../components/ResumePage";
import ContactMe from "../components/ContactPage";
import useIntersectionObserver from "../useIntersectionObserver";
import "../style/SocialLinks.css";
import "../style/Homepages.css";
import "../style/HighlightEffects.css";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 第一个部分的ref和可见性状态
  const firstSectionRef = useRef(null);
  const isFirstSectionVisible = useIntersectionObserver(firstSectionRef, {
    threshold: 0.1,
  });

  // 第二个部分的ref和可见性状态
  const secondSectionRef = useRef(null);
  const isSecondSectionVisible = useIntersectionObserver(secondSectionRef, {
    threshold: 0.1,
  });

  const fourthSectionRef = useRef(null);
  const isFourthSectionVisible = useIntersectionObserver(fourthSectionRef, {
    threshold: 0.1,
  });

  return (
    <main>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Header />
      <MainNav />
      {/* 介绍部分 */}
      <section
        ref={firstSectionRef}
        className={`fade-in ${isFirstSectionVisible ? "visible" : ""}`}
      >
        <h1 id="aboutMe">AboutMe</h1>
        <section className="infro">
          <div className="image-container">
            <img src={profilePic} alt="About Me" />
          </div>
          <div className="infro-container">
            <p>
              <strong className="text-glow">Data engineer and full-stack developer with 2+ years of experience in manufacturing</strong>, building{" "}
              <strong className="reveal-underline">real-time MES dashboards, analytics pipelines, and AI-powered retrieval systems</strong>{" "}
              that drive throughput, quality, and operational efficiency. Proficient in{" "}
              <span className="tech-badge">Python</span>{" "}
              <span className="tech-badge">FastAPI</span>{" "}
              <span className="tech-badge">React</span>{" "}
              <span className="tech-badge">PostgreSQL</span>{" "}
              <span className="tech-badge">Docker</span>{" "}
              <span className="tech-badge">Kubernetes</span>{" "}
              for developing{" "}
              <strong>production-grade data systems</strong>.
              Expert in{" "}
              <span className="tech-badge">Pandas</span>{" "}
              <span className="tech-badge">SQL</span>{" "}
              <span className="tech-badge">Airflow</span>{" "}
              <span className="tech-badge">FAISS</span>{" "}
              <span className="tech-badge">Ollama</span>{" "}
              and <strong>applied data science</strong> with{" "}
              <span className="tech-badge">ML pipelines</span>{" "}
              <span className="tech-badge">NLP</span>{" "}
              <span className="tech-badge">Deep Learning</span>,
              currently pursuing M.S. Applied Data Science at the University of Michigan.
            </p>
          </div>
        </section>
      </section>

      {/* 经历和成就部分 */}
      <section
        ref={secondSectionRef}
        className={`fade-in ${isSecondSectionVisible ? "visible" : ""}`}
      >
        <section className="content shimmer">
          Jay Chiang is a{" "}
          <strong className="gradient-text">data engineer and full-stack developer specializing in manufacturing data systems</strong>{" "}
          with a proven track record of building real-time dashboards, analytics pipelines, and AI-powered retrieval tools.
          He earned his B.S. in Technology Information Management from{" "}
          <a
            href="https://admissions.ucsc.edu/programs/technology-and-information-management"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-hover"
          >
            UC Santa Cruz
          </a>
          {" "}and is currently pursuing an{" "}
          <strong className="text-glow">M.S. in Applied Data Science</strong> at the{" "}
          <a
            href="https://www.si.umich.edu/programs/master-applied-data-science"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-hover"
          >
            University of Michigan - Ann Arbor
          </a>, focusing on ML pipelines, deep learning, NLP, and causal inference.
          <br />
          <br />
          At <span className="company-highlight">Leadman Electronics</span>, he built{" "}
          <span className="reveal-underline">real-time production dashboards using React, WebSocket, and FastAPI</span>,{" "}
          <span className="stat-highlight">increasing line throughput by 30%</span>.
          He redesigned the PostgreSQL data model and migrated workloads to Azure SQL,{" "}
          <span className="stat-highlight">improving API query performance by 20%</span>.
          He also implemented an{" "}
          <strong className="text-glow">AI retrieval system for SOP and production data</strong> using FAISS, HyDE, and Ollama,{" "}
          <span className="reveal-underline">reducing troubleshooting lookup time by <span className="stat-highlight">31%</span></span>.
          His infrastructure work included Docker Compose and Kubernetes deployments that{" "}
          <span className="stat-highlight">improved release reliability by 30%</span>, and Airflow DAGs that raised{" "}
          <span className="reveal-underline">pipeline success rate from <span className="stat-highlight">85% to 98%</span></span>.
          <br />
          <br />
          At <span className="company-highlight">Meritronics Inc</span>, he built{" "}
          <span className="reveal-underline">SN-level traceability and routing enforcement for SMT, ICT, and FCT lines</span>,{" "}
          <span className="stat-highlight">preventing 90% of misrouting incidents</span> and improving first-pass yield by 8%.
          He developed real-time WIP dashboards and standardized test result schemas across stations,{" "}
          achieving <span className="stat-highlight">100% audit traceability</span>.
          <br />
          <br />
          At <span className="company-highlight">Reliable Power</span>, he built SQL and Python reporting datasets that{" "}
          <span className="stat-highlight">reduced weekly reporting turnaround by 60%</span>, and analyzed failure patterns to{" "}
          <span className="reveal-underline">reduce the unit defect rate from <span className="stat-highlight">6.6% to 5%</span></span>.
          This combination of{" "}
          <span className="reveal-underline">hands-on data engineering</span>, full-stack development, and applied data science positions him to{" "}
          <strong className="gradient-text">
            architect scalable, intelligent systems that drive measurable business impact
          </strong>.
        </section>
      </section>
      <ResumePage />
      <br />
      <section
        ref={fourthSectionRef}
        className={`fade-in ${isFourthSectionVisible ? "visible" : ""}`}
      >
        <ContactMe />
      </section>
    </main>
  );
};

export default HomePage;
