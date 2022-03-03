import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const NotesTextArea = () => {
  const { body, setBody } = useGlobalContext();

  return (
    <div>
      <div className="text-area h-[calc(100vh-125px)]">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full h-full outline-none text-[#666666] p-5 bg-[#171717]"
          name=""
        ></textarea>
      </div>
    </div>
  );
};

export default NotesTextArea;
