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
import { angelflowcaseData } from "@/constants/indesx";
import { angelflowtechStackImages } from "@/constants/indesx";
import { angelflowchallengesData, angelflowoutcomesData, angelflowHeadlines } from "@/constants/indesx";

const Angelflow: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforespanredtext="Angelflow:" bannerHeading=" Empowering Start-ups and Investors with Seamless Connectivity" needsMoreTitle={true} previewImage="/images/angelflowherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={angelflowHeadlines} />
                <CaseBackground cardLogo={"/images/angelflowlogo.svg"} cardDescription="By empowering start-ups to tap into a vast network of investors, Angelflow enhances their credibility and opens doors to new opportunities for funding and development."
                    backgroundDescription={"Angelflow aimed to create a powerful platform that bridges the gap between start-ups and investors, enabling meaningful connections that drive mutual success. The client envisioned a space where investors could effortlessly discover and support promising start-ups, while the start-ups could leverage their investor networks to boost their credibility and attract further investment."} />
                <CaseChallanges cardBanner={"/images/angelflowbanner.png"} challenges={angelflowchallengesData} />
                <TechStack title="Tech Stacks" images={angelflowtechStackImages} />
                <DataServicesSection heading="Solutions" data={angelflowcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/angelflowoutcomesbanner.png"} outcomes={angelflowoutcomesData} />

            </div>
        </Layout>
    );
};

export default Angelflow;
