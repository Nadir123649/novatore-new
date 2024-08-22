import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import CloudOps from "@/components/CloudOps";
import DataServicesSection from "@/components/DataServicesSection";
import { WebAutomationData } from "@/constants/indesx";

const WebApp: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Web Application Development" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Advanced Web App Development Solutions" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/web-app-banner.png" />
                <ServicesNeeds needsTitle="Introduction " NeedsImage="/images/web-app-dev-right.png"
                    needsDescription="Our team of highly skilled developers utilizes cutting-edge web development tools and the most advanced web application frameworks available to craft high-performance, secure, and scalable web applications. We ensure that every project is designed and built to meet the highest industry standards. Whether you need a robust e-commerce platform or a content management system, we have the expertise." />
                <CloudOps needsTitle="Our " needsTitleBlue="Services" />
                <DataServicesSection heading="Why Choose " headingBlue="Us?" data={WebAutomationData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default WebApp;
