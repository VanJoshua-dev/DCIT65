import React from "react";
import Header from "./components/header";
import TitlePage from "./sections/title-page";
import IntroPages from "./sections/intro-pages";
import Squares from "./components/Squares";
import LetterGlitch from "./components/LetterGlitch";
import PolicyPage from "./sections/policy-page";
import Policy1 from "./sections/policy-1";
import Policy2 from "./sections/policy-2";

function Testing() {
  return (
    <div className="relative min-h-[100vh]">
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="up"
          borderColor="#C1FF72"
          hoverFillColor="#222"
        />
      </div>

      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      <main className="">
        <div className="relative min-h-screen">
          <div className="absolute inset-0 z-[-1]">
            <LetterGlitch
              glitchSpeed={50}
              centerVignette
              outerVignette={false}
              smooth
            />
          </div>
          <TitlePage />
        </div>

        <IntroPages />
        <Policy1 />
        <Policy2 />
      </main>
    </div>
  );
}

export default Testing;
