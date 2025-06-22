import React from 'react';
import PageBanner from './PageBanner';
import { useTranslation } from 'react-i18next';

function AboutUs({ bannerTitle = 'About Us' }) {
  const { t } = useTranslation();

  return (
    <div>
      <PageBanner
        title={t(bannerTitle)}
            subtitle={`Motion Memory / ${t(bannerTitle)}`}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 bg-white min-h-screen">
        <h1 className="text-6xl md:text-7xl font-banner text-center text-[#06302c] mb-8">
          {t('About Us')}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          <b>{t('Motion Memory')}</b>{' '}
          {t(
            'was founded from a deep passion for capturing life’s most precious moments and turning them into lasting memories. We believe that photos alone are not enough to tell a full story—motion brings them to life.'
          )}
        </p>
        <p className="text-lg md:text-xl mb-6">
          {t('Our journey began with a simple idea: to create a')}
          <b> {t('digital motion frame')} </b>
          {t('that allows you to')}
          <b> {t('relive your favorite moments')} </b>
          {t(
            'in the most vivid and heartfelt way. Whether it’s a birthday, an anniversary, or just a special memory you want to keep close,'
          )}
          <b> {t('Motion Memory ')}</b>
          {t('is designed to make every frame tell a story.')}
        </p>
        <p className="text-lg md:text-xl mb-6">
          {t(
            'With seamless display, effortless remote updates, and a sleek design,Motion Memory fits perfectly into any home or office, making it the ideal gift for loved ones near and far.'
          )}
        </p>
        <p className="text-lg md:text-xl mb-6">
          {t(
            'If we can bring a smile to your face and keep your memories alive,then our mission has been fulfilled.'
          )}
        </p>
        <p className="text-lg md:text-xl font-semibold mb-8">
          {t('Join us on this journey of preserving moments that matter.')}
        </p>
        <p className="text-lg md:text-xl mb-1">{t('Sincerely,')}</p>
        <p className="text-lg md:text-xl font-bold">
          {t('The Motion Memory Company')}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
