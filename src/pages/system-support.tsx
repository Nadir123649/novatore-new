import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { processAutomationData } from "@/constants/indesx";
import ExpertServices from "@/components/ExpertServices";

const SystemSupport: NextPage = () => {
    return (
        <Layout title="Novatore Sols - System Support" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Expert System Support to Ensure Seamless IT Performance" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/system-support-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="IT Support Services for" needsTitleBlue="Software Businesses" NeedsImage="/images/software-business.png"
                    needsDescription="Leading tech businesses rely heavily on technology to maintain operations and drive growth. We understand the critical role that reliable IT system support plays in ensuring the success of software businesses. As a leading software solutions provider, we offer a comprehensive range of IT support services tailored to meet the unique needs of our clients." />
                <ExpertServices needsTitle="Discover Our" needsTitleBlue="  IT Infrastructure" needsMoreTitle="Support" NeedsImage="/images/IT-Infrastructure.png"
                    needsDescription=" Our team of seasoned experts specializes in managed IT services, network security solutions, and technology consulting services, ensuring your business stays ahead in an ever-evolving tech landscape. With our cloud support services and remote IT support, we empower you to focus on your core business while we take care of the technological backbone. Explore the services we provide and learn how we can enhance your business’s efficiency and security." />
                <DataServicesSection heading="Our Key " headingBlue="Services" data={processAutomationData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default SystemSupport;
