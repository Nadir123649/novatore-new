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
import { permitcaseData } from "@/constants/indesx";
import { permittechStackImages } from "@/constants/indesx";
import { permitplacechallengesData, permitplaceoutcomesData, permitPlaceHeadlines } from "@/constants/indesx";

const PermitPlace: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Permit Place" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner spanparrottext="Permit Place’s " bannerHeading="Revolutionizing " morebannerHeading="Business Insurance Management for Australian Startups" needsMoreTitle={true} previewImage="/images/permitherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={permitPlaceHeadlines} />
                <CaseBackground cardLogo={"/images/permitlogo.svg"} cardDescription="This advanced solution has not only streamlined their workflows but also elevated client satisfaction, solidifying Permit Place's position as a leader in the real estate consulting industry."
                    backgroundDescription={"Permit Place, a prominent real estate consulting firm in the United States, specializes in managing the intricate processes of planning, construction, and permitting. With a growing portfolio and expanding clientele, Permit Place needed an advanced digital platform to streamline its operations. Novatore Solutions stepped in to craft a solution that would address these needs, enhancing efficiency and client satisfaction across the board."} />
                <CaseChallanges cardBanner={"/images/permitplacebanner.png"} challenges={permitplacechallengesData} />
                <TechStack title="Tech Stacks" images={permittechStackImages} />
                <DataServicesSection heading="Solutions" data={permitcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/permitplaceoutcomesbanner.png"} outcomes={permitplaceoutcomesData} />

            </div>
        </Layout>
    );
};

export default PermitPlace;
