import React from "react";
// import frameImg from '../assets/frame1.jpg'; // Đặt ảnh vào src/assets/frame1.jpg
import imgHome from "../image/image.png";
import imgHome1 from "../image/image1.png";
import imgHome2 from "../image/image2.png";
import { useTranslation } from "react-i18next";
function Homepage() {
  const { t } = useTranslation();
  return (
    <div>
      {/* Banner */}
      <div className="w-full min-h-[350px] bg-gradient-to-r font-banner from-[#06302c] to-[#2cc295] flex items-center px-12 py-16">
        {/* Text bên trái */}
        <div className="flex-1 ml-40">
          <h1 className="text-white text-5xl   mb-4">
            {t("Your life, beautifully framed")}
          </h1>
          <p className="text-white text-xl max-w-xl">
            {t(
              "Beautiful moments are not only to be kept but also to be felt. Motion Video Frame turns precious memories into vivid, delicate images, always present in your space."
            )}
          </p>
        </div>
        {/* Ảnh bên phải */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-xl p-8 shadow-lg flex items-center ">
            <img
              src={imgHome}
              alt="Frame"
              className="w-160 h-80 object-cover rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[600px] font-banner bg-white flex items-center px-12 py-16">
        {/* Ảnh bên trái */}
        <div className="flex-1  flex justify-center">
          <div className="bg-round "></div>
        </div>
        {/* Text bên phải */}
        <div className="flex-1 text-green ">
          <h1 className=" text-5xl mb-4">
            {t("Every moments last forever.")}{" "}
          </h1>
          <p className=" text-xl max-w-xl">
            {t(
              "Turn your precious moments into vivid displays. Motion Video Frame brings your memories to life with elegance and style, making every glance a beautiful experience."
            )}{" "}
          </p>
          <div className="pt-[40px]">
            <button
              onClick={onclick}
              className="order-btn"
              style={{ zIndex: 10, position: "relative" }}
            >
              {t("Order now")}
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="bg-product-home  flex items-center py-20">
        {/* Text bên trái */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div>
            <h1 className="text-white font-banner text-title mb-2 leading-tight">
              {t("Recreate")}
            </h1>
            <h2 className="text-[#2cc295] font-banner text-5xl font-semibold  mb-8 leading-tight">
              {t("ourmemories")}
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-[#2cc295] font-banner font-semibold text-2xl  mb-1">
                {t("Acrylic frame")}
              </h3>
              <p className="text-white text-base">
                {t("Beautiful acrylic frame for home display.")}
              </p>
            </div>
            <div>
              <h3 className="text-[#2cc295] font-banner font-semibold text-2xl  mb-1">
                {t("5” HD screen")}
              </h3>
              <p className="text-white text-base">
                {t("5” HD screen to showcase any videos.")}
              </p>
            </div>
            <div>
              <h3 className="text-[#2cc295] font-banner font-semibold text-2xl  mb-1">
                {t("Lithium battery")}
              </h3>
              <p className="text-white text-base">
                {t("Built in lithium battery for endless viewing.")}
              </p>
            </div>
            <div>
              <h3 className="text-[#2cc295] font-banner text-2xl font-semibold mb-1">
                {t("Replayable")}
              </h3>
              <p className="text-white text-base">
                {t("Infinitely loops your videos.")}
              </p>
            </div>
          </div>
        </div>
        {/* Ảnh bên phải */}
        <div className="flex-1 flex justify-center">
          <img
            src={imgHome2}
            alt="Product Frame"
            className="w-[530px] h-[792px] rounded-2xl border-[10px] border-[#2cc295] bg-white shadow-2xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

