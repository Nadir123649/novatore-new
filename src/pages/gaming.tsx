import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { GamingData } from "@/constants/indesx";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const Gaming: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Gaming" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords={"Game Development, Gaming Technology Solutions, E-commerce Platform for Gaming Assets, Multiplayer Game Development, Virtual Reality (VR) Gaming, Augmented Reality (AR) Gaming, AI in Gaming, Unity Game Development, Unreal Engine Game Development"}>
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Novatore Solutions in Gaming" needsMoreTitle={true} previewImage="/images/gaming-banner.png" pagetitle="Gaming" maxwidth="800px" />
                <ServicesNeeds needsTitle="Over " needsTitleBlue="10 Years" needsMoreTitle="of Expertise in Game Development" NeedsImage="/images/gaming-image-right.png"
                    needsDescription="With over 10 years of dedicated experience in the gaming industry, we have successfully delivered over 50 projects, making us a leader in gaming technology solutions. Our expertise spans the full spectrum of gaming services, including game development, e-commerce platforms for gaming assets, and multiplayer solutions. We are committed to providing exceptional services that empower businesses to thrive in the fast-evolving gaming market." />
                <CloudOps needsTitle="Why " needsTitleBlue=" Partner " needsMoreTitle=" with Us?" />
                <DataServicesSection heading="Our " headingBlue="Gaming" needsMoreTitle=" Software Services" data={GamingData} />
                <Enterprise />
                <CaseStudiesSlider heading="Case" blueheading="Studies" />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Gaming;
