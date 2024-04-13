// 导入 React 库和 Router 相关组件
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "../src/style/App.css";
import HomePage from "../src/components/HomePage";

// 定义 App 组件
export default function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}
