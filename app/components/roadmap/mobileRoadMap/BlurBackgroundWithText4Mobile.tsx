import React from "react";
import Image from "next/image";
import blur4 from "/public/assets/roadmap/blur4.png";
import roundNumber2 from "/public/assets/roadmap/round-number2.png";
import round from "/public/assets/roadmap/round.png";


const BlurBackgroundWithText4Mobile = () => {
  return (
<>
      <div className="relative">
        <Image src={blur4} alt="" loading="lazy" className="" />

        <div className="absolute top-[2.4rem] left-[2rem]">
          <div className="flex gap-4 pb-[6px]">
            {/* <Image  src={roundNumber} alt="roundNumber"/> */}
            <div
              className="h-[15.99px] w-[14.96px] "
              style={{
                backgroundImage: `url(${roundNumber2.src})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-center justify-center h-[15.99px]">
                <p className="font-avon font-[400] text-white xs:text-[14.45px] xxs:text-[8.39px]  mini:text-[8.39px]    text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]">
                  4
                </p>
              </div>
            </div>
            <p className=" flex items-center font-[600] font-cinzel xs:text-[14.45px] xxs:text-[8.39px]   mini:text-[8.39px]   text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
           Q4 2024 - QI 2025 - THE SURGE

            </p>
          </div>
          <div className="flex gap-1 pl-1 pb-[6px]">
            <div>
              <Image src={round} alt="round" className="xs:w-5 xs:h-5 xxs:w-3 xxs:h-3  mini:w-3 mini:h-3" />
            </div>
            <p className=" flex items-center font-[600] font-cinzel xs:text-[14.45px] xxs:text-[8.39px]   mini:text-[8.39px]    text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
            In-game Token Integration
   
            </p>
          </div>
          <div className="flex gap-1 pl-1 pb-[6px]">
            <div>
              <Image src={round} alt="round" className="xs:w-5 xs:h-5 xxs:w-3 xxs:h-3 mini:w-3 mini:h-3" />
            </div>
            <p className=" flex items-center font-[600] font-cinzel xs:text-[14.45px] xxs:text-[8.39px]   mini:text-[8.39px]   text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
   
            Staking Integration
            </p>
          </div>
          <div className="flex gap-1 pl-1 pb-[6px]">
            <div>
              <Image src={round} alt="round" className="xs:w-5 xs:h-5 xxs:w-3 xxs:h-3 mini:w-3 mini:h-3" />
            </div>
            <p className=" flex items-center font-[600] font-cinzel xs:text-[14.45px] xxs:text-[8.39px]   mini:text-[8.39px]   text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
            Public Launch on DEX/CEX
            </p>
          </div>
 
          <div className="flex gap-1 pl-1">
            <div>
              <Image src={round} alt="round" className="xs:w-5 xs:h-5 xxs:w-3 xxs:h-3 mini:w-3 mini:h-3" />
            </div>
            <p className=" flex items-center font-[600] font-cinzel xs:text-[14.45px] xxs:text-[10.39px]   mini:text-[8.39px]    text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
            Gameplay Showcase
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlurBackgroundWithText4Mobile;
