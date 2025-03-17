import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import Branding from "../../public/footer/Branding.png";
import hipaa from "../../public/footer/hipaa.png";
import certified from "../../public/footer/certified.png";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Erectile Dysfunction", href: "#" },
        { name: "Weight Loss", href: "#" },
        { name: "Men's Hair Loss", href: "#" },
      ],
    },
    {
      title: "Our Company",
      links: [
        { name: "HIPAA Notice", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Return & Refund Policy", href: "#" },
        { name: "Terms Of Use", href: "#" },
        { name: "CCPA Opt-Out", href: "#" },
        { name: "Opt-Out Preferences", href: "#" },
      ],
    },
  ];
  return (
    <footer className="bg-[#1C1C1C] text-white font-[Neue Montreal]">
      <div
        className="bg-gradient-to-b min-h-screen flex flex-col px-8 md:px-12 lg:px-16"
        style={{
          background:
            "linear-gradient(to bottom, rgba(61, 85, 204, 0.7), rgba(31, 31, 31, 0.1))",
        }}
      >
        <div className="grid lg:grid-cols-2 gap-4 my-14">
          <div className="border border-gray-400/50 p-6 lg:p-8 rounded-xl w-[75%] lg:w-[60%] mx-auto flex flex-col gap-6 items-center text-center font-[400]">
            <h2 className="text-[26px] md:text-[35px] lg:text-[43px] leading-[120%] tracking-normal">
              Let’s Stay In <br />
              Touch
            </h2>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[120%] tracking-normal px-2 lg:px-4">
              Keep up to date with our latest news & special offers.
            </p>
            <div className="w-full flex items-center border-2 border-white rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="enter your email"
                className="w-full p-3 bg-transparent text-white outline-none"
              />
              <button className="bg-transparent px-4 cursor-pointer">
                <LuSend className="text-gray-300" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index} className="mx-auto lg:mx-0">
                <div className="flex flex-col gap-10 justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-6 text-gray-300">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="hover:text-white transition-colors"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index === 0 && (
                    <div className="mt-auto">
                      <h3 className="text-lg font-semibold mb-3">
                        Contact Info
                      </h3>
                      <div className="flex gap-2">
                        <CiMail className="size-5" />{" "}
                        <a
                          href="mailto:hello@rizzpharma.com"
                          className="text-white hover:underline"
                        >
                          hello@rizzpharma.com
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Midle Content */}
        <div className="grid lg:grid-cols-2 gap-4 w-[75%] lg:w-[80%] mx-auto mb-5 md:mb-0">
          <Image src={hipaa} alt="Hipaa" className="mx-auto lg:mx-0" />
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 mx-auto lg:mx-0">
              <div className="bg-[#434B76] p-2 rounded-full">
                <FaFacebook className="size-5" />
              </div>
              <div className="bg-[#434B76] p-2 rounded-full">
                <FaInstagram className="size-5" />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={certified} alt="Certified" className="w-28" />
              <p className="font-normal text-base leading-[1.6] tracking-normal p-2">
                Copyright © 2024 Rizz Pharma All Right Reserved - Built by
                Business Web Social
              </p>
            </div>
          </div>
        </div>

        {/* Branding */}
        <Image src={Branding} alt="Rizz Pharma" />
      </div>
    </footer>
  );
};

export default Footer;
