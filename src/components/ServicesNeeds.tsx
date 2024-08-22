import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

interface ServicesNeedsProps {
    needsTitle?: string;
    needsTitleBlue?: string;
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

    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("servicesneed-section");
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
        <section id='servicesneed-section' className='needs-section py-[10px] md:py-20 bg-center bg-no-repeat bg-cover'>
            <Container>
                <Row className='relative'>
                    <Col
                        lg={8}
                        md={12}
                        xs={12}
                        className={` ${isVisible ? "animate-slideRight" : "opacity-0 translate-x-full"} transition-transform duration-500 ease-out needs-banner bg-[#E2EEFF] min-h-[554px] flex items-center max-h-[554px] h-full rounded-[16px] shadow-sm`}
                    >
                        <div className="needs-content max-w-[700px] flex flex-col justify-center px-[44px]">
                            <h2 className='text-black text-[32px] md:text-[32px] capitalize font-semibold tracking-[0.8px] w-full mb-[24px] leading-tight'>
                                {needsTitle} <span className='text-[#2776EA]'>{needsTitleBlue}</span>
                                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                            </h2>
                            <p className='text-black text-base md:text-[18px] not-italic font-normal mb-0 leading-6 md:leading-[30px] text-left md:text-justify'>
                                {needsDescription}
                            </p>
                        </div>
                    </Col>
                    <Col
                        lg={4}
                        md={12}
                        xs={12}
                        className={`${isVisible ? "animate-slideLeft" : "opacity-0 translate-x-full"} transition-transform duration-500 ease-out needs-description rounded-[16px] relative`}
                    >
                        <div className="img-box static md:absolute right-[0px] top-[50px] z-30 service-imgbox max-w-[560px] min-w-[560px] w-full min-h-[453px]">
                            <div className='overflow-hidden rounded-[16px] max-w-[560px] w-full min-h-[453px] h-[453px]'>
                                <Image
                                    src={NeedsImage}
                                    alt="needs-us"
                                    className='w-full transform transition max-w-[560px] object-cover min-h-[453px] h-[453px] ease-in-out hover:scale-[1.2]  rounded-[16px]'
                                    width={560}
                                    height={453}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServicesNeeds;
