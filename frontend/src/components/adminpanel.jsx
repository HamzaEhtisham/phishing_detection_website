import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [quizAttempts, setQuizAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      const token = localStorage.getItem("token"); // Use 'token' key
      if (!token) {
        // Should ideally not happen if AdminRoute is working, but good for robustness
        navigate("/login");
        return;
      }

      try {
        const usersResponse = await axios.get(
          "http://127.0.0.1:5000/admin/users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers(usersResponse.data);

        const quizAttemptsResponse = await axios.get(
          "http://127.0.0.1:5000/admin/quiz_attempts",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setQuizAttempts(quizAttemptsResponse.data);
      } catch (err) {
        console.error("Failed to fetch admin data", err);
        setError("Failed to load admin data. Please try again.");
        // Optionally, log out or redirect if token is invalid
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
        Loading admin data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-slate-100 p-6">
      <div className="max-w-4xl mx-auto bg-slate-800/60 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center text-white">
          Admin Panel
        </h2>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-indigo-400 border-b border-indigo-400 pb-2">
            Users
          </h3>
          {users.length === 0 ? (
            <p className="text-slate-400">No users found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-slate-700/40 rounded-lg p-4 shadow-md"
                >
                  <p className="text-lg font-medium">
                    Username:{" "}
                    <span className="text-white">{user.username}</span>
                  </p>
                  <p className="text-slate-300">
                    Email: <span className="text-white">{user.email}</span>
                  </p>
                  <p className="text-slate-300">
                    Role: <span className="text-white">{user.role}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400 border-b border-emerald-400 pb-2">
            Quiz Attempts
          </h3>
          {quizAttempts.length === 0 ? (
            <p className="text-slate-400">No quiz attempts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizAttempts.map((attempt, index) => (
                <div
                  key={index}
                  className="bg-slate-700/40 rounded-lg p-4 shadow-md"
                >
                  <p className="text-lg font-medium">
                    Username:{" "}
                    <span className="text-white">{attempt.username}</span>
                  </p>
                  <p className="text-slate-300">
                    Topic: <span className="text-white">{attempt.topic}</span>
                  </p>
                  <p className="text-slate-300">
                    Score: <span className="text-white">{attempt.score}</span>
                  </p>
                  <p className="text-slate-300">
                    Date:{" "}
                    <span className="text-white">
                      {new Date(attempt.date).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
