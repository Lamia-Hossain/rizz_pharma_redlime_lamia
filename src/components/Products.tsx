"use client";
import React, { useState } from "react";
import Image from "next/image";
import Ipamorelin from "../../public/product-images/Ipamorelin.png";
import LyophilizedGlow from "../../public/product-images/LyophilizedGlow.png";
import NAD from "../../public/product-images/NAD.png";
import Oxytocin from "../../public/product-images/Oxytocin.png";
import PT_141 from "../../public/product-images/PT_141.png";
import Retarutide from "../../public/product-images/Retarutide.png";
import Sermorelin from "../../public/product-images/Sermorelin.png";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const categories = [
  "All",
  "Best Selling Products",
  "Weight Loss",
  "Beauty And Hair Loss",
  "Testosterone/HRT",
  "Sexual Health",
  "arrow",
];

const products = [
  {
    id: 1,
    name: "Retarutide",
    price: "$39.99/per month",
    image: Retarutide,
    research: "Research use only",
    bgResearch: "bg-gradient-to-r from-[#D78C6C] to-[#A75356]",
    tags: ["Best Selling Products"],
  },
  {
    id: 2,
    name: "Lyophilized Glow (GHK-CU/ BPC-157/ TB-500)",
    price: "$39.99/per month",
    image: LyophilizedGlow,
    research: "Research use only",
    bgResearch: "bg-gradient-to-r from-[#D78C6C] to-[#A75356]",
    tags: ["Beauty And Hair Loss"],
  },
  {
    id: 3,
    name: "Compounded Sermorelin 15mg",
    price: "Starting at $179 Monthly + $45 Physician consult",
    image: Sermorelin,
    research: "Recurring Plan",
    bgResearch: "bg-gradient-to-b from-[#6C221D] to-[#954139]",
    tags: ["Testosterone/HRT"],
  },
  {
    id: 4,
    name: "2X CJC / Ipamorelin",
    price: "Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge",
    image: Ipamorelin,
    research: "",
    tags: ["Testosterone/HRT"],
  },
  {
    id: 5,
    name: "Lyophilized Oxytocin",
    price: "$39.99/per month",
    image: Oxytocin,
    research: "",
    tags: ["Sexual Health"],
  },
  {
    id: 6,
    name: "Lyophilized Finasteride 1mg",
    price: "$39.99/per month",
    image: Sermorelin,
    research: "Recurring Plan",
    bgResearch: "bg-gradient-to-b from-[#6C221D] to-[#954139]",
    tags: ["Weight Loss"],
  },
  {
    id: 7,
    name: "Compounded NAD+ 1000mg",
    price: "Starting at $179 Monthly + $45 Physician consult",
    image: NAD,
    research: "",
    tags: ["Testosterone/HRT"],
  },
  {
    id: 8,
    name: "Lyophilized PT-141 10mg",
    price: "Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge",
    image: PT_141,
    research: "Recurring Plan",
    bgResearch: "bg-gradient-to-b from-[#6C221D] to-[#954139]",
    tags: ["Weight Loss"],
  },
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : selectedCategory === "arrow"
      ? products
      : products.filter((product) => product.tags.includes(selectedCategory));

  return (
    <div className="px-6 md:px-10 lg:px-20 my-10 text-white min-h-screen flex flex-col gap-10">
      <h3 className="font-[Impact] font-normal text-[24px] md:text-[32px] lg:text-[48px] leading-[120%] tracking-[0%] capitalize text-center">
        Solutions For Your <span className="text-[#ECC974]">Unique</span> Health
        Goals
      </h3>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border rounded-full text-sm font-bold transition-all ${
              selectedCategory === category
                ? "bg-yellow-500 text-black"
                : "border-white text-white hover:bg-yellow-500 hover:text-black"
            }`}
          >
            {index === 6 ? <FaArrowRight /> : category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#31418C]/30 rounded-[12px] flex flex-col gap-4 justify-between"
          >
            <div className="grid grid-cols-5 gap-4">
              <Image
                src={product.image}
                alt={product.name}
                className="w-[70px] h-[157px] mx-auto mt-4 col-span-2"
              />
              <div className="flex flex-col col-span-3">
                {product.research && (
                  <div
                    className={`${product.bgResearch} text-white text-xs font-bold px-2 py-1 rounded-bl-xl rounded-tr-xl w-fit ml-auto mb-auto`}
                  >
                    {product.research}
                  </div>
                )}
                <h3
                  className="text-[18px] font-medium leading-[120%] tracking-normal 
             bg-gradient-to-b from-[#C1842D] to-[#ECC974] 
             text-transparent bg-clip-text font-[Neue Montreal] font-semibold my-auto p-2"
                >
                  {product.name}
                </h3>
              </div>
            </div>

            <div className="bg-[#1F1F1F]/30 flex gap-3 justify-between items-center rounded-b-xl">
              <p className="px-3 py-2 text-sm">{product.price}</p>
              <button className="bg-gradient-to-b from-[#C1842D] to-[#ECC974] h-full py-4 px-5 rounded-br-xl text-black hover:brightness-110">
                <LiaCartPlusSolid className="size-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        <div className="bg-[#E1C06E] p-3 rounded-full">
          <IoIosArrowRoundBack className="text-black size-8" />
        </div>
        <div className="bg-[#E1C06E] p-3 rounded-full">
          <IoIosArrowRoundForward className="text-black size-8" />
        </div>
      </div>
    </div>
  );
};

export default Product;
