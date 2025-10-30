import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { ShieldCheck, Cpu } from "lucide-react";

export default function PhishingHome() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <header className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Phishing Detection & Simulator
            </h1>
            <p className="mt-1 text-slate-300">
              Choose one of the options below to either detect phishing or
              simulate phishing scenarios.
            </p>
          </div>
          <div className="text-sm text-slate-400 flex items-center gap-4"> {/* Added flex and gap for button */}
            Welcome — quick actions
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-xl bg-gradient-to-b from-slate-700/40 to-slate-700/20 p-6 flex flex-col justify-between border border-slate-700/40">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-900/40">
                <ShieldCheck size={36} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Phishing Detection</h2>
                <p className="mt-2 text-slate-300">
                  Upload an email or paste a URL/text and the detector will
                  analyze it for phishing signals using ML/rules.
                </p>
                <ul className="mt-3 text-slate-400 list-disc pl-5 space-y-1 text-sm">
                  <li>Scan URLs, email headers, and message body</li>
                  <li>Shows risk score and flagged indicators</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                to="/detect"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-medium"
              >
                Open Detector
              </Link>
              <button className="text-sm text-slate-400 hover:text-slate-200">
                Learn more →
              </button>
            </div>
          </section>

          <section className="rounded-xl bg-gradient-to-b from-slate-700/40 to-slate-700/20 p-6 flex flex-col justify-between border border-slate-700/40">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-900/40">
                <Cpu size={36} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Phishing Simulator</h2>
                <p className="mt-2 text-slate-300">
                  Create phishing campaign simulations to train users: craft
                  fake emails, schedule deliveries, and collect simulated
                  responses.
                </p>
                <ul className="mt-3 text-slate-400 list-disc pl-5 space-y-1 text-sm">
                  <li>Template-based email composer</li>
                  <li>Scheduling, tracking, and reporting</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                to="/topics"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition font-medium"
              >
                Open Simulator
              </Link>
              <button className="text-sm text-slate-400 hover:text-slate-200">
                Docs & Tips
              </button>
            </div>
          </section>
        </main>

        <footer className="mt-8 text-center text-slate-400 text-sm">
          Tip: connect your detection model and simulator backend to these
          routes.
        </footer>
      </div>
    </div>
  );
}
