import React from "react";
import Title from "./WriteNotes/Title";
import NotesTextArea from "./WriteNotes/NotesTextArea";
import NotesNav from "./WriteNotes/NotesNav";
const WriteNotes = () => {
  return (
    <div>
      <NotesNav />
      <Title />
      <NotesTextArea />
    </div>
  );
};

export default WriteNotes;
