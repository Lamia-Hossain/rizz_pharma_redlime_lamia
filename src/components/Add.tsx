import React from "react";
import AddBG from "../../public/Add.png";
import { MdPlayArrow } from "react-icons/md";

const features = [
  "Chat with a provider 24/7",
  "Fast, discreet shipping",
  "Clinically proven ingredients and FDA-approved treatments.",
];

const Add = () => {
  return (
    <div
      className="lg:min-h-screen w-full bg-cover bg-no-repeat bg-center px-6 md:px-10 lg:px-20 py-4 md:py-8 lg:py-16 "
      style={{
        backgroundImage: `url(${AddBG.src})`,
      }}
    >
      <div className="grid lg:grid-cols-2 gap-4 w-[80%] mx-auto">
        <p className="font-[Impact] font-normal text-[32px] md:[44px] lg:text-[58px] leading-[120%] tracking-[0%]">
          100% Online, <br /> 100% Convenient
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="grid grid-cols-12 items-center gap-2 font-[Neue Montreal] font-medium text-base lg:text-[18px] leading-[160%]"
            >
              <MdPlayArrow className="size-6" />
              <p className="col-span-11">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Add;
