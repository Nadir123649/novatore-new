import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { InsuranceData, RealEstateData } from "@/constants/indesx";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const RealEstate: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Real Estate" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords={"Real Estate Software Solutions, Property Management Systems, Real Estate Portal Development, Custom Real Estate Software, Mobile App Development for Real Estate, AI in Real Estate, Machine Learning in Real Estate, Client Relationship Management Tools, Property Listings Mobile App, Real Estate Market Analysis"}>
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Real Estate Software Solutions" needsMoreTitle={true} previewImage="/images/real-estate-banner.png" pagetitle="Real Estate" maxwidth="700px" />
                <ServicesNeeds needsTitleBlue="Introduction" NeedsImage="/images/real-estate-image-right.png"
                    needsDescription="With over 7 years of experience in the real estate sector, our team has successfully completed 15+ projects tailored to meet the dynamic needs of real estate businesses. Our expertise spans across developing innovative software solutions that enhance property management, streamline transactions, and empower agents and clients alike. We leverage cutting-edge technologies to deliver custom solutions that drive efficiency and growth in the real estate industry. " />
                <CloudOps needsTitle="Why " needsTitleBlue=" Choose " needsMoreTitle=" Us?" />
                <DataServicesSection heading="Our " headingBlue="Real Estate" needsMoreTitle=" Software Services" data={RealEstateData} />
                <Enterprise />
                <CaseStudiesSlider heading="Case" blueheading="Studies" />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default RealEstate;
