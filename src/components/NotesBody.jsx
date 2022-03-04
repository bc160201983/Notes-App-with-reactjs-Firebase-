import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useGlobalContext } from "../context";
import { motion, AnimatePresence } from "framer-motion";
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
  const { notes, getSingleNote, loading, handleCheckBox, visible } =
    useGlobalContext();

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-5 mt-1"
      >
        {notes.map((note) => {
          return (
            <div key={note.id} className="flex justify-start items-center">
              <div>
                {visible && (
                  <AnimatePresence>
                    <motion.label
                      key={note.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      exit={{ x: -20 }}
                      className="container"
                    >
                      <input
                        type="checkbox"
                        name="radio"
                        value={note.id}
                        onClick={() => handleCheckBox(note.id)}
                      />
                      <span className="checkmark"></span>
                    </motion.label>
                  </AnimatePresence>
                )}
              </div>
              <motion.div
                variants={item}
                key={note.id}
                className="note-list flex flex-col w-full justify-between h-[80px] bg-[#1F1F1F] rounded-xl pl-8  mt-3 cursor-pointer"
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
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NotesBody;
