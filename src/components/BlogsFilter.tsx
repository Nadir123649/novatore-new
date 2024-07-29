import React from 'react';
import SelectDropdown from './SelectDropdown';
import { industriesOptions, servicesOptions, sortOptions } from '@/constants/indesx';
import Image from 'next/image';

const BlogsFilter: React.FC = () => {

    return (
        <div className="blogs-filter-container blogs-filter-container flex justify-between items-center">
            <div className="select-container select-container max-w-[120px]">
                <SelectDropdown name="sort" id="sort" options={sortOptions} defaultOption="Sort by" />
            </div>

            <div className="filter-controls filter-controls flex items-center gap-[16px]">
                <div className="input-with-icon flex flex-row gap-2 py-[12px] px-[16px] form-input-input font-lato border-[#969696] border border-solid rounded-[36px] max-w-[260px] min-w-[260px] ">
                    <Image src="/images/search-icon.svg" alt="search-icon" width={24} height={24} />
                    <input type="search" className="form-input-none outline-none border-none  text-[#969696] text-[18px] not-italic leading-normal capitalize font-normal" placeholder="Search for blogs" />
                </div>
                <SelectDropdown name="industries" id="industries" options={industriesOptions} defaultOption="Industries" />
                <SelectDropdown name="services" id="services" options={servicesOptions} defaultOption="Services" />
                <button className="bg-[#2776EA] rounded-[36px] py-[12px] px-[16px]  max-w-[116px] min-w-[116px] font-lato text-white text-[18px] font-normal">Search</button>
            </div>
        </div>
    );
};

export default BlogsFilter;

