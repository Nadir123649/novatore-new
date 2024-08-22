import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Enterprises } from '@/constants/indesx';

interface EnterpriseData {
  title: number;
  percentage: string;
  description: string;
  icon: any;
}

const Enterprise: React.FC = () => {
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

  return (
    <section ref={ref} className='choose-us-section py-6 bg-center bg-no-repeat bg-cover'>
      <Container>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="card-features grid grid-cols-12 gap-4">
                  {Enterprises.map((data: EnterpriseData, index: number) => (
                    <div
                      key={index}
                      className={`col-span-3 card-text text-center flex flex-col items-center px-[20px] my-[0px] md:my-[100px] ${index !== Enterprises.length - 1
                        ? ''
                        : ''
                        } transition-transform duration-500 ease-in-out transform `}
                    >
                      <Image src={data.icon} alt="icon" className='w-full max-w-[80px] max-h-[60px] min-h-[60px] mb-[24px]' />
                      <h3 className='text-[56px] not-italic font-bold text-white mb-0 ml-[20px]'>
                        {isCounting ? (
                          <CountUp
                            end={data.title}
                            duration={2}
                            easingFn={(t, b, c, d) => c * (t /= d) * t + b}
                          />
                        ) : (
                          0
                        )}
                        <sup>
                          <span className='text-[24px] font-normal text-[#F9D00D] pl-[6px]'>
                            {data.percentage}
                          </span>
                        </sup>
                      </h3>
                      <p className='font-medium text-white mb-0 text-[16px]'>{data.description}</p>
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

export default Enterprise;