import HeroBanner from "@/components/HeroBanner";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";
import CaseBackground from "@/components/CaseBackground";
import CaseChallanges from "@/components/CaseChallanges";
import { myndschallengesData, myndsHeadlines, myndsoutcomesData } from "@/constants/indesx";
import CaseOutcomes from "@/components/CaseOutcomes";
import { techStackImages } from "@/constants/indesx";
import DataServicesSection from "@/components/DataServicesSection";
import { myndscaseData } from "@/constants/indesx";
import HeadlineBanner from "@/components/HeadlineBanner";

const Mynds: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Mynds" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Streamlining Property Management:" spangreentext="Mynd's" morebannerHeading=" Digital Transformation Journey with Us" needsMoreTitle={true} previewImage="/images/myndsherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={myndsHeadlines} />
                <CaseBackground cardLogo={"/images/myndslogo.svg"} cardDescription="Mynd help investors to find, Finance, Insure, Lease, manage, and Sell  Single-family Rental Properties, and for residents to find great homes  to rent."
                    backgroundDescription={"Mynd is a leading tech-enabled property management and real estate investment company operating in over 25 US markets. They required a comprehensive digital solution to streamline their Real Estate Management processes and enhance investor experiences."} />
                <CaseChallanges cardBanner={"/images/myndsbanner.png"} challenges={myndschallengesData} />
                <TechStack title="Tech Stacks" images={techStackImages} />
                <DataServicesSection heading="Solutions" data={myndscaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/myndsoutcomesbanner.png"} outcomes={myndsoutcomesData} />
            </div>
        </Layout>
    );
};

export default Mynds;
