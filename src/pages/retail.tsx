import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const Retail: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Empowering Retail and Consumer Goods with Innovative Technology " needsMoreTitle={true} previewImage="/images/retail-banner.png" pagetitle="Retail" />
                <ServicesNeeds needsTitleBlue="Overview" NeedsImage="/images/retail-overview.png"
                    needsDescription="Our company has over 5 years of experience in delivering cutting-edge software solutions for the retail and consumer goods industry. We have completed 20+ projects that enable businesses to enhance their customer interactions, streamline operations, and boost sales. From developing comprehensive e-commerce platforms to creating engaging mobile applications, we are committed to providing solutions that address the evolving needs of retail businesses." />
                <CloudOps needsTitle="Key " needsTitleBlue=" Capabilities " needsMoreTitle=" " />
                <TechStack title="Technology Stack" />
                <Enterprise />
                <CaseStudiesSlider heading="Case" blueheading="Studies" />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Retail;
