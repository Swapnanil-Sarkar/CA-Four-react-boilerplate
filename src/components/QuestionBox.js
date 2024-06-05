// QuestionBox.js

import React, { useState } from "react";
import questions from "../questions";
import Result from "./Result";
import "./QuestionBox.css";

export default function QuestionBox(props) {
  const { color, theme } = props; // Destructure the theme prop
  const [highlightedQuestion, setHighlightedQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionClick = (event) => {
    const selectedOption = event.target.value;
    setScore(selectedOption === "true" ? score + 1 : score);
    setCurrentQuestion(currentQuestion + 1);
  };

  const toggleHighlight = (shouldHighlight) => {
    setHighlightedQuestion(shouldHighlight);
  };

  const renderQuestion = () => {
    const currentQues = questions[currentQuestion];
    const questionClass = highlightedQuestion ? "highlighted-question" : "";

    return (
      <div className={`question-box ${theme === "light" ? "light-theme" : "dark-theme"}`}>
        <h2>Question: {currentQuestion + 1} out of 5</h2>
        <h3 className={`question-text ${questionClass}`}>{currentQues.text}</h3>
        <div className="options-box">
          {currentQues.options.map((option) => (
            <button
              className="option"
              key={option.id}
              value={option.isCorrect}
              onClick={handleOptionClick}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="highlight-btn-container">
          <button className="highlight-btn" onClick={() => toggleHighlight(true)}>
            Highlight
          </button>
          <button className="highlight-btn" onClick={() => toggleHighlight(false)}>
            Remove Highlight
          </button>
        </div>
      </div>
    );
  };

  return <>{currentQuestion < 5 ? renderQuestion() : <Result props={[score, color]} />}</>;
}
