import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[80vh] px-6 md:px-10 lg:px-20 flex lg:grid grid-cols-2 lg:justify-center text-white">
      <div className="flex flex-col gap-6 mt-10">
        <h1 className="font-[Impact] font-normal text-[50px] md:text-[60px] lg:text-[80px] leading-[120%] tracking-[0%] capitalize text-left">
          Prescription treatments for your
          <br />
          <span className="text-[#ECC974]">health goals</span>
        </h1>

        <div className="rounded-full p-[2px] w-max bg-gradient-to-r from-[#DB5095] to-[#1945E8] hover:shadow-md hover:shadow-black">
          <button className="w-max text-lg md:text-xl lg:text-2xl font-bold leading-[140%] bg-[#22242D] text-white px-6 py-2 rounded-full cursor-pointer hover:brightness-110">
            Find My Treatment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
