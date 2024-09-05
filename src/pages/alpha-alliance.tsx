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
import { alphacaseData, alphachallengesData, alphaHeadlines, alphaoutcomesData, qatarcaseData } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, oneH2Headlines } from "@/constants/indesx";

const AlphaAlliance: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="The" spangreenishtext="Alpha Alliance" morebannerHeading="Signs Wristband Toolkit for Coaches and Athletes" needsMoreTitle={true} previewImage="/images/alphaallianceherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={alphaHeadlines} />
                <CaseBackground cardLogo={"/images/alphaslogo.svg"} cardDescription="Our team was tasked with developing a software solution that would bring this concept to life, creating a user-friendly platform that would be as effective in practice as it is in competition."
                    backgroundDescription={"Alpha Alliance, a leading provider of sports solutions, recognized the need for a tool that could facilitate effective communication. To meet this need, they conceived the idea of the Alpha Signs Wristband Toolkit, a device designed to streamline communication between coaches and athletes directly on the field."} />
                <CaseChallanges cardBanner={"/images/alphasbanner.png"} challenges={alphachallengesData} />
                <TechStack title="Tech Stacks" images={qatarStackImages} />
                <DataServicesSection heading="Solutions" data={alphacaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/alphasbanneroutcomes.png"} outcomes={alphaoutcomesData} />

            </div>
        </Layout>
    );
};

export default AlphaAlliance;
