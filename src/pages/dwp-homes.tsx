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
import { dwpcaseData, dwpchallengesData, dwpHeadlines, dwpHomesStackImages, dwpoutcomesData, qatarcaseData } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, oneH2Headlines } from "@/constants/indesx";

const DWPHomes: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner spanskybluetext="DWP" morebannerHeading="Group's Strategic Partnership with Dawlance" needsMoreTitle={true} previewImage="/images/dwpherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={dwpHeadlines} />
                <CaseBackground cardLogo={"/images/dwplogo.svg"} cardDescription="Novatore Solutions collaborated with Dawlance to develop a robust software platform that optimized their digital infrastructure, enabling seamless operations and enhanced customer interactions."
                    backgroundDescription={"Dawlance, a leading brand in the consumer electronics industry, was looking to enhance its digital infrastructure to support its growing business needs. Dawlance needed a software solution that could streamline its operations and maintain its competitive edge."} />
                <CaseChallanges cardBanner={"/images/dwpbanner.png"} challenges={dwpchallengesData} />
                <TechStack title="Tech Stacks" images={dwpHomesStackImages} />
                <DataServicesSection heading="Solutions" data={dwpcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/dwpoutcomesbanner.png"} outcomes={dwpoutcomesData} />
            </div>
        </Layout>
    );
};

export default DWPHomes;
