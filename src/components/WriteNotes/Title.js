import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const Title = () => {
  const { title, setTitle, wordCount } = useGlobalContext();

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  var d = new Date();
  var day = days[d.getDay()];
  var hr = d.getHours();
  var min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var ampm = "AM";
  if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  }
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();
  var x = document.getElementById("time");
  var fullDate = `${month}  ${date} ${hr}:${min} ${ampm} ${day} `;

  return (
    <div>
      <div className="h-[80px] w-full flex flex-col justify-end">
        <div className="flex justify-evenly text-gray-100 mb-1">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full text-[25px] text-[#666666] p-5 h-[40px] bg-[#171717]"
            placeholder="Input title"
          />
        </div>
        <div className="date-words flex pl-5">
          <div className="date text-[#666666] mr-1">{fullDate} </div>
          <div className="words text-[#666666]">| {wordCount} words</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
