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
  '/assets/brands/12.png',
];

const InfiniteSlider = () => {
  return (
    <div className='infinite-slider-wrapper'>
      <div className='slider-inner'>
        {/* Duplicate images for smooth infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className='in-slider-image'>
            <Image src={src} alt={`Slide ${index}`} width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
