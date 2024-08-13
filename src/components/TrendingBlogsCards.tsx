import { Profile } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

interface TrendingBlogsProps {
    id?: any;
    banner: any;
    user: string;
    title: string;
    description: string;
    link: string;
    date: string;
}

const TrendingBlogsCards: React.FC<TrendingBlogsProps> = ({ banner, title, description, user, link, date }) => {
    return (
        <div className="services-box flex flex-col relative cursor-pointer h-[550px] max-w-[390px] rounded-[16px] bg-[#F6F6F6] p-0 transition-all duration-300 hover:shadow-lg">
            <Image src={banner} alt="service" className="w-full h-[280px] object-cover rounded-tl-[16px] rounded-tr-[16px] p-0" />
            <div className="px-[24px] py-[20px] card-group">
                <div className="d-flex gap-3 items-center">
                    <div className="bg-[#2776EA] rounded-2xl text-white px-3 py-2 min-w-[140px] text-xs text-center">{date}</div>
                    <Image src={Profile} alt="profile" width={16} height={16} />
                    <p className="text-[#6A6A6A] text-sm m-0">{user}</p>
                </div>
                <h1 className="text-[22.4px] font-extrabold pt-3">{title}</h1>
                <p className="text-[#6A6A6A] max-w-[269px] h-[70px]">
                    {description}
                </p>
                <div className="mx-auto pt-2 mt-auto">
                    <Link className="d-flex items-center gap-2 justify-center text-[#31333E] font-bold text-center" href={link}>
                        Read More
                        <div className="bg-[#2776EA] w-[16px] h-[16px] rounded-full d-flex justify-center items-center mt-1 text-white text-[10px]">
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingBlogsCards;
