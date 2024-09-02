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
import { footeducationcaseData } from "@/constants/indesx";
import { footeducationtechStackImages } from "@/constants/indesx";
import { footeducationchallengesData, footeducationoutcomesData, angelflowHeadlines } from "@/constants/indesx";

const FootEducation: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforegreentext="FootEducation –" bannerHeading="Building a Comprehensive Educational Platform for Foot and Ankle Care" needsMoreTitle={true} previewImage="/images/footeducationherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={angelflowHeadlines} />
                <CaseBackground cardLogo={"/images/footeducationlogo.svg"} cardDescription="This project significantly enhances FootEducation's ability to provide accurate, expert-driven information on foot and ankle health, making it more accessible."
                    backgroundDescription={"FootEducation is a specialized platform dedicated to providing accurate, accessible, and detailed information about foot and ankle conditions, treatments, and surgeries. The website is managed by a board of orthopedic surgeons who aim to educate both patients and healthcare professionals through written and visual content. "} />
                <CaseChallanges cardBanner={"/images/footeducationbanner.png"} challenges={footeducationchallengesData} />
                <TechStack title="Tech Stacks" images={footeducationtechStackImages} />
                <DataServicesSection heading="Solutions" data={footeducationcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/footeducationoutcomesbanner.png"} outcomes={footeducationoutcomesData} />

            </div>
        </Layout>
    );
};

export default FootEducation;
