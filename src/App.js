import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import PostList from "./components/PostList";

const App = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : "light"}`}>
      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
        />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "users" && <UserList darkMode={darkMode} />}
          {activeTab === "posts" && <PostList darkMode={darkMode} />}
        </main>
      </div>
    </div>
  );
};

export default App;
