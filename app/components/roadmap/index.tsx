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
            className="sm:h-[1260px]  h-0  w-full bg-cover bg-center  sm:block hidden  relative"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "contain",
            }}
          >
            <div className="absolute dxl:left-[90px] dxl:top-[110px] xxl:left-[0px] xxl:top-[110px]  lg:left-[0px] lg:top-[90px]      md:left-[0px] md:top-[90px]   sm:left-[30px] sm:top-[90px]    ">
              <BlurBackgroundWithText1></BlurBackgroundWithText1>
            </div>
            <div className="absolute dxl:left-[650px] dxl:top-[280px] xx:left-[400px] xxl:top-[330px]  lg:left-[300px] lg:top-[330px]   md:left-[30px] md:top-[330px]   sm:left-[30px] sm:top-[370px]   ">
              <BlurBackgroundWithText2></BlurBackgroundWithText2>
            </div>
            <div className="absolute dxl:right-[650px] dxl:top-[60px]  xxl:right-[650px] xxl:top-[60px]   lg:right-[380px] lg:top-[60px]  md:right-[180px] md:top-[40px] sm:right-[0px] sm:top-[90px]  ">
              <BlurBackgroundWithText3></BlurBackgroundWithText3>
            </div>
            <div className="absolute dxl:right-[180px] dxl:top-[230px]   xxl:right-[180px] xxl:top-[230px]       lg:right-[60px] lg:top-[230px]    md:right-[150px] md:top-[250px]  sm:right-[30px] sm:top-[320px]  ">
              <BlurBackgroundWithText4></BlurBackgroundWithText4>
            </div>
            <div className="absolute right-[80px]  bottom-[420px]">
              <BlurBackgroundWithText5></BlurBackgroundWithText5>
            </div>
            <div className="absolute dxl:right-[750px]  dxl:bottom-[260px] xxl:left-[800px]  xxl:bottom-[260px]  lg:right-[250px]  lg:bottom-[200px] md:right-[200px]  md:bottom-[190px]  xs:left-[280px] xs:bottom-[220px]  ">
              <BlurBackgroundWithText6></BlurBackgroundWithText6>
            </div>
            <div className="absolute dxl:left-[230px]  dxl:bottom-[300px] lg:left-[30px]  lg:bottom-[300px]  md:left-[30px]  md:bottom-[301px]  xs:left-[30px] xs:bottom-[270px]   ">
              <RoadmapLogo></RoadmapLogo>
            </div>
          </div>

          <div
            className=" sm:hidden block  w-screen h-[1100px] "
            style={{
              backgroundImage: `url(${roadmapMobile.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <div className="absolute  xs:top-[150px] xs:left-[110px]     xxs:top-[250px] xxs:left-[160px]    mini:top-[330px] mini:left-[70px]     ">
              <BlurBackgroundWithText6Mobile></BlurBackgroundWithText6Mobile>
            </div>
            <div className="absolute xs:top-[310px] xs:left-[-50px]  xxs:top-[320px] xxs:left-[-70px] mini:top-[420px] mini:left-[-70px]  ">
              <BlurBackgroundWithText5Mobile></BlurBackgroundWithText5Mobile>
            </div>
            <div className="absolute xs:top-[530px] xs:left-[250px]  xxs:top-[470px] xxs:left-[130px] mini:top-[540px] mini:left-[90px]  ">
              <BlurBackgroundWithText4Mobile></BlurBackgroundWithText4Mobile>
            </div>
            <div className="absolute xs:top-[680px] xs:left-[-20px] xxs:top-[610px] xxs:left-[0px] mini:top-[610px] mini:left-[-60px]  ">
              <BlurBackgroundWithText3Mobile></BlurBackgroundWithText3Mobile>
            </div>
            <div className="absolute  xs:top-[820px] xs:left-[240px] xxs:top-[740px] xxs:left-[160px] mini:top-[710px] mini:left-[90px]  ">
              <BlurBackgroundWithText2Mobile></BlurBackgroundWithText2Mobile>
            </div>
            <div className="absolute   xs:top-[960px] xs:left-[120px] xxs:top-[870px] xxs:left-[70px]  mini:top-[780px] mini:left-[-60px]  ">
              <BlurBackgroundWithText1Mobile></BlurBackgroundWithText1Mobile>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
