import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useGlobalContext } from "../context";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const { visible, setVisible, selectedIds, setSelectedIds } =
    useGlobalContext();

  const handleCancel = () => {
    setVisible(false);
    setSelectedIds([]);
  };
  return (
    <>
      {visible ? (
        <nav
          key="topNav"
          className="flex justify-between h-[38px] px-5 bg-[#171717]"
        >
          <div className="text-[18px]">Select All</div>

          <div
            className="text-[18px] cursor-pointer"
            onClick={() => setVisible(true)}
          >
            {selectedIds.length !== 0 ? selectedIds.length : "Select Items"}
          </div>
          <div className="text-[18px] cursor-pointer" onClick={handleCancel}>
            Cancel
          </div>
        </nav>
      ) : (
        <nav className="flex justify-between px-5 bg-[#171717]">
          <div className="font-bold text-[25px]">Notes</div>
          <div className=" flex justify-center items-center space-x-3">
            <div
              className="text-[18px] cursor-pointer"
              onClick={() => setVisible(true)}
            >
              Edit
            </div>
            <div className="text-[20px]">
              <AiOutlineSearch />
            </div>
            <div className="text-[20px]">
              <BsThreeDots />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
