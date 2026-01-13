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
import Poster from "./assets/poster.png";
import { Github, Mail, Linkedin, Globe, Facebook } from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import CitationGuide from "./sections/citation-guide";

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
        <CitationGuide />
      </main>
      <footer className="relative bg-[#020617] border-t border-white/10">
        {/* Glow effect */}
        <div className="absolute inset-x-0 -top-20 h-40 bg-cyan-500/10 blur-3xl" />

        <div className="relative max-w-full flex flex-col items-center justify-center mx-auto px-6 py-12">
          <div className="flex flex-col items-center justify-center gap-10">
            {/* Brand */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <h2 className="text-xl text-center font-semibold text-cyan-400">
                Promoting Ethical Responsibility in IT Education
              </h2>
              <img src={Poster} className="rounded-sm border w-60 h-50" />
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm text-center font-semibold text-white uppercase tracking-wider">
                Socials
              </h3>

              {/* Socials */}
              <div className="flex gap-4 mt-5 ">
                <a href="https://www.facebook.com/profile.php?id=61586610926832" className="p-2 rounded-full bg-white/5 hover:bg-cyan-400/20 transition">
                  <Facebook className="h-6 w-6 text-white cursor-target" />
                </a>
                <a href="https://www.tiktok.com/@your.ezio?_r=1&_d=secCgYIASAHKAESPgo8hosL48RPN0rQNtM33H2uHzEapv64JcN8pMJ0fsWmS8yo%2BYXnCAwKI2scnzWMc1d9O8SWUmSxO9enxQsvGgA%3D&_svg=1&checksum=65e96e6988cd2ba366f594be4f5455598b152c5bbe82680b0327f348a46f3ea3&item_author_type=1&sec_uid=MS4wLjABAAAA0jMfghTujtwD1emqLMjXV4i2gpvj6f4JlX-g2nH-EVNYbzF-uIRMXDYJWyIqloN8&sec_user_id=MS4wLjABAAAA0jMfghTujtwD1emqLMjXV4i2gpvj6f4JlX-g2nH-EVNYbzF-uIRMXDYJWyIqloN8&share_app_id=1180&share_author_id=6797867029275018242&share_link_id=c8fde60f-d5f6-4931-b91a-4f60c94dafc6&share_region=PH&share_scene=1&sharer_language=en&social_share_type=5&source=h5_t&timestamp=1768278079&u_code=db4cdlb84eegeh&ug_btm=b8727%2Cb7360&ugbiz_name=ACCOUNT&user_id=6797867029275018242" className="p-2 rounded-full bg-white/5  hover:bg-cyan-400/20 transition">
                  <PiTiktokLogo className="h-6 w-6 text-white cursor-target" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-white/10" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
            <p>
              © {new Date().getFullYear()} Ethical IT Use Policy and Awareness
              Campaign. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Testing;
