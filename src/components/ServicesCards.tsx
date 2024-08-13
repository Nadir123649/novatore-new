import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

interface ServicesProps {
    id?: any;
    title: string;
    description: string;
    link: string;
    backgroundimg?: string;
}

const ServicesCard: React.FC<ServicesProps> = ({ backgroundimg, title, description, link, id }) => {

    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <div className="services-box relative mr-10 cursor-pointer min-h-[375px] md:min-h-[490px] max-w-[330px] rounded-[16px] border border-solid border-[#ECECEC] bg-[#F6F6F6] p-[24px] transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setHoverIndex(id)}
            onMouseLeave={() => setHoverIndex(null)}
        >
            <a href={link} className="text-black">
                <div className={`heading-container relative overflow-hidden bg-[#1B232E] p-3 rounded-2xl text-white transition-all duration-300 ease-in-out`}
                    style={{
                        height: hoverIndex === id ? "200px" : "initial",
                        backgroundImage: hoverIndex === id ? `url(${backgroundimg})` : "none",
                        backgroundSize: hoverIndex === id ? "cover" : "initial",
                        backgroundPosition: hoverIndex === id ? "center" : "initial",
                    }}>
                    <h3 className="font-bold mb-2 text-xl  text-center transition-transform duration-300 ease-in-out">
                        {title}
                    </h3>
                </div>
                <p className="my-4 transition-transform duration-300 ease-in-out text-[22px] md:text-[24px] font-medium">
                    {description}
                </p>
                <div className="text-[60px] absolute bottom-[20px] right-[20px] arrow-upright">
                    <GoArrowUpRight />
                </div>
            </a>
        </div>
    );
};

export default ServicesCard;