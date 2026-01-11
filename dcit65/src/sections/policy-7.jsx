import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, AlertTriangle, Briefcase } from "lucide-react";
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

const timelineData = [
  {
    icon: ShieldCheck,
    title: "Keep Data Confidential",
    description:
      "Project files, credentials, and sensitive information must not be shared without authorization.",
  },
  {
    icon: Lock,
    title: "Respect Privacy",
    description:
      "Protecting data demonstrates respect for peers, instructors, and institutional trust.",
  },
  {
    icon: AlertTriangle,
    title: "Prevent Misuse",
    description:
      "Unauthorized access or leaks can result in misuse, academic violations, or harm to others.",
  },
  {
    icon: Briefcase,
    title: "Professional Responsibility",
    description:
      "Secure data handling mirrors industry expectations for ethical IT professionals.",
  },
];
function Policy7() {
  return (
    <motion.div
      id="policy7"
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
        <p className="text-white">Policy #7</p>
        <h1 className="text-2xl text-white font-semibold">Data Protection</h1>
        <p className="text-white text-md">
          Handle project data with care and professionalism. Keep sensitive
          information secure and share only through authorized channels.
          Responsible data handling reflects real-world IT standards and
          protects everyone involved.
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={container}
        className="px-4 md:px-10 lg:px-10  py-2 flex flex-col gap-4 overflow-y-auto w-full"
      >
        <div className="relative w-full  mx-auto py-10 px-4 sm:px-0">

          <motion.div
            variants={item}
            className="bg-[#121a2f]/70 w-full py-8 px-4 rounded-lg border border-white"
          >
            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {timelineData.map((data, index) => {
                const Icon = data.icon;

                return (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="relative px-4 py-4 bg-[#020617] border-l-4 border-cyan-400 rounded-lg"
                  >
                    {/* STEP Badge */}
                    <span className="absolute -top-4 left-4 text-xs font-semibold px-4 py-1 bg-cyan-400 text-black rounded-full">
                      STEP {index + 1}
                    </span>

                    {/* Icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black shadow">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">
                        {data.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {data.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
        {/* Center 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* RESPONSIBLE PRACTICES */}
          <motion.div
            variants={item}
            className="px-4 py-4 rounded-lg bg-[#064E3B]/70 border border-white flex-1"
          >
            <h1 className="text-white text-center font-semibold mb-3">
              RESPONSIBLE DATA HANDLING
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Secure repositories with strong passwords and access controls",
                "Share data only through authorized platforms",
                "Limit access to team members who need it",
                "Follow instructor and institutional data policies",
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
              DATA HANDLING RISKS
            </h1>

            <motion.ul
              variants={container}
              className="text-white flex flex-col gap-2 list-none"
            >
              {[
                "Leaking sensitive project or personal data",
                "Sharing repositories publicly without approval",
                "Exposing credentials or access tokens",
                "Violating trust and academic integrity standards",
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
          <b>Protect data. Respect privacy. Act professionally.</b> Secure your
          repositories, share only through authorized channels, and handle all
          project information with responsibility.
        </motion.footer>
      </motion.main>
    </motion.div>
  );
}

export default Policy7;
