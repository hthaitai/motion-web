import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "The Motion Frame": "The Motion Frame",
        "About us": "About us",
        Contact: "Contact",
        "Your life, beautifully framed": "Your life, beautifully framed",
        "Beautiful moments are not only to be kept but also to be felt. Motion Video Frame turns precious memories into vivid, delicate images, always present in your space.":
          "Beautiful moments are not only to be kept but also to be felt. Motion Video Frame turns precious memories into vivid, delicate images, always present in your space.",
        "Every moments last forever.": "Every moments last forever.",
        "Turn your precious moments into vivid displays. Motion Video Frame brings your memories to life with elegance and style, making every glance a beautiful experience.":
          "Turn your precious moments into vivid displays. Motion Video Frame brings your memories to life with elegance and style, making every glance a beautiful experience.",
        "Order now": "Order now",
        Recreate: "Recreate",
        ourmemories: "our memories",
        "Acrylic frame": "Acrylic frame",
        "Beautiful acrylic frame for home display.":
          "Beautiful acrylic frame for home display.",
        "5” HD screen": "5” HD screen",
        "5” HD screen to showcase any videos.":
          "5” HD screen to showcase any videos.",
        "Lithium battery": "Lithium battery",
        "Built in lithium battery for endless viewing.":
          "Built in lithium battery for endless viewing.",
        Replayable: "Replayable",
        "Infinitely loops your videos.": "Infinitely loops your videos.",
        "Free Shipping": "Free Shipping",
        "15 Days Money Back": "15 Days Money Back",
        "Try MOTION VIDEO FRAME now !": "Try MOTION VIDEO FRAME now !",
        "Motion Memory Company": "Motion Memory Company",
        "Luu Huu Phuoc Tan Lap, Dong Hoa, Di An, Binh Duong, Viet Nam":
          "Luu Huu Phuoc Tan Lap, Dong Hoa, Di An, Binh Duong, Viet Nam",
        // ...các key khác
      },
    },
    vi: {
      translation: {
        "The Motion Frame": "Khung ảnh số",
        "About us": "Về chúng tôi",
        Contact: "Liên hệ",
        "Your life, beautifully framed":
          "Cuộc sống của bạn được gói gọn trong khung ảnh",
        "Beautiful moments are not only to be kept but also to be felt. Motion Video Frame turns precious memories into vivid, delicate images, always present in your space.":
          "Những khoảnh khắc đẹp không chỉ được lưu giữ mà còn được cảm nhận. Khung ảnh số biến những kỷ niệm quý giá thành những hình ảnh sống động, tinh tế, luôn hiện hữu trong không gian của bạn.",
        "Every moments last forever.": "Mỗi khoảnh khắc đều tồn tại mãi mãi.",
        "Turn your precious moments into vivid displays. Motion Video Frame brings your memories to life with elegance and style, making every glance a beautiful experience.":
          "Biến những khoảnh khắc quý giá của bạn thành những màn trình diễn sống động. Motion Frame làm sống lại những kỷ niệm của bạn với sự thanh lịch và phong cách, biến mỗi cái nhìn trở thành một trải nghiệm tuyệt đẹp.",
        "Order now": "Đặt hàng ngay",
        Recreate: "Làm mới",
        ourmemories: "kỷ niệm của chúng ta",
        "Acrylic frame": "Khung acrylic",
        "Beautiful acrylic frame for home display.":
          "Khung acrylic đẹp để trưng bày tại nhà.",
        "5” HD screen": "Màn hình HD 5”",
        "5” HD screen to showcase any videos.":
          "Màn hình HD 5” để trình chiếu mọi video.",
        "Lithium battery": "Pin lithium",
        "Built in lithium battery for endless viewing.":
          "Pin lithium tích hợp cho thời gian xem không giới hạn.",
        Replayable: "Phát lại liên tục",
        "Infinitely loops your videos.": "Video của bạn được lặp lại vô hạn.",
        "Free Shipping": "Miễn phí vận chuyển",
        "15 Days Money Back": "Hoàn tiền trong 15 ngày",
        "Try MOTION VIDEO FRAME now !": "Trải nghiệm KHUNG ẢNH SỐ ngay thôi !",
         "Motion Memory Company": "Công ty TNHH Motion Memory",
        "Luu Huu Phuoc Tan Lap, Dong Hoa, Di An, Binh Duong, Viet Nam": "Lưu Hữu Phước Tân Lập, Dĩ An, Bình Dương, Việt Nam",

        // ...các key khác
      },
    },
  },
  lng: "vi", // mặc định
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
