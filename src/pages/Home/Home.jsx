import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
import "./Home_DarkMode.css";
import { DarkMode } from "@mui/icons-material";

const HomePage = () => {
  const [switchClass, setSwitchClass] = useState("small_switch");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSwitchClass("big_switch");
      } else {
        setSwitchClass("small_switch");
      }
    };

    // Set initial class name
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Determine the class name prefix based on the dark mode state
  const classNamePrefix = darkMode ? "Dark_" : "";

  return (
    <div className={`${classNamePrefix}homepage`}>
      <header className={`${classNamePrefix}homepage-header`}>
        <div style={{ color: "transparent" }}>logo</div>

        <div className={`${classNamePrefix}card1`}>
          <nav>
            <ul>
              <li style={{ cursor: "pointer" }}>
                <Link
                  to="home"
                  smooth={true}
                  duration={20}
                  offset={-90}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <HomeIcon
                    style={{
                      fontSize: "19px",
                      marginBottom: "2.5px",
                      marginRight: "5px",
                    }}
                  />
                  <span>Home</span>
                </Link>
              </li>

              <li style={{ cursor: "pointer" }}>
                <Link
                  to="Skills"
                  smooth={true}
                  duration={20}
                  offset={-220}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <MilitaryTechIcon
                    style={{
                      fontSize: "19px",
                      marginBottom: "2.5px",
                      marginRight: "5px",
                    }}
                  />
                  <span>Skills</span>
                </Link>
              </li>

              <li style={{ cursor: "pointer" }}>
                <Link
                  to="Projects__"
                  smooth={true}
                  duration={20}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <AppRegistrationIcon
                    style={{
                      fontSize: "19px",
                      marginBottom: "2.5px",
                      marginRight: "5px",
                    }}
                  />
                  <span>Projects</span>
                </Link>
              </li>

              <li style={{ cursor: "pointer" }}>
                <Link
                  to={`${classNamePrefix}about_page`}
                  smooth={true}
                  duration={20}
                  offset={-100}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <InfoIcon
                    style={{
                      fontSize: "19px",
                      marginBottom: "2.5px",
                      marginRight: "5px",
                    }}
                  />
                  <span>About</span>
                </Link>
              </li>

              <li style={{ cursor: "pointer" }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={20}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <PhoneEnabledIcon
                    style={{
                      fontSize: "19px",
                      marginBottom: "2.5px",
                      marginRight: "5px",
                    }}
                  />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-rightPart">
          {" "}
          <a className="codeforgesite" href="/#/code_forge"></a>{" "}
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
        </div>
      </header>

      <main className={`${classNamePrefix}homepage-main`}>
        <label className={switchClass}>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className={`${switchClass}slider`}></span>
        </label>
        <section className={`${classNamePrefix}intro`} id="home">
          <div className={`${classNamePrefix}card`}>
            <div className={`${classNamePrefix}card_box1`}>
              <h1>Software Engineer</h1>
              <p>
                Hello! I'm Himanshu Shukla, a passionate software engineer with
                a keen interest in solving complex problems through innovative
                coding solutions. With a strong foundation in mathematics and
                computing, I enjoy building efficient and scalable applications,
                leveraging modern technologies to create impactful software.
                <br />
                Beyond development, I thrive in the competitive programming
                space, constantly challenging myself to optimize algorithms and
                enhance my problem-solving skills. Whether it's through
                hackathons, coding contests, or collaborative projects, I'm
                driven by a relentless pursuit of learning and excellence in the
                tech world.
                <br />
                <br />
                Let's build something amazing together!
              </p>
              <div className={`${classNamePrefix}mern`}>
                <div className={`${classNamePrefix}mongo`}></div>
                <div className={`${classNamePrefix}expressjs`}></div>
                <div className={`${classNamePrefix}react`}></div>
                <div className={`${classNamePrefix}nodejs`}></div>
              </div>
            </div>
          </div>

          <div className={`${classNamePrefix}side1`}>
            <div className={`${classNamePrefix}Dp`}></div>
            <p>Himanshu Shukla</p>
            <div className={`${classNamePrefix}myinfo`}>
              <div className={`${classNamePrefix}my_inf`}>
                <li>B.Tech in Mathematics And Computing</li>
                <li>Under-Graduate</li>
                <li>4rd-year</li>
              </div>
              <div className={`${classNamePrefix}mylogoes`}>
                <Tooltip content="LinkedIn" position="top">
                  <a
                    href="https://www.linkedin.com/in/himanshu-shukla-444756251/"
                    className={`${classNamePrefix}mylogoes_1`}
                    style={{ display: "inline-block" }}
                  ></a>
                </Tooltip>

                <Tooltip content="GitHub" position="top">
                  <a
                    href="https://github.com/Himanshu-Shukla1235"
                    className={`${classNamePrefix}mylogoes_2`}
                    style={{ display: "inline-block" }}
                  ></a>
                </Tooltip>

                <Tooltip content="Other link 1" position="top">
                  <a
                    href="#"
                    className={`${classNamePrefix}mylogoes_3`}
                    style={{ display: "inline-block" }}
                  ></a>
                </Tooltip>

                <Tooltip content="Other link 2" position="top">
                  <a
                    href="#"
                    className={`${classNamePrefix}mylogoes_4`}
                    style={{ display: "inline-block" }}
                  ></a>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
        <section className={`${classNamePrefix}codingProfiles`}>
          <p id="mycp_title" style={{ fontFamily: "sans-serif" }}>
            My coding profiles:
          </p>
          <div className={`${classNamePrefix}codef`}>
            <a href="" className={`${classNamePrefix}codef_img`}></a>{" "}
            <p style={{ fontSize: "0.87em" }}>Codeforces :</p>{" "}
            <p id="maxr">Max-rating - 1170 </p>
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
          {/* <div className={`${classNamePrefix}leetc`}>
            {" "}
            <a href="" className={`${classNamePrefix}leetc_img`}></a>
            <p style={{ fontSize: "0.87em" }}>Leetcode :</p>{" "}
            <p id="maxr">Max-rating - 1600</p>
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
          </div> */}
        </section>
        <div className={`${classNamePrefix}thin-line3`}></div>
        <section className={`${classNamePrefix}Skills`}>
          <div className={`${classNamePrefix}skills_`}>
            <h1>Skills</h1> <Skills />
          </div>
        </section>
        <div className={`${classNamePrefix}thin-line3`}></div>
        <section id="Projects__">
          <div className={`${classNamePrefix}project_sec`}>
            <ProjectsPage isDarkMode={darkMode} />
          </div>
        </section>
        <div className={`${classNamePrefix}thin-line3`}></div>
        <section className={`${classNamePrefix}about_page`}>
          <AboutPage />
        </section>
      </main>

      <footer className={`${classNamePrefix}homepage-footer`}>
        <BoxAnimation />
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <BoxAnimation />
      </footer>
    </div>
  );
};

export default HomePage;
