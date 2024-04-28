"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import pic from "@/assets/pic.png";
import { useScroll, useTransform, motion } from "framer-motion";

const Scroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  useEffect(() => console.log(scrollYProgress.current), [scrollYProgress]);

  return (
    <>
      <div className="h-screen"></div>
      <div ref={ref} className="relative flex justify-center h-[300vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div
            style={{ scale: scale }}
            className="flex h-screen justify-center items-center"
          >
            <Image src={pic} alt="pic" className="w-[25vw] h-[25vh]" />
          </motion.div>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default Scroll;
