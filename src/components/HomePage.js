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
          Jay Chiang is a{" "}
          <strong>software engineer specializing in AI-powered manufacturing systems</strong>{" "}
          with a proven track record of bridging data analytics and full-stack development.
          Graduating from{" "}
          <a
            href="https://admissions.ucsc.edu/programs/technology-and-information-management"
            target="_blank"
            rel="noopener noreferrer"
          >
            UC Santa Cruz with a B.S. in Technology Information Management
          </a>
          , he has rapidly evolved from data analyst roles into software engineering,
          now architecting{" "}
          <u>intelligent MES platforms with LLM/RAG capabilities</u> at Leadman Electronics.
          <br />
          <br />
          His engineering expertise encompasses{" "}
          <strong>building production-grade AI applications</strong> using FastAPI microservices,
          React dashboards, and advanced NLP frameworks including LangChain, FAISS, and Ollama.
          At Leadman, he developed a{" "}
          <u>retrieval-augmented generation system for real-time SOP guidance</u>,
          integrated WebSocket-based monitoring dashboards, and implemented anomaly detection
          that enabled the production line to{" "}
          <strong>deliver 300% of planned output</strong> while reaching maximum capacity.
          <br />
          <br />
          His analytical foundation was established through{" "}
          <strong>data-intensive roles across manufacturing and nonprofit sectors</strong>.
          At Reliable Power, he processed 50,000+ shipment records and{" "}
          <u>reduced product return rates from 6.6% to 3%</u> through systematic root cause analysis.
          His earlier work at{" "}
          <a
            href="https://yfiob.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YFIOB
          </a>{" "}
          demonstrated his ability to transform raw survey data into actionable insights,
          directly contributing to{" "}
          <u>securing substantial organizational funding</u> through data-driven storytelling.
          <br />
          <br />
          Complementing his practical experience,{" "}
          <strong>
            Jay holds nine industry certifications spanning data science, machine learning,
            and full-stack development
          </strong>{" "}
          from Google, IBM, LinkedIn, and Udemy. His technical portfolio includes
          advanced coursework in deep learning, LangChain application development,
          and big data processing with PySpark. This combination of{" "}
          <u>hands-on AI/ML implementation</u>, full-stack engineering proficiency,
          and data analytics expertise positions him uniquely to{" "}
          <strong>
            architect scalable, intelligent systems that drive measurable business impact
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
