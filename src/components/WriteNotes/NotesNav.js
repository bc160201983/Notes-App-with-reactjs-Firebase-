import React from "react";
import { AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const NotesNav = () => {
  return (
    <div>
      <nav className="flex justify-between px-5 text-white">
        <div className="font-bold text-[25px]">Notes</div>
        <div className=" flex justify-center items-center space-x-3">
          <div className="text-[25px]">Edit</div>
          <div className="text-[30px]">
            <AiOutlineSearch />
          </div>
          <div className="text-[30px]">
            <AiOutlineCheck />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NotesNav;
