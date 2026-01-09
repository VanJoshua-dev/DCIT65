import React from "react";
import Header from "./components/header";
import TitlePage from "./sections/title-page";
import IntroPages from "./sections/intro-pages";
import Squares from "./components/Squares";
import LetterGlitch from "./components/LetterGlitch";
import PolicyPage from "./sections/policy-page";
import Policy1 from "./sections/policy-1";
import Policy2 from "./sections/policy-2";
import Policy3 from "./sections/policy-3";
import Policy4 from "./sections/policy-4";
import Policy5 from "./sections/policy-5";
import Policy6 from "./sections/policy-6";
import Policy7 from "./sections/policy-7";

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

        {/* Policies */}
        <Policy1 />
        <Policy2 />
        <Policy3 />
        <Policy4 />
        <Policy5 />
        <Policy6 />
        <Policy7 />
      </main>
      <footer>
        <h1 className="text-2xl text-white">Hello</h1>
      </footer>
    </div>
  );
}

export default Testing;
