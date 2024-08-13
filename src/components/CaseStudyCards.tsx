import Image from 'next/image';
import React from 'react';

interface CaseStudyProps {
    id?: any;
    banner?: any;
    backgroundimg?: any;
    logo: string;
    description: string;
    color?: any
}

const CaseStudyCards: React.FC<CaseStudyProps> = ({ banner, backgroundimg, description, logo, color }) => {
    return (
        <div className="study-container relative mr-10 study-box cursor-pointer h-[394px] rounded-2xl max-w-[482px]  w-full transition-all duration-300">
            <Image src={banner} alt="service" className=' rounded-2xl h-full w-full object-cover' />
            <div className="overlay" style={{ backgroundImage: `url(${backgroundimg.src})` }}>
                <div className="text d-flex flex-col  text-2xl  gap-4">
                    <Image src={logo} alt="service" />
                    <p className='text-2xl h-[170px]'>{description}</p>
                    <button className='bg-[#FFFFFFCC] rounded-lg px-2 py-1 max-w-[120px]' style={{ color: color }} >Read more</button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCards;
