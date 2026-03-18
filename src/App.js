import React, { Suspense } from "react";
import "./style/App.css";
import HomePage from "./components/HomePage";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <ErrorBoundary>
      <CustomCursor />
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </ErrorBoundary>
  );
}
