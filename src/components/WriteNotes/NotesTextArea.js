import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const NotesTextArea = () => {
  const { body, setBody } = useGlobalContext();

  return (
    <div>
      <div className="text-area">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full h-[100vh] outline-none text-[#666666] p-5 bg-[#171717]"
          name=""
        ></textarea>
      </div>
      area
    </div>
  );
};

export default NotesTextArea;
