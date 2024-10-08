import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GoArrowUpRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { services } from "@/constants/indesx";
import { Col, Container } from "react-bootstrap";
import ServicesCard from "./ServicesCards";

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
          ? "text-[#dfd8d8] border-[#dfd8d8] hover:text-[#dfd8d8] hover:bg-[#ecf1f4] hover:border-[#dfd8d8]"
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
          ? "text-[#dfd8d8] border-[#dfd8d8] hover:bg-[#ecf1f4] hover:text-[#dfd8d8] hover:border-[#dfd8d8]"
          : "text-[#969696] border-[#969696] hover:bg-[#2776ea] hover:text-white hover:border-[#00000000]"
          }`}
        style={{ cursor: isDisabled ? 'default' : 'pointer' }}
      >
        <FaChevronLeft className="text-lg" />
      </div>
    </div>
  );
};


const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLastSlideVisible, setIsLastSlideVisible] = useState(false);
  const totalSlides = services.length;
  const slidesToShow = 3.3;

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
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section
      id="service-slider-section"
      className="services-section md:py-20 bg-center bg-no-repeat bg-cover"
    >
      <Container>
        <div className="flex flex-col md:flex-row  justify-center md:justify-between items-center md:items-center mb-2 md:mb-4 mobile-carousel">
          <h2 className="text-gray-900 font-semibold text-center md:text-left text-[26px] md:text-4xl pb-0 md:pb-4">
            What Can We Do For You?
          </h2>
        </div>
        <Slider {...settings} className="services-slider">
          {services.map((service) => (
            <Col key={service.id} lg={6} md={6} xs={12} className=" pt-3 pb-0 md:pt-4 md:pb-4">
              <ServicesCard
                id={service.id}
                title={service.title}
                description={service.description}
                backgroundimg={service.backgroundimg}
                link={service.link}
              />
            </Col>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Services;
