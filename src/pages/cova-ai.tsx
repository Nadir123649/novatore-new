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
import { covaAicaseData } from "@/constants/indesx";
import { covaaitechstackimages } from "@/constants/indesx";
import { covaaichallengesData, covaaioutcomesData, covaAIHeadlines } from "@/constants/indesx";

const CovaAI: NextPage = () => {
    return (
        <Layout showContactForm={false} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="The Vision and Execution Behind " spanbluetext="Cova AI’s" needsMoreTitle={true} previewImage="/images/covaherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={covaAIHeadlines} />
                <CaseBackground cardLogo={"/images/covalogo.svg"} cardDescription="The Cova AI Insurance Portal revolutionizes the insurance process by providing an intuitive platform that significantly boosts efficiency."
                    backgroundDescription={"In the complex world of insurance, efficiency and clarity are paramount. The Cova AI Insurance Portal was conceived to tackle the common pain points faced by brokers, customers, and underwriters. The goal was to create an intuitive platform that would not only streamline the insurance process but also enhance the overall user experience by leveraging the power of AI."} />
                <CaseChallanges cardBanner={"/images/covaaibanner.png"} challenges={covaaichallengesData} />
                <TechStack title="Technology Stack" images={covaaitechstackimages} />
                <DataServicesSection heading="Solutions" data={covaAicaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/covaaioutcomesbanner.png"} outcomes={covaaioutcomesData} />

            </div>
        </Layout>
    );
};

export default CovaAI;
