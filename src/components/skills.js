import React, { useState } from "react";
import "../style/FloatingSkills.css";
import SkillsRadar from "./SkillsRadar";

const CATEGORIES = [
  {
    id: "data",
    label: "Data Engineering",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
    ],
  },
  {
    id: "ml",
    label: "ML / AI",
    skills: [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Matlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    ],
  },
  {
    id: "devops",
    label: "DevOps / Infra",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    ],
  },
];

const ALL_MARQUEE = [
  ...CATEGORIES[0].skills,
  ...CATEGORIES[1].skills,
  ...CATEGORIES[2].skills,
  ...CATEGORIES[3].skills,
];

const SkillsSection = () => {
  const [active, setActive] = useState("data");
  const current = CATEGORIES.find((c) => c.id === active);

  return (
    <div className="skills-wrap">
      <h2 className="skills-heading">Skills &amp; Technologies</h2>

      {/* Category tabs */}
      <div className="skills-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`skills-tab ${active === cat.id ? "skills-tab--active" : ""}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skill icon grid */}
      <div className="skills-grid">
        {current.skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Marquee — all skills */}
      <div className="marquee">
        <div className="marquee-content">
          {[...ALL_MARQUEE, ...ALL_MARQUEE, ...ALL_MARQUEE].map((skill, i) => (
            <div key={i} className="floating-tag">
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Radar chart */}
      <SkillsRadar />
    </div>
  );
};

export default SkillsSection;
