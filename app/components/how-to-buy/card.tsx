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
      className='buy-container relative lg:px-5 px-3 md:px-2 backdrop-blur-[3px] lg:max-w-[538px] md:h-[322px] md:max-w-[345px] h-[320px] overflow-hidden flex flex-col justify-center items-center lg:gap-4 gap-1 !bg-contain md:bg-cover z-50   md:pt-0  bg-center lazy-bg w-[93vw] bg-no-repeat pb-1'
      data-bg='/assets/buyframe.png'
      style={{ backgroundSize: 'contain!' }}
    >
      <h1 className='lg:text-[28.36px] text-[18px] mt-4 lg:leading-[46px] leading-[30px] font-bold bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] bg-clip-text text-transparent text-center'>
        {title}
      </h1>
      <p
        className='text-center text-[#FFF1DE] mt-0 pt-2 px-1  text-wrap  font-medium 
             text-[12px] lg:leading-[21px] leading-[18px]
             lg:text-[17px]   
      '
      >
        {description}
      </p>
      <h1 className='lg:text-[38.36px] mt- text-[18px] lg:leading-[46px] leading-[30px] font-bold bg-gradient-to-b pb-1 from-[#E4D9BD] to-[#AA8246] bg-clip-text text-transparent text-center'>
        {subtitle}
      </h1>
    </div>
  );
};

export default Card;
