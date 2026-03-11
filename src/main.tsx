import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router";
import Background from "./components/Background";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Background />
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
