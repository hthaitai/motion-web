import React, { useState } from 'react';
import product1 from '../image/product1.png';
import product2 from '../image/product2.png';
import product3 from '../image/product3.png';
import product4 from '../image/product4.png';
import PageBanner from './PageBanner';

function ProductDetail({ bannerTitle = 'The Motion Frame' }) {
  const images = [product2, product1, product3, product4];
  const [mainImg, setMainImg] = useState(product2);

  return (
    <div>
      {/* Banner page */}
      <PageBanner
        title={bannerTitle}
        subtitle={`Motion Memory / ${bannerTitle}`}
      />
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 px-4 py-12 bg-white">
        {/* Ảnh sản phẩm chính */}
        <div className="flex mr-[150px] flex-col items-center">
          <img
            src={mainImg}
            alt="Motion Video Frame"
            className="w-140 h-156 object-fit rounded-xl shadow-lg"
          />
          {/* Ảnh nhỏ bên dưới */}
          <div className="flex gap-4 mt-6">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`w-32 h-32 object-cover rounded cursor-pointer border-2 ${
                  mainImg === img ? 'border-[#2cc295]' : 'border-transparent'
                }`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>
        {/* Thông tin sản phẩm */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-5xl font-banner mb-2">Motion Video Frame</h1>
          <div className="flex items-center mb-2">
            {/* <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="ml-2 text-gray-500 text-xs">(21)</span> */}
          </div>
          {/* price */}
          {/* <div className="text-2xl font-bold mb-4">700.000 VNĐ</div> */}
          <div className="mb-4">
            <span className="font-semibold">OUR SHOP AT:</span>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="#"
                className="bg-black w-[200px] text-white px-6 py-2 rounded-xl font-semibold text-center"
              >
                SHOPEE
              </a>
              <a
                href="#"
                className="bg-black w-[200px] text-white px-6 py-2 rounded-xl font-semibold text-center"
              >
                LAZADA
              </a>
              <a
                href="#"
                className="bg-black w-[200px] text-white px-6 py-2 rounded-xl font-semibold text-center"
              >
                TIKTOKSHOP
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-banner mb-2">Description</h2>
            <p className="text-xl">
              A gorgeous 6.5" acrylic frame with a 5" HD LCD screen display that
              allows you to infinitely loop the most precious memories that you
              captured via video.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
