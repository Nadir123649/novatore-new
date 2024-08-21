import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { studies } from '@/constants/indesx';
import { useState, useEffect } from 'react';
import CaseStudyCards from './CaseStudyCards';
import { Col, Row } from 'react-bootstrap';

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
          ? "text-[#dfd8d8] border-[#dfd8d8] hover:text-[#dfd8d8] hover:bg-transparent hover:border-[#dfd8d8]"
          : "text-[#969696] border-[#969696] hover:bg-[#2776ea] hover:text-[#FFFFFF] hover:border-[#00000000]"
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
          ? "text-[#dfd8d8] border-[#dfd8d8] hover:bg-transparent hover:text-[#dfd8d8] hover:border-[#dfd8d8]"
          : "text-[#969696] border-[#969696] hover:bg-[#2776ea] hover:text-white hover:border-[#00000000]"
          }`}
        style={{ cursor: isDisabled ? 'default' : 'pointer' }}
      >
        <FaChevronLeft className="text-lg" />
      </div>
    </div>
  );
};


const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLastSlideVisible, setIsLastSlideVisible] = useState(false);

  const totalSlides = studies.length;
  const slidesToShow = 2.35;

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

  // animation state on view 
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("caseStudy-section");
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
    <section id='caseStudy-section' className={`${isVisible ? "fadeIn" : "opacity-0 "
      } Case-studies-section py-20 bg-center bg-no-repeat bg-cover `}>
      <div className="container ">
        <div className='flex justify-between items-center mb-4 pr-[140px] mobile-carousel'>
          <h2 className=' font-semibold text-[26px] md:text-4xl '>CASE STUDIES</h2>
        </div>
        <Slider {...settings} className="Case-study-slider mt-10">
          {studies.map(study => (
            <Row key={study.id} >
              <Col lg={12} md={6} xs={12} className='mr-10'>
                <CaseStudyCards
                  id={study.id}
                  description={study.description}
                  banner={study.banner}
                  backgroundimg={study.backgroundimg}
                  logo={study.logo}
                  color={study.color}
                />
              </Col>
            </Row>
          ))}
        </Slider>
      </div>
    </section >
  );
}

export default CaseStudies;


