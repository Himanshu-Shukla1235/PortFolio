import React from "react";
import "./project.css"; // Make sure the CSS file is named correctly

const projects = [
 
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "https://example.com/project-two",
    github: "https://github.com/example/project-two",
    youtube: "https://youtube.com/example/project-two",
    image: "https://wallpaperaccess.com/full/1489353.jpg", // Replace with your project image
  },
  {
    title: "Project Three",
    description: "A brief description of project three.",
    link: "https://example.com/project-three",
    github: "https://github.com/example/project-three",
    youtube: "https://youtube.com/example/project-three",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/09/full/1686274336-3509.jpg?im=FeatureCrop,size=(826,465)", // Replace with your project image
  },
  {
    title: "Project Four",
    description: "A brief description of project four.",
    link: "https://example.com/project-four",
    github: "https://github.com/example/project-four",
    youtube: "https://youtube.com/example/project-four",
    image:
      "https://png.pngtree.com/background/20230613/original/pngtree-large-industrial-factory-with-smoke-coming-out-of-it-picture-image_3426220.jpg", // Replace with your project image
  },
  {
    title: "Project Five",
    description: "A brief description of project five.",
    link: "https://example.com/project-five",
    github: "https://github.com/example/project-five",
    youtube: "https://youtube.com/example/project-five",
    image: "https://emeritus.org/in/wp-content/uploads/sites/3/2023/01/What-is-machine-learning-Definition-types.jpg.optimal.jpg", // Replace with your project image
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              style={{ height: "" }}
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="GitHub"
                  className="social-icon"
                />
              </a>
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
                  alt="YouTube"
                  className="social-icon"
                />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
