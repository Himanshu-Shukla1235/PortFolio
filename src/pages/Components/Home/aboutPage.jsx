// src/AboutPage.js
import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling
import myImage from '../../../assets/my_img.jpg'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src={myImage} // Replace with your image URL
          alt="About"
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hello! I'm [Your Name], a passionate developer with a keen interest in web development and software engineering. 
            I enjoy creating responsive and user-friendly web applications using modern technologies like React, Node.js, and more.
          </p>
          <p>
            I have a background in Mathematics and Computing, which provides me with a strong foundation in problem-solving and logical thinking.
            Apart from coding, I have skills in video editing, design, and working with platforms like AWS and Web 3.
          </p>
          <p>
            My journey in technology started early, and I've since been involved in various projects that challenge me to grow and learn continuously.
            I'm always excited to take on new challenges and collaborate with others to bring creative ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
