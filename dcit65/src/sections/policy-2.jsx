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

function Policy2() {
  return (
    <motion.div
      id="policy2"
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
        <p className="text-white">Policy #2</p>
        <h1 className="text-2xl text-white font-semibold">
          Responsible Sharing of Assignments
        </h1>
        <p className="text-white text-md">
          Maintain the safety of your workplace. Unless your instructor
          specifically authorizes it, do not share completed assignments.
          Protecting your code ensures fairness, prevents plagiarism, and
          fosters an environment of trust and accountability.
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={container}
        className="px-4 md:px-10 lg:px-10 py-2 flex flex-col gap-4 overflow-y-auto w-full"
      >
        {/* Top 3 Columns */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Intellectual Property */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#121a2f]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              WHAT IS CONSIDERED CONFIDENTIAL ACADEMIC DATA
            </h1>

            <motion.div variants={container} className="flex flex-col gap-2">
              {[
                {
                  title: "Assignments & Projects",
                  text: "Homework, projects, and submissions intended for individual assessment.",
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
              UNACCEPTABLE ACADEMIC PRACTICES
            </h1>

            <motion.div variants={container} className="flex flex-col gap-2">
              {[
                {
                  title: "Sharing Assignments",
                  text: "Giving your completed work to classmates without instructor approval.",
                },
                {
                  title: "Posting Work Online",
                  text: "Uploading assignments to public platforms or group chats.",
                },
                {
                  title: "Reusing Others’ Submissions",
                  text: "Submitting shared or leaked academic work.",
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

          {/* Consequences */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-red-400/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              POSSIBLE CONSEQUENCES OF VIOLATIONS
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Compromised fairness that gives some students an unfair academic advantage",
                "Increased risk of plagiarism and misuse of your work",
                "Loss of trust and accountability within the learning environment",
              ].map((text, i) => (
                <motion.li key={i} variants={item}>
                  • {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Acceptable Use */}
        <motion.div
          variants={item}
          className="bg-green-500/70 py-3 px-4 rounded-lg border border-white"
        >
          <h1 className="text-white text-center font-semibold mb-3">
            ACCEPTABLE AND ETHICAL USE
          </h1>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {[
              {
                title: "Respecting Boundaries",
                text: "Not requesting or accepting others’ completed work.",
              },
              {
                title: "Private Storage",
                text: "Keeping your assignments in secure, personal repositories.",
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
          <b>
            Protecting your work maintains a safe and fair academic environment.
          </b>{" "}
          Only share assignments when authorized and uphold trust and
          accountability.
        </motion.footer>
      </motion.main>
    </motion.div>
  );
}

export default Policy2;
