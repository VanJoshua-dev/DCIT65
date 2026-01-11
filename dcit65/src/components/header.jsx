import React, { useState, useEffect } from "react";
import logo from "../assets/logoSuperFinal.png";
import { Menu, X } from "lucide-react";

function Header() {
  const [isPoliciesDropdownOpen, setIsPoliciesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("titlePage");

  const navSections = [
    { id: "titlePage", title: "Title", type: "main" },
    { id: "intro", title: "Introduction", type: "main" },
    { id: "policy1", title: "Policy #1", type: "policy" },
    { id: "policy2", title: "Policy #2", type: "policy" },
    { id: "policy3", title: "Policy #3", type: "policy" },
    { id: "policy4", title: "Policy #4", type: "policy" },
    { id: "policy5", title: "Policy #5", type: "policy" },
    { id: "policy6", title: "Policy #6", type: "policy" },
    { id: "policy7", title: "Policy #7", type: "policy" },
    { id: "citation-guide", title: "Citation Guide", type: "main" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsPoliciesDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (id) =>
    activeSection === id
      ? "text-[#C1FF72]"
      : "text-white/80 hover:text-[#C1FF72]";

  const isPolicyActive = navSections
    .filter((s) => s.type === "policy")
    .some((s) => s.id === activeSection);

  /* -------------------- Scroll Spy -------------------- */
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of navSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navSections]);

  /* -------------------- Render -------------------- */
  return (
    <>
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <img
              src={logo}
              alt="Logo"
              className="h-11 cursor-pointer cursor-target"
              onClick={() => handleScrollTo("titlePage")}
            />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-md font-medium">
                <li onClick={() => handleScrollTo("intro")}>
                  <span className={`${isActive("intro")} cursor-pointer cursor-target`}>
                    Introduction
                  </span>
                </li>

                {/* Policies Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => setIsPoliciesDropdownOpen((prev) => !prev)}
                    className={`flex items-center gap-1 cursor-pointer cursor-target ${
                      isPolicyActive
                        ? "text-[#C1FF72]"
                        : "text-white/80 hover:text-[#C1FF72]"
                    }`}
                  >
                    Policies
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isPoliciesDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isPoliciesDropdownOpen && (
                    <div className="absolute top-full mt-2 w-64 bg-black/90 border border-white/10 rounded-md">
                      {navSections
                        .filter((s) => s.type === "policy")
                        .map((policy) => (
                          <div
                            key={policy.id}
                            onClick={() => handleScrollTo(policy.id)}
                            className={`px-4 py-2 cursor-pointer cursor-target ${
                              activeSection === policy.id
                                ? "text-[#C1FF72] bg-white/10"
                                : "text-white/80 hover:text-[#C1FF72] hover:bg-white/10"
                            }`}
                          >
                            {policy.title}
                          </div>
                        ))}
                    </div>
                  )}
                </li>

                <li onClick={() => handleScrollTo("citation-guide")}>
                  <span
                    className={`${isActive("citation-guide")} cursor-pointer cursor-target`}
                  >
                    Citation Guide
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 z-40 w-full bg-black/95 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {navSections.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#C1FF72]"
                    : "text-white/80 hover:text-[#C1FF72]"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
