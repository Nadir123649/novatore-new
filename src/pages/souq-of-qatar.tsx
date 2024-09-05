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
import { qatarcaseData } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, souqofqatarHeadlines } from "@/constants/indesx";

const SouqOfQatar: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Building Qatar's First Price Comparison Platform" spanredtext=" - Souq of Qatar" needsMoreTitle={true} previewImage="/images/qatarherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={souqofqatarHeadlines} />
                <CaseBackground cardLogo={"/images/qatarlogo.svg"} cardDescription="By facilitating informed purchasing decisions, Souq of Qatar plays a crucial role in driving the adoption of e-commerce in the region, contributing to the overall growth of the digital economy."
                    backgroundDescription={"Souq of Qatar is an e-commerce platform designed to serve as Qatar's first price comparison website. The client aimed to create a digital marketplace where users could compare products across various categories, ensuring they make well-informed purchasing decisions. The platform was intended to cater to the needs of both buyers and sellers in Qatar’s growing market."} />
                <CaseChallanges cardBanner={"/images/souqofQatarbanner.png"} challenges={souqofQatarchallengesData} />
                <TechStack title="Tech Stacks" images={qatarStackImages} />
                <DataServicesSection heading="Solutions" data={qatarcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/souqofQataroutcomesbanner.png"} outcomes={souqofQataroutcomesData} />

            </div>
        </Layout>
    );
};

export default SouqOfQatar;
