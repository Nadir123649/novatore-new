import { FC } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

interface ExpertServicesProps {
    needsTitle: string;
    needsTitleBlue: string;
    needsDescription: string;
    NeedsImage: string;
    needsMoreTitle?: string;
}

const ExpertServices: FC<ExpertServicesProps> = ({
    needsTitle,
    needsTitleBlue,
    needsDescription,
    NeedsImage,
    needsMoreTitle
}) => {
    return (
        <section className='needs-section py-[10px] md:py-20 bg-center bg-no-repeat bg-cover'>
            <Container>
                <Row>
                    <Col lg={4} md={12} xs={12} className='needs-banner'>
                        <div className="img-box static md:relative right-[-100px] top-[42px] w-full max-w-full md:max-w-[450px]">
                            <Image
                                src={NeedsImage}
                                alt="needs-us"
                                className='rounded-[16px] min-h-[527px] max-h-[527px] h-full w-full'
                                width={450}
                                height={527}
                            />
                        </div>
                    </Col>
                    <Col lg={8} md={12} xs={12} className='needs-description bg-[#F6FAFF] rounded-[16px] '>
                        <div className="needs-content pl-[0px] md:pl-[140px] pt-[20px] md:pt-[87px] pb-[20px] md:pb-[50px] min-h-[410px] md:min-h-[612px] max-h-[612px] h-full">
                            <h2 className='text-black text-3xl md:text-[40px] capitalize font-semibold max-w-[550px] tracking-[0.8px] w-full mb-[24px]'>
                                {needsTitle} <span className='text-[#2776EA]'>{needsTitleBlue}</span>
                                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                            </h2>
                            <p className='text-black font-lato text-base md:text-[20px] not-italic font-normal leading-[30px] max-w-[622px] text-justify'>
                                {needsDescription}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ExpertServices;

