import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidesContent } from '@/constants/indesx';
import Image from 'next/image';

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,

  };

  return (
    <div className="relative w-full h-[50vh] md:h-screen ">
      <div className='layer'>
        <video className="absolute top-0 left-0 w-full h-full  object-cover -z-10" autoPlay loop muted>
          <source src="/images/banner-video.mp4" type="video/mp4" />
        </video>
      </div>
      <Slider {...settings} className='hero-slider'>

        {slidesContent.map((data, index) => (
          console.log("Current Index:", index),
          <div className="hero-screen relative w-full h-[50vh] md:h-[100vh] " key={index}>
            <div className="container ">
              <div className={data.className ? data.className : "hero-banner-screen z-50 max-w-3xl relative flex flex-col justify-center  min-h-[50vh] md:min-h-[100vh] items-start"}>
                <h1 className="not-italic font-bold uppercase text-[28px] md:text-[72px] text-white mb-0 ">
                  {data.title}
                </h1>
                <p className='text-lg my-4 text-white'>{data.description}</p>
                <button className='learn-btn bg-none rounded-[16px] border-1 border-[#FFFFFF] hover:border-transparent  py-[12px] px-[24px] transition-all duration-300 hover:bg-[#2776EA]  text-white'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="hero-contact fixed right-10 bottom-10 cursor-pointer z-50">
        <a href="#contact-us-form">
          <Image src="/images/lets-chat-icon.png" alt="hero-dots" width={66} height={66} />
        </a>
      </div>
    </div>
  )
}

export default Hero;
