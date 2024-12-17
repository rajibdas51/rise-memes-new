import React from 'react';
import Image from 'next/image';
import blur1 from '/public/assets/roadmap/blur1.png';
import roundNumber2 from '/public/assets/roadmap/round-number2.png';
import round from '/public/assets/roadmap/round.png';


const BlurBackgroundWithText1Mobile = () => {
  return (
    <>
      <div className='relative'>
      <Image
            src={blur1}
            alt=''
            // loading='lazy'
            className=''
          />

          <div className="absolute top-[4.6rem] left-[3rem]">
      <div className="flex gap-4 pb-[6px]">
     
            <div  className="h-[15.99px] w-[14.96px] " style={{
            backgroundImage: `url(${roundNumber2.src})`,
            backgroundRepeat: "no-repeat",
          }}>
        <div className="flex items-center justify-center h-[15.99px]">     
           <p className="font-avon font-[400] text-white   xs:text-[14.45px] xxs:text-[8.39px]   text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]" >1</p></div>
         
            </div>
      <p className=" flex items-center font-[600] font-cinzel   xs:text-[14.45px] xxs:text-[8.39px]    text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% " > 
          QI 2024 - THE AWAKENING
            </p>
        </div>
       <div className="flex gap-2 pl-1 pb-[6px]">
       <div>
            <Image  src={round} alt="round" className="xs:w-5 xs:h-5 xxs:w-3 xxs:h-3" />
            </div>
       <p className="font-cinzel  font-[600]    xs:text-[14.45px] xxs:text-[8.39px]    text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100%">
            Game Concept Development
            </p>
      
       </div>
       <div className="flex gap-2 pl-1">
       <div>
            <Image  src={round} alt="round" className="xs:w-5 xs:h-5 xxs:w-3 xxs:h-3" />
            </div>
       <p  className="font-cinzel  font-[600]    xs:text-[14.45px] xxs:text-[8.39px]    text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100%">
            Art & Graphic Design
            </p>
          
       </div>
          </div>

      </div>
    </>
  );
};

export default BlurBackgroundWithText1Mobile;
