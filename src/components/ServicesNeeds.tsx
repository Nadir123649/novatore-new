import { FC } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

interface ServicesNeedsProps {
    needsTitle: string;
    needsTitleBlue: string;
    needsDescription: string;
    NeedsImage: string;
    needsMoreTitle?: string;
}

const ServicesNeeds: FC<ServicesNeedsProps> = ({
    needsTitle,
    needsTitleBlue,
    needsDescription,
    NeedsImage,
    needsMoreTitle
}) => {
    return (
        <section className='needs-section py-20 bg-center bg-no-repeat bg-cover'>
            <Container>
                <Row>
                    <Col lg={8} md={12} xs={12} className='bg-[#F6FAFF] rounded-[16px]'>
                        <div className="needs-content pl-[0px] md:pl-[40px] pt-[67px] pb-[50px] min-h-[612px] max-h-[612px] h-full">
                            <h2 className='text-black text-[40px] capitalize font-semibold max-w-[530px] tracking-[0.8px] w-full mb-[24px]'>
                                {needsTitle} <span className='text-[#2776EA]'>{needsTitleBlue}</span>
                                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                            </h2>
                            <p className='text-black font-lato text-[20px] not-italic font-normal leading-[30px] max-w-[522px] text-justify'>
                                {needsDescription}
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                        <div className="img-box static md:relative left-[-100px] top-[42px] w-full  max-w-full md:max-w-[450px]">
                            <Image
                                src={NeedsImage}
                                alt="needs-us"
                                className='rounded-[16px] min-h-[527px] max-h-[527px] h-full w-full'
                                width={450}
                                height={527}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServicesNeeds;
