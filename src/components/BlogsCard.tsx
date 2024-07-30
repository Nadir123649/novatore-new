import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogsProps {
    id?: number;
    image: any;
    category: string;
    tag: string;
    title: string;
    link: string;
    type?: string;
}

const BlogsCard: React.FC<BlogsProps> = ({ image, category, tag, title, link, type }) => {
    return (
        <div className={type === "card" ? "bg-white shadow-card rounded-[16px] overflow-hidden mr-10" : "bg-white shadow-card rounded-[16px] overflow-hidden"}>
            <div className='relative'>
                <Image src={image} className='w-full min-h-[400px] h-[400px] object-cover rounded-[16px 16px 0px 0px]' alt="Blog" width={400} height={200} />
                <span className="text-center absolute right-[12px] top-[18px] bg-[#000000BA] text-white text-[18px] font-lato font-normal not-italic leading-normal capitalize px-2 py-2 rounded-[10px]">{tag}</span>
                <span className="absolute bottom-[12px] left-[18px]  bg-[#000000BA] text-white text-[18px] font-lato font-normal not-italic leading-normal capitalize px-2 py-2 rounded-[10px]">{category}</span>
            </div>
            <div className="px-6 pb-4 pt-[12px]">
                <h3 className=" font-semibold text-[22px] leading-normal not-italic capitalize mb-2">{title}</h3>
                <Link className="text-[#2776EA] underline text-[18px] not-italic font-normal leading-normal capitalize text-underline" href={link}>Read More</Link>
            </div>
        </div>
    );
};

export default BlogsCard;
