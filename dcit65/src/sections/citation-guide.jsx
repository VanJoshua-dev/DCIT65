import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleCheck, CircleX, Copy, Check } from "lucide-react";
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

// Handle copy
const formatCitation = (card) => {
  return `${card.author}${card.year ? ` (${card.year})` : ""}. ${
    card.source
  }.\n${card.link ? `Link: ${card.link}\n` : ""}Usage: ${card.usage}`;
};

function CitationGuide() {
  return (
    <motion.div
      id="citation-guide"
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
        <h1 className="text-2xl text-white font-semibold">Citation Guide</h1>
        <p className="text-white text-md">
          Use this quick guide to understand how to properly credit sources in
          your programming work. Correct citation protects your academic
          integrity and strengthens your credibility.
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={container}
        className="px-4 md:px-10 lg:px-10 py-2 flex flex-col gap-4 overflow-y-auto w-full"
      >
        {/* DO and Donts */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Do*/}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#064E3B]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center text-2xl font-semibold mb-3 flex flex-row gap-2 items-center justify-center">
              <CircleCheck className="text-green-500" size={25} /> DOs
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Clearly cite tutorials, documentation, forums, and AI tools you used.",
                "Explain in your own words how the referenced code works.",
                "Comment within your code to indicate which parts were inspired by external sources.",
                "Include a short reference section or disclosure note in your submission.",
                "Use AI tools as learning aids and acknowledge their assistance.",
                "Ensure your final code reflects your own understanding.",
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
            <h1 className="text-white text-center text-2xl font-semibold mb-3 flex flex-row gap-2 items-center justify-center">
              <CircleX className="text-red-400" size={25} /> DON'Ts
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Do not copy-paste code without attribution.",
                "Do not submit AI-generated code as entirely your own work.",
                "Do not remove comments or references from borrowed code.",
                "Do not rely on sources you do not understand.",
                "Do not cite sources vaguely (e.g., “from the internet”).",
                "Do not assume small code snippets are exempt from citation.",
              ].map((text, i) => (
                <motion.li key={i} variants={item}>
                  • {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* WHY RESPONSIBLE AI USE MATTERS */}
        </div>

        {/* Example Citations */}
        <motion.div
          variants={item}
          className="bg-[#121a2f]/70 py-8 px-6 rounded-lg border border-white"
        >
          <div className="mb-6 flex flex-col gap-2 items-left justify-left">
            <h1 className="text-white text-left text-2xl font-semibold ">
              Sample Citations & Disclosures
            </h1>
            <p className="text-white text-md">
              Use this quick guide to understand how to properly credit sources
              in your programming work. Correct citation protects your academic
              integrity and strengthens your credibility.
            </p>
          </div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              {
                title: "AI Tool",
                source: "ChatGPT (OpenAI)",
                author: "OpenAI",
                year: "2024",
                link: "",
                usage:
                  "Used to explain JavaScript concepts and assist with debugging. All outputs were reviewed, modified, and fully understood before implementation.",
              },
              {
                title: "GitHub Repository",
                source: "Sample Authentication Project",
                author: "Doe, J.",
                year: "2023",
                link: "https://github.com/johndoe/sample-auth-project",
                usage:
                  "Referenced for folder structure and best practices only. No source code was copied directly.",
              },
              {
                title: "Online Forum",
                source: "How to fix async/await errors in JavaScript",
                author: "Smith, A.",
                year: "2022",
                link: "https://stackoverflow.com/questions/xxxxxx",
                usage:
                  "Used to understand async error handling. Final solution was rewritten and adapted.",
              },
              {
                title: "Official Documentation",
                source: "JavaScript Array Methods",
                author: "MDN Web Docs",
                year: "",
                link: "https://developer.mozilla.org/",
                usage:
                  "Used to understand map(), filter(), and reduce() functions.",
              },
              {
                title: "Educational Video",
                source: "React Hooks Crash Course",
                author: "Traversy Media",
                year: "2023",
                link: "",
                usage:
                  "Used for conceptual learning only. Final implementation is original.",
              },
            ].map((card, i) => {
              const [copied, setCopied] = useState(false);

              const handleCopy = async () => {
                await navigator.clipboard.writeText(formatCitation(card));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              };

              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-[#121a2f]/80 border border-white/20 rounded-lg p-4 space-y-2"
                >
                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 text-gray-300 hover:text-white cursor-pointer cursor-target transition"
                    title="Copy citation"
                  >
                    {copied ? (
                      <Check size={18} className="text-green-400" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>

                  {/* Badge */}
                  <span className="absolute -top-3 left-4 text-xs text-white font-semibold px-3 py-1 bg-blue-700 rounded-full">
                    {card.title}
                  </span>

                  {/* Citation Content */}
                  <p className="text-white text-sm font-semibold">
                    {card.author}
                    {card.year && ` (${card.year})`}
                  </p>

                  <p className="text-gray-200 text-sm italic">{card.source}</p>

                  {card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm break-all hover:underline"
                    >
                      {card.link}
                    </a>
                  )}

                  <p className="text-gray-300 text-sm">
                    <span className="font-medium text-white">Usage:</span>{" "}
                    {card.usage}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={item}
          className="bg-blue-500 text-white rounded-lg py-2 px-3"
        >
          <b>Remember: </b>
          Citing sources is not a weakness. It demonstrates honesty,
          professionalism, and responsibility.
        </motion.footer>
      </motion.main>
    </motion.div>
  );
}

export default CitationGuide;
