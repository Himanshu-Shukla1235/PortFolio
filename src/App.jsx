import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import BoxAnimation from "./pages/Components/Additional/animatedBox.jsx";
import CodeForgeSite from "./pages/Codeforge/CodeF.jsx";
import PencilSVG from "./pages/Components/Additional/AnimatedPencil.jsx";
import Course1 from "./pages/Codeforge/CoarseNo/CourseNo1.jsx";
import "./App.css";

// Loader component
function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}

// Wrapper to show loader on route change
function RouteWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader for a short duration on every route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // 0.5s loader
    return () => clearTimeout(timer);
  }, [location.pathname]); // triggers on route change

  if (loading) {
    return <PencilSVG />;
  }

  return children;
}

function App() {
  return (
    <HashRouter>
      <RouteWrapper>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ani" element={<BoxAnimation />} />
            <Route path="/code_forge" element={<CodeForgeSite />} />
              <Route path="/course01" element={<Course1 />} />
            <Route path="*" element={<ErrorPage />} />
            
          </Routes>
        </main>
      </RouteWrapper>
    </HashRouter>
  );
}

export default App;
