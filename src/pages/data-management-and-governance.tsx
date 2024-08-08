import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";
import DataServicesSection from "@/components/DataServicesSection";
import { ServicesDataLocal } from "@/constants/indesx";

const DataManagementAndGovernance: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Data Management & Governance" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Data Management & Governance" previewImage="/images/data-managment-banner.png" />
                <ServicesNeeds needsTitle="Master Your Data with Expert " needsTitleBlue=" Management and Governance" NeedsImage="/images/managment-right-image.png"
                    needsDescription="In today's data-driven world, effective data management and governance are critical for business success. At Novatore Solutions, we offer extensive data management and governance services to help you use the power of your data. " />
                <ExpertServices needsTitle="Strategic Data Governance for" needsTitleBlue=" Enhanced " needsMoreTitle=" Compliance and Integrity" NeedsImage="/images/managment-left-image.png"
                    needsDescription="By implementing best practices and a solid governance framework, we make sure that your data is secure, accurate, and easily accessible. Our advanced tools and strategies manage the entire data lifecycle, from acquisition to disposal, ensuring compliance with industry standards and regulations. " />
                <CloudOps />
                <DataServicesSection heading="Our " headingBlue="Services" data={ServicesDataLocal} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DataManagementAndGovernance;
