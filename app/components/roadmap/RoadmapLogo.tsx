import React from "react";
import Image from "next/image";
import logo from "/public/assets/roadmap/logo.png";


const RoadmapLogo = () => {
  return (
<>
      <div className="relative">
        <Image src={logo} alt="" loading="lazy" className="" />


      </div>
    </>
  );
};

export default RoadmapLogo;
