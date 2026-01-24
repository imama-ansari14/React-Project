import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NavigationBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      {/* your navbar links */}
      <button
        onClick={toggleTheme}
        className="btn btn-theme-toggle"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default NavigationBar;
