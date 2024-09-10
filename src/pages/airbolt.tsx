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
import { airboltcaseData, airboltchallengesData, airboltHeadlines, airboltoutcomesData, airboltStackImages, qatarcaseData } from "@/constants/indesx";
import { oneH2Headlines } from "@/constants/indesx";

const AirBolt: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Airbolt" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Innovative GPS-Enabled Lock Solutions: The " airboltgreentext="AirBolt" morebannerHeading="Project Case Study" needsMoreTitle={true} previewImage="/images/airboltherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={airboltHeadlines} />
                <CaseBackground cardLogo={"/images/airboltlogo.svg"} cardDescription="We collaborated with AirBolt to develop the software infrastructure that powers their smart tracking and locking solutions, ensuring seamless integration of GPS technology with advanced security features."
                    backgroundDescription={"AirBolt is a pioneering company that specializes in smart tracking and locking solutions for personal belongings. The company aimed to enhance the security and tracking efficiency of items by incorporating GPS technology with advanced locking mechanisms. "} />
                <CaseChallanges cardBanner={"/images/airboltbanner.png"} challenges={airboltchallengesData} />
                <TechStack title="Tech Stacks" images={airboltStackImages} />
                <DataServicesSection heading="Solutions" data={airboltcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/airboltoutcomesbanner.png"} outcomes={airboltoutcomesData} />
            </div>
        </Layout>
    );
};

export default AirBolt;
