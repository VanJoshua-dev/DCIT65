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

function Policy4() {
  return (
    <motion.div
      id="policy4"
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
        <p className="text-white">Policy #4</p>
        <h1 className="text-2xl text-white font-semibold">
          Security and Contribution Transparency
        </h1>
        <p className="text-white text-md">
          Great projects are built on genuine collaboration. Clearly document
          your contributions and use version control to monitor progress. This
          policy ensures fair grading, transparency, and recognition of all team
          members' efforts.
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
            className="px-4 py-4 rounded-lg bg-[#121a2f]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              WHAT COUNTS AS A CONTRIBUTION
            </h1>

            <motion.div variants={container} className="flex flex-col gap-2">
              {[
                {
                  title: "Code Development",
                  text: "Writing, modifying, or refactoring source code for the project.",
                },
                {
                  title: "Design & Architecture",
                  text: "Planning system structure, UI/UX layouts, or application flow.",
                },
                {
                  title: "Testing & Debugging",
                  text: "Identifying bugs, testing features, and improving reliability.",
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
                  className="px-3 py-3 border-l-4 border-[#3b82f6] bg-[#121a2f] rounded-lg cursor-target"
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
                  title: "Free Riding",
                  text: "Claiming credit without making meaningful contributions.",
                },
                {
                  title: "False Contribution Reports",
                  text: "Misrepresenting or exaggerating individual work.",
                },
                {
                  title: "Shared Credentials",
                  text: "Using one account for multiple members in version control systems.",
                },
                {
                  title: "Untracked Changes",
                  text: "Making edits outside approved version control tools.",
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

          {/* WHY TRANSPARENCY MATTERS */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#334155]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              WHY TRANSPARENCY MATTERS
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Prevents free riding and ensures equitable workload distribution",
                "Supports fair and accurate grading",
                "Encourages accountability and professional collaboration habits",
                "Provides clear evidence of individual effort and progress",
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
            BEST PRACTICES FOR TRANSPARENT COLLABORATION
          </h1>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {[
              {
                title: "Use Version Control",
                text: "Track commits regularly using tools such as Git and GitHub.",
              },
              {
                title: "Write Clear Commit Messages",
                text: "Describe what you changed and why.",
              },
              {
                title: "Submit Honest Reports",
                text: "Accurately document your individual contributions.",
              },
              {
                title: "Respect Team Security",
                text: "Protect repositories, credentials, and shared resources.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-3 border-l-4 border-green-400 bg-green-400/50 rounded-lg cursor-target"
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
          <b>Transparency builds trust and stronger teams.</b> Document your
          work, secure your tools, and collaborate responsibly.
        </motion.footer>
      </motion.main>
    </motion.div>
  );
}

export default Policy4;
