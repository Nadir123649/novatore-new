import Image from 'next/image';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

interface HeroBannerProps {
    previewImage?: string;
    bannerHeading: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ previewImage, bannerHeading }) => {
    return (
        <section
            className="hero-banner min-h-[50vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${previewImage ? previewImage : ""})`,
            }}
        >
            <Container className=' min-h-[50vh] md:min-h-[80vh] flex items-center md:items-end  flex-row justify-start'>
                <div className="content mb-[0px] md:mb-[80px]">
                    <h2 className='text-[38px]  md:text-[56px] not-italic font-semibold text-white capitalize'>{bannerHeading}</h2>
                </div>
            </Container>
            <div className="hero-contact fixed right-10 bottom-10 cursor-pointer z-50">
                <a href="#contact-us-form">
                    <Image src="/images/lets-chat-icon.png" alt="hero-dots" width={66} height={66} />
                </a>
            </div>
        </section>
    );
}

export default HeroBanner;
