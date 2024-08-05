import React from "react";
import Slider from "react-slick";
import { GoArrowUpRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { services } from "@/constants/indesx";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    centerMode: true,
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
          <button className="border border-solid border-[#969696] rounded-[36px] py-[12px] px-4 text-[#969696] text-[18px]  mr-[120px] md:mr-[120px]">
            All Services
          </button>
        </div>
        <Slider {...settings} className="services-slider">
          {services.map((service, index) => (
            <div
              key={index}
              className="services-box relative cursor-pointer min-h-[375px] md:min-h-[490px] max-w-[330px] rounded-[16px] border border-solid border-[#ECECEC] bg-[#F6F6F6] p-[24px] transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className={`heading-container relative overflow-hidden bg-[#1B232E] p-4 rounded-2xl text-white transition-all duration-300 ease-in-out`}
                style={{
                  height: hoverIndex === index ? "200px" : "initial",
                  backgroundImage: hoverIndex === index ? `url(${service.backgroundimg})` : "none",
                  backgroundSize: hoverIndex === index ? "cover" : "initial",
                  backgroundPosition: hoverIndex === index ? "center" : "initial",
                }}>
                <h3 className="font-bold mb-2 text-xl md:text-2xl text-center transition-transform duration-300 ease-in-out ">
                  {service.title}
                </h3>
              </div>
              <p className="my-4 transition-transform duration-300 ease-in-out text-[22px] md:text-[28px] font-medium">
                {service.description}
              </p>
              <div className="text-[60px] absolute bottom-[20px] right-[20px] arrow-upright">
                <GoArrowUpRight />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section >
  );
};

export default Services;
