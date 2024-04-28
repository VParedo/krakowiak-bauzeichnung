import React from "react";

import { motion } from "framer-motion";
import { RoadmapMidElementProps } from "@/utils/interfaces";

const RoadmapMidElement: React.FC<RoadmapMidElementProps> = ({
  active,
  activeText,
  icon,
  scale,
  index,
  title,
  text,
}) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full gap-my_gap">
        <div className="flex flex-col w-full items-center relative h-[35vh]">
          <div
            className={`my_h1 rounded-full p-2 ease-in-out duration-100 ${
              active ? "bg-white" : "bg-white bg-opacity-20"
            }`}
          >
            {icon}
          </div>

          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-1 mt-20 -mx-[2px] bg-my_color_2 origin-top"
            style={{ scaleY: scale }}
          ></motion.div>
          <div className="absolute top-0 bottom-0 left-1/2 w-1 mt-20 -mx-[2px] bg-slate-50 opacity-10 origin-top rounded-my_border_radius"></div>

          <div className="flex w-full gap-40">
            <div className="flex w-full gap-my_gap_lg mt-20 items-center">
              {index % 2 === 0 && (
                <div className="flex flex-col gap-my_gap_sm">
                  <div
                    className={`my_h1 ease-in-out duration-100 ${
                      activeText ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    {title}
                  </div>
                  <div
                    className={`ease-in-out duration-100 ${
                      activeText ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              )}
            </div>
            <div className="flex w-full gap-my_gap_lg mt-20 items-center">
              {index % 2 !== 0 && (
                <div className="flex flex-col gap-my_gap_sm">
                  <div
                    className={`my_h1 ease-in-out duration-100 ${
                      activeText ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    {title}
                  </div>
                  <div
                    className={`ease-in-out duration-100 ${
                      activeText ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapMidElement;
