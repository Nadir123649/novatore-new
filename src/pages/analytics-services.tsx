import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const AnalyticsServices: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Analytics Services " description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Unlocking the Power of Analytics for Smarter Decisions" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/analytics-services-banner-bg.png " />
                <ServicesNeeds needsTitle="Advanced Analytics Services for " needsTitleBlue=" Software Businesses" NeedsImage="/images/analitical-image-right.png"
                    needsDescription="In the present digital landscape, data is more valuable than ever. Our cAnalytics Services empower software companies to make informed decisions, optimize performance, and drive growth. From predictive analytics to real-time data processing, our solutions are designed to transform your data into actionable insights. Let us help you harness the power of data with our comprehensive suite of analytics tools." />
                <ExpertServices needsTitle="Why Choose Our Analytics " needsTitleBlue=" Services?" needsMoreTitle=" " NeedsImage="/images/analitical-image-left.png"
                    needsDescription="At Novatore Solutions, we understand the unique challenges software businesses face. Our analytics services are tailored to meet your specific needs, offering unparalleled accuracy, scalability, and innovation. With a team of industry experts and state-of-the-art technology, we deliver solutions that enhance your business intelligence and provide a competitive edge." />
                <CloudOps needsTitle="Our Comprehensive Analytics  " needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AnalyticsServices;
