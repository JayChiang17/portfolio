import React from "react";
import "../style/ResumePage.css";
import "../style/HighlightEffects.css";
import SkillsSection from "../components/skills";
import umichLogo from "../pic/umich_logo.png";
import ucscLogo from "../pic/The_University_of_California_UCSC.png";

const ResumePage = () => {
  return (
    <div>
      <div className="resumepage">
        <h1 id="resume">Resume</h1>
        <div className="resume_content">
          {/* 简历内容 */}
          <section className="education">
            <h2>EDUCATION</h2>
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
          <section id="experience" className="experience">
            <h2 className="section-title-animated">EXPERIENCE</h2>

            <h3>
              <span className="company-highlight">Leadman Electronics</span>
              <span className="location">Santa Clara, California</span>
            </h3>
            <p>Data Engineer (Jan 2024 - Present)</p>
            <ul>
              <li className="stagger-item">
                Built <strong>real-time production dashboards</strong> using React, WebSocket, and FastAPI, <span className="stat-highlight">increasing line throughput by 30%</span> through live WIP, throughput, cycle time, and NG visibility.
              </li>
              <li className="stagger-item">
                Redesigned PostgreSQL data model and migrated workloads from local PostgreSQL to Azure SQL, <span className="stat-highlight">improving API query response performance by 20%</span> and stabilizing reporting under higher concurrency.
              </li>
              <li className="stagger-item">
                Customized MES execution system and automated information workflows using Python, FastAPI, and SQL, <span className="stat-highlight">reducing manual man-hours by 30%</span> while supporting standardized operations across 3 factories.
              </li>
              <li className="stagger-item">
                Enforced routing gates and station validation at API boundaries to block invalid transitions, <span className="stat-highlight">reducing rework by 10%</span> and stabilizing execution flow during NPI ramps.
              </li>
              <li className="stagger-item">
                Delivered operator-facing full-stack execution tools using React, REST APIs, and PostgreSQL, <span className="stat-highlight">improving ETL completion rate by 43%</span> through guided input validation and automated data capture.
              </li>
              <li className="stagger-item">
                Built analytics pipelines using Python, Pandas, NumPy, and SQL, <span className="stat-highlight">improving query efficiency by 60%</span> and reducing recurring manual data preparation by 40% across daily operational reports.
              </li>
              <li className="stagger-item">
                Implemented production AI retrieval for SOP and data using FAISS, FTS5, HyDE, and Ollama GPT OSS 120B, <span className="stat-highlight">reducing troubleshooting lookup time by 31%</span> and improving cross-shift consistency by 20%.
              </li>
              <li className="stagger-item">
                Built multi-service containerized dev environment using Docker Compose, <span className="stat-highlight">reducing environment setup time by 20%</span> and reducing image size by 50% through shared base layers and dependency pruning.
              </li>
              <li className="stagger-item">
                Deployed containerized services to Kubernetes using Deployments, Services, and Ingress with health checks, <span className="stat-highlight">improving release reliability by 30%</span> and reducing rollback rate by 10%.
              </li>
              <li className="stagger-item">
                Designed Airflow DAGs orchestrating 12 daily ETL tasks with dependency management and SLA monitoring, <span className="stat-highlight">improving pipeline success rate from 85% to 98%</span>.
              </li>
            </ul>

            <h3>
              <span className="company-highlight">Meritronics Inc</span>
              <span className="location">Milpitas, California</span>
            </h3>
            <p>Software Engineer, Manufacturing Data Systems (Sep 2025 - Dec 2025)</p>
            <ul>
              <li className="stagger-item">
                Built SN-level traceability and routing enforcement system for SMT, ICT, and FCT lines using Python, FastAPI, and PostgreSQL, <span className="stat-highlight">preventing misrouting incidents by 90%</span> and improving FPY by 8%.
              </li>
              <li className="stagger-item">
                Aggregated SPI, AOI, ICT, and FCT test logs using Python, Pandas, and SQL, generating fail-code ranking dashboards that <span className="stat-highlight">reduced repeat repair rate by 20%</span>.
              </li>
              <li className="stagger-item">
                Developed real-time WIP, cycle time, and station utilization dashboards using React, WebSocket, and REST APIs, <span className="stat-highlight">reducing bottleneck identification time by 40%</span> across 5+ production lines.
              </li>
              <li className="stagger-item">
                Standardized test result schema across SPI, AOI, ICT, and FCT stations in PostgreSQL, <span className="stat-highlight">improving audit traceability coverage to 100%</span> and reducing manual data reconciliation by 60%.
              </li>
              <li className="stagger-item">
                Deployed containerized MES and analytics services using Docker and Kubernetes with readiness probes and rolling updates, <span className="stat-highlight">improving deployment stability by 30%</span> and reducing production incident recurrence by 20%.
              </li>
            </ul>

            <h3>
              <span className="company-highlight">Reliable Power, Inc.</span>
              <span className="location">Santa Clara, California</span>
            </h3>
            <p>Data Analyst (Jan 2024 - Sep 2025)</p>
            <ul>
              <li>
                Built SQL and Python reporting datasets for inverter sales, repair, and warranty operations, <span className="stat-highlight">reducing weekly reporting turnaround time by 60%</span> and improving SKU-level visibility by 50%.
              </li>
              <li>
                Reduced unit defect rate from <span className="stat-highlight">6.6% to 5%</span> by analyzing failure patterns and surfacing actionable drivers, improving corrective action effectiveness by 20%.
              </li>
            </ul>
          </section>

          <section id="skills" className="skills">
            <SkillsSection />
          </section>
          <br />
          <section id="projects" className="projects">
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
    </div>
  );
};

export default ResumePage;
