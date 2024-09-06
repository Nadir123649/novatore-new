import HeroBanner from "@/components/HeroBanner";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";
import HeadlineBanner from "@/components/HeadlineBanner";
import CaseBackground from "@/components/CaseBackground";
import CaseChallanges from "@/components/CaseChallanges";
import CaseOutcomes from "@/components/CaseOutcomes";
import DataServicesSection from "@/components/DataServicesSection";
import { nftHunterscaseData } from "@/constants/indesx";
import { angelflowtechStackImages } from "@/constants/indesx";
import { hunterschallengesData, huntersoutcomesData, nftHuntersHeadlines } from "@/constants/indesx";

const NFTHunters: NextPage = () => {
    return (
        <Layout showContactForm={false} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforeyellowtext="NFT Hunters:" bannerHeading="Elevating the NFT Market with Curated Weekly Insights and Marketing Solutions" needsMoreTitle={true} previewImage="/images/huntersherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={nftHuntersHeadlines} />
                <CaseBackground cardLogo={"/images/nftlogo.svg"} cardDescription="By cutting through the noise of countless daily launches, NFT Hunters empowers users to make informed decisions in the rapidly evolving NFT space."
                    backgroundDescription={"NFT Hunters was conceived to address the growing demand for reliable and curated information in the rapidly expanding NFT space. With countless NFT projects launching daily, it became increasingly challenging for investors and enthusiasts to identify high-potential opportunities. NFT Hunters sought to solve this problem by creating a platform that meticulously analyzes and curates the best NFT, DeFi, GameFi, and Web3 projects."} />
                <CaseChallanges cardBanner={"/images/huntersbanner.png"} challenges={hunterschallengesData} />
                <TechStack title="Tech Stacks" images={angelflowtechStackImages} />
                <DataServicesSection heading="Solutions" data={nftHunterscaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/nftoutcomesbanner.png"} outcomes={huntersoutcomesData} />
            </div>
        </Layout>
    );
};

export default NFTHunters;
