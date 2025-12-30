import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import border from "../assets/IntroductionBorder.png";

function PolicyPage() {
  return (
    <div className="h-screen text-white">  {/* Changed h-100vh to h-screen, removed overflow-y-auto */}
      <ScrollStack>

        <ScrollStackItem>
  <div className="relative max-w-2xl h-[350px] ">

    {/* Image border */}
    <img
      src={border}
      alt=""
      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
    />

    {/* Text INSIDE image */}
    <div className="relative z-10 h-full flex flex-col justify-center lg:px-32 text-white">
      <h2 className="text-3xl text-center font-bold mb-2">
        Policy 1
      </h2>

      <h3 className="text-xl text-center font-semibold mb-4">
        Intellectual Property and Citation
      </h3>

      <p className="leading-relaxed text-justify">
        Create with confidence by submitting your own original code.
        When you learn from online sources, give credit where it's due.
        Ethical coding builds real skills, strengthens your credibility,
        and prepares you for a professional IT career.
      </p>
    </div>

  </div>
</ScrollStackItem>

        <ScrollStackItem>
  <div className="relative max-w-2xl h-[350px] ">

    {/* Image border */}
    <img
      src={border}
      alt=""
      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
    />

    {/* Text INSIDE image */}
    <div className="relative z-10 h-full flex flex-col justify-center lg:px-32 text-white">
      <h2 className="text-3xl text-center font-bold mb-2">
        Policy 2
      </h2>

      <h3 className="text-xl text-center font-semibold mb-4">
        Data Privacy and Confidentiality
      </h3>

      <p className="leading-relaxed text-justify">
        Maintain the safety of your workplace. Unless your instructor specifically authorizes it, do not share completed assignments. 
        Protecting your code ensures fairness, prevents plagiarism, and fosters an environment of trust and accountability. 
      </p>
    </div>

  </div>
</ScrollStackItem>

        <ScrollStackItem>
  <div className="relative max-w-2xl h-[350px] ">

    {/* Image border */}
    <img
      src={border}
      alt=""
      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
    />

    {/* Text INSIDE image */}
    <div className="relative z-10 h-full flex flex-col justify-center lg:px-32 text-white">
      <h2 className="text-3xl text-center font-bold mb-2">
        Policy 3
      </h2>

      <h3 className="text-xl text-center font-semibold mb-4">
        AI and Automated Tools Usage
      </h3>

      <p className="leading-relaxed text-justify">
        AI is a powerful learning partner but not a shortcut. 
        Use AI tools to understand, debug, and improve your code, not to replace your own thinking. 
        Learn smarter, stay ethical, and grow your real programming skills.
      </p>
    </div>

  </div>
</ScrollStackItem>




      </ScrollStack>
    </div>
  );
}

export default PolicyPage;