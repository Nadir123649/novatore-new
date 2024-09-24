import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import { NextPage } from 'next';
import { caseStudiesData } from "@/constants/indesx";
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const CaseStudies: NextPage = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const filterCategories = ['All', 'Real Estate', 'E-commerce', 'Crypto', 'Sports', 'Health', 'Retail', 'Insurance', 'Social'];

    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {

        if (category && filterCategories.includes(category as string)) {
            setActiveFilter(category as string);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);


    const handleFilterClick = (category: string) => {
        setActiveFilter(category);
        router.push(`/case-studies?category=${category}`, undefined, { shallow: true });
    };


    const filteredCaseStudies = activeFilter === 'All'
        ? caseStudiesData
        : caseStudiesData.filter(caseStudy => caseStudy.category === activeFilter);

    return (
        <Layout showContactForm={true} title="Explore Novatore Solutions’ Success Stories Across Industries" description="Discover how we have delivered impactful software solutions, from real estate and retail to healthcare and beyond, and see how we can drive value for your business.">
            <HeroBanner bannerHeading="Case Studies" previewImage="/images/casestudiesbanner.png" />


            {/* <div className="flex  flex-wrap justify-start gap-3 py-8 px-44">
                {filterCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleFilterClick(category)}
                        className={`px-[24px] py-[16px] rounded-2xl hover:bg-[#2776ea] hover:text-[#FFFFFF]  text-[#2776ea] border-1 border-[#2776ea]  ${activeFilter === category ? 'bg-[#2776ea] text-white' : 'text-[#2776ea]'}`}
                    >
                        {category}
                    </button>
                ))}
            </div> */}
            <div className="flex flex-wrap justify-start gap-3 py-[16px] lg:py-[32px]  px-[24px] lg:px-[18rem]">
                {filterCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleFilterClick(category)}
                        className={`px-[16px] py-[8px]  lg:px-[28px] lg:py-[18px] rounded-2xl hover:bg-[#2776ea] hover:text-[#FFFFFF] text-[#2776ea] border border-[#2776ea] ${activeFilter === category ? 'bg-[#2776ea] text-white' : 'text-[#2776ea]'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>



            <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-0 lg:gap-8 px-4">
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
