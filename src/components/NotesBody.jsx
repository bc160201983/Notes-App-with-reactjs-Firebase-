import React from "react";

import { useGlobalContext } from "../context";

const NotesBody = () => {
  const { notes, getSingleNote } = useGlobalContext();
  return (
    <div className="mx-5 mt-7">
      {notes.map((note) => {
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
};

export default NotesBody;
