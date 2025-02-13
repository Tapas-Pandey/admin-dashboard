import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ darkMode }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-4a6c6f"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2
        className={`text-3xl font-bold ${
          darkMode ? "text-white" : "text-1a2a32"
        } mb-6`}
      >
        Users
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h3 className="text-xl font-bold mb-2">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
