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
import { abimarHeadlinesData, abimarbrokerscaseData } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { abimarbrokerschallengesData, abimarbrokersoutcomesData } from "@/constants/indesx";

const AbimarBrokers: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Developing a Transparent and Ownership-Driven Platform for Abimar Brokers" needsMoreTitle={true} previewImage="/images/brokersherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={abimarHeadlinesData} />
                <CaseBackground cardLogo={"/images/abimarlogo.svg"} cardDescription="By breaking away from conventional models, Abimar Brokers empowers users to build and grow their own businesses."
                    backgroundDescription={"Abimar Brokers is a platform designed to support entrepreneurial clients, brokers, and small teams in the international (re)insurance market. The platform offers a structure that emphasizes transparency, ownership, and opportunity, allowing users to achieve partial ownership of their broking vehicle. The client sought to create a platform that challenges the traditional brokerage models, which often lack alignment of interest and innovation."} />
                <CaseChallanges cardBanner={"/images/abimarbrokersbanner.png"} challenges={abimarbrokerschallengesData} />
                <TechStack title="Tech Stacks" images={qatarStackImages} />
                <DataServicesSection heading="Solutions" data={abimarbrokerscaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/abimarbrokersoutcomesbanner.png"} outcomes={abimarbrokersoutcomesData} />

            </div>
        </Layout>
    );
};

export default AbimarBrokers;
