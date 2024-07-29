import { CareerBuilt } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CareersColumn = () => {

    return (
        <section className='py-20'>
            <Container>
                <Row>
                    <Col lg={6} md={6} xs={12} className='flex flex-col justify-center'>
                        <h2 className='text-[#1B232E] text-[42px] not-italic font-bold leading-normal mb-[18px] capitalize'>
                            We are from <span className='text-[#2776EA]'>the people</span>
                        </h2>
                        <p className='text-black font-lato text-[20px] not-italic font-normal leading-[30px]'>
                            We are a team of 6500+ people – with a purpose to
                            thrive in our value-driven culture and make a real and lasting difference
                            to the organization and their careers.
                        </p>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <div className="img-box w-full flex justify-end">
                            <Image src={CareerBuilt} alt="about-us" className='max-w-[494px] w-full min-h-[404px] max-h-[424px] rounded-[16px] ' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CareersColumn;
