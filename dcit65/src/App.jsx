import "./App.css";
import { useState, useEffect } from "react";
// Supports weights 100-900
import "@fontsource-variable/inter";
import TargetCursor from "./components/TargetCursor";
import Testing from "./main-container";
import { Routes, Route } from "react-router-dom";
function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  () => {
    // Check if user is using a mouse or large screen
    const checkDevice = () => {
      const isWide = window.innerWidth > 1024; // You can adjust breakpoint
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(isWide && hasFinePointer);
    };

    checkDevice(); // Run on mount
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  },
    [];
  return (
    <>
      {/* <MainContainer /> */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <Routes>
        <Route path="/" element={<Testing />} />
      </Routes>
    </>
  );
}

export default App;
