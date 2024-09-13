import React, { useState } from "react";
import "./project.css";
import "./Dark_project.css"

const projects = [
  {
    title: "To-Do List Application",
    description:
      "A full-stack To-Do List application built using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to efficiently manage their tasks with features like adding, editing, and deleting to-dos. It includes a responsive interface, real-time updates, and a secure backend, offering a seamless task management experience.",
    link: "https://github.com/Himanshu-Shukla1235/Todolist-",
    github: "https://github.com/Himanshu-Shukla1235/Todolist-",
    youtube: "https://www.youtube.com/watch?v=q2BbKMfsrKk&t=34s",
    image: "https://wallpaperaccess.com/full/1489353.jpg",
  },
  {
    title: "Nirwana",
    description:
      "Developed a web application for coal mining companies to optimize operations and reduce CO2 emissions using the MERN stack, blockchain, and machine learning. The platform provides data-driven insights and visualizes optimal pathways for minimizing environmental impact, leveraging secure data management with blockchain and predictive analytics through machine learning algorithms.",
    link: "https://example.com/project-three",
    github: "https://github.com/Himanshu-Shukla1235/SIH-2024",
    youtube: "https://github.com/Himanshu-Shukla1235/SIH-2024",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/09/full/1686274336-3509.jpg?im=FeatureCrop,size=(826,465)",
  },
  {
    title: "Our-Earth",
    description:
      "Created a social media platform that allows users to calculate their carbon footprint and share their sustainability efforts. The platform combines user-friendly tools for tracking daily activities with interactive features, enabling users to engage with a community focused on reducing environmental impact.",
    link: "https://example.com/project-four",
    github: "https://github.com/example/project-four",
    youtube: "https://youtube.com/example/project-four",
    image:
      "https://png.pngtree.com/background/20230613/original/pngtree-large-industrial-factory-with-smoke-coming-out-of-it-picture-image_3426220.jpg",
  },
  {
    title: "Project Five",
    description: "A brief description of project five.",
    link: "https://example.com/project-five",
    github: "https://github.com/example/project-five",
    youtube: "https://youtube.com/example/project-five",
    image:
      "https://emeritus.org/in/wp-content/uploads/sites/3/2023/01/What-is-machine-learning-Definition-types.jpg.optimal.jpg",
  },
];

const ProjectsPage = ({ isDarkMode }) => {
 

  return (
    <div className={isDarkMode ? "Dark_projects-page" : "projects-page"}>
      <h1>My Projects</h1>
      <div className={isDarkMode ? "Dark_projects-container" : "projects-container"}>
        {projects.map((project, index) => (
          <div key={index} className={isDarkMode ? "Dark_project-card" : "project-card"}>
            <img
              src={project.image}
              alt={project.title}
              className={isDarkMode ? "Dark_project-image" : "project-image"}
            />
            <h2 className={isDarkMode ? "Dark_project-title" : "project-title"}>
              {project.title}
            </h2>
            <p className={isDarkMode ? "Dark_project-description" : "project-description"}>
              {project.description}
            </p>
            <div className={isDarkMode ? "Dark_project-links" : "project-links"}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="GitHub"
                  className={isDarkMode ? "Dark_social-icon" : "social-icon"}
                />
              </a>
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
                  alt="YouTube"
                  className={isDarkMode ? "Dark_social-icon2" : "social-icon2"}
                />
              </a>
              <a href={project.link}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
