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

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-around gap-16 px-8 lg:px-20 overflow-hidden">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col h-full  gap-50 max-w-xl"
      >
        <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tight">
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
        <img
          src={border}
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* Text Content */}
        <div className="relative bg-black/40 z-10 p-10 lg:p-14">
          <p className="text-white/90 leading-relaxed">
            In the rapidly evolving landscape of Information Technology, the
            transition from learner to professional is defined by a deep-seated
            commitment to responsible coding and the ethical integration of AI
            tools. True technical mastery is built upon the pillars of authentic
            authorship and intellectual accountability, ensuring that every line
            of code produced is a reflection of genuine understanding rather
            than a reliance on shortcuts. By prioritizing high standards of
            integrity and resisting the temptation of plagiarism, practitioners
            foster a culture of transparency and excellence. This dedication to
            principled development not only safeguards the quality of one's work
            but also serves as the essential foundation for sustainable
            professional growth and long-term innovation in the tech industry.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default IntroPages;
