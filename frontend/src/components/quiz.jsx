// ✅ src/components/QuizModal.jsx
import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  phishingQuizTopics,
  phishingAttackCategories,
} from "../data/phishingQuizData";

export default function QuizModal({ onClose }) {
  const [activeTopic, setActiveTopic] = useState(null);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({});
  const [page, setPage] = useState(1); // Page 1 = What is Phishing, Page 2 = Phishing Attacks

  // Combine quiz sets based on page
  const topicList =
    page === 1
      ? phishingQuizTopics.map((t) => ({
          ...t,
          total: t.questions.length,
        }))
      : phishingAttackCategories.flatMap((cat) =>
          cat.subtopics.map((s) => ({
            title: `${cat.title} — ${s.name}`,
            questions: s.questions,
            total: s.questions.length,
          }))
        );

  // Choose or toggle answer
  function toggleAnswer(qIdx, choice) {
    setAnswers((a) => ({ ...a, [qIdx]: choice }));
  }

  // Submit current topic quiz
  function handleSubmit() {
    let score = 0;
    activeTopic.questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) score++;
    });

    setScores((s) => ({
      ...s,
      [activeTopic.title]: { score, total: activeTopic.questions.length },
    }));

    setActiveTopic(null);
    setAnswers({});
  }

  // Page switch
  function switchPage() {
    setPage((p) => (p === 1 ? 2 : 1));
    setActiveTopic(null);
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl p-6 text-white overflow-hidden">
        {!activeTopic ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">
                {page === 1
                  ? "Quizzes — What is Phishing"
                  : "Quizzes — Phishing Attacks"}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={switchPage}
                  className="px-3 py-1 text-sm bg-slate-700 hover:bg-slate-600 rounded-md"
                >
                  {page === 1 ? "Next Page →" : "← Previous Page"}
                </button>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white text-xl leading-none"
                >
                  ✕
                </button>
              </div>
            </div>

            <p className="text-slate-400 mb-4 text-sm">
              Choose a topic below to start the quiz.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[65vh] overflow-auto pr-2">
              {topicList.map((topic, i) => {
                const status = scores[topic.title];
                const attempted = !!status;
                const scoreText = attempted
                  ? `Score: ${status.score}/${status.total}`
                  : "Not attempted";

                return (
                  <div
                    key={i}
                    className="bg-slate-800/60 rounded-xl p-4 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Questions: {topic.total}
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          attempted
                            ? "text-emerald-400"
                            : "text-slate-500 italic"
                        }`}
                      >
                        {scoreText}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTopic(topic)}
                      className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium"
                    >
                      {attempted ? "Retake" : "Attempt"}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {/* QUIZ VIEW */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Quiz: {activeTopic.title}
              </h2>
              <button
                onClick={() => setActiveTopic(null)}
                className="text-slate-400 hover:text-white"
              >
                ← Back
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-auto pr-2">
              {activeTopic.questions.map((q, i) => (
                <div key={i} className="bg-slate-800/40 p-4 rounded-lg">
                  <div className="font-medium mb-2">
                    {i + 1}. {q.question}
                  </div>
                  <div className="grid gap-2">
                    {q.options.map((c, j) => (
                      <button
                        key={j}
                        onClick={() => toggleAnswer(i, j)}
                        className={`text-left px-3 py-2 rounded-md border transition ${
                          answers[i] === j
                            ? "border-emerald-500 bg-emerald-800/30"
                            : "border-slate-700 hover:border-slate-500"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveTopic(null)}
                className="px-4 py-2 rounded-lg border border-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
