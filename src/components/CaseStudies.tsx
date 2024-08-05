import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { studies } from '@/constants/indesx';
import { useState, useEffect } from 'react';


interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className='group'>
    <div onClick={onClick} className="arrow next group-hover:bg-[#2776EA] group-hover:border-transparent">
      <span className="text-[#969696] text-lg group-hover:text-white "><FaChevronRight /></span>
    </div>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className='group'>
    <div onClick={onClick} className="arrow prev group-hover:bg-[#2776EA] group-hover:border-transparent">
      <span className="text-[#969696] text-lg group-hover:text-white " ><FaChevronLeft /></span>
    </div>
    </div>
  );
};


const CaseStudies = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.07,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

          slidesToShow: 2.07,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,

        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
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
        <div className='flex justify-between items-center mb-4 pr-[140px] '>
          <h2 className=' font-semibold text-[26px] md:text-4xl '>CASE STUDIES</h2>
        </div>
        <Slider {...settings} className="Case-study-slider mt-10">
          {studies.map((study, index) => (
            <div key={index} className="study-container  study-box cursor-pointer h-[394px] max-w-[520px] rounded-2xl transition-all duration-300 ">
              <Image src={study.banner} alt="service" className=' rounded-2xl h-full w-full object-cover' />
              <div className="overlay" style={{ backgroundImage: `url(${study.backgroundimg.src})`}}>
                
                <div className="text d-flex flex-col  text-2xl  gap-4">
                  <Image src={study.logo} alt="service" className='' />
                  <p className='text-2xl h-[170px]'>{study.description}</p>
                  <button className='bg-[#FFFFFFCC] rounded-lg px-2 py-1 max-w-[120px] ' style={{ color: study.color }} >Read more</button>
                </div>
                
              </div>
            </div>
          ))}
          
        </Slider>
      </div>
    </section>
  );
}

export default CaseStudies;


