import React from "react";
import "../style/ResumePage.css"; // 确保CSS文件路径正确
import "react-bootstrap";
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
              B.S. Technology Information Management, Jun 2023
            </p>
            <br />
            <p>
              <strong>De Anza College, Cupertino, CA</strong>
              <br />
              Associate Degree for Transfer, Computer Science, Jun 2020
            </p>
          </section>
          <section className="experience">
            {/* 工作经验部分 */}
            <h2>EXPERIENCE</h2>
            <h3>
              Data Analyst Intern/YFIOB landscape and stakeholder experience
              analysis
            </h3>
            <p>April 2023 - Jun 2023</p>
            <ul>
              <li>
                Analyzed demographic data to drive engagement strategies at
                YFLOB, resulting in a <b>20% increase</b> in youth participation
                and retention across career exploration platforms, with{" "}
                <b>over 10,000 active participants</b>.
              </li>
              <li>
                Utilized statistical analysis and machine learning techniques on{" "}
                <b>over 500 student surveys</b> to extract actionable insights,
                enhancing program delivery by identifying key trends and
                participant needs.
              </li>
              <li>
                Engineered and deployed automated data collection and analysis
                workflows using Python and Excel macros, achieving a{" "}
                <b>40% reduction</b> in data processing time and enhancing data
                accuracy.
              </li>
              <li>
                Developed data-driven funding proposals by forecasting trends
                and outcomes, successfully ensuring the sustainability of
                strategic projects over <b>three years</b>.
              </li>
              <li>
                Spearheaded the integration of NLP and generative AI models to
                automate the summarization of qualitative survey data, boosting
                report generation efficiency by <b>30%</b> and enhancing
                stakeholder insights.
              </li>
              <li>
                Innovated and standardized data collection methodologies across
                multiple channels, leveraging APIs and real-time data processing
                to reduce errors by <b>25%</b> and improve data collection
                efficiency.
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
              <a href="https://drive.google.com/file/d/14uyH3SL_pJ4tDxZSDPdZma15Vt2I2b3x/view?usp=sharing">
                Value and Supply Chain Network Development for Honeywell
              </a>
              &#8678;
            </h3>
            <ul>
              <li>
                Design and optimization of the supply chain infrastructure for
                the "Smart Water Quality Filter & Monitor," resulting in
                increased responsiveness and reduced uncertainties in demand.
              </li>
              <li>
                Implemented a combination of static and adaptive forecasting
                methods, refining demand estimates and enhancing alignment with
                market needs, making to more precise inventory management.
              </li>
              <li>
                Conducted rigorous profit analysis, leveraging sensitivity
                analysis techniques, to ensure the project's viability, thereby
                optimizing development costs, sales volume, and production
                costs.
              </li>
              <li>
                Ensuring efficient stock levels, reducing holding costs, and
                ensuring timely product availability.
              </li>
              <li>
                Comprehensive analyses of potential assembly plant locations,
                supplier sourcing, and transportation options, culminating in
                cost savings and improved operational efficiency.
              </li>
              <li>
                Championed forward-thinking strategies, including detailed
                inventory analyses, aggregation considerations, and regional
                demand assessments, positioning the project for future
                scalability and adaptability to market changes.
              </li>
            </ul>
            <br />
            <h3>
              <a href="https://drive.google.com/file/d/1ld7r1eWe3rcAGl8cJUJpkryBCF12Ttqj/view?usp=sharing">
                NBA Player Salary Prediction
              </a>
              &#8678;
            </h3>
            <ul>
              <li>
                Collected and cleaned over 30,000 NBA player data entries,
                encompassing game performance, team information, and more.
              </li>
              <li>
                Applied feature engineering techniques, including{" "}
                <b>One-hot Encoding</b> and <b>Label Encoding</b>, to transform
                categorical variables into numerical form.
              </li>
              <li>
                Compare various regression models such as
                <b>Linear Regression</b>, <b>Random Forest</b>, and{" "}
                <b>XGBoost</b> to predict player salaries
              </li>
              <li>
                Implemented model stacking techniques, combining results from
                different models to further enhance prediction accuracy.
              </li>
              <li>
                Utilized Python, alongside tools like Scikit-learn, XGBoost, and
                Pandas, conducted <b>cross-validation</b> to assess model
                robustness and accuracy, achieving an <b>R^2 of 0.89</b> for the
                final model.
              </li>
            </ul>
            <br />
            <h3>
              <a href="https://drive.google.com/file/d/16zBV6qFjUpbf0-U90IVBdkcHLFSLKg2g/view?usp=sharing">
                Haidilao Hot Pot NFC Review Enhancement
              </a>
              &#8678;
            </h3>
            <ul>
              <li>
                Engineered NFC-enabled signage providing direct access to
                Haidilao's Google Maps and Yelp pages, significantly enhancing
                customer interaction and experience.
              </li>
              <li>
                Within just two months, effectively increased the volume of
                reviews from 1,500 to 3,300, greatly amplifying online user
                engagement and interaction.
              </li>
              <li>
                Successfully elevated the restaurant’s average rating from 4.5
                to 4.7 stars on Google review platforms, reflecting a
                considerable improvement in customer satisfaction and service
                quality.
              </li>
              <li>
                This project led to a substantial enhancement of the brand's
                digital presence and reputation, reinforcing its standing in a
                competitive market.
              </li>
            </ul>
          </section>
          <br />
          <br />
          <br />
          <section className="Certifications">
            {/* 证书部分 */}
            <h2>CERTIFICATIONS</h2>
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
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
