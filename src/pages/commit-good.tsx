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
import { commitcaseData } from "@/constants/indesx";
import { committechStackImages } from "@/constants/indesx";
import { commitchallengesData, commitoutcomesData, commitGoodHeadlines } from "@/constants/indesx";

const CommitGood: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Retail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforebluetext="Commit Good:" bannerHeading=" Revolutionizing Charitable Donations with Blockchain Technology" needsMoreTitle={true} previewImage="/images/commitherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={commitGoodHeadlines} />
                <CaseBackground cardLogo={"/images/commitlogo.svg"} cardDescription="Commit Good revolutionizes charitable donations by utilizing blockchain technology to ensure complete transparency, giving donors confidence."
                    backgroundDescription={"Commit Good, a US-based startup, sought to redefine the landscape of charitable donations by leveraging blockchain technology. The traditional methods of donating to charities often left donors uncertain about where their money was going, leading to a demand for a solution that could ensure accountability. Commit Good envisioned a platform that would not only simplify the donation process but also provide a transparent system."} />
                <CaseChallanges cardBanner={"/images/commitbanner.png"} challenges={commitchallengesData} />
                <TechStack title="Tech Stacks" images={committechStackImages} />
                <DataServicesSection heading="Solutions" data={commitcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/commitoutcomesbanner.png"} outcomes={commitoutcomesData} />

            </div>
        </Layout>
    );
};

export default CommitGood;
