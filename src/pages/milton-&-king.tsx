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
import { miltoncaseData, miltonoutcomesData } from "@/constants/indesx";
import { miltonStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, miltonHeadlines } from "@/constants/indesx";

const MiltonAndKing: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Crafting a Premier E-Commerce Experience for Luxury Wallpaper and Fabric" needsMoreTitle={true} previewImage="/images/miltonherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={miltonHeadlines} />
                <CaseBackground cardLogo={"/images/miltonlogo.svg"} cardDescription="Novatore Solutions collaborated with Milton & King to develop a sophisticated e-commerce platform that seamlessly integrates their luxurious product offerings with an intuitive user experience."
                    backgroundDescription={"Milton & King, a leading brand in the luxury wallpaper and fabric industry, aimed to enhance its online presence to better serve its growing customer base. Known for their modern and artistic designs, Milton & King sought to create a more engaging and user-friendly e-commerce platform that could showcase their high-quality products while providing a seamless shopping experience."} />
                <CaseChallanges cardBanner={"/images/miltonbanner.png"} challenges={souqofQatarchallengesData} />
                <TechStack title="Tech Stacks" images={miltonStackImages} />
                <DataServicesSection heading="Solutions" data={miltoncaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/miltonoutcomesbanner.png"} outcomes={miltonoutcomesData} />
            </div>
        </Layout>
    );
};

export default MiltonAndKing;
