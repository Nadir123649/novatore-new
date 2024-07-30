import { useEffect, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

const CloudOps: React.FC = () => {
  const ulRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ulRef.current) {
        const listItems = ulRef.current.querySelectorAll<HTMLLIElement>('li');
        const scrollTop = ulRef.current.scrollTop;
        const clientHeight = ulRef.current.clientHeight;
        const itemHeight = listItems[0]?.clientHeight || 0;
        const topThreshold = 0.2 * clientHeight; 
        listItems.forEach((item, index) => {
          const itemOffset = index * itemHeight;
          const itemBottom = itemOffset + itemHeight;
          let opacity = 0.5; 
          if (itemBottom > scrollTop && itemOffset < scrollTop + topThreshold) {
            opacity = 1; 
          }
          item.style.opacity = String(opacity);
        });
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (ulRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = ulRef.current;
        const delta = event.deltaY;

        if (
          (delta < 0 && scrollTop === 0) || 
          (delta > 0 && scrollTop + clientHeight >= scrollHeight)
        ) {
          event.preventDefault();
        }
      }
    };

    const ulElement = ulRef.current;
    ulElement?.addEventListener('scroll', handleScroll);
    ulElement?.addEventListener('wheel', handleWheel);

    return () => {
      ulElement?.removeEventListener('scroll', handleScroll);
      ulElement?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section className='CloudOps-section py-20'>
      <Container>
        <h2 className='text-[40px] md:text-[52px] not-italic font-bold mb-12 text-center pb-[40px]'>
          Explore the Power of <span className='text-[#2776EA]'>CloudOps</span> for Superior Software Performance
        </h2>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <h2 className='font-bold text-[40px] pb-[20px]'>
              Have a Look at What <span className='text-[#2776EA]'>we offer?</span>
            </h2>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="grid grid-cols-12 gap-4 py-[20px] min-h-[100vh]">
                  <div className='col-span-4'>
                    <div className='text-white bg-[#2776EA] rounded-2xl p-4 min-h-[70vh] max-w-[360px] relative'>
                      <p className='text-2xl'>
                        Find out with our CloudOps services. At Novatore Solutions, we are dedicated to enhancing operational efficiency, deployment processes, and ensuring high availability through our advanced CloudOps solutions.
                      </p>
                      <div className='w-[44px] h-[44px] d-flex items-center justify-center border border-[#fff] rounded-full absolute bottom-8 right-6'>
                        <FaArrowRightLong />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-8'>
                    <div className='overflow-y-scroll h-[700px] parallax-section' ref={ulRef}>
                      <ul className='pr-[40px] flex flex-col gap-10'>
                        <li className=' relative h-[240px] opacity-1 py-10 '>
                          <h1 className='text-28px font-semibold'>CloudOps Consulting</h1>
                          <p className='text-15px'>We provide expert guidance on best practices, tools, and technologies, ensuring that your cloud strategy aligns with your business objectives.</p>
                        </li>
                        <li className='relative h-[240px] opacity-0.5'>
                          <h1 className='text-28px font-semibold'>CloudOps Implementation</h1>
                          <p className='text-15px'>Our team excels in deploying cloud operations frameworks that enhance performance, security, and scalability, tailored to your unique requirements.</p>
                        </li>
                        <li className='relative h-[240px] opacity-0.5'>
                          <h1 className='text-28px font-semibold'>CloudOps Managed Services</h1>
                          <p className='text-15px'>We offer continuous monitoring, maintenance, and optimization to ensure your cloud environment runs smoothly and efficiently.</p>
                        </li>
                        <li className='relative h-[120px] opacity-0.5'></li>
                        <li className='relative h-[120px] opacity-0.5'></li>
                        <li className='relative h-[70px] opacity-0.5'></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CloudOps;
