import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import HeadlineBanner from "@/components/HeadlineBanner";
import CaseBackground from "@/components/CaseBackground";
import CaseChallanges from "@/components/CaseChallanges";
import CaseOutcomes from "@/components/CaseOutcomes";
import DataServicesSection from "@/components/DataServicesSection";
import { oneH2caseData, oneH2challengesData, oneH2soutcomesData, qatarcaseData } from "@/constants/indesx";
import { oneH2StackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, oneH2Headlines } from "@/constants/indesx";

const OneH2: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="The" spanskybluetext="OneH2" morebannerHeading="Project for Zero-Emissions Hydrogen Fuel Transportation" needsMoreTitle={true} previewImage="/images/oneh2herobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={oneH2Headlines} />
                <CaseBackground cardLogo={"/images/oneH2logo.svg"} cardDescription="The goal was to develop a comprehensive system that would support the transportation of zero-emission hydrogen fuel, ensuring every molecule of hydrogen reaches its destination efficiently and safely."
                    backgroundDescription={"In an era where the demand for clean energy is skyrocketing, OneH2, a leader in the hydrogen fuel industry, sought to enhance its capabilities to better meet the 24/7 energy demands of its clients. The project was initiated to create a logistics solution that could manage post-to-post operations."} />
                <CaseChallanges cardBanner={"/images/oneH2banner.png"} challenges={oneH2challengesData} />
                <TechStack title="Tech Stacks" images={oneH2StackImages} />
                <DataServicesSection heading="Solutions" data={oneH2caseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/oneH2banneroutcomes.png"} outcomes={oneH2soutcomesData} />

            </div>
        </Layout>
    );
};

export default OneH2;
