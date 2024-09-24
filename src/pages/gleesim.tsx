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
import { angelflowcaseData, gleesimcaseData, gleesimchallengesData, gleesimHeadlines, gleesimoutcomesData, gleesimtechStackImages } from "@/constants/indesx";
import { angelflowtechStackImages } from "@/constants/indesx";
import { angelflowchallengesData, angelflowoutcomesData, angelflowHeadlines } from "@/constants/indesx";

const Gleesim: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Angelflow: Empowering Start-ups and Investors with Connectivity" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading=" Simplifying" spanparrotgreentext={"Global Connectivity"} morebannerHeading={"With A User-Friendly ESIM Platform"} needsMoreTitle={true} previewImage="/images/gleesimherobanner.png" pagetitle="" maxwidth="900px" />
                <HeadlineBanner headlinesData={gleesimHeadlines} />
                <CaseBackground cardLogo={"/images/gleesimlogo.svg"} cardDescription="Gleesim recognized the growing demand for flexible and affordable internet connectivity among travelers. With the rise of remote work, digital nomadism, and international travel, traditional SIM cards often proved cumbersome and expensive."
                    backgroundDescription={"Gleesim approached us with a vision: to revolutionize the way travelers connect to the internet worldwide. Their existing system was cumbersome and lacked a user-friendly interface, hindering their ability to capture a larger share of the travel tech market."} />
                <CaseChallanges cardBanner={"/images/gleesimbanner.png"} challenges={gleesimchallengesData} />
                <TechStack title="Tech Stacks" images={gleesimtechStackImages} />
                <DataServicesSection heading="Solutions" data={gleesimcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/gleesimoutcomesbanner.png"} outcomes={gleesimoutcomesData} />
            </div>
        </Layout>
    );
};

export default Gleesim;
