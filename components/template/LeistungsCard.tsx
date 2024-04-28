import React, { ReactElement } from "react";
import { BiHome } from "react-icons/bi";

const LeistungsCard = ({
  icon,
  title,
  text,
}: {
  icon?: ReactElement;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col w-full gap-2 p-6">
      <div className="flex gap-2">
        <BiHome size="32" />
        {/* {icon} */}
        <div className="flex text-2xl">{title}</div>
      </div>

      <div className="flex">{text}</div>
    </div>
  );
};

export default LeistungsCard;
