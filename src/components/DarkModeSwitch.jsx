import "../App.css";
import React, { useState, useEffect } from 'react';

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Switch to light theme" : "Switch to dark theme"}
    </button>
  );
}

export default DarkModeSwitch;