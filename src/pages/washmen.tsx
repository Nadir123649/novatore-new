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
import { miltonchallengesData, qatarcaseData, washmencaseData, washmenchallengesData, washmenoutcomesData, washmenStackImages } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, oneH2Headlines } from "@/constants/indesx";

const Washmen: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Enhancing" spanpurpletext="Efficiency and User Experience" morebannerHeading="for a Premier Laundry & Dry-Cleaning Service" needsMoreTitle={true} previewImage="/images/washmenherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={oneH2Headlines} />
                <CaseBackground cardLogo={"/images/washmenlogo.svg"} cardDescription="Our tailored solution enabled Washmen to efficiently manage their business complexities while providing a user-friendly interface for their customers."
                    backgroundDescription={"Washmen, a leading online service provider specializing in professional laundry and dry-cleaning services, sought to upgrade its digital platform to better serve its customers. Offering a wide range of services, including garment care, home care, and bag care, Washmen needed a sophisticated platform that could handle the complexities of its business operations."} />
                <CaseChallanges cardBanner={"/images/souqofQatarbanner.png"} challenges={washmenchallengesData} />
                <TechStack title="Tech Stacks" images={washmenStackImages} />
                <DataServicesSection heading="Solutions" data={washmencaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/souqofQataroutcomesbanner.png"} outcomes={washmenoutcomesData} />
            </div>
        </Layout>
    );
};

export default Washmen;
