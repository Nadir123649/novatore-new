import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import DataServicesSection from "@/components/DataServicesSection";
import { dataServices } from "@/constants/indesx";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramTwo } from "@/utils";
import Layout from "@/components/Layout";
import CloudOps from "@/components/CloudOps";

const DataEngineering: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Data Engineering" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Data Engineering" previewImage="/images/data-banner-bg.png" />
                <ServicesNeeds needsTitle="Revamp Your Data with" needsTitleBlue="Advanced Engineering" needsMoreTitle="Solutions" NeedsImage="/images/data-platform-right.png"
                    needsDescription="We offer data engineering services that enable businesses to use the full potential of their data. Our expertise lies in building strong data pipelines, implementing scalable data architectures, and smooth data integration across various platforms. Trust our team of skilled data engineers to deliver high-quality, cost-effective solutions that drive your business forward." />
                <ExpertServices needsTitle="What Can " needsTitleBlue=" Expert Data Engineering " needsMoreTitle="Do for Your Business?" NeedsImage="/images/data-platform-left.png"
                    needsDescription="From data architecture design and cloud migration to data analytics and visualization, we cover all aspects of data management to help you unlock valuable insights. Our team uses industry-leading tools and methodologies to ensure your data is accurate, secure, and easily accessible. " />
                <CloudOps needsTitle="How We Drive" needsTitleBlue="Business Efficiency" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DataEngineering;
