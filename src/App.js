// App.js
import React, { useState, useEffect } from "react";
import "./App.css"; // Import the corresponding CSS file
import QuestionBox from "./components/QuestionBox";

function App() {
  const [theme, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("Light");

  const background = {
    background: theme ? "#e7eaf6" : "#222831",
    color: theme ? "black" : "white",
    width: "100vw",
    height: "100vh",
  };

  useEffect(() => {
    setThemeName(theme ? "Light" : "Dark");
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(!theme);
  };

  return (
    <div style={background} className="container">
      <div className="header">
        <h1>Kalvium</h1>
        <h2>Quiz</h2>
        <button onClick={handleThemeToggle} className="themeBtn">
          {themeName}
        </button>
      </div>
      <QuestionBox props={theme} />
    </div>
  );
}

export default App;
