import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DataCard from './DataCard';

interface DataServicesSectionProps {
    heading: string;
    headingBlue: string;
    data: {
        title: string;
        description: string;
        icon: string;
    }[];
}

const DataServicesSection: React.FC<DataServicesSectionProps> = ({ heading, headingBlue, data }) => {
    return (
        <section className="pb-20 pt-10">
            <h2 className='text-[40px] font-bold not-italic leading-normal capitalize text-center mb-[60px] text-black'>
                {heading} <span className='text-[#2776EA]'> {headingBlue}</span>
            </h2>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col lg={4} md={6} xs={12} key={index} className="mb-4">
                            <DataCard title={item.title} description={item.description} icon={item.icon} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default DataServicesSection;
