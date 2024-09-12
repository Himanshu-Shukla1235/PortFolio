// src/App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./App.css";
import BoxAnimation from "./pages/Components/Additional/animatedBox.jsx";

function App() {
  return (
    <HashRouter> {/* Use HashRouter for GitHub Pages compatibility */}
      <header>
        {/* Header content (e.g., navigation) if needed */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ani" element={<BoxAnimation />} /> {/* Ensure path is correct */}
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for 404 errors */}
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
