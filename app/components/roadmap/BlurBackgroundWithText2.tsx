import React from "react";
import Image from "next/image";
import blur2 from "/public/assets/roadmap/blur2.png";
import roundNumber from "/public/assets/roadmap/round-number.png";
import round from "/public/assets/roadmap/round.png";

const BlurBackgroundWithText2 = () => {
  return (
    <>
      <div className="relative">
        <Image src={blur2} alt="" loading="lazy" className="" />

        <div className="absolute top-[3.5rem] left-[4rem]">
          <div className="flex gap-4 pb-[6px]">
            {/* <Image  src={roundNumber} alt="roundNumber"/> */}
            <div
              className="h-[31px] w-[29px]"
              style={{
                backgroundImage: `url(${roundNumber.src})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-center justify-center h-[31px]">
                <p className="font-avon font-[400] text-white text-[14.45px] text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]">
                  2
                </p>
              </div>
            </div>
            <p className=" flex items-center font-[600] font-cinzel text-[14.45px]  text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
              THE PATH
            </p>
          </div>
          <div className="flex gap-1 pl-1 pb-[6px]">
            <div>
              <Image src={round} alt="round" className="w-5 h-5" />
            </div>
            <p className=" flex items-center font-[600] font-cinzel text-[14.45px]  text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
              Team Establishment
            </p>
          </div>
          <div className="flex gap-1 pl-1 pb-[6px]">
            <div>
              <Image src={round} alt="round" className="w-5 h-5" />
            </div>
            <p className=" flex items-center font-[600] font-cinzel text-[14.45px]  text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
              Private Fund Raising
            </p>
          </div>
          <div className="flex gap-1 pl-1">
            <div>
              <Image src={round} alt="round" className="w-5 h-5" />
            </div>
            <p className=" flex items-center font-[600] font-cinzel text-[14.45px]  text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] via-[#E4D9BD] via-0% to-[#AA8246] to-100% ">
              Game Development Begins
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlurBackgroundWithText2;
