"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import RoadmapElement from "./RoadmapElement";
import { FaAdjust } from "react-icons/fa";
import { Fa1, Fa2, Fa3, FaStar } from "react-icons/fa6";
import { TbCircleNumber1 } from "react-icons/tb";
import RoadmapMidElement from "./RoadmapMidElement";

const RoadmapMid = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.4", "end 0.4"],
  });

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const [activeText1, setActiveText1] = useState(false);
  const [activeText2, setActiveText2] = useState(false);
  const [activeText3, setActiveText3] = useState(false);

  const scale1 = useTransform(scrollYProgress, [0.05, 0.33], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0.38, 0.66], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.71, 0.95], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && active1 === false) {
      setActive1(true);
    } else if (latest === 0 && active1 === true) {
      setActive1(false);
    }

    if (latest > 0.19 && activeText1 === false) {
      setActiveText1(true);
    } else if (latest <= 0.19 && activeText1 === true) {
      setActiveText1(false);
    }

    if (latest > 0.33 && active2 === false) {
      setActive2(true);
    } else if (latest <= 0.33 && active2 === true) {
      setActive2(false);
    }

    if (latest > 0.52 && activeText2 === false) {
      setActiveText2(true);
    } else if (latest <= 0.52 && activeText2 === true) {
      setActiveText2(false);
    }

    if (latest > 0.66 && active3 === false) {
      setActive3(true);
    } else if (latest <= 0.66 && active3 === true) {
      setActive3(false);
    }

    if (latest > 0.85 && activeText3 === false) {
      setActiveText3(true);
    } else if (latest <= 0.85 && activeText3 === true) {
      setActiveText3(false);
    }

    if (latest > 0.99 && active4 === false) {
      setActive4(true);
    } else if (latest <= 0.99 && active4 === true) {
      setActive4(false);
    }
  });

  return (
    <div ref={ref} className="hidden md:flex flex-col w-full gap-my_gap mt-20">
      <RoadmapMidElement
        active={active1}
        activeText={activeText1}
        icon={<Fa1 size={32} className="text-my_color_background" />}
        scale={scale1}
        index={0}
        title="Komplexes Thema"
        text="All die Nuancen von Messaging, Design und Technologie können überwältigend werden."
      />
      <RoadmapMidElement
        active={active2}
        activeText={activeText2}
        icon={<Fa2 size={32} className="text-my_color_background" />}
        scale={scale2}
        index={1}
        title="Partner finden"
        text="Um die richtigen Ergebnisse zu erzielen, brauchen Sie einen Partner, dem Sie vertrauen können."
      />
      <RoadmapMidElement
        active={active3}
        activeText={activeText3}
        icon={<Fa3 size={32} className="text-my_color_background" />}
        scale={scale3}
        index={2}
        title="Der richtige Partner"
        text="Sie brauchen einen Partner, dem Sie vertrauen können. Jemand, der Ihnen die richtige Strategie vorgibt, die Prozesse übernimmt und eine Website liefert, die Ihre Kunden lieben werden."
      />

      {/**
       * 4
       */}
      <div className="flex flex-col w-full items-center">
        <div
          className={`my_h1 rounded-full p-2 ease-in-out duration-200 ${
            active4 ? "bg-white" : "bg-white bg-opacity-20"
          }`}
        >
          <Fa3 size={32} className={`text-transparent`} />
        </div>
      </div>
    </div>
  );
};

export default RoadmapMid;

{
  /* <div className="flex flex-col w-full gap-my_gap">
      <RoadmapElement
        icon={<FaStar size={64} />}
        title="Sie erhalten eine marktführende Website. Wir nehmen den Aufwand auf uns."
        text="Sie erhalten eine marktführende Website. Wir nehmen den Aufwand auf uns."
      />
      <RoadmapElement
        icon={<FaStar size={64} />}
        title="Verwandeln Sie Ihre Website in den besten Verkäufer, den Sie je hatten."
        text="Verwandeln Sie Ihre Website in den besten Verkäufer, den Sie je hatten."
      />
      <RoadmapElement
        icon={<FaStar size={64} />}
        title="Machen Sie Ihre Website zu einem Werkzeug für langfristiges Wachstum"
        text="Q3 2024"
      />
      <FaStar size={64} />
    </div> */
}
