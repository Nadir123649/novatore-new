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
                <HeroBanner bannerHeading="Web Application Development" previewImage="/images/web-app-banner.png" />
                <ServicesNeeds needsTitle="Introduction " NeedsImage="/images/web-app-right.png"
                    needsDescription="Our team of skilled developers uses the best web development tools and the latest web app frameworks to deliver high-performance, secure, and scalable web applications. " />
               <CloudOps needsTitle="Our " needsTitleBlue="Services" />
                <DataServicesSection heading="Why Choose " headingBlue="Us?" data={WebAutomationData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default WebApp;
