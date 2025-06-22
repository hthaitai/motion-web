import React from "react";

function PageBanner({ title, subtitle }) {
  return (
    <div className="md:h-[150px] mt-[30px] md:mt-0 h-[75px] font-banner w-full items-center flex bg-[#2cc295]">
      <div className=" flex text-nowrap md:ml-20 ml-[4px] md:flex-col justify-center items-center">
        <span className="md:text-2xl">{subtitle}</span>
        <span className="hidden md:inline md:text-5xl">{title}</span>
      </div>
    </div>
  );
}

export default PageBanner;