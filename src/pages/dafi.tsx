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
import { daficaseData, dafichallengesData, dafioutcomesData, dafiStackImages, qatarcaseData } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, oneH2Headlines } from "@/constants/indesx";

const Dafi: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Building a Secure and Scalable NFT Exchange for the Crypto Community" needsMoreTitle={true} previewImage="/images/dafiherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={oneH2Headlines} />
                <CaseBackground cardLogo={"/images/dafilogo.svg"} cardDescription="We collaborated with Dafi.io to develop a robust and secure platform that seamlessly manages NFT and cryptocurrency transactions, ensuring a smooth user experience for both seasoned traders and newcomers alike."
                    backgroundDescription={"Dafi.io is designed to facilitate the buying and selling of NFTs (Non-Fungible Tokens) and various cryptocurrencies. As the NFT market grew rapidly, Dafi.io sought to establish itself as a leader in the space by offering a secure, user-friendly platform that could handle the complexities of NFT transactions.  "} />
                <CaseChallanges cardBanner={"/images/dafibanner.png"} challenges={dafichallengesData} />
                <TechStack title="Tech Stacks" images={dafiStackImages} />
                <DataServicesSection heading="Solutions" data={daficaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/dafioutcomesbanner.png"} outcomes={dafioutcomesData} />
            </div>
        </Layout>
    );
};

export default Dafi;
