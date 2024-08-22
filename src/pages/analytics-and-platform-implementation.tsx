import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { processAnalyticsData } from "@/constants/indesx";
import ExpertServices from "@/components/ExpertServices";

const AnalyticsImplementation: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Analytics & Platform Implementation" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Analytics & Platform Implementation" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/analytics-banner-bg.png" />
                <ServicesNeeds needsTitle="Unlock Business Insights with " needsTitleBlue=" Advanced Analytics" NeedsImage="/images/analytics-bg-right.png"
                    needsDescription="At Novatore Solutions, we specialize in analytics and platform implementation services that transform raw data into actionable insights. By integrating analytics tools  we help businesses enhance decision-making and drive growth. Our expertise in analytics platform architecture and integration ensures that your data systems are connected." />
                <ExpertServices needsTitle="Transform Data into " needsTitleBlue=" Strategic Assets" NeedsImage="/images/analytics-bg-left.png"
                    needsDescription=" With our analytics consulting services, we guide you through every step of the process. From identifying the right types of analytics platforms to tailoring solutions that meet your unique needs, we provide a full spectrum of services. Our implementation experts focus on key considerations. ensuring that your analytics platform not only meets current demands but is also future-proof." />
                <DataServicesSection heading="Our " headingBlue="Services" data={processAnalyticsData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AnalyticsImplementation;
