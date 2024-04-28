import Image from "next/image";
import React from "react";
import platzhalter from "@/assets/platzhalter.webp";

const Section3 = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <Image src={platzhalter} alt={"profilbild"} className="w-[320px]" />
        <div>stichpunkte</div>
      </div>
    </div>
  );
};

export default Section3;
