import React, { useState } from "react";
import "./CourseNo1.css";
import codingQuestions from "./codingQuestionsData";
import SunAnimate from "../../Components/Additional/sunAnim";

const Course1 = () => {
  const topics = Object.keys(codingQuestions);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedLevel, setSelectedLevel] = useState("easy");

  // Store doubt counts (per question)
  const [doubtCounts, setDoubtCounts] = useState({});

  const questions = codingQuestions[selectedTopic][selectedLevel];

  // Increment doubt count
  const addDoubt = (id) => {
    setDoubtCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Decrement doubt count
  const removeDoubt = (id) => {
    setDoubtCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  };

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
              <div className="question-left">
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
              </div>

              <div className="doubt-section">
                <button
                  className="doubt-btn add"
                  onClick={() => addDoubt(q.id)}
                >
                  ➕ Doubt
                </button>

                <span className="doubt-count">
                  {doubtCounts[q.id] || 0} people
                </span>

                <button
                  className="doubt-btn undo"
                  onClick={() => removeDoubt(q.id)}
                  disabled={(doubtCounts[q.id] || 0) === 0}
                >
                  🔙 Undo
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course1;
