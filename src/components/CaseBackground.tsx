import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

interface CaseBackgroundProps {
    backgroundDescription?: string;
    cardDescription?: string;
    cardLogo?: any;
}

const CaseBackground: FC<CaseBackgroundProps> = ({
    backgroundDescription,
    cardDescription,
    cardLogo
}) => {




    return (
        <section id='' className=' py-[10px] md:pt-2  md:pb-28'>
            <Container>
                <Row className='gap-y-8'>
                    <Col
                        lg={6}
                        md={12}
                        xs={12}
                        className=' flex  justify-center'
                    >
                        <div className='bg-[#E4F4FF] max-w-[500px] min-h-[280px] rounded-lg p-8 flex justify-center flex-col items-center  text-center'>
                            <Image src={cardLogo} alt="cardLogo" width={166} height={62} />
                            <p className='text-[#5D5D5D] leading-5 pt-[15px] '>{cardDescription}</p>
                        </div>
                    </Col>
                    <Col
                        lg={6}
                        md={12}
                        xs={12}
                        className='flex flex-col justify-center '
                    >
                        <div className='flex flex-col justify-center '>
                            <h1 className='text-[#1B232E] text-[32px] font-semibold' >Background</h1>
                            <p className='text-[#5D5D5D] text-[18px] leading-8 pt-[10px] text-justify md:text-left'>{backgroundDescription}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CaseBackground;
