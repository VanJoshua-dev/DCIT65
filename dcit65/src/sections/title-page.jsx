import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dots from "../assets/dots.png";
import leftSide from "../assets/design-left.png";
import rightSide from "../assets/design-right.png";
import SplitText from "../components/SplitText";

function TitlePage() {
  const { scrollY } = useScroll();

  // PARALLAX VALUES
  const dotsY = useTransform(scrollY, [0, 400], [0, 60]);
  const titleY = useTransform(scrollY, [0, 400], [0, -80]);
  const bottomY = useTransform(scrollY, [0, 400], [0, 40]);

  return (
    <section
      id="titlePage"
      className="relative w-full min-h-screen py-20 flex flex-col items-center overflow-hidden"
    >
      {/* CENTER HERO */}
      <div className="flex-grow w-full flex items-center justify-center">
        <div className="flex w-full items-center justify-center gap-6 px-6">
          {/* LEFT DOTS */}
          <motion.img
            src={dots}
            alt=""
            style={{ y: dotsY }}
            className="hidden lg:block max-w-30 opacity-80"
          />

          {/* TITLE */}
          <motion.h1
            style={{ y: titleY }}
            className="text-center text-white font-semibold leading-[1.05]"
          >
            <SplitText
              text="ACADEMIC"
              className="block text-5xl md:text-8xl px-2 text-shadow-lg text-shadow-black "
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <span className="block">
              <SplitText
                text="DISHONESTY THROUGH"
                className="block text-5xl md:text-8xl text-shadow-lg text-shadow-black"
                delay={80}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </span>

            <span className="block">
              <SplitText
                text="CODE PLAGIARISM"
                className="block text-5xl md:text-8xl px-2 text-shadow-lg text-shadow-black "
                delay={80}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </span>
          </motion.h1>

          {/* RIGHT DOTS */}
          <motion.img
            src={dots}
            alt=""
            style={{ y: dotsY }}
            className="hidden lg:block max-w-[120px] opacity-80"
          />
        </div>
      </div>

      {/* BOTTOM CTA */}
      <motion.div
        style={{ y: bottomY }}
        className="w-full flex items-center justify-center md:justify-between px-10 pb-6"
      >
        <img src={leftSide} alt="" className="hidden md:block h-40" />

        <motion.button
          className="button-52 text-xl font-medium text-black/70
                     focus:outline-none focus:ring-4 hover:text-white cursor-target focus:ring-[#C1FF72]/50"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Find Out What You Know
        </motion.button>

        <img src={rightSide} alt="" className="hidden md:block h-40" />
      </motion.div>
    </section>
  );
}

export default TitlePage;
