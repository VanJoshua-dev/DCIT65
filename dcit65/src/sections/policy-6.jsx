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

function Policy6() {
  return (
    <motion.div
      id="policy6"
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
        <p className="text-white">Policy #6</p>
        <h1 className="text-2xl text-white font-semibold">
          Disclosure of AI Use
        </h1>
        <p className="text-white text-md">
          Honesty is important in the digital age. Always disclose when you use
          AI tools in your work. Transparency fosters trust between instructors,
          encourages responsible innovation, and maintains a clean academic
          record.
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={container}
        className="px-10 py-2 flex flex-col gap-4 overflow-y-auto w-full"
      >
        {/* Top */}
        <motion.div
          variants={item}
          className="px-3 py-3 border-l-4 border-[#3b82f6] bg-[#121a2f] rounded-lg cursor-pointer"
        >
          <h1 className="text-white font-medium">
            Always include a clear AI disclosure in your submission.
          </h1>
          <p className="text-gray-400">
            Explain how AI assisted you and confirm that the work reflects your
            own effort and understanding.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-[#121a2f]/70 py-8 px-4 rounded-lg border border-white"
        >
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {[
              {
                step: 1,
                title: "Acknowledge AI Use",
                text: "State clearly if AI tools were used at any stage of development.",
              },
              {
                step: 2,
                title: "Explain the Assistance",
                text: "Describe how AI helped (debugging, explanations, optimization).",
              },
              {
                step: 3,
                title: "Reflect on Learning",
                text: "Explain what you learned and how AI supported and not replaced your thinking.",
              },
              {
                step: 4,
                title: "Take Ownership",
                text: "Confirm that the final submission represents your own work and understanding.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-3 border-l-4 relative border bg-[#121a2f]/70 rounded-lg cursor-pointer"
              >
                <span className=" absolute -top-4 text-xs text-white font-medium px-4 py-1 bg-purple-500 rounded-full">
                  STEP {card.step}
                </span>
                <h1 className="text-white font-medium text-lg">{card.title}</h1>
                <p className="text-gray-200">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Center 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* RESPONSIBLE PRACTICES */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#064E3B]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              RESPONSIBLE PRACTICES
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Disclose AI use honestly and consistently",
                "Use AI as a support tool for learning",
                "Reflect on how AI improved your understanding",
                "Maintain accountability for submitted work",
              ].map((text, i) => (
                <motion.li key={i} variants={item}>
                  • {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-red-400/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              UNACCEPTABLE PRACTICES
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Hiding or denying AI use",
                "Submitting AI-generated work as entirely your own",
                "Using AI to replace effort or thinking",
                "Misrepresenting the source of your code",
              ].map((text, i) => (
                <motion.li key={i} variants={item}>
                  • {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* WHY RESPONSIBLE AI USE MATTERS */}
        </div>

        {/* Footer */}
        <motion.footer
          variants={item}
          className="bg-blue-500 text-white rounded-lg py-2 px-3"
        >
          <b>Transparency builds trust and accountability.</b> Disclose AI use,
          learn responsibly, and protect your academic integrity.
        </motion.footer>
      </motion.main>
    </motion.div>
  );
}

export default Policy6;
