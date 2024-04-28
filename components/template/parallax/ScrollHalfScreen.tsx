"use client";

import { ScrollHalfScreenProps } from "@/utils/interfaces";
import Image from "next/image";
import ScrollHalfScreenElement from "./ScrollHalfScreenElement";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import SectionTitle from "../SectionTitle";
import pic1 from "@/assets/pic1.webp";
import pic2 from "@/assets/pic2.webp";
import pic3 from "@/assets/pic3.svg";

const ScrollHalfScreen: React.FC<ScrollHalfScreenProps> = ({
  texts,
  images,
  title,
  text,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.4", "end 0.4"],
  });

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);

    if (latest > 0 && latest <= 0.33 && visible1 === false) {
      setVisible1(true);
    } else if ((latest === 0 || latest >= 0.33) && visible1 === true) {
      setVisible1(false);
    }
    if (latest > 0.33 && latest <= 0.66 && visible2 === false) {
      setVisible2(true);
    } else if ((latest < 0.33 || latest >= 0.66) && visible2 === true) {
      setVisible2(false);
    }
    if (latest > 0.66 && latest <= 1 && visible3 === false) {
      setVisible3(true);
    } else if ((latest < 0.66 || latest >= 1) && visible3 === true) {
      setVisible3(false);
    }
  });

  return (
    <>
      <div className="my_container">
        <SectionTitle h1={title} h2={text} />
      </div>
      <div ref={ref} className="flex w-full justify-center mt-20">
        <div className="flex w-full max-w-my_max_width gap-my_gap_lg">
          <div className="flex relative w-full h-[240vh] gap-my_gap_lg">
            <div className="flex flex-col w-full gap-my_gap_lg">
              {texts.map((t, i) => (
                <div className="flex flex-col min-h-[70vh] gap-my_gap_sm">
                  <div className="my_h1">{t.title}</div>
                  <div className="my_p">{t.text}</div>
                  <div className="my_p">{t.element}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col relative top-0 w-full">
              {images.map((img, i) => (
                <Image
                  src={img}
                  alt=""
                  className={`sticky w-full top-[20vh] ease-in-out duration-200 ${
                    i === 0
                      ? visible1
                        ? "opacity-100"
                        : "opacity-0"
                      : i === 1
                      ? visible2
                        ? "opacity-100"
                        : "opacity-0"
                      : visible3
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* <div className="flex flex-col w-full">
            {texts.map((t, index) => (
              <div
                className={`relative flex flex-col h-[80vh] mt-20 gap-my_gap`}
              >
                <div className="my_h1">{t.title}</div>
                <div className="my_p">{t.text}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full">
            {images.map((i, index) => (
              <ScrollHalfScreenElement
                img={i}
                target={[(index * 1) / 3, ((index + 1) * 1) / 3]}
                progress={scrollYProgress}
                visible={
                  index === 0 ? visible1 : index === 1 ? visible2 : visible3
                }
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ScrollHalfScreen;
