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
import { ispyarcaseData, ispyarchallengesData, ispyarHeadlines, ispyaroutcomesData, ispyartackImages, qatarcaseData } from "@/constants/indesx";
import { qatarStackImages } from "@/constants/indesx";
import { souqofQatarchallengesData, souqofQataroutcomesData, oneH2Headlines } from "@/constants/indesx";

const IspyarWedding: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforegreentext="Revolutionizing Wedding" morebannerHeading="Planning for South Asian Multi-Event Celebrations" needsMoreTitle={true} previewImage="/images/ispyarherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={ispyarHeadlines} />
                <CaseBackground cardLogo={"/images/ispyarlogo.svg"} cardDescription="We collaborated with ispyar to develop a robust platform that seamlessly connects users with a diverse range of vendors, tailored specifically for the intricate needs of South Asian weddings."
                    backgroundDescription={"Ispyar is an online platform aimed at simplifying wedding planning, particularly for South Asian multi-event weddings. The client envisioned a platform that would cater to the unique needs of South Asian weddings, where multiple ceremonies often require a wide range of vendors. "} />
                <CaseChallanges cardBanner={"/images/ispyarbanner.png"} challenges={ispyarchallengesData} />
                <TechStack title="Tech Stacks" images={ispyartackImages} />
                <DataServicesSection heading="Solutions" data={ispyarcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/ispyaroutcomesbanner.png"} outcomes={ispyaroutcomesData} />
            </div>
        </Layout>
    );
};

export default IspyarWedding;
