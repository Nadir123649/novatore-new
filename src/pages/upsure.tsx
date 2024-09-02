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
import { upsurecaseData } from "@/constants/indesx";
import { upsuretechStackImages } from "@/constants/indesx";
import { upsurechallengesData, upsureoutcomesData, permitPlaceHeadlines } from "@/constants/indesx";

const Upsure: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforebluetext="Upsure –" bannerHeading="Revolutionizing Business Insurance Management for Australian Startups" needsMoreTitle={true} previewImage="/images/upsureherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={permitPlaceHeadlines} />
                <CaseBackground cardLogo={"/images/upsurelogo.svg"} cardDescription="With automated reminders for policy updates, Upsure enables businesses to focus on their growth, confident that their insurance needs are seamlessly managed."
                    backgroundDescription={"Upsure is an insurtech platform designed to simplify business insurance management for startups and growth-stage companies in Australia. The platform provides an online portal that centralizes insurance documentation, contracts, and renewals, making it easier for businesses to manage their insurance needs."} />
                <CaseChallanges cardBanner={"/images/upsurebanner.png"} challenges={upsurechallengesData} />
                <TechStack title="Tech Stacks" images={upsuretechStackImages} />
                <DataServicesSection heading="Solutions" data={upsurecaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/upsureoutcomesbanner.png"} outcomes={upsureoutcomesData} />
            </div>
        </Layout>
    );
};

export default Upsure;
