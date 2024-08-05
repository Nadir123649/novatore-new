import React from "react";
import Image from "next/image";
import { featurestable, listingstable, menuitems, data } from "@/constants/indesx";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";


interface MegaMenuProps {
  activeMenu: string;
}
const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu }) => {
  const filteredMenuItems = menuitems.filter(
    (data) => data.title.toLowerCase() === activeMenu.toLowerCase()
  );
  const filteredListings = listingstable[activeMenu] || [];
  const filteredFeatures = featurestable[activeMenu] || [];
  const activeMenuItem = menuitems.find(item => item.title.toLowerCase() === activeMenu.toLowerCase());
  const isThirdSectionHidden = activeMenu.toLowerCase() === 'services' || !activeMenuItem;

  return (
    <div className="relative bg-white megamenu-card ease-in-out duration-300 sm:rounded-none md:rounded-2xl h-[480px] md:h-auto sm:border:none">
      <div className="grid grid-cols-12 gap-4 sm:px-0 md:px-40">
        {/* section first  */}
        <div className="px-4 md:px-4 sm:py-0 md:py-14 col-span-12 md:col-span-4 ">
          {filteredListings.map((listing: { id: React.Key | null | undefined; heading: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;link:string; details: any[]; }) => (
            <div key={listing.id} className="d-flex flex-col">
              <Link href={listing.link}>
              <h1 className="font-semibold text-lg text-[#2776EA] text-[18px] pt-2">
                {listing.heading}
              </h1>
              </Link>
             
              <ul className="list-none px-0">
                {listing.details.map((detail, index) => (
                  <li
                    key={index}
                    className="pt-1 text-[#4F4F4F] cursor-pointer"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* section second */}
        <div className="px-4 md:px-16 border-l-0  md:border-l-2 sm:my-0 md:my-14  col-span-12 md:col-span-4">
          {filteredFeatures.map((feature: { id: React.Key | null | undefined; heading: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; link: string; details: any[]; }) => (
            <div key={feature.id} className="d-flex flex-col">
              <Link href={feature.link}>
              <h1 className="font-semibold text-[#2776EA] text-lg pt-2">
                {feature.heading}
              </h1>
              </Link>
              
              <ul className="list-none px-0">
                {feature.details.map((detail, index) => (
                  <li
                    key={index}
                    className="pt-1 text-[#4F4F4F] cursor-pointer"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* section third  */}
        {isThirdSectionHidden ? (
           <div className="px-4 md:px-16 border-l-0  md:border-l-2 sm:my-0 md:my-14  col-span-12 md:col-span-4">
           {data.map((list) => (
             <div key={list.id} className="d-flex flex-col">
              <Link href={list.link}>
               <h1 className="font-semibold text-[#2776EA] text-lg pt-2">
                 {list.heading}
               </h1>
               </Link>
               <ul className="list-none px-0">
                 {list.items.map((item, index) => (
                   <li
                     key={index}
                     className="pt-1 text-[#4F4F4F] cursor-pointer"
                   >
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div> 
        ) : (
          <div className="px-4 py-2 md:py-14 bg-[#F3F3F3] sm:w-full h-full col-span-12 md:col-span-4">
            {filteredMenuItems.map((item) => (
              <div key={item.id} className="py-3 d-flex flex-col">
                <Link href="/">
                <h1 className="font-semibold text-[22px]">{item.title}</h1>
                </Link>
                <Image
                  src={item.img}
                  alt="image"
                  className="py-3 w-[300px] md:w-full"
                />
                <p className="max-w-[280px]">{item.description}</p>
                <a
                  href={item.url}
                  className="text-blue-500 underline font-medium"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
