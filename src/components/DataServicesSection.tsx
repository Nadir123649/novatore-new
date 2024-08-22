import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DataCard from './DataCard';
import { useState, useEffect } from 'react';

interface DataServicesSectionProps {
    heading: string;
    headingBlue?: string;
    needsMoreTitle?: string;
    cardMinHeight?: any;
    type?: any;
    data: {
        title: string;
        description?: string;
        icon: string;
        listItems?: string[];
    }[];
}

const DataServicesSection: React.FC<DataServicesSectionProps> = ({ heading, headingBlue, data, needsMoreTitle, type, cardMinHeight }) => {


    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("dataservice-section");
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
        <section id="dataservice-section" className={`${isVisible ? "fadeIn" : "opacity-0"} pb-20 pt-10`}>
            <h2 className='text-[40px] font-bold not-italic leading-normal capitalize text-center mb-[60px] text-black'>
                {heading} <span className='text-[#2776EA]'> {headingBlue}</span>
                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
            </h2>
            <Container>
                <Row>
                    {
                        type === "single" ? (
                            data.map((item, index) => (
                                <Col lg={6} md={6} xs={12} key={index} className="mb-5">
                                    <DataCard title={item.title} description={item.description} icon={item.icon} listItems={item.listItems}
                                        type="relative bg-white shadow rounded-[16px] pt-[40px] pb-[10px] px-[24px]  max-w-2xl mx-auto overflow-hidden flex flex-col h-full hover:scale-105 transition ease-in duration-1.5"
                                        value="absolute top-[16px] right-[400px] mt-2 mr-3 text-blue-200"
                                        minHeight={cardMinHeight}
                                    />
                                </Col>
                            ))
                        ) : (
                            data.map((item, index) => (
                                <Col lg={4} md={6} xs={12} key={index} className="mb-5">
                                    <DataCard title={item.title} description={item.description} icon={item.icon} listItems={item.listItems} minHeight={cardMinHeight} />
                                </Col>
                            ))
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};


export default DataServicesSection;
