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
    <div className="group">
      <div
        onClick={onClick}
        className={`arrow next flex justify-center items-center border-2 rounded-full p-2 cursor-pointer ${isDisabled
          ? "text-[#dfd8d8] border-[#dfd8d8]"
          : "text-[#969696] border-[#969696]"
          }`}
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
        onClick={onClick}
        className={`arrow prev flex justify-center items-center border-2 rounded-full p-2 cursor-pointer ${isDisabled
          ? "text-[#dfd8d8] border-[#dfd8d8]"
          : "text-[#969696] border-[#969696]"
          }`}
      >
        <FaChevronLeft className="text-lg" />
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = services.length;
  const slidesToShow = 3.3;

  // Calculate the last index where the next arrow should be disabled
  const lastIndex = totalSlides - Math.ceil(slidesToShow);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow isDisabled={currentSlide >= lastIndex} />,
    prevArrow: <PrevArrow isDisabled={currentSlide === 0} />,
    afterChange: (current: number) => setCurrentSlide(current),
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

  const handleScroll = () => {
    const element = document.getElementById("service-slider-section");
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
    <section
      id="service-slider-section"
      className={`${isVisible ? "fadeIn" : "opacity-0"
        } services-section py-20 bg-center bg-no-repeat bg-cover`}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-gray-900 font-semibold text-[26px] md:text-4xl">
            What Can We Do For You?
          </h2>
          <button className="border-1 border-[#969696] rounded-[36px] py-[12px] px-4 text-[#969696] text-[18px] mr-[120px] md:mr-[120px]">
            All Services
          </button>
        </div>
        <Slider {...settings} className="services-slider">
          {services.map((service) => (
            <Col key={service.id} lg={6} md={6} xs={12}>
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
