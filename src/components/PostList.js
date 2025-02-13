import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = ({ darkMode }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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
        Posts
      </h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
