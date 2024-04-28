"use client";

import { RoadmapElementProps } from "@/utils/interfaces";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

const RoadmapElement: React.FC<RoadmapElementProps> = ({
  icon,
  title,
  text,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.5"],
  });

  return (
    <div ref={ref} className="flex">
      <div className="flex flex-col gap-my_gap">
        <div className="flex flex-col w-fit items-center relative h-[35vh]">
          <div className="my_h1">{icon}</div>

          <motion.div
            className="absolute top-0 bottom-0 w-1 mt-20 -mx-[2px] bg-my_color_2 origin-top"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>
          <div className="absolute top-0 bottom-0 w-1 mt-20 -mx-[2px] bg-slate-50 opacity-10 origin-top rounded-my_border_radius"></div>
        </div>
      </div>
      <div className="flex gap-my_gap_lg mt-20 items-center">
        <div className="flex flex-col gap-my_gap_sm">
          <div className="my_h2">{title}</div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapElement;
