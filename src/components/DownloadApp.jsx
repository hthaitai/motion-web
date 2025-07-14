import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";

function DownloadApp() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === "BYMTR") {
      setUnlocked(true);
      setError("");
      toast.success("✅ Mã hợp lệ! Bạn có thể tải app.");
    } else {
      setUnlocked(false);
      setError("❌ Mã không hợp lệ, vui lòng thử lại.");
    }
  };

  return (
    <div className="min-h-[500px] bg-white flex flex-col items-center px-4 py-12">
      <ToastContainer position="top-center" autoClose={2000} />

      <h1 className="text-5xl md:text-6xl font-banner text-[#06302c] text-center mb-8">
        {t("Input code to download the app")}
      </h1>

      <div className="w-full max-w-xl bg-[#06604c] text-white rounded-lg p-6 text-center mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t("Protect access rights")}</h2>
        <p>
          {t(
            "please enter a valid access code to download the app. If you don't have a code, please contact support."
          )}
        </p>
      </div>

      {!unlocked ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="code"
            placeholder="Nhập mã truy cập..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-lg outline-none"
          />
          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
          <button
            type="submit"
            className="bg-[#06604c] text-white font-bold text-xl px-10 py-3 rounded-lg mt-2 hover:bg-[#06302c] transition"
          >
            {t("Confirm")}
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4 mt-6">
          <h2 className="text-3xl font-semibold text-green-600">{t("Valid code!")}</h2>
          <p>{t("click the button below to download the app:")}</p>
          <a
            href="/downloads/MotionMemory_v1.0.apk"
            download
            className="bg-[#06604c] text-white font-bold text-xl px-8 py-3 rounded-lg hover:bg-[#06302c] transition inline-block"
          >
            Tải APK ngay
          </a>
        </div>
      )}
    </div>
  );
}

export default DownloadApp;
