import React from 'react';
import PageBanner from './PageBanner';
import { useTranslation } from 'react-i18next';

function Policy({ bannerTitle = 'Refund Policy' }) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <PageBanner
        title={bannerTitle}
        subtitle={`Motion Memory / ${bannerTitle}`}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 bg-white min-h-screen">
        <h1 className="text-6xl md:text-7xl font-banner text-center text-[#06302c] mb-8">
          {t('Refund Policy')}
        </h1>
        <p className="text-lg md:text-xl font-bold mb-4">
          {t('Refund Policy')}
        </p>
        <p className="text-lg md:text-xl mb-4">
          {t(
            'We have a 15-day return policy, which means you have 15 days after receiving your item to request a return.'
          )}
        </p>
        <p className="text-lg md:text-xl mb-4">
          {t(
            ' If you are not completely satisfied with your Motion Video Frame, youcan request a return in accordance with our policy within 15 days of receiving your item. Return requests made after 15 days will not be accepted. Please contact us at'
          )}{' '}
          <b>motionmemory@gmail.com </b>
          {t('if you experience any dissatisfaction within this period.')}
        </p>
        <p className="text-lg md:text-xl mb-4">
          {t(
            'To complete a successful return, your Motion Video Frame must be unused, in its original condition, and in its original packaging. We reserve the right to refuse any refunds or exchanges for items that are damaged, altered, or tampered with. All returns may be subject to a restocking fee.'
          )}
        </p>

        <p className="text-lg md:text-xl font-bold mb-2 mt-8">
          {t('Refunds (if applicable)')}
          
        </p>
        <p className="text-lg md:text-xl mb-4">
         {t('Once your returned Motion Video Frame is received and inspected, we will notify you regarding the status of your refund. If approved, your refund will be processed within 3 - 7 business days and issued to your original method of payment.')}
        </p>

        <p className="text-lg md:text-xl font-bold mb-2 mt-8">
          {t('Late or missing refunds (if applicable)')}
        </p>
        <p className="text-lg md:text-xl mb-4">
          {t('If you haven’t received a refund yet, please check your bank account again. Then, contact your bank or credit card provider, as processing times may vary. If you have completed these steps and still have not received your refund, please contact us at')}{' '}
          <b>motionmemory@gmail.com</b>.
        </p>

        <p className="text-lg md:text-xl font-bold mb-2 mt-8">
          {t('Exchanges (if applicable)')}
        </p>
        <p className="text-lg md:text-xl mb-4">
          {t('We are happy to exchange your Motion Frame if it arrives defective or damaged. If you receive a defective or damaged item, please contact us at')} <b>motionmemory@gmail.com</b> {t('within 7 days of receiving your Motion Video Frame for assistance.')}
          
        </p>

        <p className="text-lg md:text-xl font-bold mb-2 mt-8">  {t('Shipping')} </p>
        <p className="text-lg md:text-xl mb-8">
          {t('We do not cover return shipping costs; all return shipping fees will be deducted from your refund. Shipping costs are non-refundable. Please note that we are only responsible for the Motion Video Frame once it has been received at our warehouse.')}
        </p>

        <p className="text-lg md:text-xl font-semibold text-center mt-8">
          [Motion Memory {t('From')} Ho Chi Minh City, Vietnam]
        </p>
      </div>
    </div>
  );
}

export default Policy;
