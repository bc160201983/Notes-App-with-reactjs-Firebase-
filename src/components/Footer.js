import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useGlobalContext } from "../context";

const Footer = () => {
  const { setTitle, setBody, setIsEditing } = useGlobalContext();
  return (
    <div className="sticky bottom-0 left-[43%]">
      <div
        onClick={() => {
          setTitle("");
          setBody("");
          setIsEditing(false);
        }}
        className="wrapper bg-[#171717] flex flex-col justify-center items-center cursor-pointer"
      >
        <div className="icon text-white text-[50px]">
          <AiOutlineFileAdd />
        </div>
        <div className="name text-white">New Notes</div>
      </div>
    </div>
  );
};

export default Footer;
