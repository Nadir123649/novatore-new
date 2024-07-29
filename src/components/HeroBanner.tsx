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
            className="hero-banner min-h-[80vh] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${previewImage ? previewImage : ""})`,
            }}
        >
            <Container className='min-h-[80vh] flex items-end flex-row justify-start'>
                <div className="content mb-[80px]">
                    <h2 className='text-[56px] not-italic font-semibold text-white capitalize'>{bannerHeading}</h2>
                </div>
            </Container>
        </section>
    );
}

export default HeroBanner;
