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
    threshold: 0.1,
  });

  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsCounting(true);
    } else {
      setIsCounting(false);
    }
  }, [inView]);




  return (
    <section id='choose-us-slider' ref={ref} className="why-use-section py-10 md:py-20 px-[20px] md:px-0 bg-center bg-no-repeat bg-cover"  >
      <Container>
        <Row>
          <Col lg={6} md={6} xs={12} className='flex flex-col justify-center'>
            <h2 className='text-[26px] md:text-5xl not-italic font-medium text-white mb-3 md:mb-12'>Why Choose Us?</h2>
            <p className='text-[16px] md:text-[17px] font-normal text-white w-full max-w-full md:max-w-[459px]'>
              We understand that choosing the right partner can make all the difference in achieving your goals. Our team, technology, and industry best practices deliver solutions that not only meet but exceed your expectations.
            </p>
            <button className='bg-[#2776EA] border-1 border-transparent hover:border-[#FFFFFF] rounded-[16px] py-[12px] md:py-[14px] px-[24px] text-[16px] md:text-[18px] text-white font-normal sm:mt-0 md:mt-8 cursor-pointer max-w-full md:max-w-[152px] min-h-[45px] md:min-h-[54px] transition-all duration-300 hover:bg-transparent'>
              Learn More
            </button>
          </Col>
          <Col lg={6} md={6} xs={12}>
            <Row>
              <Col lg={5} md={6} xs={12}>
                <div className="card-features flex flex-col gap-5">
                  {whyChooseUs.map((data: WhyChooseUsData, index: number) => (
                    <div key={index} className="card-text border-r-2 border-solid border-[#8E8C8C] flex flex-col gap-0 pl-10">
                      <h3 className='text-[42px] md:text-[56px] not-italic font-bold text-white mb-0'>
                        {isCounting ? (
                          <CountUp
                            end={data.title}
                            duration={3}
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
                    <a key={index} href={data.link} target='_blank' className='cursor-pointer' >
                      <div className="card-images flex justify-center items-center border border-solid border-[#D9D9D9] rounded-[16px] h-[64px] md:h-[84px] mx-[40px] md:mx-0">
                        <Image src={data.img} alt={data.alt} />
                      </div>
                    </a>
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
