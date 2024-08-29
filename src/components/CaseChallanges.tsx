import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';


interface ChallengeItem {
    title: string;
    description: string;
}
interface CaseChallangesProps {
    cardBanner?: any;
    challenges: ChallengeItem[];
}

const CaseChallanges: FC<CaseChallangesProps> = ({

    cardBanner,
    challenges
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
                            <h1 className='text-[#1B232E] text-[32px] font-semibold' >Challenges</h1>
                            <Image src={cardBanner} alt="cardLogo" width={543} height={409} />

                        </div>
                    </Col>
                    <Col
                        lg={6}
                        md={12}
                        xs={12}
                        className='flex flex-col justify-end'
                    >

                        <ul className=''>
                            {challenges.map((challenge, index) => (
                                <li key={index} className='list-disc pt-2 marker:text-[#2776EA] marker:text-[20px]'>
                                    <h1 className='font-medium text-[22px] text-[#110229]'>{challenge.title}</h1>
                                    <p className='text-[#5D5D5D] text-lg'>{challenge.description}</p>
                                </li>
                            ))}
                        </ul>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CaseChallanges;
