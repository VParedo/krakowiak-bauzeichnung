import { ScrollHalfScreenElementProps } from "@/utils/interfaces";
import { motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const ScrollHalfScreenElement: React.FC<ScrollHalfScreenElementProps> = ({
  img,
  target,
  progress,
  visible,
}) => {
  return (
    <motion.div
      className={`relative flex flex-col h-[80vh] mt-20`}
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="flex sticky top-[20%]">{img}</div>
    </motion.div>
  );
};

export default ScrollHalfScreenElement;
