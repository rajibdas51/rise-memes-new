'use client';

import Image from 'next/image';
import CustomInput from '../../common/custom-input';
import SimpleButton from '../../common/simple-button';
import DownloadBtns from '../../common/download-btns';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { SubscriptionError } from '@/app/types/subscription';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        const error = data.error as SubscriptionError;
        throw new Error(error.message || 'Failed to subscribe');
      }

      toast.success('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to subscribe. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer>
      <div
        className='relative w-full xl:min-h-screen py-10 bg-opacity-10 bg-no-repeat bg-cover flex flex-col items-center justify-center lazy-bg '
        data-bg='/assets/footerbackground.webp'
      >
        <div className='absolute inset-0 bg-gradient-to-b from-[#20150b] via-transparent to-[#20150b] opacity-80 pointer-events-none'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#20150b] via-transparent to-[#20150b] opacity-80 pointer-events-none'></div>

        <div className='relative z-10 w-full flex flex-col items-center'>
          {/* subscription form begining*/}
          <div className='flex justify-center items-center px-2'>
            <div className='lg:min-w-[30rem] lg:max-w-[30rem] px-6 py-4 md:px-14 md:py-8 bg-[#20150b]/60 rounded-xl border border-[#EED199] border-opacity-70 flex flex-col gap-2'>
              <CustomInput
                label='Subscribe For Contests, Airdrops and updates!'
                labelClassName='text-xs'
                inputClassName='focus:border-2 border-[#EED199] border-opacity-70 '
                value={email}
                onChange={setEmail}
                placeholder='Enter your email address'
                type='email'
                showMax={false} // Add this to hide the MAX button
              />
              <SimpleButton
                label={isLoading ? 'Subscribing...' : 'Subscribe'}
                radialColor1='#54442c'
                radialColor2='#211811'
                onClick={handleSubscribe}
                disabled={isLoading}
              />
            </div>
          </div>
          {/* subscription form ending*/}

          <div className='mt-5 flex justify-center items-center gap-14'>
            <Image
              src={'/assets/mobile-x-image.svg'}
              alt='telegram'
              width={60}
              height={60}
              loading='lazy'
            />
            <Image
              src={'/assets/mobile-telegram-image.svg'}
              alt='telegram'
              width={60}
              height={60}
              loading='lazy'
            />
          </div>

          <DownloadBtns />

          <div className='flex justify-center items-center gap-14 text-gradient font-semibold  text-sm lg:text-lg'>
            <Link href='/privacy-policy'>Privacy & Policies</Link>
            <Link href='/terms-and-conditions'>Terms & Conditions</Link>
          </div>

          <div className='px-4 md:px-20 lg:px-40 md:max-w-7xl'>
            <h4 className='my-5 text-center text-[#fff1de] text-shadow-effect-para text-xs lg:text-md'>
              This memecoin project is for entertainment and speculative
              purposes only. It does not represent a traditional investment and
              carries a high level of risk, including the potential loss of all
              funds. This project is not affiliated with any financial
              institutions, and no warranties or guarantees are provided
              regarding its value or future performance. Participants should
              conduct their own research and consult with a financial advisor
              before engaging. By participating, you acknowledge that you
              understand and accept these risks.
            </h4>
            <h4 className='text-center text-[#fff1de] text-shadow-effect-para text-md'>
              @copyright 2024 All rights reserved by TheRiseOfMemes
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
