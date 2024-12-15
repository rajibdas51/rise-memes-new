import React from "react";

import img from "/public/assets/roadmap/roadmap-desktop.png";
import roadmapMobile from "/public/assets/roadmap/roadmap-mobile.png";

import BlurBackgroundWithText1 from "./BlurBackgroundWithText1";
import BlurBackgroundWithText2 from "./BlurBackgroundWithText2";
import BlurBackgroundWithText3 from "./BlurBackgroundWithText3";
import BlurBackgroundWithText4 from "./BlurBackgroundWithText4";
import BlurBackgroundWithText5 from "./BlurBackgroundWithText5";
import BlurBackgroundWithText6 from "./BlurBackgroundWithText6";
import BlurBackgroundWithText1Mobile from "./mobileRoadMap/BlurBackgroundWithText1Mobile";
import BlurBackgroundWithText2Mobile from "./mobileRoadMap/BlurBackgroundWithText2Mobile";
import BlurBackgroundWithText3Mobile from "./mobileRoadMap/BlurBackgroundWithText3Mobile";
import BlurBackgroundWithText4Mobile from "./mobileRoadMap/BlurBackgroundWithText4Mobile";
import BlurBackgroundWithText5Mobile from "./mobileRoadMap/BlurBackgroundWithText5Mobile";
import BlurBackgroundWithText6Mobile from "./mobileRoadMap/BlurBackgroundWithText6Mobile";
import RoadmapLogo from "./RoadmapLogo";
const Roadmap = () => {
  return (
    <>
      <div className="w-full  relative">
        <div className="">
          <h1
            className={`lg:text-5xl  font-avon relative text-3xl py-10 uppercase font-[400] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]  `}
          >
            Roadmap
          </h1>
        </div>

        <div className="p-0 m-0 flex justify-center h-full w-full pb-8 mg:pb-0 ">
          <div
            className="lg:h-[1260px]  h-0  w-full bg-cover bg-center  lg:block hidden  relative"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute dxl:left-[90px] dxl:top-[110px] xxl:left-[0px] xxl:top-[110px]  lg:left-[0px] lg:top-[90px] ">
              <BlurBackgroundWithText1></BlurBackgroundWithText1>
            </div>
            <div className="absolute dxl:left-[650px] dxl:top-[280px] xx:left-[400px] xxl:top-[330px]  lg:left-[300px] lg:top-[330px]   ">
              <BlurBackgroundWithText2></BlurBackgroundWithText2>
            </div>
            <div className="absolute dxl:right-[650px] dxl:top-[60px]  xxl:right-[650px] xxl:top-[60px]   lg:right-[380px] lg:top-[60px] ">
              <BlurBackgroundWithText3></BlurBackgroundWithText3>
            </div>
            <div className="absolute dxl:right-[180px] dxl:top-[230px]   xxl:right-[180px] xxl:top-[230px]       lg:right-[60px] lg:top-[230px]    ">
              <BlurBackgroundWithText4></BlurBackgroundWithText4>
            </div>
            <div className="absolute right-[80px]  bottom-[420px]">
              <BlurBackgroundWithText5></BlurBackgroundWithText5>
            </div>
            <div className="absolute dxl:right-[750px]  dxl:bottom-[260px] xxl:right-[550px]  xxl:bottom-[260px]  lg:right-[250px]  lg:bottom-[200px]">
              <BlurBackgroundWithText6></BlurBackgroundWithText6>
            </div>
            <div className="absolute dxl:left-[230px]  dxl:bottom-[300px] lg:left-[30px]  lg:bottom-[300px]">
              <RoadmapLogo></RoadmapLogo>
            </div>
          </div>

          <div
            className=" lg:hidden block w-full h-[2300px] m-auto mx-[30px]"
            style={{
              backgroundImage: `url(${roadmapMobile.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute  md:top-[300px] md:left-[300px] top-[300px] left-[70px]">
              <BlurBackgroundWithText6Mobile></BlurBackgroundWithText6Mobile>
            </div>
            <div className="absolute md:top-[900px] md:left-[120px] top-[850px] left-[20px]">
              <BlurBackgroundWithText5Mobile></BlurBackgroundWithText5Mobile>
            </div>
            <div className="absolute top-[1050px] right-[30px]">
              <BlurBackgroundWithText4Mobile></BlurBackgroundWithText4Mobile>
            </div>
            <div className="absolute bottom-[800px] left-[30px]">
              <BlurBackgroundWithText3Mobile></BlurBackgroundWithText3Mobile>
            </div>
            <div className="absolute  bottom-[300px] right-[100px]">
              <BlurBackgroundWithText2Mobile></BlurBackgroundWithText2Mobile>
            </div>
            <div className="absolute md:bottom-[100px] md:left-[80px]    bottom-[100px] left-[60px]  ">
              <BlurBackgroundWithText1Mobile></BlurBackgroundWithText1Mobile>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
