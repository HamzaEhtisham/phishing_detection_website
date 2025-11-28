import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PhishingSimulator from "./pages/PhishingSimulator";
import UserPanelPage from "./pages/UserPanelPage"; // Changed import
import AdminPanel from "./components/adminpanel";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import Topics from "./pages/Topics";
import SubTopics from "./pages/SubTopics";
import PhishingDetector from "./pages/PhishingDetector";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topicId" element={<SubTopics />} />
        <Route path="/simulator/:topicId/:subTopicId?" element={<PhishingSimulator />} />
        <Route path="/user-panel" element={<UserPanelPage />} /> {/* Changed component */}
        <Route path="/detect" element={<PhishingDetector />} />
      </Route>

      <Route element={<AdminRoute />}>
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
