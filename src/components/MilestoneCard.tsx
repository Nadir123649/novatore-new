import Image from 'next/image';
import React from 'react';

interface MilestoneCardProps {
    title: string;
    description: string;
    icon: string;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ title, description, icon }) => {
    return (
        <div
            className="milestone-card max-w-[390px] min-w-[390px] w-full h-full flex flex-col gap-2 justify-center text-center items-center">
            <div className="icon-wrapper mb-4  mx-auto mx-w-[65px] min-h-[65px]">
                <Image src={icon} alt={title} width={65} height={65} />
            </div>
            <h3 className="text-[26px] not-italic  leading-normal font-semibold mb-2">{title}</h3>
            <p className="text-[18px] font-lato font-normal leading-normal text-black max-w-[236px] mx-auto">{description}</p>
        </div>
    );
}

export default MilestoneCard;
