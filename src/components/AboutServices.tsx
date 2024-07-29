import { aboutServicesData } from '@/constants/indesx';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutServices = () => {
    return (
        <section className='bg-black py-20'>
            <Container>
                <h2 className='text-white text-[24px] not-italic font-medium leading-normal mb-[24px]'>Our Services</h2>
                <p className='text-white text-[32px] font-lato not-italic font-normal leading-normal max-w-[728px] mb-[80px]'>Novatore Solutions offers a wide array of services designed to meet various technological needs:</p>
                <Row className='flex flex-wrap justify-center items-center gap-y-[32px]'>
                    {aboutServicesData.map((data, index) => (
                        <Col key={index} lg={4} md={6} xs={12}>
                            <div className="about-services-data  text-white min-h-[186px] bg-[#0C0C0C] border-[0.5px] border-solid rounded-[20px]  pl-[34px]  pt-[28px] flex flex-col gap-2">
                                <h2 className='pr-[60px] text-[24px] not-italic leading-normal font-medium'>{data.title}</h2>
                                <p className='font-lato text-white text-[16px] leading-5 not-italic font-normal pr-10'>{data.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default AboutServices;
