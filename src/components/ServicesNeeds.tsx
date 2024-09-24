import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { viewport } from 'next-sanity/studio';
import Link from 'next/link';

interface ServicesNeedsProps {
    needsTitle?: string;
    needsTitleBlue?: string;
    needsDescription: string;
    needsmoreDescription?: string;
    NeedsImage: string;
    needsMoreTitle?: string;
    viewbutton?: any;
    casestudyicon?: any;
    viewlogo?: any;
    link?: string;
    id?: string;
}

const ServicesNeeds: FC<ServicesNeedsProps> = ({
    needsTitle,
    needsTitleBlue,
    needsDescription,
    NeedsImage,
    needsMoreTitle,
    viewbutton,
    casestudyicon,
    needsmoreDescription,
    link = '#',
    id,

    viewlogo
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
        <section id={id || 'servicesneed-section'} className='needs-section  py-[10px] md:py-20 px-2 md:px-0 bg-center bg-no-repeat bg-cover overflow-x-hidden' >
            <Container>
                <Row className=' flex flex-col-reverse md:flex-row  '>
                    <Col
                        lg={8}
                        md={12}
                        xs={12}
                        className={` ${isVisible ? "animate-slideRight" : "opacity-0 translate-x-full"} transition-transform duration-500 ease-out needs-banner bg-[#E2EEFF] min-h-[420px] md:min-h-[554px] flex items-center max-h-[554px] h-full rounded-[16px] shadow-sm mb-[15px] md:mb-[0px]`}
                    >
                        <div className="service-needs-content max-w-[700px] flex flex-col justify-center px-[0px] md:px-[44px]">
                            {viewbutton && <Image src={casestudyicon} alt="Needs Image" className="pb-3" width={105} height={25} />}
                            <h2 className='text-black text-2xl md:text-[32px] capitalize font-semibold tracking-[0.8px] w-full mb-[24px] leading-tight'>
                                {needsTitle} <span className='text-[#2776EA]'>{needsTitleBlue}</span>
                                {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
                            </h2>
                            <p className='text-black text-base md:text-[18px] not-italic font-normal mb-0 leading-6 md:leading-[30px] text-justify'>
                                {needsDescription}
                            </p>
                            <p className='text-black text-base md:text-[18px] not-italic font-normal mb-0 leading-6 md:leading-[30px] text-justify'>
                                {needsmoreDescription}
                            </p>
                            {viewbutton &&
                                <Link href={link}>
                                    <button
                                        className="mt-4 max-w-[160px] rounded-[16px] px-[24px] py-[16px]  text-[#2776EA] border-1 border-[#2776EA]  text-[18px] transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent "
                                    >
                                        View  More
                                    </button>
                                </Link>}

                        </div>
                    </Col>
                    <Col
                        lg={4}
                        md={12}
                        xs={12}
                        className={`${isVisible ? "animate-slideLeft" : "opacity-0 translate-x-full"} flex needs-img-box  justify-center transition-transform duration-500 ease-out needs-description rounded-[16px] relative right-[50px] top-[50px]  `}
                    >
                        {/* <div className="img-box  z-30  max-w-[365px] md:max-w-[560px] min-w-[365px] md:min-w-[560px] w-full min-h-[253px] md:min-h-[453px]">
                            <div className='overflow-hidden rounded-[16px] max-w-[365px] md:max-w-[560px] w-full min-h-[253px] md:min-h-[453px] h-[253px] md:h-[453px]'>
                                <Image
                                    src={NeedsImage}
                                    alt="needs-us"
                                    className='w-full service-imgbox transform transition max-w-[365px] md:max-w-[560px] object-cover min-h-[253px] md:min-h-[453px]  h-[253px] md:h-[453px] ease-in-out hover:scale-[1.2]  rounded-[16px]'
                                    width={560}
                                    height={453}
                                />
                            </div>
                        </div> */}
                        <div className="img-box  z-30  max-w-[365px] md:max-w-[560px] min-w-[365px] md:min-w-[560px] w-full min-h-[253px] md:min-h-[453px]   overflow-hidden rounded-[16px] h-[253px] md:h-[453px]">
                            <Image
                                src={NeedsImage}
                                alt="needs-us"
                                className='w-full service-imgbox transform transition max-w-[365px] md:max-w-[560px] object-cover min-h-[253px] md:min-h-[453px]  h-[253px] md:h-[453px] ease-in-out hover:scale-[1.2]  rounded-[16px]'
                                width={560}
                                height={453}
                            />

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServicesNeeds;
