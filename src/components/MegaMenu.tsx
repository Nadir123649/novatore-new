import React from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { featurestable, listingstable, menuitems, data } from "@/constants/indesx";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { useRouter } from 'next/router';


interface MegaMenuProps {
  activeMenu: string;
}
const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu }) => {
  const router = useRouter();
  const handleRefreshAndNavigate = (url: string) => {
    router.push(url).then(() => {
      router.reload();
    });
  };

  const filteredMenuItems = menuitems.filter(
    (data) => data.title.toLowerCase() === activeMenu.toLowerCase()
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
                <a onClick={() => handleRefreshAndNavigate(listing.link)}  >
                  <h1 className="font-semibold text-lg text-[#2776EA] text-[18px] pt-2 hover:text-[#0a58ca]">{listing.heading}</h1>
                </a>

                <ul className="list-none px-0">
                  {listing.details.map((detail, index) => (
                    <li
                      key={index}
                      className="pt-1 text-[#4F4F4F] cursor-pointer hover:text-[#2776EA] "
                    >
                      <a onClick={() => handleRefreshAndNavigate(detail.link)} className="text-[#4F4F4F] hover:text-[#2776EA] hover:underline">
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
                <a onClick={() => handleRefreshAndNavigate(feature.link)}>
                  {feature.heading ? (
                    <h1 className="font-semibold text-lg text-[#2776EA] pt-2 hover:text-[#0a58ca]">
                      {feature.heading}
                    </h1>
                  ) : (
                    <div className="pt-[22px]">&nbsp;</div>
                  )}
                </a>
                <ul className="list-none px-0">
                  {feature.details.map((detail, index) => (
                    <li
                      key={index}
                      className="pt-1 text-[#4F4F4F] cursor-pointer hover:text-[#2776EA]"
                    >
                      <a onClick={() => handleRefreshAndNavigate(detail.link)} className="text-[#4F4F4F] hover:text-[#2776EA]">
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
            <div className="pl-4 sm:my-0 md:my-3 col-span-12 md:col-span-4">
              {data.map((list) => (
                <div key={list.id} className="d-flex flex-col">
                  <a onClick={() => handleRefreshAndNavigate(list.link)} >
                    <h1 className="font-semibold text-lg text-[#2776EA]  pt-[9px] hover:text-[#0a58ca]">
                      {list.heading}
                    </h1>
                  </a>
                  <ul className="list-none px-0">
                    {list.items.map((item, index) => (
                      <li
                        key={index}
                        className=" pt-1 text-[#4F4F4F] cursor-pointer hover:text-[#2776EA]"
                      >

                        <a onClick={() => handleRefreshAndNavigate(item.link)} className="text-[#4F4F4F] hover:text-[#2776EA]">
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
                    <h1 className="font-semibold text-[22px] text-[#2776EA] hover:text-[#0a58ca] ">{item.title}</h1>
                  </Link>
                  <Image
                    src={item.img}
                    alt="image"
                    className="py-3 w-[300px] md:w-full"
                  />
                  <p className="max-w-[280px]">{item.description}</p>
                  <a onClick={() => handleRefreshAndNavigate(item.url)}
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
