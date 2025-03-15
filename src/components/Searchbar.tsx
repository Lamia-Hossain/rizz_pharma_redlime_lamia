"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="w-3/4 md:w-1/2 h-12 md:h-16 rounded-full border border-white bg-[rgba(67,67,67,0.16)] backdrop-blur-[204px] flex items-center px-5">
      <div className="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search by product/treatment"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full bg-transparent border-none outline-none text-white placeholder-white"
      />
    </div>
  );
};

export default SearchBar;
