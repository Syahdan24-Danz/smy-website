import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/output.css";
import { ThemeProvider } from "./ui/components/themeSwitcher.jsx";
import Project from "./features/project.jsx";
import Contact from "./features/contact.jsx";
import MainPage from "./features/main.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/ContactMe" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
