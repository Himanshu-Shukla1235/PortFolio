import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Home.css"; // Import CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="card1">
          <nav>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="Projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="homepage-main">
        <section className="intro" id="home">
          <div className="card">
            <h1>Full-Stack Developer</h1>
            <p style={{ color: "white" }}>
              "Passionate Full Stack Developer crafting seamless, scalable web
              applications with a focus on user-centric design and robust
              backend solutions. Transforming ideas into digital experiences
              through cutting-edge technology and innovative problem-solving."
            </p>
            <div className="mern">
              <div className="mongo"></div>
              <div className="expressjs"></div>
              <div className="react"></div>
              <div className="nodejs"></div>
            </div>
          </div>
          <div className="side1">
            <div className="Dp"></div>
            <div className="myinfo">
              <p style={{ color: "white" }}>Himanshu Shukla</p>
            </div>
          </div>
        </section>
        <section id="Projects">
          <div className="card2">
            <div className="thin-line2"></div>
          </div>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
