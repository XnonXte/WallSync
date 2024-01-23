import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/fonts.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// import "./styles/breakpoints.css"; // ! Tailwind breakpoints.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
