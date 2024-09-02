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
import { giftITcaseData } from "@/constants/indesx";
import { giftittechStackImages } from "@/constants/indesx";
import { giftitchallengesData, giftitoutcomesData, angelflowHeadlines } from "@/constants/indesx";

const GiftIT: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforespanredtext="Gift It:" bannerHeading="Creating a Seamless Marketplace for Unique Gifting Experiences in the UAE" needsMoreTitle={true} previewImage="/images/giftherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={angelflowHeadlines} />
                <CaseBackground cardLogo={"/images/giftitlogo.svg"} cardDescription="This innovative platform simplifies the entire gifting process, making it easier for people to celebrate special moments with thoughtful, personalized gifts."
                    backgroundDescription={"Gift It, a UAE-based startup, sought to innovate the gifting industry by creating a unique online marketplace where users could easily buy and sell diverse gifting experiences. The traditional gifting process often involved the challenges of finding the perfect gift. Gift It aimed to solve these issues by offering a platform that  facilitated the purchase of gifts."} />
                <CaseChallanges cardBanner={"/images/giftitbanner.png"} challenges={giftitchallengesData} />
                <TechStack title="Tech Stacks" images={giftittechStackImages} />
                <DataServicesSection heading="Solutions" data={giftITcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/giftitoutcomesbanner.png"} outcomes={giftitoutcomesData} />

            </div>
        </Layout>
    );
};

export default GiftIT;
