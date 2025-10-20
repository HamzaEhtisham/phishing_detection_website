import React, { useEffect, useState } from "react";
import UserPanel from "../components/UserPanel";
import { useNavigate } from "react-router-dom";

export default function UserPanelPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProgress = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect to login if no token
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:5000/user_progress", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            navigate("/login"); // Token expired or invalid
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const transformedTopics = data.map(attempt => ({
          id: attempt.topic, // Using topic as ID for now
          title: attempt.topic,
          attempted: true,
          score: `${attempt.score}`, // Displaying score as is, as totalQuestions is not available
        }));
        setTopics(transformedTopics);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [navigate]);

  if (loading) {
    return <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex items-center justify-center">Loading user progress...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex items-center justify-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Your Progress</h1>
        <UserPanel topics={topics} />
      </div>
    </div>
  );
}
