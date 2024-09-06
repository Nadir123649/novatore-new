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
        <Layout showContactForm={true} title="Novatore Solutions - Web Application Development" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="Web Application Development, Best web development tools, Web development services, Web app frameworks, Front-end web development, Back-end web development, Full-stack web development, Web app performance optimization, Web app security best practices, Progressive web apps">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Advanced Web App Development Solutions" pagetitle="Custom Software Development" needsMoreTitle="Get in Touch" previewImage="/images/web-app-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitleBlue="Introduction" NeedsImage="/images/web-app-dev-right.png"
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
