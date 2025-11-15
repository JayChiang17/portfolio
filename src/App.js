// 导入 React 库和 Router 相关组件
import React, { Suspense } from "react";
import { HashRouter as Router } from "react-router-dom";
import "../src/style/App.css";
import HomePage from "../src/components/HomePage";
import ErrorBoundary from "../src/components/ErrorBoundary";
import Loading from "../src/components/Loading";

// 定义 App 组件
export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </ErrorBoundary>
  );
}
