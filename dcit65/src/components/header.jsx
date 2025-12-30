import React from "react";
import logo from "../assets/logoSuperFinal.png";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Company logo" className="h-8 w-auto" />
          </div>

          {/* Navigation */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 text-md font-medium">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-[#C1FF72] transition-colors cursor-target"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-[#C1FF72] transition-colors cursor-target"
                >
                  Policies
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-[#C1FF72] transition-colors cursor-target"
                >
                  Citation Quide
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          {/* <div className="hidden md:flex">
            <button className="rounded-md bg-[#C1FF72] px-4 py-2 text-sm font-semibold text-black hover:bg-[#b3f85d] transition">
              Get Started
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
