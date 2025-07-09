"use client";
import { useEffect, useState } from "react";

const roles = [
  "Front-End Developer",
  "Full-Stack Developer",
  "Creative Developer",
];
const GeneratesRole = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);
  return (
    <span className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold border-r-2 border-primary animate-pulse min-h-[1.2em] inline-block min-w-[200px]">
      {displayText}
    </span>
  );
};

export default GeneratesRole;
