import React from "react";
import "../style/ResumePage.css";
import "../style/HighlightEffects.css";
import SkillsSection from "../components/skills";

const ResumePage = () => {
  return (
    <main>
      {/* ... 其他内容 ... */}
      <div className="resumepage">
        <h1 id="resume">Resume</h1>
        <div className="resume_content">
          {/* 简历内容 */}
          <section className="education">
            {/* 教育背景部分 */}
            <h2>EDUCATION</h2>
            <p>
              <br />
              <strong>
                University of California Santa Cruz, Santa Cruz, CA
              </strong>
              <br />
              B.S. Technology Information, Jun 2023
            </p>
            <br />
            <p>
              <strong>De Anza College, Cupertino, CA</strong>
              <br />
              Associate Degree for Transfer, Computer Science, Jun 2020
            </p>
          </section>
          <section className="experience accent-line">
            <h2 className="section-title-animated">EXPERIENCE</h2>

            <h3>
              <span className="company-highlight">Leadman Electronics</span>
              <span className="location">Santa Clara, California</span>
            </h3>
            <p>Software Engineer (Nov 2024 - Present)</p>
            <ul>
              <li className="stagger-item">
                Designed a <strong>retrieval augmented layer</strong> for MES SOPs with live telemetry using FastAPI microservices, LangChain, FAISS, OpenAI and Ollama. Enabled semantic SOP search and guided troubleshooting.
              </li>
              <li className="stagger-item">
                Built a <strong>real time manufacturing dashboard</strong> with React and WebSocket, secured with JWT role based access and backed by SQLite WAL and ETL, which unified stations, yield, alarms and RMA in a single pane.
              </li>
              <li className="stagger-item">
                Standardized data ingestion with versioned REST services, vendor webhooks and scanner feeds, and enforced Pydantic validation, retries, idempotent writes and audit trails, which <strong>increased reliability</strong> and reduced data defects.
              </li>
              <li className="stagger-item">
                Coordinated with vendors to integrate station data adapters and external APIs, launching a new production line that <strong>stabilized throughput</strong> and improved yield consistency.
              </li>
              <li className="stagger-item">
                Implemented anomaly detection and a weekly root cause loop, which reached customer rated maximum capacity and <span className="stat-highlight">delivered 300% of planned output</span>.
              </li>
              <li className="stagger-item">
                Consolidated ATE and EOL result streams and vendor APIs into the data platform and implemented deterministic retest handling with automated triage, which <strong>accelerated fault diagnosis</strong>.
              </li>
              <li className="stagger-item">
                Added production grade observability with structured logs, metrics endpoints and request tracing, which <strong>shortened time to root cause</strong> and improved uptime.
              </li>
            </ul>

            <h3>
              <span className="company-highlight">Reliable Power, Inc</span>
              <span className="location">Santa Clara, California</span>
            </h3>
            <p>Data Analyst/Project Manager (Jan 2024 - Present)</p>
            <ul>
              <li>
                Processed over <span className="stat-highlight">50,000 records</span> of product shipments and returns to identify key failure models and seasonal trends, enabling better inventory planning and service preparation.
              </li>
              <li>
                Analyzed production and failure data using Pandas in Jupyter Notebook, and created visualizations with Matplotlib to identify inverter bottlenecks and performance anomalies.
              </li>
              <li>
                Managed inside sales activities including client communication, quotation preparation, and order tracking to support business growth and customer satisfaction.
              </li>
              <li>
                Led operations and maintenance for inverter fleets by triaging RMAs and trending recurring issues, which <strong>shortened time to resolution</strong> and reduced repeat failures.
              </li>
              <li>
                Introduced a weekly root cause and preventive action loop across service and production, which <span className="stat-highlight">cut the return rate from 6.6% to 3%</span>.
              </li>
            </ul>

            <h3>
              <span className="company-highlight">Your Future Is Our Business</span>
              <span className="location">Santa Cruz, California</span>
            </h3>
            <p>Data Analyst Intern (Apr 2023 - June 2023)</p>
            <ul>
              <li>
                Redesigned the ETL workflow by consolidating schedules, tuning queries, and adding data quality checks, which <span className="stat-highlight">reduced model iteration time by 10%</span>.
              </li>
              <li>
                Built a sentiment analysis pipeline with defined labeling and validation, reaching <span className="stat-highlight">90% accuracy</span> and improving program messaging.
              </li>
              <li>
                Introduced a scoring-based intake and weekly triage that clarified priorities and raised team workflow.
              </li>
            </ul>
          </section>

          <section className="skills">
            <SkillsSection />
          </section>
          <br />
          <section className="projects">
            {/* 项目部分 */}
            <h2>PROJECTS</h2>
            <h3>
              Intelligent House Water Filtration and Monitor System
            </h3>
            <p>Santa Cruz, California (Feb 2023 - Apr 2023)</p>
            <ul>
              <li>
                Used static and adaptive forecasting, enhancing product quality and inventory management.
              </li>
              <li>
                Used sensitivity analysis techniques to optimize development costs, sales volume, and production costs.
              </li>
              <li>
                Analyzed logistics for cost savings and used Slack for real-time collaboration and data exchange.
              </li>
              <li>
                Product demand forecasting using Linear Regression in Scikit-learn.
              </li>
            </ul>

            <br />
            <h3>
              <a href="https://drive.google.com/file/d/1_Ye92Sg9SeCVqgwhFUaLo2xQVA2QeVe1/view?usp=sharing">
                LSTM Deep Learning Sales Forecasting For Retail Sales Management
              </a>
              &#8678;
            </h3>
            <p>San Jose, California (Jun 2024 - July 2024)</p>
            <ul>
              <li>
                Preprocessed and engineered features on 100,000+ sales records to enhance model input quality.
              </li>
              <li>
                Developed and optimized an LSTM model, increasing accuracy from 3% to 74% by refining the architecture.
              </li>
              <li>
                Implemented bidirectional LSTMs and regularization, improving prediction accuracy and performance.
              </li>
              <li>
                Created visualizations of historical data and forecasts, aiding stakeholder decisions and enhancing presentations.
              </li>
            </ul>
          </section>
          <br />
          <section className="Certifications">
            {/* 证书部分 */}
            <h2>CERTIFICATIONS AND SELF-LEARNED SKILLS</h2>
            <ul>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/FE5YJM52STTV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Data Analytics Certificate
                </a>
                , Google Career Certificates, Issued Jul 2023
              </li>
              <li>
                <a
                  href="https://coursera.org/share/5b7e042e621d0d7b4b575491c53102c5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Advanced Data Science with IBM
                </a>
                , Coursera, Issued Jun 2024
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/9cb5db6a57c90edeb08b36aed6b0e78cdac1b2f38241005ad540f4ea12f69f12"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tableau for Data Scientists
                </a>
                , LinkedIn Learn, Issued Jun 2023
              </li>
              <li>
                <a
                  href="https://coursera.org/share/b648c5b422ba4d76dd82fec13e981be2"
                  target="_blank"
                  rel="noreferrer"
                >
                  IBM Data Science Professional Certificate (V2)
                </a>
                , Coursera, Issued Jul 2023
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-1e2bffd1-eb8e-47f9-a6bf-086f4ffb8221/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spark and Python for Big Data with PySpark
                </a>
                , Udemy, Issued Sep 2023
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/KUQ9VMC458FM"
                  target="_blank"
                  rel="noreferrer"
                >
                  IBM Machine Learning
                </a>
                , Coursera, Issued Oct 2023
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-c77f0912-0982-42d0-8c5d-f5ab06d5742d/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full-Stack Web Development
                </a>
                , Udemy, Issued Feb 2024
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-5b6a6c55-64a1-495c-ba73-ef38150cbd89/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deep Learning: Neural Networks, AI & ChatGPT
                </a>
                , Udemy, Issued Mar 2024
              </li>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-5e914800-51cd-41c3-a208-f9c9763c3c9d/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Master LangChain Build #16 AI Apps-OpenAI,LLAMA2,HuggingFace
                </a>
                , Udemy, Issued Jun 2024
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
