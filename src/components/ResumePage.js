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
              B.S. Technology Information, Jun 2023
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
              Leadman Electronics
              <span className="location">Santa Clara, California</span>
            </h3>
            <p>Manufacturing Process Engineer </p>
            <ul>
              <li>
                Maintained battery system production lines(FranklinWH) with
                robotics and vision systems for reliability.
              </li>
              <li>
                Optimized battery system processes for cell integration, thermal
                management, and BMS testing.
              </li>
              <li>
                Developed data systems for battery line stability and
                performance analysis.
              </li>
            </ul>

            <h3>
              Reliable Power, inc
              <span className="location">Santa Clara, California</span>
            </h3>
            <p>Project Manager / Data Analyst</p>
            <ul>
              <li>
                Reduced unit defect rate from 6.6% to 5%, significantly
                improving product quality and operational efficiency.
              </li>
              <li>
                Launched a new grid-tie inverter line for EV charging, expanding
                into a growing market segment.
              </li>
              <li>
                Increased inverter sales by 12% through data-driven performance
                analytics and marketing
              </li>
              <li>
                Adapted quickly to challenges, contributing to stability and
                growth within three months.
              </li>
            </ul>

            <h3>
              Haidilao Inc<span className="location">Cupertino, California</span>
            </h3>
            <p>Digital Marketing and Data Analyst</p>
            <ul>
              <li>
                Engineered NFC-enabled signage for direct access to Google Maps
                and Yelp reviews.
              </li>
              <li>
                Boosted customer digital engagement by 25% within the first
                week.
              </li>
              <li>
                Amplified reviews from 1,500 to 4,100 in 3 months, a 280%
                increase.
              </li>
              <li>
                Enhanced restaurant’s average rating from 4.5 to 4.8 stars on
                Google.
              </li>
              <li>
                Increased customer traffic and met sales targets for 3 months.
              </li>
            </ul>

            <h3>
              Your Future Is Our Business
              <span className="location">Santa Cruz, California</span>
            </h3>
            <p>DATA ANALYST INTERN</p>
            <ul>
              <li>
                Assisted in task prioritization, improving team workflow by 20%.
              </li>
              <li>
                Improved 10% efficiency by ETL datasets for predictive modeling.
              </li>
              <li>
                Contributed to securing $150K-$450K annual funding over 3 years.
              </li>
              <li>
                Built data pipeline using Pyspark, enhancing processing speed.
              </li>
              <li>
                Analyzed stakeholder comments with NLP, achieving 90% sentiment
                accuracy.
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
                Used static and adaptive forecasting, enhancing product quality
                and inventory management.
              </li>
              <li>
                Used Matplotlib and Seaborn to analyze potential logistics
                strategies for a 5% cost reduction and increased efficiency.
              </li>
              <li>
                Used sensitivity analysis techniques, to optimize development
                costs, sales volume, and production costs.
              </li>
              <li>
                Developed creative solutions and implemented quality controls to
                boost efficiency and provide support.
              </li>
              <li>
                Analyzed logistics for cost savings and used Slack for real-time
                collaboration and data exchange.
              </li>
              <li>
                Utilized BPM to streamline operations and improve over 25% data
                analysis accuracy.
              </li>
              <li>
                Product demand forecasting using Linear Regression in
                Scikit-learn.
              </li>
            </ul>

            <br />
            <h3>
              <a href="https://drive.google.com/file/d/1ld7r1eWe3rcAGl8cJUJpkryBCF12Ttqj/view?usp=sharing">
                NBA Player Salary Prediction By Machine Learning
              </a>
              &#8678;
            </h3>
            <ul>
              <li>
                Cleaning and mining raw data of more than 30,000 NBA players
              </li>
              <li>
                Applied feature engineering techniques by using One-hot and
                Label Encoding
              </li>
              <li>
                Compared various regression models with Linear Regression,
                Random Forest, and XGBoost.
              </li>
              <li>
                Evaluated model accuracy and robustness using cross-validation.
              </li>
              <li>
                Data scraping and processing using BeautifulSoup and Requests.
              </li>
            </ul>

            <br />
            <h3>
              <a href="https://drive.google.com/file/d/1_Ye92Sg9SeCVqgwhFUaLo2xQVA2QeVe1/view?usp=sharing">
                LSTM Sales Forecasting For Retail Sales Management
              </a>
              &#8678;
            </h3>
            <ul>
              <li>
                Preprocessed and engineered features on over 100,000 sales
                records to enhance model input quality
              </li>
              <li>
                Developed an LSTM model, increasing accuracy from 3% to 74% by
                optimizing network architecture
              </li>
              <li>
                Applied bidirectional LSTMs and regularization techniques to
                improve prediction accuracy
              </li>
              <li>
                Facilitated data-driven decision-making by forecasting sales
                trends for inventory management.
              </li>
              <li>
                Visualized historical data and model forecasts to assist
                stakeholder decisions and presentations.
              </li>
              <li>
                Validated model performance through rolling validation, ensuring
                robustness and reliability
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
