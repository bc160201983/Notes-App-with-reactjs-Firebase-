import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-[43%]">
      <div className="wrapper flex flex-col justify-center items-center cursor-pointer">
        <div className="icon text-[50px]">
          <AiOutlineFileAdd />
        </div>
        <div className="name">New Notes</div>
      </div>
    </div>
  );
};

export default Footer;
