import React from "react";
import Image from "next/image";
import secure_payment from "../../public/feature-images/secure_payment.png";
import online_support from "../../public/feature-images/online_support.png";
import free_shipping from "../../public/feature-images/free_shipping.png";
import best_value from "../../public/feature-images/best_value.png";

const FeatureBar = () => {
  const features = [
    {
      id: 1,
      image: secure_payment,
      label: "Secure Payment",
    },
    {
      id: 2,
      image: online_support,
      label: "Online Support",
    },
    {
      id: 3,
      image: free_shipping,
      label: "Free Shipping",
    },
    {
      id: 4,
      image: best_value,
      label: "Best Value",
    },
  ];

  return (
    <div className="w-full h-[151px] bg-[#31418C4D] grid grid-cols-2 md:flex items-center justify-around px-6 md:px-10 lg:px-20 my-20">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Image
            src={features[index].image}
            alt={features[index].label}
            className="size-8"
          />
          <span className="text-white text-[18px] lg:text-[22px] leading-[120%] tracking-[0%]">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureBar;
