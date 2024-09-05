import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import urlFor from "@/helper/imageUrl";
import { FaArrowRight } from "react-icons/fa";

interface BlogsProps {
    id?: number;
    image: any;
    subtitle: string;
    title: string;
    type?: string;
}

const BlogsCard: React.FC<BlogsProps> = ({ image, subtitle, title, type }) => {
    return (
        <div className={`bg-white shadow-card blog-card rounded-[16px] overflow-hidden mr-8 my-2 group ${type === "card" ? "" : ""}`}>
            <div className="relative overflow-hidden blog-image">
                <Image
                    src={urlFor(image)?.url()}
                    className='object-cover w-full h-full rounded-t-[16px] '
                    alt="Blog"
                    width={300}
                    height={500}
                />
            </div>
            <div className="blog-content px-6 pb-4 pt-[2px]">
                <h5 className="text-[#1B232E] text-[16px] font-normal not-italic leading-normal mt-1 ">{subtitle}</h5>
                <h3 className="font-semibold text-[22px] leading-normal not-italic capitalize mb-2 text-black">{title}</h3>
                <p className="max-h-0 group-hover:max-h-[200px]  transition-all duration-300 ease-in-out overflow-hidden text-[#1B232E]">
                    Novatore is a company that really values its employees. The inclusive culture and emphasis on creativity make it a fantastic place to work.
                </p>
            </div>
            <Link href='/' className="text-[#2776EA] absolute bottom-[19px] left-[20px] underline text-[16px] flex flex-row items-center gap-2 not-italic font-normal leading-normal ">Read More <FaArrowRight size={16} className='text-[#2776EA]' /></Link>
        </div>
    );
};

export default BlogsCard;
