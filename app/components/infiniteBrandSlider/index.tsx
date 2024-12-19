'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/assets/brands/1.png',
  '/assets/brands/2.png',
  '/assets/brands/3.png',
  '/assets/brands/4.png',
  '/assets/brands/5.png',
  '/assets/brands/6.png',
  '/assets/brands/7.png',
  '/assets/brands/8.png',
  '/assets/brands/9.png',
  '/assets/brands/10.png',
  '/assets/brands/11.png',
];

const InfiniteSlider = () => {
  const containerShadowStyle = {
    filter: 'drop-shadow(0px 0px 15px #AA8246)',
  };

  return (
    <div className='infinite-slider-wrapper overflow-hidden'>
      <div className='flex justify-center items-center w-full lg:pt-16 lg:pb-0 py-5 px-5'>
        <h1
          className={`lg:text-4xl relative text-2xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]`}
          style={containerShadowStyle}
        >
          Featured In
        </h1>
      </div>
      <div className='slider-inner pt-12 flex'>
        {/* Duplicate images for smooth infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className='in-slider-image flex-shrink-0'>
            <Image src={src} alt={`Slide ${index}`} width={200} height={200} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .slider-inner {
          display: flex;
          width: calc(
            ${images.length} * 200px * 2
          ); /* Adjust based on your image size */
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(
              -${images.length * 200}px
            ); /* Adjust to match one set of images */
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteSlider;
