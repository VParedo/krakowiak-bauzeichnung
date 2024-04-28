"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const SlideText = ({
  type = "h1",
  text = "",
  comingFrom = "up",
  className = "",
  delay = "0s",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  {
    /** Defines the direction and distance the animation does */
  }
  let translation = "translateY(-50px)";

  switch (comingFrom) {
    case "up":
      translation = "translateY(50px)";
      break;
    case "down":
      translation = "translateY(-50px)";
      break;
    case "left":
      translation = "translateX(-50px)";
      break;
    case "right":
      translation = "translateX(50px)";
      break;
  }

  {
    /** Defines the details of the transition, like duration and delay */
  }
  let transition = `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}`;

  switch (type) {
    case "h1":
      return (
        <h1
          ref={ref}
          className={`flex w-full ${className}`}
          style={{
            transform: isInView ? "none" : translation,
            opacity: isInView ? 1 : 0,
            transition: transition,
          }}
        >
          {text}
        </h1>
      );
    case "h2":
      return (
        <h2
          ref={ref}
          className={`flex w-full text-my_color_1 ${className}`}
          style={{
            transform: isInView ? "none" : translation,
            opacity: isInView ? 1 : 0,
            transition: transition,
          }}
        >
          {text}
        </h2>
      );

    case "h3":
      return (
        <h3
          ref={ref}
          className={`flex w-full ${className}`}
          style={{
            transform: isInView ? "none" : translation,
            opacity: isInView ? 1 : 0,
            transition: transition,
          }}
        >
          {text}
        </h3>
      );

    case "h4":
      return (
        <h4
          ref={ref}
          className={`flex w-full ${className}`}
          style={{
            transform: isInView ? "none" : translation,
            opacity: isInView ? 1 : 0,
            transition: transition,
          }}
        >
          {text}
        </h4>
      );

    case "p":
      return (
        <p
          ref={ref}
          className={`flex w-full ${className}`}
          style={{
            transform: isInView ? "none" : translation,
            opacity: isInView ? 1 : 0,
            transition: transition,
          }}
        >
          {text}
        </p>
      );
  }
};

export default SlideText;
