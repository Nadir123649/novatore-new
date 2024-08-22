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
                <HeroBanner bannerHeading="Unlocking the Power of Analytics for Smarter Decisions" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/analytics-services-banner-bg.png " maxwidth="1100px" />
                <ServicesNeeds needsTitle="Analytics Services for " needsTitleBlue=" Software Businesses" NeedsImage="/images/analitical-image-right.png"
                    needsDescription="In the present digital landscape, data is more valuable than ever. Our cAnalytics Services empower software companies to make informed decisions, optimize performance, and drive growth. From predictive analytics to real-time data processing, our solutions are designed to transform your data into actionable insights. Let us help you harness the power of data with our comprehensive suite of analytics tools." />
                <ExpertServices needsTitle="Why Choose Our" needsTitleBlue=" Analytics Services?" needsMoreTitle=" " NeedsImage="/images/analitical-image-left.png"
                    needsDescription="We recognize the distinct and evolving challenges that software businesses encounter in today's fast-paced digital landscape. Our comprehensive analytics services are tailored to address your specific business requirements, ensuring that you receive unparalleled accuracy, scalability, and innovation at every stage of your growth. Novatore Solutions is committed to delivering customized solutions that give your business the competitive edge it needs." />
                <CloudOps needsTitle="Our Comprehensive Analytics  " needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AnalyticsServices;
