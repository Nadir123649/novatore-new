import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const EnterpriseMobility: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Enterprise Mobility" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Enterprise Mobility" previewImage="/images/enterprize-banner.png" />
                <ServicesNeeds needsTitle="Transform Your Business with Our " needsTitleBlue=" Enterprise Mobility" needsMoreTitle="Solutions" NeedsImage="/images/enterprize-image-right.png"
                    needsDescription="Having a strong enterprise mobility strategy is essential for tech businesses and startups seeking to thrive. Our enterprise mobility solutions empower your organization by integrating technology into every facet of your operations. Enhance productivity, streamline workflows, and secure your mobile environment with our tailored services. Leverage this technology to support remote work, improve communication, and ensure seamless access to critical data across all devices. Stay ahead of the competition by transforming your business processes and maximizing operational efficiency." />
                <ExpertServices needsTitle="Your Business Needs the  " needsTitleBlue=" Best Enterprise" needsMoreTitle=" Mobility Management (EMM)" NeedsImage="/images/enterprize-image-left.png"
                    needsDescription="Enterprise Mobility Management (EMM) enables you to control and manage all your mobile devices and applications from a centralized platform. Our EMM solutions provide you with the tools to monitor usage, enforce security policies, and ensure compliance across your organization." />
                <CloudOps needsTitle="Have a Look at What " needsTitleBlue=" We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default EnterpriseMobility;
