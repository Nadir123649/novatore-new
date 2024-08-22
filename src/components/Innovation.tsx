import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogsCard from './BlogsCard';
import { blogData } from '@/constants/indesx'; // Make sure this path is correct
import { useState, useEffect } from 'react';



interface InnovationProps {
  className?: string;
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isDisabled?: boolean;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <div className="group">
      <div
        onClick={!isDisabled ? onClick : undefined}
        className={`arrow next flex justify-center items-center border-2 rounded-full p-2 ${isDisabled
          ? " text-[#dfd8d8] border-[#dfd8d8] hover:bg-transparent hover:text-[#dfd8d8] hover:border-[#dfd8d8] cursor-none"
          : "text-[#969696] border-[#969696] group-hover:bg-[#2776ea] group-hover:text-white group-hover:border-[#00000000] cursor-pointer"
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
    <div className="group">
      <div
        onClick={!isDisabled ? onClick : undefined}
        className={`arrow prev flex justify-center items-center border-2 rounded-full p-2 ${isDisabled
          ? " text-[#dfd8d8] border-[#dfd8d8] hover:bg-transparent hover:text-[#dfd8d8] hover:border-[#dfd8d8] cursor-none"
          : " text-[#969696] border-[#969696] group-hover:bg-[#2776ea] group-hover:text-white group-hover:border-[#00000000] cursor-pointer "
          }`}
        style={{ cursor: isDisabled ? 'default' : 'pointer' }}
      >
        <FaChevronLeft className="text-lg" />
      </div>
    </div>
  );
};



const Innovation: React.FC<InnovationProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLastSlideVisible, setIsLastSlideVisible] = useState(false);

  const totalSlides = blogData.length;
  const slidesToShow = 2.3;

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

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("innovation-section");
    if (element && !hasAnimated) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <section
      id="innovation-section"
      className={`${className} ${isVisible ? 'fadeIn' : 'opacity-0'} py-[20px] md:py-20 innovation-section`}
    >
      <div className="container">
        <div className="flex justify-between items-center pr-[0px] md:pr-[140px] pb-[40px] md:pb-[0px]">
          <h2 className="font-bold text-[26px] md:text-[40px] max-w-full md:max-w-[645px]">
            Tech Expert Latest: Innovations In <span className="text-[#2776EA]">Digital Enterprise</span>
          </h2>
        </div>
        <Slider {...settings} className="innovation-slider mt-10">
          {blogData.map((blog) => (
            <BlogsCard
              key={blog.id}
              id={blog.id}
              image={blog.image}
              category={blog.category}
              tag={blog.tag}
              title={blog.title}
              link={blog.link}
              type="card"
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Innovation;
