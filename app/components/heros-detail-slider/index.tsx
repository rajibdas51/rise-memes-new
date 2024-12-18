'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import Heading from '../common/heading';
import { LeftArrow, RightArrow } from '@/app/svg';
import { sliderData } from './data';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps {
  onClick?: () => void;
}

export function SampleNextArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className='flex absolute xl:right-[3rem] lg:right-1 right-4 lg:top-[45%] md:top-[44%] top-[30%] z-10 cursor-pointer'
    >
      <RightArrow />
    </div>
  );
}

export function SamplePrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className='flex absolute xl:left-[4rem] left-4 md:left-4 lg:left-1 lg:top-[45%] top-[30%] md:top-[44%] z-10 cursor-pointer'
    >
      <LeftArrow />
    </div>
  );
}

const HeroDetails: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />, // Custom right arrow
    prevArrow: <SamplePrevArrow />, // Custom left arrow
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    touchThreshold: 10,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true, // Disable arrows on mobile for better UX
        },
      },
    ],
  };
  {
    /*Handaling touch control on mobile device*/
  }
  const handleTouchStart = (event: React.TouchEvent) => {
    console.log('user swiped');
    const touchStartX = event.touches[0].clientX;
    const slider = sliderRef.current;

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartX - touchEndX;

      if (diffX > 50) {
        slider?.slickNext(); // Swipe left
      } else if (diffX < -50) {
        slider?.slickPrev(); // Swipe right
      }

      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className='min-h-screen heros' onTouchStart={handleTouchStart}>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((slide, index) => (
          <div key={slide.id} onTouchStart={handleTouchStart}>
            <div
              className='bg-cover bg-center bg-no-repeat lg:py-20 py-10 lg:px-10 px-2 min-h-auto lg:max-h-auto lazy-bg'
              data-bg={slide.bg.src}
            >
              <div className='5xl:max-w-[1800px] 2xl:px-24 xl:px-16 mx-auto py-5 min-h-[60vh] relative'>
                <div className='lg:relative flex-col md:flex-row flex w-full h-full lg:min-h-[78vh] min-h-[45vh] overflow-visible bg-cover bg-no-repeat bg-center '>
                  <Image
                    src={slide.imgSrc}
                    alt='Slide image'
                    layout='fill'
                    quality={100}
                    className={`!hidden md:!block brightness-125 w-full h-full md:object-cover lg:rounded-2xl rounded-xl object-fill`}
                    style={{
                      maskImage:
                        index % 2 === 0
                          ? 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))'
                          : 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
                      WebkitMaskImage:
                        index % 2 === 0
                          ? 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))'
                          : 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
                    }}
                    loading='lazy'
                  />

                  <Image
                    src={slide.mobileImgSrc}
                    alt='Slide image'
                    layout='fill'
                    quality={100}
                    className={`block !relative brightness-125  md:!hidden w-full h-full lg:object-cover lg:rounded-2xl rounded-xl object-fill`}
                    style={{
                      filter: 'brightness(1.3)',
                      maskImage:
                        'linear-gradient(to bottom, rgba(0,0,0,1.2), rgba(0,0,0,0))',
                      WebkitMaskImage:
                        'linear-gradient(to bottom, rgba(0,0,0,1.2), rgba(0,0,0,0))',
                    }}
                    loading='lazy'
                  />

                  <div
                    className={`relative md:absolute rounded-xl ${
                      index % 2 === 0
                        ? 'left-0 2xl:w-1/3 md:w-1/2 w-full md:p-10 px-3 z-20 space-y-6 flex flex-col justify-end md:justify-center h-full text-white'
                        : 'right-0 2xl:w-1/3 md:w-1/2 w-full md:p-10 px-3 z-20 space-y-6 flex flex-col justify-end md:justify-center h-full text-white'
                    }`}
                  >
                    <Heading>{slide.title.toUpperCase()}</Heading>
                    <p className='text-[#fff1de] text-shadow-effect-para font-cinzel text-sm md:text-lg text-center md:text-left no-scrollbar'>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroDetails;
