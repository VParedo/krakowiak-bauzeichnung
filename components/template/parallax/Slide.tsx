"use client";

import Scroll from "@/components/template/parallax/Scroll";
import Image from "next/image";
import React, { useRef } from "react";
import pic from "@/assets/pic.png";
import rocket from "@/assets/rocket.png";
import { useScroll, useTransform, motion } from "framer-motion";
import useWindowDimensions from "@/components/UseWindowDimension";

const Slide = () => {
  const { height, width } = useWindowDimensions();
  console.log(-width);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    [-width / 6, width / 6]
  );

  return (
    <>
      <div className="h-screen"></div>
      <div ref={ref} className="relative flex justify-center h-[200vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div
            style={{ translateX: translate }}
            className="flex h-[50vh] justify-center items-center"
          >
            <Image
              src={rocket}
              alt="pic"
              className="max-h-[400px] max-w-[450px]"
            />
          </motion.div>
          <div className="flex h-[50vh] justify-center items-center">
            TextTextTextTextTextTextTextTextTextTextTextTextTextText
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default Slide;
