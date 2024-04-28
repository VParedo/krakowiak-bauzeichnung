import Link from "next/link";
import React from "react";
import { Jacques_Francois } from "next/font/google";
import ButtonLink from "./ButtonLink";

const font_jf = Jacques_Francois({ weight: "400", subsets: ["latin"] });
const content = [
  { text: "Leistungen", href: "#section1" },
  { text: "Galerie", href: "#section2" },
  { text: "Über mich", href: "#section3" },
  { text: "Kontakt aufnehemen", href: "#section4" },
];

const Navbar = () => {
  return (
    <header className="flex absolute flex-row h-[64px] justify-center w-full top-0 z-30 px-4 xl:px-0 py-2">
      <nav className="w-full flex max-w-my_max_width justify-between items-center">
        <Link
          href="/"
          className={`my-3 font-medium text-2xl text-my_color2 ${font_jf.className}`}
        >
          Krakowiak Bauzeichnung
        </Link>
        <div className=" sm:flex hidden justify-end items-center gap-4">
          {content.map((c, i) => (
            <div className="px-2 mx-auto my-3 font-medium">
              <Link
                href={c.href}
                className="hover:text-paredo_text_link_hover hover:opacity-60"
              >
                {c.text}
              </Link>
            </div>
          ))}
          <ButtonLink text="Button" animation={false} opacity={true} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
