import React from "react";
import Link from "next/link";
import ButtonOpacity from "./ButtonOpacity";
import { Rubik } from "next/font/google";
//import { useEffect, useState } from "react";
//import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const rubik = Rubik({ subsets: ["latin"] });

const Header = () => {
  //const [providers, setProviders] = useState(null);
  //const [toggleDropdown, setToggleDropdown] = useState(false);

  /*
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  */

  //const { data: session } = useSession();
  //console.log(`Session: ${session}`);

  return (
    <header className="flex flex-row justify-center w-full top-0 z-30 px-4 xl:px-0 py-2">
      <nav className="w-full flex max_width justify-between items-center">
        <Link
          href="/"
          className={`my-3 font-medium text-2xl hover:text-paredo_text_link_hover hover:opacity-60 ${rubik.className}`}
        >
          <em className="">ticketmate</em>
        </Link>
        <ul className="list-none sm:flex hidden justify-end items-center gap-4">
          <li className="px-2 mx-auto my-3 font-medium">
            <Link
              href="#how-it-works"
              className="hover:text-paredo_text_link_hover hover:opacity-60"
            >
              How it works
            </Link>
          </li>
          <li className="px-2 mx-auto my-3 font-medium">
            <Link
              href="#what-we-do"
              className="hover:text-paredo_text_link_hover hover:opacity-60"
            >
              What we do
            </Link>
          </li>
          <li className="px-2 mx-auto my-3 font-medium">
            <Link
              href="#features"
              className="hover:text-paredo_text_link_hover hover:opacity-60"
            >
              Features
            </Link>
          </li>
          <li className="px-2 mx-auto my-3 font-medium">
            <Link
              href="#faq"
              className="hover:text-paredo_text_link_hover hover:opacity-60"
            >
              FAQ
            </Link>
          </li>
          <ButtonOpacity text="Start Selling" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
