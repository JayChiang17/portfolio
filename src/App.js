import React, { Suspense, useState, useEffect } from "react";
import "./style/App.css";
import HomePage from "./components/HomePage";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <ErrorBoundary>
      <CustomCursor />
      <ScrollProgress />
      <Suspense fallback={<Loading />}>
        <HomePage isDark={isDark} toggleTheme={toggleTheme} />
      </Suspense>
    </ErrorBoundary>
  );
}
