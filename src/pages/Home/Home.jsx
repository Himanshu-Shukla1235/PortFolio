import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Home.css"; // Import CSS file for styling
import Skills from "../Components/Home/Skills";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ProjectsPage from "../Components/Home/project";
import ContactPage from "../Components/Home/contactPage";
import AboutPage from "../Components/Home/aboutPage";
import Tooltip from "../Components/Additional/toolTip.jsx";
import BoxAnimation from "../Components/Additional/animatedBox.jsx";
import Gearbox from "../Components/Additional/animation2.jsx";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="card1">
          <nav>
            <ul>
              <li>
                <HomeIcon
                  style={{ fontSize: "19px", marginBottom: "2.5px" }}
                ></HomeIcon>
                <Link to="home" smooth={true} duration={20} offset={-90}>
                  Home
                </Link>
              </li>
              <li>
                <MilitaryTechIcon
                  style={{ fontSize: "19px", marginBottom: "2.5px" }}
                ></MilitaryTechIcon>
                <Link to="Skills" smooth={true} duration={20} offset={-220}>
                  Skills
                </Link>
              </li>
              <li>
                <AppRegistrationIcon
                  style={{ fontSize: "19px", marginBottom: "2.5px" }}
                ></AppRegistrationIcon>
                <Link to="Projects" smooth={true} duration={20}>
                  Projects
                </Link>
              </li>
              <li>
                <InfoIcon
                  style={{ fontSize: "19px", marginBottom: "2.5px" }}
                ></InfoIcon>
                <Link to="about_page" smooth={true} duration={20} offset={-100}>
                  About
                </Link>
              </li>
              <li>
                <PhoneEnabledIcon
                  style={{ fontSize: "19px", marginBottom: "2.5px" }}
                ></PhoneEnabledIcon>
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
              <h1>Software Engineer </h1>
              <p style={{}}>
                Hello! I'm Himanshu Shukla, a passionate software engineer with
                a keen interest in solving complex problems through innovative
                coding solutions. With a strong foundation in mathematics and
                computing, I enjoy building efficient and scalable applications,
                leveraging modern technologies to create impactful software.
                <br></br>
                Beyond development, I thrive in the competitive programming
                space, constantly challenging myself to optimize algorithms and
                enhance my problem-solving skills. Whether it's through
                hackathons, coding contests, or collaborative projects, I'm
                driven by a relentless pursuit of learning and excellence in the
                tech world.
                <br></br>
                <br></br>
                Let's build something amazing together!
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
            <p style={{}}>Himanshu Shukla</p>
            <div className="myinfo">
              <div className="my_inf">
                <li>B.Tech in Mathematics And Computing</li>
                <li>under-Graduate</li>
                <li>3rd-year</li>
              </div>
              <div className="mylogoes">
                <Tooltip content="LinkedIn" position="top">
                  <a
                    href="https://www.linkedin.com/in/himanshu-shukla-444756251/"
                    className="mylogoes_1"
                    style={{ display: "inline-block" }} // Ensure the element is visible
                  ></a>
                </Tooltip>

                <Tooltip content="GitHub" position="top">
                  <a
                    href="https://github.com/Himanshu-Shukla1235"
                    className="mylogoes_2"
                    style={{ display: "inline-block" }} // Ensure the element is visible
                  ></a>
                </Tooltip>

                <Tooltip content="Other link 1" position="top">
                  <a
                    href="#"
                    className="mylogoes_3"
                    style={{ display: "inline-block" }} // Ensure the element is visible
                  ></a>
                </Tooltip>

                <Tooltip content="Other link 2" position="top">
                  <a
                    href="#"
                    className="mylogoes_4"
                    style={{ display: "inline-block" }} // Ensure the element is visible
                  ></a>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
        <section className="codingProfiles">
          <p id="mycp_title" style={{ fontFamily: "sans-serif" }}>
            My coding profiles :
          </p>{" "}
          <div className="codef">
            <a href="" className="codef_img"></a>Codeforces :{" "}
            <p id="maxr">Max-raing - 1100 </p>
            <a href="" style={{ textDecoration: "none" }}>
              <p
                id="maxrc"
                style={{ marginLeft: "1em", textDecoration: "none" }}
              >
                {" "}
                Check-Out
              </p>
            </a>
          </div>
          <div className="leetc">
            {" "}
            <a href="" className="leetc_img"></a>Leetcode :{" "}
            <p id="maxr">Max-raing - 1600</p>
            <a
              href="https://leetcode.com/u/Himanshu_Shukla___/"
              style={{ textDecoration: "none" }}
            >
              <p
                id="maxrc"
                style={{ marginLeft: "1em", textDecoration: "none" }}
              >
                {" "}
                Check-Out
              </p>
            </a>
          </div>
        </section>
        <div className="thin-line3"></div>
        <section className="Skills">
          <div className="skills_">
            <h1>Skills</h1> <Skills></Skills>
          </div>
        </section>
        <div className="thin-line3"></div>
        <section id="Projects">
          <div className="project_sec">
            <div>
              <ProjectsPage></ProjectsPage>
            </div>
          </div>
        </section>
        <div className="thin-line3"></div>
        <section className="about_page">
          {" "}
          <AboutPage></AboutPage>
        </section>
      </main>

      <footer className="homepage-footer">
      <BoxAnimation></BoxAnimation>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <BoxAnimation></BoxAnimation>
      </footer>
    </div>
  );
};

export default HomePage;
