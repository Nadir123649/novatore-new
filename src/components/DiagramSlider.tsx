import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



interface DiagramSectionProps {
    heading?: string;
    headingBlue?: string;
    image: any;
    needsMoreTitle?: string;
}

const DiagramSlider: React.FC<DiagramSectionProps> = ({ heading, headingBlue, image, needsMoreTitle }) => {
    return (
        <section>
            {(heading || headingBlue) && (
                <h2 className='text-[40px] font-bold not-italic leading-normal capitalize text-center mb-[60px] text-black'>
                    {heading} <span className='text-[#2776EA]'>{headingBlue}</span>
                    {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                </h2>
            )}
            <Container>
                <Row>
                    <Col lg={12}>
                        <Image src={image} alt="logo" className='mx-auto block mb-[100px] mt-[30px]' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DiagramSlider;
