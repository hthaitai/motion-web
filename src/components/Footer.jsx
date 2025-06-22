import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="w-full overflow-hidden bg-[#2cc295] py-2">
        <div className="relative w-full h-12">
          <div className="absolute top-0 left-0 flex animate-marquee-full w-max">
            <span className="text-[#06302c] text-3xl font-banner  whitespace-nowrap mr-16">
              {t('Free Shipping')}&nbsp;&nbsp;&nbsp;&nbsp;
              {t('15 Days Money Back')}&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {t('Free Shipping')}&nbsp;&nbsp;&nbsp;&nbsp;
              {t('15 Days Money Back')}
            </span>
            <span className="text-[#06302c] text-3xl font-banner  whitespace-nowrap mr-16">
              {t('Free Shipping')}&nbsp;&nbsp;&nbsp;&nbsp;
              {t('15 Days Money Back')}&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              {t('Free Shipping')}&nbsp;&nbsp;&nbsp;&nbsp;
              {t('15 Days Money Back')}
            </span>
          </div>
        </div>
      </div>
      {/* Banner Free Shipping & Money Back */}
      <div className="bg-white w-full py-10">
        <h2 className="text-[#06302c] text-2xl md:text-4xl font-banner text-center mb-8">
          {t('Try MOTION VIDEO FRAME now !')}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <i className="fa-solid fa-truck-fast -days text-[#06302c] text-5xl md:text-7xl mb-4"></i>
            <span className="text-[#06302c] text-lg md:text-2xl font-banner">
              {t('Free Shipping')}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-calendar-days text-[#06302c] text-5xl md:text-7xl mb-4"></i>
            <span className="text-[#06302c] text-lg md:text-2xl font-banner">
              {t('15 Days Money Back')}
            </span>
          </div>
        </div>
      </div>

      <footer className="bg-[#06302c] text-white px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
          {/* Company Info */}
          <div className="min-w-[220px]">
            <h3 className="text-xl font-banner font-semibold mb-4">
              {t('Motion Memory Company')}
            </h3>
            <p className="mb-2 leading-snug">
              {t(
                'Luu Huu Phuoc Tan Lap, Dong Hoa, Di An, Binh Duong, Viet Nam'
              )}
            </p>
            <p className="mb-1">
              <span className="font-semibold"> {t('Phone')}:</span> +84
              0123456789
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              motionmemory@gmail.com
            </p>
          </div>
          {/* Page */}
          <div>
            <h3 className="text-xl font-banner font-semibold mb-4">
              {t('Page')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  The motion frame
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  {t('About us')}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  {t('Contact')}
                </a>
              </li>
            </ul>
          </div>
          {/* Terms */}
          <div>
            <h3 className="text-xl font-banner font-semibold mb-4">
              {' '}
              {t('Terms')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/refundpolicy" className="hover:underline">
                  {t('Policy & Terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-8">
          <a href="#" className="text-[#2cc295] text-2xl hover:text-white">
            <FaFacebookF />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
