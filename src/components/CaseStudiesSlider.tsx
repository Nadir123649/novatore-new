import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { caseStudiesslidedata } from '@/constants/indesx';

interface StudySliderProps {
    heading?: string;
    blueheading?: string;
}

const CaseStudiesSlider: React.FC<StudySliderProps> = ({ heading, blueheading }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-[20px] md:py-20">
            <Container>
                <Row>
                    <h1 className='text-center text-[#313232] text-[40px] font-bold capitalize not-italic leading-[55px] max-w-[590px] mx-auto mb-[40px]'>
                        {heading} <span className='text-[#2776ea]'>{blueheading}</span>
                    </h1>
                    <div className="CaseStudy-slider-container flex gap-2">
                        {caseStudiesslidedata.map((caseStudy, index) => (
                            <div
                                key={index}
                                className={`slider-case-item text-white group cursor-pointer ${activeIndex === index ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${caseStudy.backgroundimg.src})` }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(0)}
                            >
                                <div
                                    className={`transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                    style={{ position: 'absolute', top: '270px', left: '30px', maxWidth: '500px' }}
                                >
                                    <h1 className='text-base'>Our Case Study</h1>
                                    <h1 className='text-[40px]'>{caseStudy.title}</h1>
                                    <p className='text-[15px]'>{caseStudy.description}</p>
                                    <a className='learn-btn bg-none rounded-[16px] border-1 border-[#FFFFFF] hover:border-transparent py-[14px] px-[24px] mt-[26px] transition-all duration-300 hover:bg-[#2776EA] text-white'>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default CaseStudiesSlider;
