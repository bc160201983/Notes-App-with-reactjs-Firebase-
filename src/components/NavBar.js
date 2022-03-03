import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between px-5 bg-[#171717]">
        <div className="font-bold text-[25px]">Notes</div>
        <div className=" flex justify-center items-center space-x-3">
          <div className="text-[18px]">Edit</div>
          <div className="text-[20px]">
            <AiOutlineSearch />
          </div>
          <div className="text-[20px]">
            <BsThreeDots />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
