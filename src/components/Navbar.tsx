import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import SearchMenu from "./SearchMenu";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { Novatorewhite, NovatoreIcon, NovatoreText } from "@/utils";
import { useRouter } from "next/router";
import { featurestable, listingstable, servicesnavtable, } from "@/constants/indesx";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  const [searchMenuOpen, setSearchMenuOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState<string | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const searchRefDesktop = useRef<HTMLButtonElement | null>(null);
  const searchRefMobile = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu.toLowerCase());
    setSearchMenuOpen(false);
  };

  const handleClick = (menu: string) => {
    const lowerCaseMenu = menu.toLowerCase();
    if (clickedMenu === lowerCaseMenu) {
      setClickedMenu(null);
      setActiveMenu(null);
    } else {
      setClickedMenu(lowerCaseMenu);
      setActiveMenu(lowerCaseMenu);
      setSearchMenuOpen(false);
    }
  };

  const handleSearchClick = () => {
    setSearchMenuOpen((prev) => !prev);
    setActiveMenu(null);
    setClickedMenu(null);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
    setMobileMegaMenuOpen(null);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node | null;
    if (
      target &&
      menuRef.current &&
      !menuRef.current.contains(target) &&
      (!searchRefDesktop.current ||
        !searchRefDesktop.current.contains(target)) &&
      (!searchRefMobile.current ||
        !searchRefMobile.current.contains(target)) &&
      !(target instanceof Element && (target.closest(".nav-item") || target.closest(".search-main")))
    ) {
      setActiveMenu(null);
      setClickedMenu(null);
      setSearchMenuOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsHeaderVisible(false);
      setActiveMenu(null);
      setClickedMenu(null);
      setSearchMenuOpen(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(currentScrollY);
    if (currentScrollY > 400) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [lastScrollY]);

  const handleMegaMenuBackClick = () => {
    setMobileMegaMenuOpen(null);
    setMobileMenuOpen(true);
  };

  const handleSearchMenuBackClick = () => {
    setMobileSearchOpen(false);
    setMobileMenuOpen(true);
  };

  const handleCloseClick = () => {
    setMobileMegaMenuOpen(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleClickOutside, handleScroll]);


  // for  protecting background scrolling
  useEffect(() => {
    const isAnyMenuOpen =
      mobileMenuOpen ||
      mobileMegaMenuOpen !== null ||
      searchMenuOpen ||
      mobileSearchOpen ||
      activeMenu !== null ||
      clickedMenu !== null;
    if (isAnyMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.background = 'rgba(255, 255, 255, 1)';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.background = '';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.background = '';
    };
  }, [mobileMenuOpen, mobileMegaMenuOpen, searchMenuOpen, mobileSearchOpen, activeMenu, clickedMenu]);



  const [isHovered, setIsHovered] = useState(false);

  const isActive = (menu: string, path: string) => {
    if (path === '/') {
      return menu === 'Home';
    }

    const lowerCaseMenu = menu.toLowerCase();
    const listing = listingstable[lowerCaseMenu] || [];
    const features = featurestable[lowerCaseMenu] || [];
    const services = servicesnavtable[lowerCaseMenu] || [];

    return (
      listing?.some((item: any) =>
        item.link === path ||
        item.details?.some((detail: any) => detail.link === path)
      ) ||
      features?.some((item: any) =>
        item.link === path ||
        item.details?.some((detail: any) => detail.link === path)
      ) ||
      services?.some((item: any) =>
        item.link === path ||
        item.items?.some((detail: any) => detail.link === path)
      )
    );
  };



  return (
    <nav
      className={`navigation-menu-container fixed inset-x-0 top-0 z-50 h-[80px] w-full flex items-center transition-transform duration-300
         ${isScrolled ? "bg-imagr-black" : "bg-transparent"
        } ${isHeaderVisible ? "transform-none" : "-translate-y-full"}`}
    >
      <div className="container flex flex-row justify-between items-center md:px-0 p-0 w-full nav-bar ">
        <div className="flex items-center flex-grow">
          <Link
            href="/"
            className="logo d-flex gap-2 group duration-300 ease-in"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image src={NovatoreIcon} alt="logo" width={45} height={45} />
            <Image
              src={NovatoreText}
              alt="logo"
              className={`${isHovered ? 'group-hover:block  animate-slide-in ' : ' animate-slide-out'
                } hidden pl-2`}
            />
          </Link>
          {/* <ul className="nav-menu mb-0 pl-0 hidden md:flex flex-row ml-8 gap-4 ease-in-out  ">
            {["Services", "Industries", "Insights", "About", "Careers"].map(
              (menu, index) => (
                <li
                  key={index}
                  className={`nav-item text-lg font-normal w-90px  ${activeMenu === menu.toLowerCase()
                    ? "text-[#2776EA] font-normal"
                    : "text-[#FFF] font-normal"
                    } hover:text-[#2776EA] hover:font-noraml`}
                  onClick={() => handleClick(menu)}
                  onMouseEnter={() => handleMouseEnter(menu)}
                >
                  <Link
                    href=""
                    className="nav-link text-[#fff] active:text-[#2776EA]"
                  >
                    {menu}
                  </Link>
                </li>
              )
            )}
          </ul> */}
          <ul className="nav-menu mb-0 pl-0 hidden lg:flex flex-row ml-8 gap-4 ease-in-out desktop-nav">
            {[
              { name: "Services", path: "/" },
              { name: "Industries", path: "/" },
              { name: "Insights", path: "/" },
              { name: "About", path: "/" },
              { name: "Careers", path: "/" },
            ].map((menu, index) => (
              <li
                key={index}
                className={`nav-item text-lg font-normal w-90px ${isActive(menu.name, router.pathname)
                  ? "text-[#2776ea] font-bold"
                  : "text-[#FFF] font-normal"
                  } hover:text-[#2776EA] hover:font-normal`}
                onClick={() => handleClick(menu.name)}
                onMouseEnter={() => handleMouseEnter(menu.name)}
              >
                <Link href={menu.path} className="nav-link text-[#fff]">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu code  */}
        <div className="flex items-center gap-4 ">
          <button
            className="block lg:hidden text-white focus:outline-none text-[30px] mobile-nav "
            onClick={handleMobileMenuToggle}
          >
            <RiMenu3Fill />
          </button>
          <ul className="search-menu mb-0 pl-0 hidden lg:flex flex-row gap-4 items-center">
            <li>
              <button
                className="search-main rounded-2xl transition-all ease-in-out duration-300 bg-[#2776ea] hover:bg-transperent py-[13px] px-[13px] hover:bg-transparent border-[1px] border-[transparent] hover:border-[#fff]"
                onClick={handleSearchClick}
                ref={searchRefDesktop}
              >
                <Image
                  src="/images/search-icon-new.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </button>
            </li>
            <li>
              <a href="#contact-us-form" className="bg-[#2776EA] py-[12px] rounded-2xl transition-all duration-300 px-6 text-lg not-italic font-normal text-[#fff] hover:bg-transparent border-[1px] border-[transparent] hover:border-[#fff]">
                Schedule a Call
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`absolute top-[85px] left-[0] right-0 container  mega-menu-container  p-0  ${activeMenu ? "active" : ""
          }`}
      >
        {activeMenu && <MegaMenu activeMenu={activeMenu} />}
      </div>
      <button
        className={`search-menu-container  ${searchMenuOpen ? "active" : ""
          } md:flex hidden`}
        ref={searchRefDesktop}
      >
        {searchMenuOpen && <SearchMenu />}
      </button>
      <div
        className={`mobile-menu-overlay fixed list-none inset-0 bg-black bg-opacity-80 z-40 transition-transform duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
      >
        {mobileMegaMenuOpen ? (
          <div className="mobile-mega-menu fixed inset-0 bg-white z-50 overflow-y-auto pb-[20px]">
            <div className="flex items-center justify-between px-4 py-6">
              <button
                onClick={handleMegaMenuBackClick}
                className="text-[#2776EA] text-[30px] font-medium"
              >
                <MdKeyboardArrowLeft />
              </button>
              <button className="text-[#2776EA] text-[30px]" onClick={handleCloseClick}>
                <IoCloseOutline />
              </button>
            </div>
            <MegaMenu activeMenu={mobileMegaMenuOpen} />
          </div>
        ) : (
          <>
            <div className="d-flex items-center justify-between">
              <Link href="/" className="logo px-4 pt-[34px]">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={43}
                  height={43}
                />
              </Link>
              <button
                className="absolute top-8 right-5 text-white text-[30px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IoCloseOutline />
              </button>
            </div>
            {/* Mobile menu content 1st page  */}
            <div className="px-4 py-32 flex flex-col md:gap-4  gap-3 h-full items-center ">
              {["Services", "Industries", "Insights", "About", "Careers"].map(
                (menu, index) => (
                  <li
                    key={index}
                    className="nav-item text-lg font-normal text-white hover:text-[#2776EA] w-full"
                    onClick={() => setMobileMegaMenuOpen(menu.toLowerCase())}
                  >
                    <Link
                      href=""
                      className="nav-link d-flex justify-between text-[30px]"
                    >
                      {menu}
                      <MdKeyboardArrowRight />
                    </Link>
                  </li>
                )
              )}
              <li className="w-full pt-4">
                <button
                  className="search-main w-full flex justify-center rounded-2xl bg-[#485260] py-[12px]"
                  onClick={() => {
                    setMobileSearchOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  ref={searchRefMobile}
                >
                  <Image
                    src="/images/search.svg"
                    alt="search"
                    width={24}
                    height={24}
                  />
                </button>
              </li>
              <li className="w-full">
                <a href="#contact-us-form"
                  onClick={() => { setMobileMenuOpen(false); }}
                  className="w-full flex justify-center bg-[#2776EA] py-[12px] rounded-2xl text-lg font-normal text-[#fff] hover:bg-transparent border-[1px] border-[transparent] hover:border-[#fff]">
                  Schedule a Call
                </a>
              </li>
            </div>
          </>
        )}
      </div>
      {/* mobile search menu container */}
      <div
        className={`mobile-search-menu fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${mobileSearchOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 py-6">
          <button
            onClick={handleSearchMenuBackClick}
            className="text-[#2776EA] text-[30px] font-medium "
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            className="text-[#2776EA] text-[30px]"
            onClick={() => setMobileSearchOpen(false)}
          >
            <IoCloseOutline />
          </button>
        </div>
        <div className="p-0 ">
          <SearchMenu mobileView={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
