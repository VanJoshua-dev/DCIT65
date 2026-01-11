import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const questions = [
  {
    q: "Is it acceptable to submit AI-generated code without understanding it?",
    choices: [
      "Yes, if it works",
      "Yes, if no one notices",
      "No, you must understand and disclose it",
      "Only for big projects",
    ],
    answer: 2,
  },
  {
    q: "When can you share your completed assignment with a classmate?",
    choices: [
      "Anytime",
      "Only after submission is closed",
      "Before the deadline",
      "Never, even after grading",
    ],
    answer: 1,
  },
  {
    q: "What should you do if you're unsure about academic integrity rules?",
    choices: [
      "Ignore them",
      "Ask your instructor",
      "Copy a classmate",
      "Use AI secretly",
    ],
    answer: 1,
  },
];

export default function IntegrityQuizModal({ isOpen, onClose }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) {
      localStorage.setItem(
        "integrityQuizResult",
        JSON.stringify({ score, total: questions.length })
      );
    }
  }, [finished, score]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[current].answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const progress = ((current + 1) / questions.length) * 100;

  const suggestion =
    score === questions.length
      ? "Excellent! You demonstrate strong academic integrity awareness."
      : score >= 2
      ? "Good job! Review integrity rules to strengthen your understanding."
      : "You should review academic integrity policies carefully.";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center text-white justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-2xl bg-[#020617] border border-white/20 rounded-2xl p-6"
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            <X size={22} />
          </button>

          {!finished ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-white">
                  Quick Integrity Check
                </h1>
                <p className="text-gray-300 text-sm">
                  Answer honestly before proceeding.
                </p>
              </div>

              {/* Progress */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                <motion.div
                  className="h-full"
                  style={{
                    background: "linear-gradient(90deg, #22c55e, #38bdf8)",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>

              {/* Question */}
              <h2 className="text-lg font-semibold text-white mb-5">
                {questions[current].q}
              </h2>

              {/* Choices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[current].choices.map((choice, i) => {
                  const isCorrect = i === questions[current].answer;
                  const isSelected = i === selected;

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={`text-left cursor-pointer cursor-target p-4 rounded-xl border transition
                        ${
                          selected !== null
                            ? isCorrect
                              ? "border-green-400 bg-green-400/10"
                              : isSelected
                              ? "border-red-400 bg-red-400/10"
                              : "border-white/20"
                            : "border-white/20 hover:border-sky-400"
                        }
                      `}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {selected !== null && (
                <p className="mt-4 font-semibold">
                  {selected === questions[current].answer ? (
                    <span className="text-green-400">Correct!</span>
                  ) : (
                    <span className="text-red-400">Incorrect.</span>
                  )}
                </p>
              )}

              {/* Next */}
              {selected !== null && (
                <button
                  onClick={handleNext}
                  className="mt-6 px-6 py-3 rounded-full cursor-pointer font-bold text-[#022c22]
                  bg-gradient-to-r from-green-400 to-emerald-400"
                >
                  {current + 1 === questions.length ? "Finish" : "Next"}
                </button>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Quiz Completed 🎉
              </h2>

              <p className="text-gray-300 mb-4">
                Score:{" "}
                <span className="text-white font-bold">
                  {score}/{questions.length}
                </span>
              </p>

              <p className="text-cyan-400 font-medium mb-6">{suggestion}</p>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full font-bold text-[#022c22]
                bg-gradient-to-r from-green-400 to-emerald-400"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
