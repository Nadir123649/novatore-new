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
import { catalystcaseData } from "@/constants/indesx";
import { catalysttechstackimages, catalystHeadlines } from "@/constants/indesx";
import { catalystchallengesData, catalystoutcomesData } from "@/constants/indesx";
const CatalystHousing: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Catalyst Housing" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Innovative Tech for Sustainable Housing:" spanredtext="Catalyst Housing’s " morebannerHeading="Success with Us" needsMoreTitle={true} previewImage="/images/catalystherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={catalystHeadlines} />
                <CaseBackground cardLogo={"/images/catalystlogo.svg"} cardDescription="a mission-driven affordable housing provider living at the intersection of investment, innovation, and impact."
                    backgroundDescription={"Catalyst Housing relentlessly pursue scalable housing solutions and work on three pillars in a Pop Tech ECO System designed to maximize Transparency, Efficiency, and Impact to secure most affordable Housing needs."} />
                <CaseChallanges cardBanner={"/images/catalystbanner.png"} challenges={catalystchallengesData} />
                <TechStack title="Technology Stack" images={catalysttechstackimages} />
                <DataServicesSection heading="Solutions" data={catalystcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/catalystoutcomesbanner.png"} outcomes={catalystoutcomesData} />
            </div>
        </Layout>
    );
};

export default CatalystHousing;
