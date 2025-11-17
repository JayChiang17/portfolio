import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../style/FloatingSkills.css";

const SkillsSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // 調整滾動速度

    const autoScroll = () => {
      scrollAmount += scrollSpeed;

      // 當滾動到一半時重置（因為我們複製了一次技能列表）
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);

    // 滑鼠懸停時暫停滾動
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

  // Random size assignment for visual variety
  const getRandomSize = (index) => {
    const sizes = ['size-small', '', 'size-large'];
    return sizes[index % 3];
  };

  return (
    <section className="floating-skills-container">
      <h2>Skills & Technologies</h2>
      <div className="floating-tags" ref={scrollRef}>
        {/* 複製兩次技能列表以實現無限循環效果 */}
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            className={`floating-tag ${getRandomSize(index)}`}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: (index % skills.length) * 0.05,
              ease: [0.4, 0, 0.2, 1]
            }}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
