import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from 'next/navigation'
interface ServicesProps {
    id?: any;
    title: string;
    description: string;
    link: string;
    backgroundimg?: string;
}

const ServicesCard: React.FC<ServicesProps> = ({ backgroundimg, title, description, link }) => {
    const router = useRouter();
    const handleNavigation = (url: string) => {
        router.push(url);
    };

    return (
        <div className="services-box relative ml-0 mr-0 md:mr-10 md:ml-2 cursor-pointer min-h-[375px] md:min-h-[490px]  w-full max-w-full md:max-w-[330px] rounded-[16px] border border-solid border-[#ECECEC] bg-[#F6F6F6] p-[14px] md:p-[24px] transition-transform ease-in-out duration-300 hover:shadow-sm group">
            <a onClick={() => handleNavigation(link)} className="text-black no-underline">
                <div
                    className={`heading-container relative overflow-hidden p-2 md:p-3 rounded-2xl flex justify-center items-center text-white transition-all duration-300 ease-in-out`}
                    style={{
                        height: '200px',
                        backgroundImage: `url(${backgroundimg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='heading-container-layer flex justify-center items-end pb-[20px] bg-[rgba(0,_0,_0,_0.35)] group-hover:bg-[rgba(0,_0,_0,_0.2)]  duration-300 ease-in-out'>
                        <h3 className="font-bold mb-0 text-[22px] md:text-[26px] group-hover:text-[#F9D00D] text-center transition-transform duration-300 ease-in-out">
                            {title}
                        </h3>
                    </div>
                </div>
                <p className="my-4 transition-transform duration-300 ease-in-out  text-[18px] md:text-[24px] font-medium">
                    {description}
                </p>
                <div className="text-[40px] md:text-[60px] mt-3 md:mt-0 absolute bottom-[20px] right-[20px] arrow-upright">
                    <GoArrowUpRight className='mt-4 md:mt-0' />
                </div>
            </a>
        </div>
    );
};

export default ServicesCard;
