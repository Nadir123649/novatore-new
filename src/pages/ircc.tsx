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
import { IRCCcaseData } from "@/constants/indesx";
import { ircctechStackImages } from "@/constants/indesx";
import { irccchallengesData, irccoutcomesData, IRCCHeadlines } from "@/constants/indesx";

const IRCC: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - IRCC" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Streamlining B2B Operations for IRCC - A Comprehensive Data Reconciliation Solution" needsMoreTitle={true} previewImage="/images/irccherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={IRCCHeadlines} />
                <CaseBackground cardLogo={"/images/ircclogo.svg"} cardDescription="The IRCC project significantly streamlines B2B transactions between license providers and retailers by enabling efficient access to discounted products, benefiting all parties involved."
                    backgroundDescription={"The IRCC project was initiated to address the complex B2B interactions between license providers (LPs) and retailers. The primary goal was to develop a solution that facilitates efficient transactions by offering discounted products from LPs to retailers, with IRCC earning commissions on these sales. The project was structured around six key pillars, each focusing on different aspects of data management."} />
                <CaseChallanges cardBanner={"/images/irccbanner.png"} challenges={irccchallengesData} />
                <TechStack title="Tech Stacks" images={ircctechStackImages} />
                <DataServicesSection heading="Solutions" data={IRCCcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/irccoutcomesbanner.png"} outcomes={irccoutcomesData} />

            </div>
        </Layout>
    );
};

export default IRCC;
