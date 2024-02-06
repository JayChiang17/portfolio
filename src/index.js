import React from "react";
import ReactDOM from "react-dom/client"; // React 18 的写法
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 使用 BrowserRouter 包裹整个应用 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
