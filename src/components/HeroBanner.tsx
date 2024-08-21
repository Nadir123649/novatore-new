import Image from 'next/image';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
interface HeroBannerProps {
    previewImage?: string;
    bannerHeading: string;
    needsMoreTitle?: boolean;
    pagetitle?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ previewImage, bannerHeading, needsMoreTitle, pagetitle }) => {

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
        <section
            className="hero-banner min-h-[50vh] md:min-h-[100vh] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${previewImage ? previewImage : ""})`,
            }}
        >
            <Container className=' min-h-[50vh] md:min-h-[100vh] flex items-center md:items-end  flex-row justify-start animate-slideRight'>
                <div className="content mb-[0px] md:mb-[50px]">
                    <p className='text-white'>{pagetitle}</p>
                    <h2 className='text-[38px]  md:text-[56px] not-italic font-semibold text-white capitalize'>{bannerHeading}</h2>
                    {needsMoreTitle ?
                        <a href="#contact-us-form" className='learn-btn bg-none rounded-[16px] border-1 border-[#FFFFFF] hover:border-transparent  py-[14px] px-[24px] mt-[26px] transition-all duration-300 hover:bg-[#2776EA]  text-white'>
                            Get In Touch
                        </a> : null
                    }
                </div>
            </Container>
            <div className="hero-contact fixed right-10 bottom-10 cursor-pointer z-50">
                <a href="#contact-us-form" className="relative group">
                    <Image src="/images/lets-chat-icon.png" alt="hero-dots" width={66} height={66} />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                        Lets talk
                    </div>
                </a>
            </div>
        </section>
    );
}

export default HeroBanner;
