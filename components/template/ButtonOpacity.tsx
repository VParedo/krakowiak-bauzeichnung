import Link from "next/link";
import React from "react";

const ButtonOpacity = ({ text = "Start Selling", bgcolor = "bg-white" }) => (
  <Link
    href="/start"
    target="_blank"
    className={`${bgcolor} flex items-center justify-center py-1 px-4 rounded-full bg-opacity-20 hover:bg-opacity-40 group`}
  >
    <span className="whitespace-nowrap text-white mr-1">{text}</span>
    <svg
      className="fill-none stroke-white stroke-2 ml-1 -mb-[2px]"
      width="10"
      height="10"
      viewBox="0 0 10 10"
    >
      <g>
        <path
          className="p-8 opacity-0 ease-in-out duration-150 group-hover:duration-150 group-hover:ease-in-out group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="group-hover:ease-in-out. duration-150 ease-in-out group-hover:translate-x-1 group-hover:duration-150"
          d="M1 1l4 4-4 4"
        ></path>
      </g>
    </svg>
  </Link>
);

export default ButtonOpacity;
