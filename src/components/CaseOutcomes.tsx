import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';


interface OutcomesItem {
    title: string;
    description: string;
}
interface CaseOutcomesProps {
    outcomesBanner?: any;
    outcomes: OutcomesItem[];
}

const CaseOutcomes: FC<CaseOutcomesProps> = ({

    outcomesBanner,
    outcomes
}) => {




    return (
        <section id='' className=' py-[10px] md:py-20  bg-[#F0F9FF]'>
            <Container>
                <Row className=''>
                    <Col
                        lg={6}
                        md={12}
                        xs={12}
                        className=' flex  justify-center'
                    >
                        <div className=''>
                            <h1 className='text-[#1B232E] text-[32px] font-semibold' >Outcomes</h1>
                            <Image src={outcomesBanner} alt="cardLogo" width={543} height={409} />

                        </div>
                    </Col>
                    <Col
                        lg={6}
                        md={12}
                        xs={12}
                        className='flex flex-col justify-center'
                    >

                        <ul className='outcomes-list relative'>
                            {outcomes.map((outcome, index) => (
                                <li key={index} className='pt-2 '>
                                    <h1 className='font-medium text-[22px] text-[#110229]'>{outcome.title}</h1>
                                    <p className='text-[#5D5D5D] text-lg'>{outcome.description}</p>
                                </li>
                            ))}
                        </ul>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CaseOutcomes;
