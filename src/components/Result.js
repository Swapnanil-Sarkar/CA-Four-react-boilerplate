
// Result.js

import React from "react";
import "./QuestionBox.css";

// Function component for displaying quiz results
export default function Result(props) {
  // Destructure props
  const [result,] = props.props;

  // Event handler for restarting the game
  const handleRestart = () => {
    window.location.reload(); // Reload the page
  };

  // Render the result
  return (
    <div className="result-box">
      <h1>Final Results</h1>
      <h2>
        {result} out of 5 correct - {(result / 5) * 100}.00%
      </h2>
      <button className="restart-btn" onClick={handleRestart}>
        Restart game
      </button>
    </div>
  );
}
