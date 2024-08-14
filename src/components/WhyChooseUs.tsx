import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { whyChooseLogo, whyChooseUs } from '@/constants/indesx';

interface WhyChooseUsData {
  title: number;
  percentage: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsCounting(true);
    } else {
      setIsCounting(false);
    }
  }, [inView]);


  // animation state on view 
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("choose-us-slider");
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
    <section id='choose-us-slider' ref={ref} className={`${isVisible ? "fadeIn" : "opacity-0 "
      } choose-us-section py-20 bg-center bg-no-repeat bg-cover `}>
      <Container>
        <Row>
          <Col lg={6} md={6} xs={12} className='flex flex-col justify-center'>
            <h2 className='text-[26px] md:text-5xl not-italic font-medium text-white mb-12'>Why Choose Us?</h2>
            <p className='text-[17px] font-normal text-white max-w-[459px]'>
              We understand that choosing the right partner can make all the difference in achieving your goals. Our team, technology, and industry best practices deliver solutions that not only meet but exceed your expectations.
            </p>
            <button className='bg-[#2776EA] border-1 border-transparent hover:border-[#FFFFFF] rounded-[16px] py-[14px] px-[24px] text-[18px] text-white font-normal sm:mt-0 md:mt-8 cursor-pointer max-w-[152px] min-h-[54px] transition-all duration-300 hover:bg-transparent'>
              Learn More
            </button>
          </Col>
          <Col lg={6} md={6} xs={12}>
            <Row>
              <Col lg={5} md={6} xs={12}>
                <div className="card-features flex flex-col gap-5">
                  {whyChooseUs.map((data: WhyChooseUsData, index: number) => (
                    <div key={index} className="card-text border-r-2 border-solid border-[#8E8C8C] flex flex-col gap-0 pl-10">
                      <h3 className='text-[56px] not-italic font-bold text-white mb-0'>
                        {isCounting ? (
                          <CountUp
                            end={data.title}
                            duration={4}
                            easingFn={(t, b, c, d) => c * (t /= d) * t + b}
                          />
                        ) : (
                          0
                        )}
                        <span className='text-[24px] font-normal text-[#F9D00D] pl-[6px]'>{data.percentage}</span>
                      </h3>
                      <p className='text-[16px] font-medium text-white mb-0'>{data.description}</p>
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={7} md={6} xs={12} className='sm:p-0'>
                <div className="clutch-feature flex flex-col gap-14 sm:pl-0 md:pl-8">
                  {whyChooseLogo.map((data, index) => (
                    <div key={index} className="card-images flex justify-center items-center border border-solid border-[#D9D9D9] rounded-[16px] h-[84px]">
                      <Image src={data.img} alt={data.alt} />
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
