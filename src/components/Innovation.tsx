import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { Profile } from '../utils'
import { innovations } from '@/constants/indesx';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="arrow next">
      <span className="text-[#969696] text-lg" ><FaChevronRight /></span>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="arrow prev">
      <span className="text-[#969696] text-lg" ><FaChevronLeft /></span>
    </div>
  );
};

const Innovation = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.07,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

          slidesToShow: 2.07,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,

        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };



  return (
    <section className='innovation-section py-20  '>
      <div className="container ">
        <div className='flex justify-between items-center  pr-[140px]'>
          <h2 className=' font-bold text-[26px] md:text-[40px] max-w-[590px]'>Tech Expert Latest: Innovations In <span className='text-[#2776EA]'> Digital Enterprise</span></h2>
        </div>
        <Slider {...settings} className="innovation-slider mt-10">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="innovation-box flex flex-col relative cursor-pointer h-[519px] max-w-[520px] rounded-[16px]  bg-[#F6F6F6] p-0  transition-all duration-300 hover:shadow-lg "
            >
              <Image src={innovation.banner} alt="artificial intelligence " className='w-full h-[370px] object-cover rounded-tl-[16px] rounded-br-none rounded-tr-[16px] rounded-bl-none p-0' />
              <div className='px-[24px] py-[14px]  card-group'>
                <h1 className='text-base md:text-[22px] font-medium  md:font-semibold pt-3'>{innovation.title}</h1>
                <Link className=' text-underline  text-lg' href="">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Innovation