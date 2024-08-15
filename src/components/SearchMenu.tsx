import { searchitems } from "@/constants/indesx";
import Link from "next/link";
import React from "react";
import { Container, Image } from "react-bootstrap";

const SearchMenu = ({ mobileView = false }) => {

  return (
    <Container className="p-0">
      <div
        className={`${mobileView ? "p-4" : "card searchmenu-card ease-in-out duration-300 cursor-text rounded-3xl w-full"
          }`}
      >

        <div className={`${mobileView ? "px-0 pb-2" : "px-24 py-[32px]"}`}>
          <div className="relative overflow-hidden flex rounded-2xl cursor-text">
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
              className={`${mobileView ? "px-14 py-[16px] w-full" : "px-14 py-[16px] w-full"
                } rounded-2xl bg-[#7e7e7e17] outline-none border-none placeholder-[#a5a1a1]  text-lg font-medium`}
              placeholder="Search"
            />
          </div>
        </div>

        <div
          className={`${mobileView ? "flex flex-col gap-4" : "grid grid-cols-12 gap-4 px-28 pb-4"
            }`}
        >
          {searchitems.map((feature, index) => (
            <div
              key={feature.id}
              className={`${mobileView
                ? "w-full"
                : `col-span-4 px-20 my-[20px] `
                }`}
            >
              <h1 className="font-semibold text-[#2776EA] text-lg pt-0 text-left cursor-text">
                {feature.title}
              </h1>
              <ul className="list-none px-0 text-left">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} >
                    <Link href="" className="pt-1 text-[#4F4F4F] cursor-pointer hover:text-[#2776EA] ">
                      {detail}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div >
    </Container>
  );
};

export default SearchMenu;
