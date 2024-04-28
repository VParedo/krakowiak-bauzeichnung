"use client";

import { formAction } from "@/utils/actions";
import { ButtonLinkProps } from "@/utils/interfaces";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const ButtonLink: React.FC<ButtonLinkProps> = ({
  text = "Default",
  href = "",
  bgcolor = "bg-my_color_1",
  bghovercolor = "hover:bg-opacity-60",
  text_color = "text-white",
  stroke_color = "stroke-white",
  delay = "",
  animation = true,
  opacity = false,
  noBackground = false,
  isSubmitButton = false,
  isTargetBlank = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const transition = `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}`;

  return (
    <div
      ref={ref}
      style={{
        scale: animation ? (isInView ? 1 : 0.8) : 1,
        opacity: animation ? (isInView ? 1 : 0) : 1,
        transition: transition,
      }}
      className="flex"
    >
      {isSubmitButton ? (
        <button
          type="submit"
          className={`flex items-center justify-center py-1 px-4 rounded-full group 
        ${
          opacity
            ? `bg-white bg-opacity-20 hover:bg-opacity-40 group`
            : noBackground
            ? `text-my_color_title hover:text-my_color_text`
            : `rounded-full ${bgcolor} ${bghovercolor} duration-150 ease-in-out hover:duration-150 hover:ease-in-out`
        }`}
        >
          <span
            className={`whitespace-nowrap ${
              noBackground ? "font-medium" : text_color
            } mr-1`}
          >
            {text}
          </span>
          <svg
            className={`fill-none ${
              noBackground
                ? "stroke-my_color_title stroke-2 group-hover:stroke-my_color_text"
                : stroke_color
            } stroke-2 ml-1 -mb-[2px]`}
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
        </button>
      ) : (
        <Link
          href={href}
          target={isTargetBlank ? "_blank" : ""}
          className={`flex items-center justify-center py-1 px-4 rounded-full group 
        ${
          opacity
            ? `bg-white bg-opacity-20 hover:bg-opacity-40 group`
            : noBackground
            ? `text-my_color_title hover:text-my_color_text`
            : `rounded-full ${bgcolor} ${bghovercolor} duration-150 ease-in-out hover:duration-150 hover:ease-in-out`
        }`}
        >
          <span
            className={`whitespace-nowrap ${
              noBackground ? "font-medium hover:opacity-80" : text_color
            } mr-1`}
          >
            {text}
          </span>
          <svg
            className={`fill-none ${
              noBackground
                ? "stroke-my_color_title stroke-2 group-hover:stroke-my_color_text group-hover:opacity-80"
                : stroke_color
            } stroke-2 ml-1 -mb-[2px]`}
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
      )}
    </div>
  );
};

export default ButtonLink;
