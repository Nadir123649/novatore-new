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
                        } transition-transform duration-500 ease-out needs-banner bg-[#F6FAFF] rounded-[16px] flex flex-col justify-center`}>
                        <div className="needs-content pl-[0px] md:pl-[40px] pt-[20px] md:pt-[67px]  pb-[20px] md:pb-[50px] min-h-[470px] md:min-h-[612px] max-h-[612px] h-full flex flex-col justify-center">
                            <h2 className='text-black text-3xl md:text-[40px] capitalize font-semibold max-w-[580px] tracking-[0.8px] w-full mb-[24px] leading-tight'>
                                {needsTitle} <span className='text-[#2776EA]'>{needsTitleBlue}</span>
                                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                            </h2>
                            <p className='text-black text-base md:text-[20px] not-italic font-normal leading-6 md:leading-[30px] max-w-[522px]  text-left md:text-justify'>
                                {needsDescription}
                            </p>
                        </div>
                    </Col>
                    <Col
                        lg={4}
                        md={12}
                        xs={12}
                        className={`${isVisible ? "animate-slideLeft" : "opacity-0 translate-x-full"
                            } transition-transform duration-500 ease-out needs-description rounded-[16px] `}
                    >
                        <div className="img-box static md:relative left-[-100px] top-[42px] w-full max-w-full md:max-w-[450px]">
                            <div className='overflow-hidden rounded-[16px]'>
                                <Image
                                    src={NeedsImage}
                                    alt="needs-us"
                                    className='min-h-[400px] md:min-h-[527px] max-h-[400px] md:max-h-[527px] h-full w-full transform transition ease-in-out duration-300 hover:scale-[1.2]'
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
