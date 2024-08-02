import { FC } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
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

    // animation state on view 
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("needs-section");
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
        <section className='needs-section py-[10px] md:py-20 bg-center bg-no-repeat bg-cover ' id='needs-section'>
            <Container>
                <Row>
                    <Col lg={4} md={12} xs={12} className={`${isVisible ? "animate-slideRight" : "opacity-0 translate-x-full"
                        } transition-transform duration-500 ease-out needs-banner z-10`}>
                        <div className="img-box static md:relative right-[-100px] top-[42px] w-full max-w-full md:max-w-[450px]">
                            <Image
                                src={NeedsImage}
                                alt="needs-us"
                                className='rounded-[16px] min-h-[400px] md:min-h-[527px] max-h-[400px] md:max-h-[527px] h-full w-full'
                                width={450}
                                height={527}
                            />
                        </div>
                    </Col>
                    
                    <Col lg={8} md={12} xs={12} className={`${isVisible ? "animate-slideLeft" : "opacity-0 translate-x-full"
                        } transition-transform duration-500 ease-out needs-description rounded-[16px]  bg-[#F6FAFF]`} >
                        <div className="needs-content pl-[0px] md:pl-[140px] pt-[20px] md:pt-[87px] pb-[20px] md:pb-[50px] min-h-[410px] md:min-h-[612px] max-h-[612px] h-full">
                            <h2 className='text-black text-3xl md:text-[40px] capitalize font-semibold max-w-[550px] tracking-[0.8px] w-full mb-[24px]'>
                                {needsTitle} <span className='text-[#2776EA]'>{needsTitleBlue}</span>
                                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                            </h2>
                            <p className='text-black font-lato text-base md:text-[20px] not-italic font-normal leading-6 md:leading-[30px] max-w-[622px] text-left md:text-justify'>
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

