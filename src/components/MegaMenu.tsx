import React from "react";
import Image from "next/image";
import { featurestable, listingstable, menuitems, servicesnavtable } from "@/constants/indesx";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { useRouter } from 'next/router';


interface MegaMenuProps {
  activeMenu: string;
  activeLink?: any;
}
const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu, activeLink }) => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    if (router.pathname === url) {
      const uniqueUrl = `${url}?reload=${new Date().getTime()}`;
      router.push(uniqueUrl).then(() => {
        window.location.href = uniqueUrl;
      });
    } else {
      router.push(url);
    }
  };



  const isLinkActive = (url: string) => {
    if (router.pathname === "/") return false;
    return router.pathname === url;
  };
  const filteredMenuItems = menuitems.filter(
    (servicesnavtable) => servicesnavtable.title.toLowerCase() === activeMenu.toLowerCase()
  );
  const filteredListings = listingstable[activeMenu] || [];
  const filteredFeatures = featurestable[activeMenu] || [];
  const activeMenuItem = menuitems.find(item => item.title.toLowerCase() === activeMenu.toLowerCase());
  const isThirdSectionHidden = activeMenu.toLowerCase() === 'services' || !activeMenuItem;



  return (
    <div className="relative megamenu-card ease-in-out duration-300 rounded-[16px]">
      <Container className="card navbar-menu-card bg-white sm:rounded-none md:rounded-[16px] ease-in-out duration-300 h-[480px] md:h-auto sm:border:none ">
        <div className="grid grid-cols-12 gap-4">
          {/* section first  */}
          <div className="pl-4 sm:py-0 md:py-3 col-span-12 md:col-span-4 ">
            {filteredListings.map((listing: { id: React.Key | null | undefined; heading: any | number | bigint | boolean | React.ReactElement<any, any | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; link: any | null | undefined; details: { text: string; link: string }[]; }) => (
              <div key={listing.id} className="d-flex flex-col">
                <a
                  onClick={() => handleNavigation(listing.link)}
                  className={`pt-2  cursor-default ${isLinkActive(listing.link) || listing.link === activeLink ? "text-[#FF0000]" : "text-[#2776EA]"}`}
                >
                  <h1 className="font-semibold text-lg text-[18px] inline cursor-pointer hover:text-[#0a58ca]">{listing.heading}</h1>
                </a>

                <ul className="list-none px-0">
                  {listing.details.map((detail, index) => (
                    <li
                      key={index}
                      className="pt-1 text-[#4F4F4F] hover:text-[#2776EA] "
                    >
                      <a
                        onClick={() => handleNavigation(detail.link)}
                        className={`${isLinkActive(detail.link) ? "text-[#2776EA]" : "text-[#4F4F4F]"} hover:text-[#2776EA] hover:underline  cursor-pointer`}
                      >
                        {detail.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* section second */}
          <div className="pl-4 sm:my-0 md:my-3 col-span-12 md:col-span-4">
            {filteredFeatures.map((feature: { id: React.Key | null | undefined; heading: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; link: any | null | undefined; details: any[]; }) => (
              <div key={feature.id} className="d-flex flex-col">
                <a
                  onClick={() => handleNavigation(feature.link)}
                  className={`font-semibold text-lg pt-2 cursor-default ${isLinkActive(feature.link) || feature.link === activeLink ? "text-[#FF0000]" : "text-[#2776EA]"}`}
                >
                  {feature.heading ? (
                    <h1 className="font-semibold text-lg  inline cursor-pointer hover:text-[#0a58ca] ">
                      {feature.heading}
                    </h1>
                  ) : (
                    <div className="pt-[2px]">&nbsp;</div>
                  )}
                </a>
                <ul className="list-none px-0">
                  {feature.details.map((detail, index) => (
                    <li
                      key={index}
                      className="pt-1 text-[#4F4F4F]  hover:text-[#2776EA]"
                    >
                      <a
                        onClick={() => handleNavigation(detail.link)}

                        className={`${isLinkActive(detail.link) ? "text-[#2776EA]" : "text-[#4F4F4F]"} hover:text-[#2776EA] cursor-pointer`}
                      >
                        {detail.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* section third  */}
          {isThirdSectionHidden ? (
            <div className="pl-4 sm:my-0 md:my-3 col-span-12 md:col-span-4 ">
              {servicesnavtable.map((list: { id: React.Key | null | undefined; link: string; heading: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; items: any[]; }) => (
                <div key={list.id} className="d-flex flex-col">
                  <a
                    onClick={() => handleNavigation(list.link)}
                    className={`font-semibold text-lg pt-[9px]  cursor-default ${isLinkActive(list.link) || list.link === activeLink ? "text-[#FF0000]" : "text-[#2776EA]"}`}
                  >
                    <h1 className="font-semibold text-lg inline cursor-pointer hover:text-[#0a58ca] ">{list.heading}</h1>

                  </a>
                  <ul className="list-none px-0">
                    {list.items.map((item, index) => (
                      <li
                        key={index}
                        className=" pt-1 text-[#4F4F4F]  hover:text-[#2776EA]"
                      >

                        <a
                          onClick={() => handleNavigation(item.link)}

                          className={`${isLinkActive(item.link) ? "text-[#2776EA]" : "text-[#4F4F4F]"} hover:text-[#2776EA] cursor-pointer`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className=" py-1 md:py-3 pl-4 bg-[#F3F3F3] sm:w-full h-full col-span-12 md:col-span-4">
              {filteredMenuItems.map((item) => (
                <div key={item.id} className="py-3 d-flex flex-col">
                  <Link href="/">
                    <h1 className={`font-semibold text-[22px] hover:text-[#0a58ca] ${isLinkActive(item.url) ? "text-[#2776EA]" : "text-[#2776EA]"}`}>
                      {item.title}
                    </h1>
                  </Link>
                  <Image
                    src={item.img}
                    alt="image"
                    className="py-3 w-[300px] md:w-full"
                  />
                  <p className="max-w-[280px]">{item.description}</p>
                  <a onClick={() => handleNavigation(item.url)}
                    className="text-[#2776EA] underline font-medium "> <p className=" hover:underline hover:text-[#0a58ca] m-0 p-0">Learn More</p></a>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div >
  );
};

export default MegaMenu;
