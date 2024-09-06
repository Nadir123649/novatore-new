import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import urlFor from "@/helper/imageUrl";
import { FaArrowRight } from "react-icons/fa";

interface BlogsProps {
    id?: number;
    image: any;
    subtitle: string;
    description?: string;
    title: string;
    type?: string;
}
const truncateText = (text: string, wordLimit: number) => {
    const wordsArray = text.split(" ");
    if (wordsArray.length > wordLimit) {
        return wordsArray.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
};

const BlogsCard: React.FC<BlogsProps> = ({ image, subtitle, title, type, description }) => {
    return (
        <div className={`bg-white shadow-card blog-card rounded-[16px] overflow-hidden mr-8 my-2 group ${type === "card" ? "max-w-md w-full mr-0" : ""}`}>
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
                <h3 className="font-semibold text-[22px] leading-normal not-italic capitalize mb-2 text-black">
                    {truncateText(title, 11)}
                </h3>
                <p className="max-h-0 group-hover:max-h-[200px]  transition-all duration-300 ease-in-out overflow-hidden text-[#1B232E] ">
                    {truncateText(description || '', 10)}
                </p>
            </div>
            <Link href='/' className="text-[#2776EA] absolute bottom-[19px] left-[20px] underline text-[16px] flex flex-row items-center gap-2 not-italic font-normal leading-normal ">Read More <FaArrowRight size={16} className='text-[#2776EA]' /></Link>
        </div>
    );
};

export default BlogsCard;
