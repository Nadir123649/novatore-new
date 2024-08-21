import { FC } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
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

    const handleScroll = () => {
        const element = document.getElementById("servicesneed-section");
        if (element) {
            const rect = element.getBoundingClientRect();
            setIsVisible(rect.top <= window.innerHeight * 0.75);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id='servicesneed-section' className='needs-section py-[10px] md:py-20 bg-center bg-no-repeat bg-cover '>
            <Container>
                <Row>
                    <Col lg={8} md={12} xs={12} className={`${isVisible ? "animate-slideRight" : "opacity-0 translate-x-full"
                        } transition-transform duration-500 ease-out needs-banner bg-[#E2EEFF] rounded-[16px] flex flex-col justify-center shadow-sm`}>
                        <div className="needs-content max-w-[680px] pl-[0px] md:pl-[40px] pt-[20px] md:pt-[67px]  pb-[20px] md:pb-[50px] min-h-[470px] md:min-h-[612px] max-h-[612px] h-full flex flex-col justify-center">
                            <h2 className='text-black text-3xl md:text-[32px] capitalize font-semibold  tracking-[0.8px] w-full mb-[24px] leading-tight'>
                                {needsTitle} <span className='text-[#2776EA]'>{needsTitleBlue}</span>
                                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                            </h2>
                            <p className='text-black text-base md:text-[18px] not-italic font-normal leading-6 md:leading-[30px]   text-left md:text-justify'>
                                {needsDescription}
                            </p>
                        </div>
                    </Col>
                    <Col
                        lg={4}
                        md={12}
                        xs={12}
                        className={`${isVisible ? "animate-slideLeft" : "opacity-0 translate-x-full"
                            } transition-transform duration-500 ease-out needs-description rounded-[16px]   `}
                    >
                        <div className="img-box static md:relative right-[135px] top-[42px] md:w-[560px] max-w-full md:max-w-[560px]">
                            <div className='overflow-hidden rounded-[16px]'>
                                <Image
                                    src={NeedsImage}
                                    alt="needs-us"
                                    className='min-h-[400px] md:min-h-[527px] max-h-[400px] md:max-h-[527px] h-full w-full transform transition ease-in-out hover:scale-[1.2] object-cover'
                                    width={450}
                                    height={527}
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
