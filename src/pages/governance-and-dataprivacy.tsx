import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";
import DataServicesSection from "@/components/DataServicesSection";
import { GovernanceDataPrivacy } from "@/constants/indesx";

const GovernanceAndDataPrivacy: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Governance, Risk & Compliance, and Data Privacy" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Governance, Risk & Compliance, and Data Privacy" previewImage="/images/governence-banner-bg.png" />
                <ServicesNeeds needsTitle="Welcome to Your " needsTitleBlue=" AI Assurance Partner" NeedsImage="/images/assurance-partner.png"
                    needsDescription="In today's data-driven world, effective data management and governance are critical for business success. At Novatore Solutions, we offer extensive data management and governance services to help you use the power of your data. " />
                <DataServicesSection heading="Our " headingBlue="Services" type="single" data={GovernanceDataPrivacy} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default GovernanceAndDataPrivacy;
