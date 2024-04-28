import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

const FormTooltip = ({ text = "" }) => {
  return (
    <>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-html={text}
        data-tooltip-place="top"
        className="text-paredo_text"
      >
        <FaCircleQuestion />
      </a>
      <Tooltip
        className="max-w-[95%]"
        id="my-tooltip"
        style={{ backgroundColor: "rgb(66 84 102)" }}
      />
    </>
  );
};

export default FormTooltip;
