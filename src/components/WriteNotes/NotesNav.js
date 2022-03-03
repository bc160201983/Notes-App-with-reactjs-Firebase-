import React from "react";
import { AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import loader1 from "./Dual Ring-1s-200px.svg";
import { useGlobalContext } from "../../context";
const NotesNav = () => {
  const { createNote, isEditing, handleEdit } = useGlobalContext();

  return (
    <div>
      <nav className="flex justify-between px-5 text-white">
        <div className="font-bold text-[25px]">Notes</div>
        <div className=" flex justify-center items-center space-x-3">
          <div className="text-[30px]">
            <AiOutlineSearch />
          </div>
          {isEditing ? (
            <div onClick={handleEdit} className="text-[30px] cursor-pointer">
              <MdOutlineUpdate className="text-white" />
            </div>
          ) : (
            <div className="text-[30px] cursor-pointer" onClick={createNote}>
              <AiOutlineCheck />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NotesNav;
