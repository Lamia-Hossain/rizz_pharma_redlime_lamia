"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import JohnTestimonial from "../../public/testimonial-images/JohnTestimonial.png";
import bg from "../../public/testimonial-images/bg.png";
import quote from "../../public/testimonial-images/quote.png";
import starFilled from "../../public/testimonial-images/starFilled.png";
import starEmpty from "../../public/testimonial-images/starEmpty.png";

const Testimonial = () => {
  const testimonials = [
    {
      text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims, my hair has grown, thickened, and darkened tremendously.",
      rating: 4,
      author: "John Williams",
      role: "Lead Designer",
      image: JohnTestimonial,
    },
    {
      text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims, my hair has grown, thickened, and darkened tremendously.",
      rating: 5,
      author: "Sarah Lee",
      role: "Marketing Manager",
      image: JohnTestimonial,
    },
    {
      text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims, my hair has grown, thickened, and darkened tremendously.",
      rating: 4,
      author: "Michael Brown",
      role: "Software Engineer",
      image: JohnTestimonial,
    },
    {
      text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims, my hair has grown, thickened, and darkened tremendously.",
      rating: 5,
      author: "Emily Carter",
      role: "Entrepreneur",
      image: JohnTestimonial,
    },
  ];
  const [widthPercentage, setWidthPercentage] = useState(33.33); // Default for md-lg

  // Add a fake slide for infinite loop effect
  const loopedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const sliderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex + 1) % loopedTestimonials.length
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [loopedTestimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${
        ((index - 1) * 100) / 3
      }%)`;
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Image
        key={i}
        src={i < rating ? starFilled : starEmpty}
        alt={i < rating ? "Filled Star" : "Empty Star"}
        width={20}
        height={20}
        className="mr-1"
      />
    ));
  };

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) {
        // Small screens (sm)
        setWidthPercentage(50);
      } else {
        // Medium to large screens (md, lg)
        setWidthPercentage(33.33);
      }
    };

    updateWidth(); // Set width on initial load
    window.addEventListener("resize", updateWidth); // Update on resize
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="text-white relative w-full overflow-hidden flex flex-col gap-10 mt-20 mb-24">
      <h3 className="font-[Impact] font-normal text-[24px] md:text-[32px] lg:text-[48px] leading-[120%] tracking-[0%] capitalize text-center">
        Hear What <span className="text-[#ECC974]">Rizz</span> Patients Have To
        Say
      </h3>

      {/* Slider Container */}
      <div className="overflow-hidden w-full mb-14">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${loopedTestimonials.length * widthPercentage}%`,
            transform: `translateX(-${((currentIndex - 1) * 100) / 4}%)`,
          }}
          ref={sliderRef}
        >
          {loopedTestimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div
                className="bg-gray-800/50 rounded-lg p-6 shadow-md flex flex-col gap-2 items-center bg-no-repeat bg-cover overflow-hidden"
                style={{
                  backgroundImage: `url(${bg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Image src={quote} alt="quote" className="mr-auto" />
                <p className="text-gray-300 mb-4">{testimonial.text}</p>

                <div className="flex mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              currentIndex === index + 1 ? "bg-white scale-110" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
