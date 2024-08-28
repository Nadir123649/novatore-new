import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const NFTHunters: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Empowering Retail and Consumer Goods with Innovative Technology " needsMoreTitle={true} previewImage="/images/retail-banner.png" pagetitle="" maxwidth="1100px" />
                <TechStack title="Technology Stack" />
            </div>
        </Layout>
    );
};

export default NFTHunters;
