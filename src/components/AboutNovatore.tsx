import { aboutBox } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutNovatore = () => {
    return (
        <section className=' bg-white py-20'>
            <Container>
                <div className="brandind-content text-center">
                    <h2 className='text-[40px] text-[#1B232E] font-bold mb-[26px]'>Welcome to <span className='text-[#2776EA]'>Novatore Solutions</span></h2>
                    <p className=' font-lato text-black not-italic text-[20px] font-normal mb-[80px] max-w-[947px] mx-auto leading-[30px]'>
                        At Novatore Solutions, we excel in turning technology concepts into leading market solutions
                        by ensuring that each web and mobile product we create is effective and profitable in the real world.
                        We provide a comprehensive range of IT services, including Cloud Solutions (IaaS, PaaS, SaaS), Artificial Intelligence,
                        and Blockchain technologies, to meet and surpass the dynamic requirements of the market.
                    </p>
                </div>
                <Row>
                    <Col lg={6} md={6} xs={12} className='flex justify-center items-center flex-col'>
                        <div className="about-content">
                            <h2 className='text-black text-[40px] not-italic font-semibold font-gellix capitalize leading-normal'>How did it all start?</h2>
                            <p className='text-black font-lato text-[20px] not-italic font-normal leading-[30px] max-w-[509px]'>
                                Founded in 2013 by Ameer Haider, a former World Bank Consultant, Novatore Solutions
                                was established with the vision of enhancing the tech ecosystem in the US and globally.
                                By assembling a diverse team of technology experts, we aim to deliver innovative
                                and scalable solutions tailored to our clients needs.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <div className="img-box w-full flex justify-end">
                            <Image src={aboutBox} alt="about-us" className='max-w-[486px] w-full min-h-[424px] max-h-[424px] rounded-[16px] ' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutNovatore;
