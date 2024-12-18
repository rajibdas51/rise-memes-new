'use client';

import React from 'react';

interface CardProps {
  title: string;
  description: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ title, description, subtitle }) => {
  return (
    <div
      className='relative lg:px-5 px-3 md:px-2 backdrop-blur-[3px] lg:max-w-[538px] md:h-[322px] md:max-w-[345px] h-[320px] overflow-hidden flex flex-col justify-center items-center lg:gap-4 gap-1 bg-contain   bg-center lazy-bg w-full bg-no-repeat '
      data-bg='/assets/buyframe.png'
    >
      <h1 className='lg:text-[28.36px] text-[20px] mt-4 lg:leading-[46px] leading-[30px] font-bold bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] bg-clip-text text-transparent text-center'>
        {title}
      </h1>
      <p
        className='text-center text-[#FFF1DE] mt-0 pt-3 mb-1 text-wrap  font-medium 
             text-[14px] lg:leading-[21px] leading-[18px]
             lg:text-[17px]   
      '
      >
        {description}
      </p>
      <h1 className='lg:text-[38.36px] mt-1  text-[20px] lg:leading-[46px] leading-[30px] font-bold bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] bg-clip-text text-transparent text-center'>
        {subtitle}
      </h1>
    </div>
  );
};

export default Card;
