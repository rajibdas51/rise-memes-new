import React from 'react';
import Image from 'next/image';
import img from '/public/assets/roadmap/roadmap-desktop.png';
import img2 from '/public/assets/roadmap/roadmap-mobile.png';

const Roadmap = () => {
  return (
    <>
      <div className='w-full  '>
        <div className=''>
          <h1
            className={`lg:text-5xl  font-avon relative text-3xl py-10 uppercase font-[400] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]  `}
          >
            Roadmap
          </h1>
        </div>

        <div className='p-0 m-0 flex justify-center h-full w-full pb-8 mg:pb-0 '>
          <Image
            src={img}
            alt=''
            loading='lazy'
            className='md:block hidden w-full max-w-[1660px]'
          />
          <Image
            src={img2}
            alt=''
            loading='lazy'
            className=' md:hidden block w-[100%]'
          />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
