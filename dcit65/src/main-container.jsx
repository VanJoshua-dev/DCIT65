import React from "react";
import Header from "./components/header";
import TitlePage from "./sections/title-page";
import IntroPages from "./sections/intro-pages";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import Squares from "./components/Squares";
import LetterGlitch from "./components/LetterGlitch";
import PolicyPage from "./sections/policy-page";

function MainContainer() {
  return (
    <div className="relative" id="my-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Offset for fixed header */}
      <main className="pt-20">
        {/* TITLE PAGE */}
        <section className="min-h-screen relative px-5 py-20">
          <div className="absolute inset-0 z-[-1]">
            <LetterGlitch
              glitchSpeed={50}
              centerVignette
              outerVignette={false}
              smooth
            />
          </div>
          <TitlePage />
        </section>

        {/* INTRO SECTION */}
        <section className="min-h-screen relative px-5 py-20">
          <div className="absolute inset-0 z-[-1]">
            <Squares
              speed={0.5}
              squareSize={40}
              direction="up"
              borderColor="#C1FF72"
              hoverFillColor="#222"
            />
          </div>
          <IntroPages />
        </section>

        <section className="min-h-screen relative px-5 py-20">
          {" "}
          {/* Removed overflow-auto */}
          <div className="absolute inset-0 z-[-1]">
            <Squares
              speed={0.5}
              squareSize={40}
              direction="up"
              borderColor="#C1FF72"
              hoverFillColor="#222"
            />
          </div>
          <PolicyPage />
        </section>

        {/* PLACEHOLDER SECTIONS */}
        {[4, 5, 6, 7, 8, 9].map((num) => (
          <section
            key={num}
            className="min-h-screen px-5 py-20 text-white text-6xl flex items-center justify-center"
          >
            {num}
          </section>
        ))}

        <footer className="px-10 py-10 text-center text-white">Footer</footer>
      </main>
    </div>
  );
}

export default MainContainer;
