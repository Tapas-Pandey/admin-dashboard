import React from "react";

const Sidebar = ({ activeTab, setActiveTab, darkMode }) => {
  return (
    <aside className={`sidebar w-64 p-4 min-h-screen`}>
      <nav>
        <ul>
          <li className="mb-4">
            <button
              onClick={() => setActiveTab("users")}
              className={`btn-nature w-full text-left ${
                activeTab === "users" ? "bg-3d5a5f" : ""
              }`}
            >
              <span className="mr-2">👤</span>
              Users
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("posts")}
              className={`btn-nature w-full text-left ${
                activeTab === "posts" ? "bg-3d5a5f" : ""
              }`}
            >
              <span className="mr-2">📝</span>
              Posts
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
