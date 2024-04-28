"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  text = "Submit",
  bgcolor = "bg-paredo_purple",
  bghovercolor = "hover:bg-paredo_title",
  text_color = "text-white",
  stroke_color = "stroke-white",
  type = "button",
}) {
  const { pending } = useFormStatus();

  {
    if (pending) {
      return (
        <button
          type="submit"
          disabled
          className={`flex items-center justify-center py-1 px-4 rounded-full ${bgcolor} ${bghovercolor} duration-150 ease-in-out hover:duration-150 hover:ease-in-out group`}
        >
          <span className={`whitespace-nowrap ${text_color} mr-1`}>
            Sending...
          </span>
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          disabled={pending}
          className={`flex items-center justify-center py-1 px-4 rounded-full ${bgcolor} ${bghovercolor} duration-150 ease-in-out hover:duration-150 hover:ease-in-out group`}
        >
          <span className={`whitespace-nowrap ${text_color} mr-1`}>{text}</span>
          <svg
            className={`fill-none ${stroke_color} stroke-2 ml-1 -mb-[2px]`}
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
      );
    }
  }
}
