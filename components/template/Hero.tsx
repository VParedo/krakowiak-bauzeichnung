import React from "react";
import Navbar from "./Navbar";
import SlideText from "./SlideText";
import ButtonLink from "./ButtonLink";
import heroImage from "@/assets/hero.jpg";

const Hero = () => (
  <section
    className="flex relative min-h-screen justify-center items-center"
    style={{
      backgroundImage: `url(${heroImage.src})`,
      backgroundSize: "cover",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}
  >
    <Navbar />
    <div className="my_section w-full gap-my_gap bg-white bg-opacity-60">
      <div className="my_container justify-center items-center">
        <SlideText
          text="Bauzeichnung"
          comingFrom="top"
          type="h1"
          delay="0.1s"
          className="flex text-black my_hero_title justify-center items-center"
        />
        <SlideText
          className="my_p text-my_color_text justify-center items-center"
          type="p"
          comingFrom="top"
          delay="0.2s"
          text="text"
        />
        <div className="flex gap-my_gap_sm">
          <ButtonLink
            text="Kontakt aufnehmen"
            bgcolor="bg-my_color_title"
            bghovercolor="hover:bg-my_color_text"
            delay="0.3s"
          />
          {/* <ButtonLink
            text="here"
            delay="0.4s"
            noBackground={true}
            stroke_color="stroke-my_hero_title"
          /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
