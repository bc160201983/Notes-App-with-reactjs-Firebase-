import React from "react";

const HeaderNav = () => {
  return (
    <>
      <div className="h-[50px] w-full flex flex-col justify-end border-b-[1px] border-[#727272]">
        <div className="flex justify-evenly text-gray-100 mb-1">
          <div className="active all text-[20px] cursor-pointer">All</div>
          <div className="folder text-[20px] text-[#727272] cursor-pointer">
            Folder
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
