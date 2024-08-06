import { searchitems } from "@/constants/indesx";
import React from "react";
import { Image } from "react-bootstrap";

const SearchMenu = ({ mobileView = false }) => {

  return (
    <div
      className={`${mobileView ? "p-4" : "card searchmenu-card ease-in-out duration-300 rounded-2xl w-full"
        }`}
    >
      <div className={`${mobileView ? "px-0 pb-2" : "px-52 py-4"}`}>
        <div className="relative overflow-hidden flex rounded-2xl">
          <button className="absolute top-[20px] left-[16px]">
            <Image
              src="/images/search-black.svg"
              alt="search"
              width={24}
              height={24}
            />
          </button>

          <input
            type="text"
            className={`${mobileView ? "px-14 py-3 w-full" : "px-14 py-3 w-full"
              } rounded-2xl bg-[#7e7e7e17] outline-none border-none placeholder-[#2776EA] text-lg font-semibold`}
            placeholder="Search"
          />
        </div>
      </div>

      <div
        className={`${mobileView ? "flex flex-col gap-4" : "grid grid-cols-12 gap-4 px-40 pb-10"
          }`}
      >
        {searchitems.map((feature, index) => (
          <div
            key={feature.id}
            className={`${mobileView
              ? "w-full"
              : `col-span-4 px-16 my-10 ${index > 0 ? "border-l-2" : ""}`
              }`}
          >
            <h1 className="font-semibold text-[#2776EA] text-lg pt-2 text-left">
              {feature.title}
            </h1>
            <ul className="list-none px-0 text-left">
              {feature.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="pt-1 text-[#4F4F4F] cursor-pointer ">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMenu;
