import React from "react";

function PageBanner({ title, subtitle }) {
  return (
    <div className="h-[150px] font-banner flex bg-[#2cc295]">
      <div className="m-20 flex flex-col justify-center items-center">
        <span className="text-2xl">{subtitle}</span>
        <span className="text-5xl">{title}</span>
      </div>
    </div>
  );
}

export default PageBanner;