// 导入 React 库
import React, { Suspense } from "react";
import "./style/App.css";
import HomePage from "./components/HomePage";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";

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
