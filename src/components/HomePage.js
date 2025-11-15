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
              <strong>Applied software engineer with 1 year experience in manufacturing industry</strong>, building{" "}
              <strong>real-time MES with LLM/RAG search, forecasting, and decision support</strong>{" "}
              to boost quality and throughput. Proficient in{" "}
              <strong>FastAPI, React, LangChain, FAISS, OpenAI, and Ollama</strong>{" "}
              for developing{" "}
              <strong>intelligent manufacturing systems</strong>.
              Expert in <strong>Python, JavaScript, SQL databases</strong>, and{" "}
              <strong>data analytics</strong> with{" "}
              <strong>Pandas, PySpark, and machine learning frameworks</strong>,
              enabling comprehensive data-driven solutions and operational excellence.
            </p>
            <br />
          </div>
        </section>
      </section>

      {/* 经历和成就部分 */}
      <section
        ref={secondSectionRef}
        className={`fade-in ${isSecondSectionVisible ? "visible" : ""}`}
      >
        <section className="contect">
          Graduated from{" "}
          <a
            href="https://admissions.ucsc.edu/programs/technology-and-information-management"
            target="_blank"
            rel="noopener noreferrer"
          >
            The University of California, Santa Cruz in Technical Information
            Management
          </a>{" "}
          and has practical experience as a data analyst intern. During my
          tenure as a Data Analyst Intern at{" "}
          <a
            href="https://yfiob.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YFIOB
          </a>
          , I played a pivotal role in the{" "}
          <u>comprehensive analysis of student surveys</u>, demonstrating my
          ability to analyze and interpret complex data,
          <br />
          thereby substantially enhancing the organization's learning experience
          and financial sustainability.
          <br />
          <br />
          My efforts significantly contributed to{" "}
          <u>securing substantial funding</u>.<br />
          These accomplishments are complemented by my{" "}
          <strong>certifications from Google, LinkedIn, and Coursera</strong>,
          <br />
          which underscore my dedication to the constantly advancing domain of
          data science.
          <br />
          <br />
          My technical proficiency spans a range of programming languages,
          databases, and tools, and is fortified by both academic achievements
          and <u>industry-recognized certifications</u>.<br />I excel in supply
          chain optimization, exploration of AI tools, and predictive modeling.
          <br />
          With such a background, I aspire to{" "}
          <strong>
            leverage my skills in challenging environments, driving data-driven
            solutions and innovation
          </strong>
          .
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
