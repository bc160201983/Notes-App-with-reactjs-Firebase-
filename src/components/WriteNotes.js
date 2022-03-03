import React from "react";
import Title from "./WriteNotes/Title";
import NotesTextArea from "./WriteNotes/NotesTextArea";
import NotesNav from "./WriteNotes/NotesNav";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context";
const WriteNotes = () => {
  const { visible, editId } = useGlobalContext();

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <NotesNav />
      <motion.div
        key={editId}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Title />
        <NotesTextArea />
      </motion.div>
    </div>
  );
};

export default WriteNotes;
