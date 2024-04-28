"use client";

import { FaCircleCheck } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SLIDE_TEXT_DELAY_1 } from "@/utils/constants";
import { SlideSolutionTextProps } from "@/utils/interfaces";

const SlideSolutionText: React.FC<SlideSolutionTextProps> = ({
  text,
  comingFrom,
  delay = SLIDE_TEXT_DELAY_1,
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

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : translation,
        opacity: isInView ? 1 : 0,
        transition: transition,
      }}
      className="my_flex gap-4 items-center"
    >
      <div className="flex">
        <FaCircleCheck size="40" className="text-my_secondary" />
      </div>
      <div className="flex">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SlideSolutionText;
