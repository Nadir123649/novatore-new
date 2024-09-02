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
import { juggernautcaseData } from "@/constants/indesx";
import { juggernauttechStackImages } from "@/constants/indesx";
import { juggernautchallengesData, juggernautoutcomesData, angelflowHeadlines } from "@/constants/indesx";

const JuggernautDeFi: NextPage = () => {
    return (
        <Layout showContactForm={false} title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforeyellowtext="Juggernaut DeFi:" bannerHeading="Redefining the NFT Experience with a Comprehensive Blockchain Platform" needsMoreTitle={true} previewImage="/images/juggernautherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={angelflowHeadlines} />
                <CaseBackground cardLogo={"/images/juggernautlogo.svg"} cardDescription="Juggernaut DeFi's innovative NFT platform revolutionizes the decentralized finance landscape by providing a secure, accessible, and feature-rich environment"
                    backgroundDescription={"Juggernaut DeFi, a pioneering startup based in China, aimed to transform the decentralized finance landscape by introducing a robust NFT platform. With the exponential growth of NFTs and blockchain technology, Juggernaut DeFi recognized the need for a platform that could support a wide range of NFT transactions and services. The goal was to create a secure, accessible, and feature-rich environment."} />
                <CaseChallanges cardBanner={"/images/juggernautbanner.png"} challenges={juggernautchallengesData} />
                <TechStack title="Tech Stacks" images={juggernauttechStackImages} />
                <DataServicesSection heading="Solutions Provided" data={juggernautcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/juggernautoutcomesbanner.png"} outcomes={juggernautoutcomesData} />
                <TechStack title="Technology Stack" images={[]} />
            </div>
        </Layout>
    );
};

export default JuggernautDeFi;
