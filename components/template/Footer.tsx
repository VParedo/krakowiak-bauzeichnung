import React from "react";
import Link from "next/link";
import { Jacques_Francois } from "next/font/google";
import ButtonLink from "./ButtonLink";

const font_jf = Jacques_Francois({ weight: "400", subsets: ["latin"] });

const content = [
  { href: "/impressum", text: "Impressum" },
  { href: "/agb", text: "AGB" },
  { href: "/datenschutz", text: "Datenschutz" },
];

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-my_color_light_background items-center px-4 sm:px-0 text-paredo_text">
      <div className="flex flex-col w-full max-w-my_max_width">
        <div className="flex flex-col sm:flex-row paredo_p py-6 gap-4 sm:gap-0">
          <div className="hidden sm:flex flex-col flex-grow justify-center">
            <Link
              href="/"
              className={`my-3 px-2 font-medium text-2xl ${font_jf.className}`}
            >
              Krakowiak Bauzeichnung
            </Link>
          </div>

          <div className="flex flex-col flex-grow items-start sm:items-center sm:justify-center">
            <ButtonLink text="Start Selling" animation={false} />
          </div>
        </div>
        <div className="flex flex-col w-full items-start sm:items-center py-6">
          <p>©{new Date().getFullYear()} Krakowiak Bauzeichnung</p>
          <p>Alle Rechte vorbehalten</p>

          <div className="flex sm:items-center gap-4 text-sm mt-1">
            {content.map((c) => (
              <Link
                href={c.href}
                target="_blank"
                className="text-my_color_text text-opacity-60 hover:text-opacity-100"
              >
                {c.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
