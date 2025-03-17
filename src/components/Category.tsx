import React from "react";
import Image from "next/image";
import c1 from "../../public/category-images/c1.png";
import c2 from "../../public/category-images/c2.png";
import c3 from "../../public/category-images/c3.png";
import c4 from "../../public/category-images/c4.png";
import c5 from "../../public/category-images/c5.png";
import c6 from "../../public/category-images/c6.png";
import SearchBar from "./Searchbar";

const Category = () => {
  const categoryList = [
    { id: 1, name: "Weight Loss", image: c1 },
    { id: 2, name: "Testossterone HRT", image: c2 },
    { id: 3, name: "Sexual Health", image: c3 },
    { id: 4, name: "Athletic Performance", image: c4 },
    { id: 5, name: "Brain Health", image: c5 },
    { id: 6, name: "Beauty and Hair Loss", image: c6 },
  ];

  const columns = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];

  return (
    <div className="px-6 md:px-10 lg:px-20 flex flex-col items-center gap-10 text-white">
      {/* Search Bar */}
      <SearchBar />

      <h3 className="mt-10 font-[Impact] font-normal text-[24px] md:text-[32px] lg:text-[48px] leading-[120%] tracking-[0%] capitalize text-center">
        Shop by <span className="text-[#ECC974]">Category</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex md:flex-col justify-center gap-6">
            {col.map((index) => (
              <div key={index}>
                <Image
                  src={categoryList[index].image}
                  alt={categoryList[index].name}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
