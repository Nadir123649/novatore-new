import React from 'react';
import Image from 'next/image';
import { Bordered, Drop } from '@/utils';
import Link from 'next/link';

interface DataCardProps {
    title: string;
    description?: string;
    icon: any;
    type?: any;
    listItems?: string[];
    value?: any;
    className?: string;
    minHeight?: string;
    viewbutton?: any;
}

const DataCard: React.FC<DataCardProps> = ({ viewbutton, title, description, icon, type, listItems, value, className, minHeight }) => {
    return (
        <div className={type ? type : "relative bg-white shadow rounded-[16px] pt-[40px] pb-[10px] px-[24px] border-1 border-solid border-[#A8CAFC] max-w-sm mx-auto overflow-hidden flex flex-col h-full hover:scale-105 transition ease-in duration-1.5"}
            style={{ minHeight: minHeight || "295px" }}>
            <div className="absolute top-0 left-6 w-full h-3 bg-transparent">
                <Image src={Bordered} alt="bordered" layout="fixed" />
            </div>
            <div className="flex flex-col items-start mb-1 gap-[22px]">
                <Image src={icon} alt="icon" className='w-full max-w-[80px] max-h-[60px] min-h-[60px]' />
                <h3 className="text-[21px] mt-[10px] font-medium leading-[24px] text-[#110229] flex justify-start flex-col pr-[10px]">{title}</h3>
            </div>
            <div className={value ? value : "absolute top-[16px] right-[140px] mt-2 mr-3 text-blue-200"}>
                <Image src={Drop} alt="close" layout="fixed" />
            </div>
            {description && (
                <p className="text-[#5D5D5D] text-[15px] leading-[24px] font-normal mb-0 mt-2">
                    {description}
                </p>
            )}
            {listItems && (
                <ul className="mt-2 list-disc pl-5 ">
                    {listItems.map((item, index) => (
                        <li key={index} className="text-[#2776EA] text-[16px] leading-[30px] font-normal  ">
                            <span className='text-[#5D5D5D]'>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
            {viewbutton && (
                <Link href={viewbutton.Link} target='_blank'  className="text-[#2776EA] text-[16px] leading-[30px] font-normal  border-solid border-[#2776EA] rounded-[16px] cursor-pointer max-w-[120px] w-full h-[40px] flex justify-center items-center apply-btn mb-2">
                    {viewbutton.title}
                </Link>
            )}
        </div>
    );
};

export default DataCard;
