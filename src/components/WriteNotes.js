import React from "react";
import Title from "./WriteNotes/Title";
import NotesTextArea from "./WriteNotes/NotesTextArea";
import NotesNav from "./WriteNotes/NotesNav";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../context";
const WriteNotes = () => {
  const { visible, editId, error } = useGlobalContext();

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <NotesNav />
      <Title />
      <NotesTextArea />
    </div>
  );
};

export default WriteNotes;
