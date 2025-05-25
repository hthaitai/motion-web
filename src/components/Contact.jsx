import React, { useState } from "react";
import PageBanner from "./PageBanner";
import { useTranslation } from "react-i18next";

function Contact({ bannerTitle = "Contact Us" }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form tại đây
    alert("Thank you for contacting us!");
  };

  return (
    <div className="pt-[30px]">
      <PageBanner
        title={t(bannerTitle)}
        subtitle={`Motion Memory / ${t(bannerTitle)}`}
      />

      <div className="min-h-screen bg-white flex flex-col items-center px-2 py-8">
        <h1 className="text-5xl md:text-6xl font-banner text-[#06302c] text-center mb-8">
          {t("How can we help ?")}
        </h1>
        <div className="w-full max-w-2xl mb-12">
          <div className="bg-[#06604c] rounded-lg p-6 text-white text-center">
            <div className="text-2xl font-banner mb-2">
              {t("Have Any Questions ?")}
            </div>
            <div className="text-base">
              <b>Motion Memory</b>
              {t(
                ", we're here to ensure you have the best experience possible. Whether you need assistance with your digital frame, have questions about your order, or simply want to share your feedback - we're happy to help!"
              )}
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-banner text-[#06302c] text-center mb-8">
          {t("Contact Us")}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder={t("Your name *")}
              className="flex-1 border rounded-lg px-4 py-3 text-lg outline-none"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder={t("Your email *")}
              className="flex-1 border rounded-lg px-4 py-3 text-lg outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder={t("Phone number")}
            className="w-full border rounded-lg px-4 py-3 text-lg outline-none"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="comment"
            placeholder={t("Your message *")}
            className="w-full border rounded-lg px-4 py-3 text-lg outline-none min-h-[100px]"
            value={form.comment}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#06604c] text-white font-bold text-xl px-10 py-2 rounded-lg mt-4 hover:bg-[#06302c] transition"
          >
            {t("Send")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
