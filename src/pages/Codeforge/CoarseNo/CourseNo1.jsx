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
      <div className="course-questions-page-sunAnim">
        <SunAnimate />
      </div>

      <h1 className="page-title">💻 Coding Practice Questions</h1>

      <div className="selectors">
        <select
          className="dropdown"
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
          className="dropdown"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="question-list">
        <h2 className="question-heading">
          {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level
          Questions
        </h2>

        <ul className="question-items">
          {questions.map((q) => (
            <li key={q.id} className="question-card">
              <div className="question-title">
                <a
                  href={q.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="question-link"
                >
                  {q.title}
                </a>

                {q.platform && (
                  <span className="question-platform">({q.platform})</span>
                )}
              </div>

              {q.solution && (
                <a
                  href={q.solution}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solution-btn"
                >
                  🔗 View Solution
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course1;
