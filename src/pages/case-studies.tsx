import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import ServicesNeeds from '@/components/ServicesNeeds';
import ExpertServices from '@/components/ExpertServices';
import { NextPage } from 'next';
import { caseStudiesData } from "@/constants/indesx";


const CaseStudies: NextPage = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const filterCategories = ['All', 'Real Estate', 'E-commerce', 'Crypto', 'Sports', 'Health', 'Retail', 'Insurance', 'Social'];

    const handleFilterClick = (category: string) => {
        setActiveFilter(category);
    };

    const filteredCaseStudies = activeFilter === 'All'
        ? caseStudiesData
        : caseStudiesData.filter(caseStudy => caseStudy.category === activeFilter);

    return (
        <Layout showContactForm={true} title="Novatore Solutions - About" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Case Studies" previewImage="/images/casestudiesbanner.png" />


            <div className="flex justify-start gap-3 py-8 px-44">
                {filterCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleFilterClick(category)}
                        className={`px-[24px] py-[16px] rounded-2xl hover:bg-[#2776ea] hover:text-[#FFFFFF]  text-[#2776ea] border-1 border-[#2776ea]  ${activeFilter === category ? 'bg-[#2776ea] text-white' : 'text-[#2776ea]'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>


            <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-8 px-4">
                {filteredCaseStudies.map((caseStudy, index) => (
                    <div key={index}>
                        {caseStudy.component}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default CaseStudies;
