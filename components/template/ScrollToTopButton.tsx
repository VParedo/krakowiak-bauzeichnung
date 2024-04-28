"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`fixed z-[100] bottom-4 right-4 sm:bottom-16 sm:right-16 rounded-full p-2 outline-none transition-opacity bg-gradient-to-tr from-paredo_blue to-paredo_purple duration-200 hover:opacity-100 ${
        isVisible ? "opacity-50" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp width={40} height={40} />
    </button>
  );
};

export default ScrollToTopButton;
