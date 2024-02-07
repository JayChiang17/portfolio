import React from "react";
import "../style/skills.css";

const SkillsSection = () => {
  // 假設您有一個包含所有技能和對應圖標鏈接的數組
  const skills = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    // ... 添加更多技能
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "anaconda",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Swift",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "filezilla",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
    },
    {
      name: "Spark",
      icon: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg",
    },
    {
      name: "Sass",
      icon: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg",
    },

    {
      name: "scikit-learn",
      icon: process.env.PUBLIC_URL + "./logo/scikit-learn.svg",
    },
    {
      name: "Jupyter",
      icon: process.env.PUBLIC_URL + "./logo/Jupyter.svg",
    },
    {
      name: "OpenCV",
      icon: "./src/logo/OpenCV.svg",
    },
    {
      name: "Stata",
      icon: "../src/logo/Stata.svg",
    },
    {
      name: "TensorFlow",
      icon: "../src/logo/TensorFlow.svg",
    },
    {
      name: "Figma",
      icon: "../src/logo/Figma.svg",
    },
    {
      name: "Matplotlib",
      icon: "../src/logo/Matplotlib.svg",
    },
  ];

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
