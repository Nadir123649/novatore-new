import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { InsuranceData } from "@/constants/indesx";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const Insurance: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Insurance" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Our Commitment in Insurance Technology" needsMoreTitle={true} previewImage="/images/insurance-banner.png" pagetitle="Insurance" maxwidth="800px" />
                <ServicesNeeds needsTitle="Delivering Excellence in Insurance Technology for " needsTitleBlue="Over 12 Years" NeedsImage="/images/insurance-image-right.png"
                    needsDescription="Our experience of more than 12 years in the insurance industry has positioned us as leaders in providing innovative insurance technology solutions. Having successfully delivered over 40 projects, we specialize in a wide range of services that cover all aspects of insurance technology. These include developing robust policy management systems, creating AI-driven analytics platforms, and enhancing customer engagement through advanced solutions. " />
                <CloudOps needsTitle="Why " needsTitleBlue=" Partner " needsMoreTitle=" with Us?" />
                <DataServicesSection heading="Our " headingBlue="Insurance" needsMoreTitle=" Software Services" data={InsuranceData} />
                <Enterprise />
                <CaseStudiesSlider heading="Case" blueheading="Studies" />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Insurance;
