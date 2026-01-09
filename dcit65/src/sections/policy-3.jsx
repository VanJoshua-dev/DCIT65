import React from "react";
import { motion } from "framer-motion";

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

function Policy3() {
  return (
    <motion.div
      id="policy3"
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
        <p className="text-white">Policy #3</p>
        <h1 className="text-2xl text-white font-semibold">
          Responsible Use of AI Tools
        </h1>
        <p className="text-white text-md">
          AI is a powerful learning partner but not a shortcut. Use AI tools to
          understand, debug, and improve your code, not to replace your own
          thinking. Learn smarter, stay ethical, and grow your real programming
          skills.
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={container}
        className="px-10 py-2 flex flex-col gap-4 overflow-y-auto w-full"
      >
        {/* Top 3 Columns */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Acceptable Use of AI Tools */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#121a2f]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              ACCEPTABLE USE OF AI TOOLS
            </h1>

            <motion.div variants={container} className="flex flex-col gap-2">
              {[
                {
                  title: "Concept Clarification",
                  text: "Using AI to explain programming concepts or syntax you do not understand.",
                },
                {
                  title: "Debugging Assistance",
                  text: "Asking AI to help identify errors while you remain responsible for the solution.",
                },
                {
                  title: "Code Improvement",
                  text: "Refining logic, readability, or efficiency of code you originally wrote.",
                },
                {
                  title: "Learning Support",
                  text: "Using AI as a study aid, not as a replacement for thinking or practice.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="px-3 py-3 border-l-4 border-green-500 bg-[#121a2f] rounded-lg cursor-pointer"
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
              UNACCEPTABLE USE OF AI
            </h1>

            <motion.div variants={container} className="flex flex-col gap-2">
              {[
                {
                  title: "Fully AI-Generated Submissions",
                  text: "Submitting code or answers created entirely by AI without personal effort.",
                },
                {
                  title: "Lack of Understanding",
                  text: "Submitting work you cannot explain or justify when asked.",
                },
                {
                  title: "Undisclosed AI Use",
                  text: "Using AI tools without transparency when disclosure is required.",
                },
                {
                  title: "Replacing Critical Thinking",
                  text: "Relying on AI instead of developing problem-solving skills.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="px-3 py-3 border-l-4 border-red-500 bg-[#121a2f] rounded-lg cursor-pointer"
                >
                  <h1 className="text-white font-medium">{card.title}</h1>
                  <p className="text-gray-400">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* WHY RESPONSIBLE AI USE MATTERS */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#064E3B]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              WHY RESPONSIBLE AI USE MATTERS
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Misuse of AI undermines academic integrity and fairness",
                "Overreliance prevents development of critical problem-solving skills",
                "Lack of accountability weakens preparation for real-world IT environments",
                "Ethical AI use builds transparency, trust, and technical confidence",
              ].map((text, i) => (
                <motion.li key={i} variants={item}>
                  • {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* STUDENT RESPONSIBILITIES*/}
        <motion.div
          variants={item}
          className="bg-green-500/70 py-3 px-4 rounded-lg border border-white"
        >
          <h1 className="text-white text-center font-semibold mb-3">
            STUDENT RESPONSIBILITIES
          </h1>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {[
              {
                title: "Understand Your Work",
                text: "Ensure you can explain and defend any code you submit.",
              },
              {
                title: "Use AI as a Guide",
                text: "Let AI support your thinking, not replace it.",
              },
              {
                title: "Practice Honesty",
                text: "Be transparent about AI use when required by your instructor.",
              },
              {
                title: "Take Ownership",
                text: "Submit work that reflects your own learning and effort.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-3 border-l-4 border-green-400 bg-green-400/50 rounded-lg cursor-pointer"
              >
                <h1 className="text-white font-medium text-lg">{card.title}</h1>
                <p className="text-gray-200">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={item}
          className="bg-blue-500 text-white rounded-lg py-2 px-3"
        >
          <b>Learn smarter, stay ethical, and grow real programming skills.</b>{" "}
          Responsible AI use prepares you for accountable, real-world IT
          practice.
        </motion.footer>
      </motion.main>
    </motion.div>
  );
}

export default Policy3;
