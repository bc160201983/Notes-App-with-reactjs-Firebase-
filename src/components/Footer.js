import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const {
    setTitle,
    setBody,
    setIsEditing,
    visible,
    handleDelete,
    setNewNote,
    deleteDilog,
    setDeleteDilog,
    selectedIds,
  } = useGlobalContext();
  return (
    <div className="sticky bottom-0 left-[43%]">
      <AnimatePresence>
        {visible ? (
          <motion.div
            key="footer"
            initial={{ y: 74, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0, y: "100%", transition: { duration: 0.1 } }}
            className="wrapper h-[74px] bg-[#171717] flex justify-around items-center cursor-pointer"
          >
            <div
              className={`icon  text-[25px] ${
                selectedIds.length === 0
                  ? `pointer-events-none text-[#666666]`
                  : `cursor-pointer text-white`
              } `}
              onClick={handleDelete}
            >
              Delete
            </div>
            <div className="text-[#666666] text-[25px]">|</div>
            <div
              className={`icon  text-[25px] ${
                selectedIds.length === 0
                  ? `pointer-events-none text-[#666666]`
                  : `cursor-pointer text-white`
              } `}
            >
              Move
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 74, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0, y: "100%", transition: { duration: 0.1 } }}
            onClick={() => {
              setTitle("");
              setBody("");
              setIsEditing(false);
              setNewNote(true);
            }}
            className="wrapper bg-[#171717] flex flex-col justify-center items-center cursor-pointer"
          >
            <div className="icon text-white text-[50px]">
              <AiOutlineFileAdd />
            </div>
            <div className="name text-white">New Notes</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
