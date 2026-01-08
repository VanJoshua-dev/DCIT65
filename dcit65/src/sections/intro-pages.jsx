import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../assets/IntroductionImage.png";
import border from "../assets/IntroductionBorder.png";

function IntroPages() {
  // Track scroll position of this section
  const { scrollYProgress } = useScroll();

  // Parallax transforms (scroll-based)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const [expanded, setExpanded] = React.useState(false);
  return (
    <div id="intro" className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center md:justify-around px-2 lg:px-20 overflow-hidden">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col h-full gap-20  max-w-xl"
      >
        <h1 className="text-5xl text-center lg:text-8xl font-bold text-white tracking-tight">
          Introduction
        </h1>

        <motion.img
          src={img}
          alt="Introduction Illustration"
          style={{ y: imageY }}
          className="w-full max-w-md rounded-2xl shadow-2xl"
        />
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{ y: textY }}
        className="relative max-w-2xl"
      >
        {/* Border Image */}
        {/* <img
          src={border}
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        /> */}

        {/* Text Content */}
        <div
          className="
     bg-black/40  rounded-lg
    p-4 lg:p-14
  "
        >
          <p className="text-white/90 leading-relaxed">
            In the rapidly evolving field of Information Technology, the
            transition from learner to professional is shaped by responsible
            coding and ethical use of AI. True technical mastery comes from
            authentic authorship, intellectual accountability, and a commitment
            to integrity. By avoiding shortcuts and plagiarism, professionals
            build transparency, ensure quality work, and lay the foundation for
            long-term growth and innovation in the tech industry.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default IntroPages;
