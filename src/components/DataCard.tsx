import React from 'react';
import Image from 'next/image';
import { Bordered, Drop } from '@/utils';

interface DataCardProps {
    title: string;
    description?: string;
    icon: any;
    type?: any;
    listItems?: string[];
    value?: any;
}

const DataCard: React.FC<DataCardProps> = ({ title, description, icon, type, listItems, value }) => {
    return (
        <div className={type ? type : "relative bg-white shadow rounded-[16px] pt-[40px] pb-[10px] px-[24px] max-w-sm mx-auto overflow-hidden min-h-[295px] flex flex-col h-full hover:scale-105 transition ease-in duration-1.5"}>
            <div className="absolute top-0 left-6 w-full h-3 bg-transparent">
                <Image src={Bordered} alt="bordered" layout="fixed" />
            </div>
            <div className="flex flex-col items-start mb-1 gap-[22px]">
                <Image src={icon} alt="icon" className='w-full max-w-[80px] max-h-[60px] min-h-[60px]' />
                <h3 className="text-[22px] font-semibold leading-[24px] text-[#110229] h-[40px] flex justify-center flex-col pr-[50px]">{title}</h3>
            </div>
            <div className={value ? value : "absolute top-[16px] right-[140px] mt-2 mr-3 text-blue-200"}>
                <Image src={Drop} alt="close" layout="fixed" />
            </div>
            <p className="text-[#5D5D5D] text-[16.5px] leading-[20px] font-normal mb-0 mt-2">
                {description}
            </p>
            {listItems && (
                <ul className="mt-4 list-disc pl-5">
                    {listItems.map((item, index) => (
                        <li key={index} className="text-[#2776EA] text-[16px] leading-[20px] font-normal mb-2">
                            <span className='text-[#5D5D5D]'>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DataCard;
