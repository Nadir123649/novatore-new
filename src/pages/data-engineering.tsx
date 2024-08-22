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
                <HeroBanner bannerHeading="Comprehensive Data Engineering Tools" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/data-banner-bg.png" />
                <ServicesNeeds needsTitle="Revamp Your Data with" needsTitleBlue="Advanced Engineering" needsMoreTitle="Solutions" NeedsImage="/images/data-engineering-right.png"
                    needsDescription="Our team of experienced data engineers is dedicated to delivering high-quality solutions. We offer data engineering services designed to empower businesses by harnessing the full potential of their data. Our expertise encompasses building robust and reliable data pipelines, implementing scalable and flexible data architectures, and ensuring seamless data integration across a wide range of platforms and systems." />
                <ExpertServices needsTitle="What Can " needsTitleBlue=" Expert Data Engineering " needsMoreTitle="Do for Your Business?" NeedsImage="/images/data-engineering-left.png"
                    needsDescription="From comprehensive data architecture design and seamless cloud migration to advanced data analytics, reporting, and dynamic visualization, we cover every facet of data management to empower your organization with actionable insights. Our dedicated team of experts leverages industry-leading tools, and best practices to ensure your data is not only accurate and secure but also optimized for performance. " />
                <CloudOps needsTitle="How We Drive" needsTitleBlue="Business Efficiency" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DataEngineering;
