import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { HealthCareData } from "@/constants/indesx";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const Healthcare: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Healthcare" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Leading Websites and Mobile Apps in Healthcare" needsMoreTitle={true} previewImage="/images/healthcare-banner.png" pagetitle="Healthcare" />
                <ServicesNeeds needsTitle="Driving " needsTitleBlue="Excellence" needsMoreTitle=" in Healthcare with Comprehensive Tech Solutions" NeedsImage="/images/health-care-image-right.png"
                    needsDescription="We have successfully delivered over 60 projects, establishing ourselves as leaders in healthcare technology solutions. Our expertise spans the full spectrum of healthcare services, including telemedicine platforms, patient management systems, and health information systems. We are committed to providing exceptional services that empower healthcare providers to deliver quality care in the fast-evolving digital health landscape." />
                <CloudOps needsTitle="Why " needsTitleBlue=" Partner " needsMoreTitle=" with Us?" />
                <DataServicesSection heading="Our " headingBlue="Healthcare" needsMoreTitle=" Software Services" data={HealthCareData} />
                <Enterprise />
                <CaseStudiesSlider heading="Case" blueheading="Studies" />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Healthcare;
