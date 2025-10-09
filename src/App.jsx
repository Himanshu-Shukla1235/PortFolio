// src/App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./App.css";
import BoxAnimation from "./pages/Components/Additional/animatedBox.jsx";
import CodeForgeSite from "./pages/Codeforge/CodeF.jsx";

function App() {
  return (
    <HashRouter>
      {" "}
      {/* Use HashRouter for GitHub Pages compatibility */}
      <header>{/* Header content (e.g., navigation) if needed */}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ani" element={<BoxAnimation />} />
          <Route path="/code_forge" element={<CodeForgeSite />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
