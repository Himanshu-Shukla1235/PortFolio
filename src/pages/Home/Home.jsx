import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Home.css"; // Import CSS file for styling
import Skills from "../Components/Home/Skills";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ProjectsPage from "../Components/Home/project";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="card1">
          <nav>
            <ul>
              <li>
              <HomeIcon style={{fontSize:'19px',marginBottom:'2.5px'}}></HomeIcon>
                <Link to="home" smooth={true} duration={20} offset={-90}>
                 Home
                </Link>
              </li>
              <li>
              <MilitaryTechIcon style={{fontSize:'19px',marginBottom:'2.5px'}}></MilitaryTechIcon>
                <Link to="Skills" smooth={true} duration={20} offset={-220}>
                  Skills
                </Link>
              </li>
              <li>
              <AppRegistrationIcon style={{fontSize:'19px',marginBottom:'2.5px'}}></AppRegistrationIcon>
                <Link to="Projects" smooth={true} duration={20}>
                  Projects
                </Link>
              </li>
              <li>

              <InfoIcon style={{fontSize:'19px',marginBottom:'2.5px'}}></InfoIcon>
                <Link to="about" smooth={true} duration={20}>
                  About
                </Link>
              </li>
              <li>
              <PhoneEnabledIcon style={{fontSize:'19px',marginBottom:'2.5px'}}></PhoneEnabledIcon>
                <Link to="contact" smooth={true} duration={20}>
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
            <div className="card_box1">
              {" "}
              <h1>Full-Stack Developer</h1>
              <p style={{}}>
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
          </div>
          <div className="side1">
            <div className="Dp"></div>
            <p style={{  }}>Himanshu Shukla</p>
            <div className="myinfo">
              <div className="my_coding_profiles"></div>
              <div className="mylogoes">
                <a href="" className="mylogoes_1"></a>
                <a href="" className="mylogoes_2"></a>
                <a href="" className="mylogoes_3"></a>
                <a href="" className="mylogoes_4"></a>
              </div>
            </div>
          </div>
        </section>
        <section className="codingProfiles">hello</section>
        <div className="thin-line3"></div>
        <section className="Skills">
          <div className="skills_">
            <h1>Skills</h1> <Skills></Skills>
          </div>
        </section>
        <div className="thin-line3"></div>
        <section id="Projects">
          <div className="project_sec">
           <div><ProjectsPage></ProjectsPage></div>
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
