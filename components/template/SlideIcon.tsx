"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SLIDE_TEXT_DELAY_1 } from "@/utils/constants";
import { SlideIconProps } from "@/utils/interfaces";

const SlideIcon: React.FC<SlideIconProps> = ({
  icon,
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
      className="flex h-full items-center justify-center"
      style={{
        transform: isInView ? "none" : translation,
        opacity: isInView ? 1 : 0,
        transition: transition,
      }}
    >
      {icon}
    </div>
  );
};

export default SlideIcon;
