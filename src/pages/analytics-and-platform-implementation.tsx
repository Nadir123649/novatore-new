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
        <Layout showContactForm={true} title="Get Your Hands On Business Insights With Advanced Analytics" description="At Novatore Solutions, we specialize in providing analytics and platform implementation services that empower businesses to turn raw data into actionable insights." keywords="What is analytics platform implementation, Benefits of analytics platform, Analytics platform best practices, Steps in platform implementation, Analytics platform features, Data analytics implementation guide, Types of analytics platforms, Key considerations for platform implementation, Analytics platform architecture, Analytics platform integration" >
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Analytics & Platform Implementation" pagetitle="Data" needsMoreTitle="Get in Touch" previewImage="/images/analytics-banner-bg.png" maxwidth="900px" />
                <ServicesNeeds needsTitle="Business Insights with " needsTitleBlue=" Advanced Analytics" NeedsImage="/images/analytics-bg-right.png"
                    needsDescription="At Novatore Solutions, we specialize in providing comprehensive analytics and platform implementation services that empower businesses to turn raw data into actionable insights. Our team excels in designing and deploying sophisticated analytics tools that not only help organizations enhance decision-making but also drive sustainable growth. Let us help you unlock the full potential of your data." />
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
