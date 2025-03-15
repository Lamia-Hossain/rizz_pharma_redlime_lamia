"use client";
import React, { useState } from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiShoppingCart, PiListBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import ufc_rizz from "../../public/ufc_rizz.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center">
      {/* Left Section: Logo */}
      <img
        src={ufc_rizz.src}
        alt="UFC Logo"
        className="h-16 md:h-20 lg:h-auto"
      />

      {/* Right Section: Menu Items and Buttons */}
      <div className="flex flex-col gap-3 items-end">
        {/* Menu Items and Social Media Icons */}
        <div className="flex gap-4 md:gap-6 lg:gap-20 items-center">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-lg">
            <li className="relative cursor-pointer">
              Home
              <div className="w-full h-[2px] bg-white mt-1" />
            </li>
            <li className="relative cursor-pointer flex">
              Category <RiArrowDropDownLine className="size-6 ml-1 my-auto" />
            </li>
            <li className="relative cursor-pointer flex">
              Top Products{" "}
              <RiArrowDropDownLine className="size-6 ml-1 my-auto" />
            </li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">FAQs</li>
          </ul>

          {/* Social Media Icons + Cart + Menu Icon (for sm & md) */}
          {!isDrawerOpen && (
            <div className="flex gap-3">
              <FaInstagram className="size-6 cursor-pointer" />
              <FaFacebookSquare className="size-6 cursor-pointer" />
              <PiShoppingCart className="size-6 cursor-pointer block lg:hidden" />
              {/* Menu Icon (visible only for sm to md screens) */}
              <PiListBold
                className="size-6 cursor-pointer block sm:block md:block lg:hidden"
                onClick={() => setIsDrawerOpen(true)}
              />
            </div>
          )}
        </div>

        {/* Sign Up, Log In, Cart (only for large screens) */}
        <div className="hidden lg:flex items-center gap-6 text-base">
          <button className="bg-[#E1C06E] text-black px-4 py-[6px] rounded-full border border-transparent hover:brightness-110 cursor-pointer">
            Sign Up
          </button>

          <button className="border-white border-1 text-white px-4 py-[6px] rounded-full cursor-pointer">
            Log In
          </button>
          <PiShoppingCart className="size-8 cursor-pointer" />
        </div>
      </div>

      {/* Drawer (Sliding Menu) */}
      <div
        className={`fixed lg:hidden top-0 right-0 h-full w-[50%] sm:w-[45%] md:w-[35%] bg-black text-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsDrawerOpen(false)}
        >
          <IoClose />
        </button>

        {/* Drawer Menu Items */}
        <ul className="flex flex-col items-start gap-4 p-6 text-lg">
          <li className="cursor-pointer" onClick={() => setIsDrawerOpen(false)}>
            Home
          </li>
          <li
            className="cursor-pointer flex"
            onClick={() => setIsDrawerOpen(false)}
          >
            Category <RiArrowDropDownLine className="size-6 ml-1 my-auto" />
          </li>
          <li
            className="cursor-pointer flex"
            onClick={() => setIsDrawerOpen(false)}
          >
            Top Products <RiArrowDropDownLine className="size-6 ml-1 my-auto" />
          </li>
          <li className="cursor-pointer" onClick={() => setIsDrawerOpen(false)}>
            Contact Us
          </li>
          <li className="cursor-pointer" onClick={() => setIsDrawerOpen(false)}>
            FAQs
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
