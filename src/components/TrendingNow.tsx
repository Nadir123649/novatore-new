import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BlogsCard from './BlogsCard';
import { client } from "@/sanity/lib/client";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isDisabled?: boolean;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <div className="group arrow-group">
      <div
        onClick={!isDisabled ? onClick : undefined}
        className={`arrow next flex justify-center items-center border-2 rounded-full p-2 cursor-pointer ${isDisabled
          ? "text-[#969696] border-[#969696] hover:text-[#969696] hover:bg-transparent hover:border-[#969696]"
          : "text-[#dfd8d8] border-[#dfd8d8]  hover:bg-[#2776ea] hover:text-[#FFFFFF] hover:border-[#00000000]"
          }`}
        style={{ cursor: isDisabled ? 'default' : 'pointer' }}
      >
        <FaChevronRight className="text-lg" />
      </div>
    </div>
  );
};


const PrevArrow: React.FC<ArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <div className="group arrow-group">
      <div
        onClick={!isDisabled ? onClick : undefined}
        className={`arrow prev flex justify-center items-center border-2 rounded-full p-2 cursor-pointer ${isDisabled
          ? "text-[#969696] border-[#969696] hover:bg-transparent hover:text-[#969696] hover:border-[#969696]"
          : "text-[#dfd8d8] border-[#dfd8d8]  hover:bg-[#2776ea] hover:text-white hover:border-[#00000000]"
          }`}
        style={{ cursor: isDisabled ? 'default' : 'pointer' }}
      >
        <FaChevronLeft className="text-lg" />
      </div>
    </div>
  );
};

const TrendingNow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blogdata, setBlogdata] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLastSlideVisible, setIsLastSlideVisible] = useState(false);
  const totalSlides = blogdata.length;
  const slidesToShow = 2.95;

  const handleScroll = () => {
    const element = document.getElementById("trending-slider-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight * 0.75);
    }
  };

  const getBlogData = async () => {
    const res = await client.fetch("*[_type== 'blogs']");
    setBlogdata(res);
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow isDisabled={isLastSlideVisible} />,
    prevArrow: <PrevArrow isDisabled={currentSlide === 0} />,
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
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 0.5,
          slidesToScroll: 0.5,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    getBlogData()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <section id='trending-slider-section' className={`${isVisible ? "fadeIn" : "opacity-0 "
      } trending-section py-20 bg-center bg-no-repeat bg-cover `}>
      <Container className='trending-container p-0'>
        <div className='flex justify-between items-center mb-4 pr-[140px] mobile-carousel'>
          <h2 className='text-[#FFFFFF] font-semibold text-[26px] md:text-4xl'>Trending Now</h2>
        </div>
        <Slider {...settings} className="trending-slider mt-3 md:mt-10">
          {blogdata.map((blog: any) => (
            <BlogsCard
              key={blog._id}
              id={blog._id}
              image={blog.image}
              subtitle={blog.sub_title}
              description={blog.description}
              title={blog.title}
            />
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default TrendingNow

