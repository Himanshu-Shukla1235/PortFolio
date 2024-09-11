import React from "react";
import "./Skills.css"; // Optional: For custom styling

const skillsData = {
  "Programming Languages": [
    "C",
    "C++",
    "Python",
    "HTML/CSS",
    "JavaScript",
    "SQL",
    "TypeScript",
  ],
  "Frameworks and Tools": [
    "Git",
    "GitHub",
    "Node.js",
    "Express.js",
    "React.js",
    "MongoDB",
    "Mongoose",
    "Docker",
    "AWS",
  ],
  "Operating Systems and Platforms": [
    "Windows",
    "Linux",
    "VSCode",
    "Google Cloud",
    "MongoDB Atlas",
    "Heroku",
  ],
  "Key Concepts": [
    "RESTful APIs",
    "Web Development",
    "Cloud Computing",
    "DevOps",
    "CI/CD",
    "Web 3",
  ],
  "Soft Skills": [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Critical Thinking",
    "Time Management",
    "Leadership",
  ],
};

const Skills = () => {
  return (
    <section id="Skills" className="skills-section">
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            
            <ul>
              {skills.map((skill) => (
                <>
                  {" "}
                  <li key={skill}>{skill}</li>
                </>
              ))}
            </ul>
        
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;
