import React from "react";
import "../style/Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
