import React, { useState } from "react";
import "./CourseNo1.css";
import codingQuestions from "./codingQuestionsData";
import SunAnimate from "../../Components/Additional/sunAnim";


const Course1 = () => {
  const topics = Object.keys(codingQuestions);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedLevel, setSelectedLevel] = useState("easy");

  const questions = codingQuestions[selectedTopic][selectedLevel];

  return (
    <div className="code-questions-page">
    <div className="course-questions-page-sunAnim"> <SunAnimate></SunAnimate></div>
   
      <h1>Coding Practice Questions</h1>

      <div className="selectors">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="question-list">
        <h2>
          {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}{" "}
          Questions
        </h2>
        <ul>
          {questions.map((q) => (
            <li key={q.id}>
              <a href={q.link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"black"}}>
                {q.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course1;
