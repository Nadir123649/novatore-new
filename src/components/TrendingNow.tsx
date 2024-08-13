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

