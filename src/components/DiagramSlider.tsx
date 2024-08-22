import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';


interface DiagramSectionProps {
    heading?: string;
    headingBlue?: string;
    image: any;
    needsMoreTitle?: string;
}

const DiagramSlider: React.FC<DiagramSectionProps> = ({ heading, headingBlue, image, needsMoreTitle }) => {

    // animation state on view
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("diagram-section");
        if (element && !hasAnimated) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75) {
                setIsVisible(true);
                setHasAnimated(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasAnimated]);

    return (
        <section id="diagram-section" className={`${isVisible ? "fadeIn" : "opacity-0 "
            } `} >
            {(heading || headingBlue) && (
                <h2 className='text-[40px] font-bold not-italic leading-normal capitalize text-center mb-[60px] text-black max-w-[1100px] mx-auto w-full'>
                    {heading} <span className='text-[#2776EA]'>{headingBlue}</span>
                    {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                </h2>
            )}
            <Container>
                <Row>
                    <Col lg={12} >
                        <Image src={image} alt="logo" className='mx-auto block mb-[100px] mt-[30px]' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default DiagramSlider;
