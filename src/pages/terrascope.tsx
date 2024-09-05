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
import { qatarcaseData, terrascopecaseData, terrascopechallengesData, terrascopeHeadlines, terrascopeoutcomesData, terrascopeStackImages } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, oneH2Headlines } from "@/constants/indesx";

const Terrascope: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="The" spanparrottext="terrascope" morebannerHeading="Project for Rural Property Management" needsMoreTitle={true} previewImage="/images/terrascopeherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={terrascopeHeadlines} />
                <CaseBackground cardLogo={"/images/terrascopelogo.svg"} cardDescription="At Novatore Solutions, we collaborated closely with Terrascope to develop their innovative platform, ensuring that the AI-driven geospatial insights were seamlessly integrated into a user-friendly interface."
                    backgroundDescription={"Terrascope is a pioneering AI-powered platform designed to transform the way rural properties are discovered and managed. Our client envisioned a solution that would harness the power of AI to provide detailed geospatial insights."} />
                <CaseChallanges cardBanner={"/images/terrascopebanner.png"} challenges={terrascopechallengesData} />
                <TechStack title="Tech Stacks" images={terrascopeStackImages} />
                <DataServicesSection heading="Solutions" data={terrascopecaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/terrascopeoutcomesbanner.png"} outcomes={terrascopeoutcomesData} />
            </div>
        </Layout>
    );
};

export default Terrascope;
