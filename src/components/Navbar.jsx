import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "../image/ukflag.png";
import vnFlag from "../image/vietnam.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isVietnam, setIsVietnam] = useState(() => {
    // Lấy ngôn ngữ đã lưu, mặc định là "vi"
    const savedLang = localStorage.getItem("lang");
    return savedLang ? savedLang === "vi" : true;
  });

  useEffect(() => {
    // Khi mount, set lại ngôn ngữ từ localStorage (nếu có)
    const savedLang = localStorage.getItem("lang") || "vi";
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleFlagClick = () => {
    const newLang = isVietnam ? "en" : "vi";
    setIsVietnam(!isVietnam);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <nav className="bg-white border-b border-gray-200 w-full h-[70px] flex items-center px-12 fixed top-0 left-0 z-50">
      {/* Logo bên trái */}
      <div className="flex flex-col font-serif text-[#153535] text-xl font-medium leading-5">
        <span>Motion</span>
        <span>Memory</span>
      </div>
      {/* Menu giữa */}
      <div className="flex-1 flex justify-center space-x-16">
        <a href="#" className="text-[#153535] font-serif text-xl hover:underline">
          {t("The Motion Frame")}
        </a>
        <a href="#" className="text-[#153535] font-serif text-xl hover:underline">
          {t("About us")}
        </a>
        <a href="#" className="text-[#153535] font-serif text-xl hover:underline">
          {t("Contact")}
        </a>
      </div>
      {/* Icon cờ bên phải */}
      <div>
        <button
          onClick={handleFlagClick}
          className="focus:outline-none transition duration-200 hover:scale-110"
        >
          <img
            src={isVietnam ? vnFlag : ukFlag}
            alt={isVietnam ? "Vietnam Flag" : "UK Flag"}
            className="w-9 h-9 rounded-full border border-gray-300 hover:border-[#2cc295] transition duration-200"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
