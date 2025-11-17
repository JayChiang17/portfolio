import React from "react";
import "../style/FloatingSkills.css";

const SkillsSection = () => {
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
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
    {
      name: "Spark",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg",
    },
    {
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Pytorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "Keras",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
    },
    {
      name: "OpenCV",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Scikit-learn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      name: "Matlab",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    },
  ];

  return (
    <section className="floating-skills-container">
      <h2>Skills & Technologies</h2>
      <div className="marquee">
        <div className="marquee-content">
          {/* 複製三次以確保無縫循環 */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="floating-tag">
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
