import React from "react";
import "../style/Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-inner">
        <div className="loading-ring loading-ring--outer" />
        <div className="loading-ring loading-ring--mid" />
        <div className="loading-initials">JC</div>
      </div>
      <p className="loading-label">Loading</p>
    </div>
  );
};

export default Loading;
