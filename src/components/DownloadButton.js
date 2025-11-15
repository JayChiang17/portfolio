import React from "react";
import { motion } from "framer-motion";
import "../style/DownloadButton.css";

const DownloadButton = () => {
  const handleDownload = () => {
    // 創建一個臨時鏈接來下載文件
    // 注意：您需要將實際的簡歷文件放在 public 目錄下
    const link = document.createElement("a");
    link.href = "/Jay_Chiang_Resume.pdf";
    link.download = "Jay_Chiang_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      className="download-button"
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="download-icon"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        />
      </svg>
      Download Resume
    </motion.button>
  );
};

export default DownloadButton;
