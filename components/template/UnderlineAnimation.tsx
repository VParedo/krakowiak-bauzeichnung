import React from "react";

const UnderlineAnimation = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-500 via-yellow-300 to-amber-500">
      <div className="mx-24 md:mx-0 max-w-screen-sm">
        <div className="space-y-10 text-gray-800 font-dancing font-bold">
          <p
            className="capitalize
                inline-block
                text-3xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100
        "
          >
            Sample Underlined Text Goes Here
          </p>
          <p
            className="capitalize
                inline-block
                text-3xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:right-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100
        "
          >
            Sample Underlined Text Goes Here
          </p>
          <p
            className="capitalize
                inline-block
                text-3xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100
        "
          >
            Sample Underlined Text Goes Here
          </p>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur{" "}
            <a
              href=""
              className="bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500"
            >
              {" "}
              adipisicing elit. Repellat rerum sint cupiditate ad, neque nulla,
              illo, quaerat culpa
            </a>{" "}
            quasi non dolorem aliquid consequuntur et?
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderlineAnimation;
