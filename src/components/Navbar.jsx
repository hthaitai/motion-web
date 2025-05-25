import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "../image/ukflag.png";
import vnFlag from "../image/vietnam.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isVietnam, setIsVietnam] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang ? savedLang === "vi" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
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
    <nav className="bg-white border-b border-gray-200 w-full h-[30px] md:h-[70px] flex items-center px-4 md:px-12 fixed top-0 left-0 z-50">
      {/* Logo bên trái */}
      <div className="flex flex-col font-serif text-[#153535]  font-medium leading-5">
        <span className="text-xs font-semibold md:text-xl">Motion</span>
        <span className="text-xs font-semibold md:text-xl">Memory</span>
      </div>
      {/* Hamburger menu icon (mobile) */}
      <button
        className="ml-auto md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <svg className="w-4 h-4 text-[#153535]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Menu giữa (ẩn trên mobile, hiện trên md) */}
      <div className="flex-1 justify-center space-x-8 md:flex hidden">
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
      <div className="ml-4">
        <button
          onClick={handleFlagClick}
          className="focus:outline-none transition duration-200 hover:scale-110"
        >
          <img
            src={isVietnam ? vnFlag : ukFlag}
            alt={isVietnam ? "Vietnam Flag" : "UK Flag"}
            className="w-4 h-4 md:w-9 md:h-9 rounded-full border border-gray-300 hover:border-[#2cc295] transition duration-200"
          />
        </button>
      </div>
      {/* Mobile menu (hiện khi menuOpen) */}
      {menuOpen && (
        <div className="absolute top-[30px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50">
          <a
            href="#"
            className="text-[#153535] font-serif text-xl hover:underline py-2"
            onClick={() => setMenuOpen(false)}
          >
            {t("The Motion Frame")}
          </a>
          <a
            href="#"
            className="text-[#153535] font-serif text-xl hover:underline py-2"
            onClick={() => setMenuOpen(false)}
          >
            {t("About us")}
          </a>
          <a
            href="#"
            className="text-[#153535] font-serif text-xl hover:underline py-2"
            onClick={() => setMenuOpen(false)}
          >
            {t("Contact")}
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
