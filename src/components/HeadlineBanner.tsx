import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

interface HeadlinesDataProps {
    title: string;
    description: string;
    icon: any;
}

interface HeadlineBannerProps {
    headlinesData: HeadlinesDataProps[];
}

const HeadlineBanner: React.FC<HeadlineBannerProps> = ({ headlinesData }) => {
    return (
        <section className='headline-section pt-36 bg-center bg-no-repeat bg-cover my-20'>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <Row>
                            <Col lg={12} md={12} xs={12}>
                                <div className="grid grid-cols-12 gap-4">
                                    {headlinesData.map((data, index) => (
                                        <div
                                            key={index}
                                            className={`col-span-4 gap-4 justify-center flex items-center`}
                                        >
                                            <Image
                                                src={data.icon}
                                                alt="icon"
                                                className='w-full max-w-[100px] max-h-[100px] min-h-[100px]'
                                            />
                                            <div className='flex flex-col w-full'>
                                                <h3 className='font-semibold text-[32px]'>
                                                    {data.title}
                                                </h3>
                                                <p className='font-light text-black mb-0 text-[20px]'>
                                                    {data.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeadlineBanner;
