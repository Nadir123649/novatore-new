import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Link from "next/link";
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
                    <h1 className='text-center text-[#313232] text-[32px] md:text-[40px] font-bold capitalize not-italic leading-[55px] max-w-[590px] mx-auto mb-[20px] md:mb-[40px]'>
                        {heading} <span className='text-[#2776ea]'>{blueheading}</span>
                    </h1>
                    <div className="casestudy-slider-container flex gap-2">
                        {caseStudiesslidedata.map((caseStudy, index) => (
                            <div
                                key={index}
                                className={`slider-case-item text-white group cursor-pointer ${activeIndex === index ? 'active ' : ''}`}
                                style={{ backgroundImage: `url(${caseStudy.backgroundimg.src})` }}

                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(0)}
                            >
                                <div
                                    className={`transition-opacity case-study-modal duration-0 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                                    style={{ position: 'absolute', top: '270px', left: '30px', maxWidth: '520px' }}
                                >
                                    <h1 className='text-sm md:text-base'>{caseStudy.industry}</h1>
                                    <h1 className='text-[32px] md:text-[40px]'>{caseStudy.title}</h1>
                                    <p className='text-sm md:text-[15px] pr-1 md:pr-0'>{caseStudy.description}</p>
                                    <Link href={caseStudy.link} className='learn-btn bg-none rounded-[16px] border-1 border-[#FFFFFF] hover:border-transparent py-[12px] md:py-[14px] px-[24px] mt-[10px] md:mt-[26px] transition-all duration-300 hover:bg-[#2776EA] text-white'>
                                        Read More
                                    </Link>
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
