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
import { trendings } from '@/constants/indesx';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className='group'>
      <div onClick={onClick} className="arrow next group-hover:border-transparent group-hover:bg-[#2776EA]">
        <span className="text-[#969696] text-lg group-hover:text-white" ><FaChevronRight /></span>
      </div>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className='group'>
      <div onClick={onClick} className="arrow prev group-hover:border-transparent group-hover:bg-[#2776EA]">
        <span className="text-[#969696] text-lg group-hover:text-white" ><FaChevronLeft /></span>
      </div>
    </div>
  );
};



const TrendingNow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.97,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("trending-slider-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight * 0.75);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section id='trending-slider-section' className={`${isVisible ? "fadeIn" : "opacity-0 "
      } trending-section py-20 bg-center bg-no-repeat bg-cover `}>
      <Container>
        <div className='flex justify-between items-center mb-4 pr-[140px]'>
          <h2 className='text-[#FFFFFF] font-semibold text-[26px] md:text-4xl'>Trending Now</h2>
        </div>
        <Slider {...settings} className="trending-slider mt-10">
          {trendings.map((trending, index) => (
            <div
              key={index}
              className="services-box flex flex-col relative cursor-pointer h-[550px] max-w-[390px] rounded-[16px]  bg-[#F6F6F6] p-0  transition-all duration-300 hover:shadow-lg "
            >
              <Image src={trending.banner} alt="service" className='w-full h-[280px] object-cover rounded-tl-[16px] rounded-br-none rounded-tr-[16px] rounded-bl-none p-0' />
              <div className='px-[24px] py-[20px]  card-group'>
                <div className='d-flex gap-3 items-center'>
                  <div className='bg-[#2776EA] rounded-2xl text-white px-3 py-2 min-w-[140px] text-xs text-center'>{trending.date} </div>
                  <Image src={Profile} alt="profile " width={16} height={16} />
                  <p className='text-[#6A6A6A] text-sm m-0 '>{trending.user}</p>
                </div>
                <h1 className='text-[22.4px] font-extrabold pt-3'>{trending.title}</h1>
                <p className=" text-[#6A6A6A] max-w-[269px] h-[60px]">
                  {trending.description}
                </p>
                <div className='mx-auto pt-2'>
                  <Link className='d-flex items-center gap-2 justify-center text-[#31333E] font-bold text-center ' href="">
                    Read More
                    <div className='bg-[#2776EA] w-[16px] h-[16px] rounded-full d-flex justify-center items-center mt-1 text-white text-[10px]'>
                      <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default TrendingNow

