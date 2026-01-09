import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Policy5() {
  return (
    <motion.div
      id="policy5"
      className="min-h-screen w-screen py-20 flex flex-col gap-4 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Header */}
      <motion.header
        variants={item}
        className="px-10 py-3 bg-black/70 flex flex-col w-full"
      >
        <p className="text-white">Policy #5</p>
        <h1 className="text-2xl text-white font-semibold">
          Understanding of the Project
        </h1>
        <p className="text-white text-md">
          Don't just submit a code and own it. Prepare to explain how your
          program works with reflections or oral defenses. Understanding your
          code builds confidence, improves problem solving skills, and
          demonstrates that your work is truly yours.
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={container}
        className="px-4 md:px-10 lg:px-10 py-2 flex flex-col gap-4 overflow-y-auto w-full"
      >
        {/* Top 3 Columns */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Acceptable Use of AI Tools */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#334155]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              WHY UNDERSTANDING MATTERS
            </h1>

            <motion.div variants={container} className="flex flex-col gap-2">
              {[
                {
                  title: "Real Learning",
                  text: "Demonstrating understanding ensures programming concepts are truly learned, not memorized or copied.",
                },
                {
                  title: "Problem-Solving Skills",
                  text: "Explaining your logic strengthens analytical thinking and debugging ability.",
                },
                {
                  title: "Confidence & Ownership",
                  text: "Knowing your code builds confidence and shows responsibility for your work.",
                },
                {
                  title: "Documentation",
                  text: "Writing reports, READMEs, or contribution summaries.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="px-3 py-3 border-l-4 border rounded-lg cursor-target"
                >
                  <h1 className="text-white font-medium">{card.title}</h1>
                  <p className="text-gray-400">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Unacceptable Practices */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#121a2f]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              UNACCEPTABLE PRACTICES
            </h1>

            <motion.div variants={container} className="flex flex-col gap-2">
              {[
                {
                  title: "Blind Code Submission",
                  text: "Submitting code you cannot explain or justify.",
                },
                {
                  title: "Memorized Explanations",
                  text: "Repeating explanations without real comprehension.",
                },
                {
                  title: "Copied Logic",
                  text: "Relying on others’ work without understanding how it functions",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="px-3 py-3 border-l-4 border-red-500 bg-[#121a2f] rounded-lg cursor-target"
                >
                  <h1 className="text-white font-medium">{card.title}</h1>
                  <p className="text-gray-400">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#121a2f]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              HOW TO PREPARE
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Review your code line by line and understand its purpose",
                "Practice explaining your logic in simple terms",
                "Be ready for oral defense or written reflection",
                "Ensure your submission reflects your own understanding",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-row gap-2 px-3 py-3 bg-green-400/50 rounded-lg cursor-target"
                >
                  <Check className="text-green-400" /> {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          variants={item}
          className="bg-blue-500 text-white rounded-lg font-medium py-2 px-3"
        >
          Understanding your code builds confidence, improves problem-solving
          skills, and proves that your work is truly yours.
        </motion.footer>
      </motion.main>
    </motion.div>
  );
}

export default Policy5;
