import React from "react";

import { useGlobalContext } from "../context";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.9,
    },
  },
};
const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const NotesBody = () => {
  const { notes, getSingleNote, loading } = useGlobalContext();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mx-5 mt-7"
    >
      {notes.map((note) => {
        return (
          <motion.div
            variants={item}
            key={note.id}
            className="note-list flex flex-col justify-between h-[80px] bg-[#1F1F1F] rounded-xl pl-8  mt-3 cursor-pointer"
            onClick={() => getSingleNote(note.id)}
          >
            <div className="note-title capitalize font-semibold text-[25px]">
              {note.title}
            </div>
            <div className="time pb-[8px] font-thin text-[#666666] text-[12px]">
              {new Date(note.CreatedAt.seconds * 1000).toLocaleDateString(
                "en-US"
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NotesBody;
