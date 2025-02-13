import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`${
        darkMode ? "bg-3d5a5f" : "bg-4a6c6f"
      } p-6 text-center text-white`}
    >
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="btn-nature mt-4"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
