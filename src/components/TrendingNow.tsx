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
import { Col, Container } from 'react-bootstrap';
import TrendingBlogsCards from './TrendingBlogsCards';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isDisabled?: boolean;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick, isDisabled }) => {
  return (

    <div
      onClick={onClick}
      className={`arrow next flex justify-center items-center border-2 rounded-full p-2 cursor-pointer ${isDisabled
        ? "text-[#dfd8d8] border-[#dfd8d8] cursor-not-allowed"
        : "text-[#969696] border-[#969696]"
        }`}
    >
      <FaChevronRight className="text-lg" />
    </div>

  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick, isDisabled }) => {
  return (

    <div
      onClick={onClick}
      className={`arrow prev flex justify-center items-center border-2 rounded-full p-2 cursor-pointer ${isDisabled
        ? "text-[#dfd8d8] border-[#dfd8d8] cursor-not-allowed"
        : "text-[#969696] border-[#969696]"
        }`}
    >
      <FaChevronLeft className="text-lg" />
    </div>

  );
};



const TrendingNow = () => {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLastSlideVisible, setIsLastSlideVisible] = useState(false);

  const totalSlides = trendings.length;
  const slidesToShow = 3;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: <PrevArrow isDisabled={isLastSlideVisible} />,
    nextArrow: <NextArrow isDisabled={currentSlide === 0} />,
    afterChange: (current: number) => {
      setCurrentSlide(current);
      // Check if the last slide is fully visible
      if (current >= totalSlides - slidesToShow) {
        setIsLastSlideVisible(true);
      } else {
        setIsLastSlideVisible(false);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          centerMode: true,
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };



  return (
    <section id='trending-slider-section' className={`${isVisible ? "fadeIn" : "opacity-0 "
      } trending-section py-20 bg-center bg-no-repeat bg-cover `}>
      <Container>
        <div className='flex justify-between items-center mb-4 pr-[140px]'>
          <h2 className='text-[#FFFFFF] font-semibold text-[26px] md:text-4xl'>Trending Now</h2>
        </div>
        <Slider {...settings} className="trending-slider mt-10">
          {trendings.map(trending => (
            <Col key={trending.id} lg={6} md={6} xs={12}>
              <TrendingBlogsCards
                id={trending.id}
                title={trending.title}
                description={trending.description}
                banner={trending.banner}
                date={trending.date}
                user={trending.user}
                link={trending.link}
              />
            </Col>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default TrendingNow

