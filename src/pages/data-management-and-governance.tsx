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
        <Layout showContactForm={true} title="Novatore Sols - Data Management & Governance" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Your Partner in Data Management & Governance" pagetitle="Data" needsMoreTitle="Get in Touch" previewImage="/images/data-managment-banner.png" maxwidth="1000px" />
                <ServicesNeeds needsTitle="Expert" needsTitleBlue=" Management & Governance" NeedsImage="/images/managment-right-image.png"
                    needsDescription="In today's rapidly evolving, data-driven world, the importance of effective data management and governance cannot be overstated. Businesses that harness the full potential of their data gain a significant competitive advantage, and ensuring compliance with regulatory requirements. At Novatore Solutions, we recognize the transformative power of well-managed data and offer a comprehensive suite of data management and governance services." />
                <ExpertServices needsTitle=" Data Governance for Enhanced" needsTitleBlue=" Compliance and Integrity" NeedsImage="/images/managment-left-image.png"
                    needsDescription="By implementing industry-leading best practices and a robust governance framework, we ensure that your data remains secure, accurate, and readily accessible at all times. Our comprehensive approach covers every aspect of data management, employing advanced tools and innovative strategies to oversee the entire data lifecycle. From initial data acquisition and integration to eventual disposal, we meticulously manage each phase." />
                <DataServicesSection heading="Our " headingBlue="Services" data={ServicesDataLocal} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DataManagementAndGovernance;
