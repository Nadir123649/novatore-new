import React from "react";
import Slider from "react-slick";
import { GoArrowUpRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { services } from "@/constants/indesx";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "./ServicesCards";
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="group">
      <div onClick={onClick} className="arrow next group-hover:bg-[#2776EA] group-hover:border-transparent ">
        <span className="text-[#969696] text-lg group-hover:text-white">
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="group">
      <div onClick={onClick} className="arrow prev  group-hover:bg-[#2776EA] group-hover:border-transparent ">
        <span className="text-[#969696] group-hover:text-white  text-lg">
          <FaChevronLeft />
        </span>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <section id="service-slider-section" className={`${isVisible ? "fadeIn" : "opacity-0 "
      } services-section py-20 bg-center bg-no-repeat bg-cover`}>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4  ">
          <h2 className="text-gray-900 font-semibold text-[26px] md:text-4xl ">
            What Can We Do For You?
          </h2>
          <button className="border-1  border-[#969696] rounded-[36px] py-[12px] px-4 text-[#969696] text-[18px]  mr-[120px] md:mr-[120px]">
            All Services
          </button>
        </div>
        <Slider {...settings} className="services-slider">
            {services.map(service => (
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
    </section >
  );
};

export default Services;
