import React from "react";
// import frameImg from '../assets/frame1.jpg'; // Đặt ảnh vào src/assets/frame1.jpg
import imgHome from "../image/image.png";
import imgHome1 from "../image/image1.png";
import imgHome2 from "../image/image2.png";
import { useTranslation } from "react-i18next";
function Homepage() {
  const { t } = useTranslation();
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Banner */}
      <div className="w-full min-h-[350px] bg-gradient-to-r font-banner from-[#06302c] to-[#2cc295] flex flex-col md:flex-row items-center px-4 md:px-12 py-8 md:py-16">
        {/* Text bên trái */}
        <div className="flex-1 md:ml-40 mb-6 md:mb-0">
          <h1 className="text-white text-3xl md:text-5xl mb-4">
            {t("Your life, beautifully framed.")}
          </h1>
          <p className="text-white text-base md:text-xl max-w-xl">
            {t(
              "Beautiful moments are not only to be kept but also to be felt. Motion Video Frame turns precious memories into vivid, delicate images, always present in your space."
            )}
          </p>
        </div>
        {/* Ảnh bên phải */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg flex items-center">
            <img
              src={imgHome}
              alt="Frame"
              className="w-60 h-40 md:w-160 md:h-80 object-cover rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[600px] font-banner bg-white flex flex-col md:flex-row items-center px-4 md:px-12 py-8 md:py-16">
        {/* Ảnh bên trái */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img className="bg-round w-40 h-40 md:w-auto md:h-auto" />
        </div>
        {/* Text bên phải */}
        <div className="flex-1 text-green text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-4">
            {t("Every moments last forever.")}
          </h1>
          <p className="text-base md:text-xl max-w-xl mx-auto md:mx-0">
            {t(
              "Turn your precious moments into vivid displays. Motion Video Frame brings your memories to life with elegance and style, making every glance a beautiful experience."
            )}
          </p>
          <div className="pt-8 md:pt-[40px] flex justify-center md:justify-start">
            <button
              onClick={onclick}
              className="order-btn"
              style={{ zIndex: 10, position: "relative" }}
            >
              {t("Order now")}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-product-home flex flex-col-reverse md:flex-row items-center py-10 md:py-20 px-4 md:px-0">
        {/* Text bên trái (sẽ nằm dưới trên mobile) */}
        <div className="flex-1 flex flex-col mt-8 md:ml-50 md:mt-0 text-center md:text-left px-4 md:px-0 md:pl-20 w-full">
          <div>
            <p className="text-white font-banner text-6xl md:text-9xl md:text-title mb-2 leading-tight">
              {t("Recreate")}
            </p>
            <h2 className="text-[#2cc295] font-banner text-3xl md:text-5xl font-semibold mb-8 leading-tight">
              {t("ourmemories")}
            </h2>
          </div>
          <div className="space-y-8 w-full">
            <div>
              <h3 className="text-[#2cc295] font-banner font-semibold text-xl md:text-2xl mb-1">
                {t("Acrylic frame")}
              </h3>
              <p className="text-white text-base md:text-base">
                {t("Beautiful acrylic frame for home display.")}
              </p>
            </div>
            <div>
              <h3 className="text-[#2cc295] font-banner font-semibold text-xl md:text-2xl mb-1">
                {t("5” HD screen")}
              </h3>
              <p className="text-white text-base md:text-base">
                {t("5” HD screen to showcase any videos.")}
              </p>
            </div>
            <div>
              <h3 className="text-[#2cc295] font-banner font-semibold text-xl md:text-2xl mb-1">
                {t("Lithium battery")}
              </h3>
              <p className="text-white text-base md:text-base">
                {t("Built in lithium battery for endless viewing.")}
              </p>
            </div>
            <div>
              <h3 className="text-[#2cc295] font-banner text-2xl font-semibold mb-1">
                {t("Replayable")}
              </h3>
              <p className="text-white text-base md:text-base">
                {t("Infinitely loops your videos.")}
              </p>
            </div>
          </div>
        </div>
        {/* Ảnh bên phải (sẽ nằm trên trên mobile) */}
        <div className="flex-1 flex justify-center">
          <img
            src={imgHome2}
            alt="Product Frame"
            className="w-60 h-80 md:w-[530px] md:h-[792px] rounded-2xl border-[6px] md:border-[10px] border-[#2cc295] bg-white shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

