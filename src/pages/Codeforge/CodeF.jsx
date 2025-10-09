import React, { useState, useEffect } from "react";
import "./CodeF.css";
import logo from "../../assets/codef.svg"; // Your logo path

const typingLines = [
  "Code your way to success!",
  "Stay motivated, keep learning!",
  "Be creative with every problem!",
  "Innovate, implement, improve!",
];

const CodeForgeSite = () => {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // ms per character
    const delayBetweenLines = 1200; // pause before next sentence

    const timeout = setTimeout(() => {
      const currentLine = typingLines[lineIndex];
      if (charIndex < currentLine.length) {
        setDisplayText((prev) => prev + currentLine.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setLineIndex((lineIndex + 1) % typingLines.length);
        }, delayBetweenLines);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);
  const coursesData = [
    {
      name: "DSA Unlocked",
      description: "Learn DSA from scratch with examples and exercises.",
      price: "₹800 / Month",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJoehktbx7ZSKHAZ4jDJ69LW712P1V3R6DjfR7ocEJcMsDq_5QuGxHKnbbmLEQrkaKT8&usqp=CAU",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScsXB5Luxs4JWCvQ0wvqtw4jU-1FzLeclPkz7LmqohlwH9PsQ/viewform?usp=header",
    },
    {
      name: "Advanced DSA",
      description: "In-depth problems on Trees, Graphs, and DP.",
      price: "₹500 / Month",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-iPr0Qv6JwxRRWCPV24NEUnMyfwRIq1F6A&s",
      link: "#",
    },
    {
      name: "Competitive Programming",
      description: "Practice for contests with curated problems.",
      price: "₹1000 / Month",
      image:
        "https://thumbs.dreamstime.com/b/focused-programmer-deeply-involved-coding-software-computer-dressed-yellow-hoodie-sporting-orange-glasses-377776536.jpg",
      link: "#",
    },
  ];

  const notesData = [
    {
      title: "Array Basics",
      description: "Introduction to arrays, operations, and complexity.",
      link: "#",
    },
    {
      title: "Linked List",
      description: "Singly, doubly linked lists and common problems.",
      link: "#",
    },
    {
      title: "Stack & Queue",
      description: "Implementations and applications in DSA problems.",
      link: "#",
    },
    {
      title: "Sorting Algorithms",
      description: "Bubble, Selection, Insertion, Merge, Quick sort.",
      link: "#",
    },
    {
      title: "Recursion",
      description: "Recursive patterns and problem-solving techniques.",
      link: "#",
    },
  ];

  return (
    <div className="codeforge-container">
      {/* Header with Logo + Typing Animation */}
      <div className="codef-logo-box">
        {" "}
        <div className="codeforge-logo1" />
      </div>

      <header className="codeforge-header">
        <div className="codeforge-logo" />
        <h1 className="header-title">
          {displayText}
          <span className="cursor">|</span>
        </h1>
      </header>

      {/* Courses Section */}
      <section className="courses-section">
        <h2 className="section-header">My Courses</h2>
        <div className="courses-list">
          {coursesData.map((course, idx) => (
            <div key={idx} className="course-card">
              <img
                src={course.image}
                alt={course.name}
                className="course-image"
              />
              <div className="course-content">
                <h3 className="course-title">{course.name}</h3>
                <p className="course-description">{course.description}</p>
                <p className="course-price">{course.price}</p>
                <a
                  href={course.link}
                  className="course-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Access Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notes Section */}
      <section className="notes-section">
        <h2 className="section-header">DSA Notes & Lectures</h2>
        <div className="notes-list">
          {notesData.map((note, idx) => (
            <div key={idx} className="note-card">
              <h3 className="note-title">{note.title}</h3>
              <p className="note-description">{note.description}</p>
              <a
                href={note.link}
                className="note-link"
                target="_blank"
                rel="noreferrer"
              >
                Access Lecture / Notes
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CodeForgeSite;
