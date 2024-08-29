import Image from 'next/image';
import React from 'react';

interface TechStackProps {
    title?: string;
    images?: string[];
}

const TechStack: React.FC<TechStackProps> = ({ title, images = [] }) => {
    return (
        <section className=' py-10 md:py-20 '>
            <div className="container">
                <h1 className="text-center text-[#313232] text-[40px] font-bold capitalize not-italic leading-[55px] max-w-[590px] mx-auto mb-[40px]">
                    {title}
                </h1>
                <div className="flex flex-wrap justify-center mb-[40px]">
                    {images.map((image, index) => (
                        <Image key={index} src={image} alt={`techstack`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;



