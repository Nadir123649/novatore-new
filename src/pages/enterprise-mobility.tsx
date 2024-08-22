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
                <HeroBanner bannerHeading="Seamless Enterprise Mobility Solutions For You" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/enterprize-banner.png" />
                <ServicesNeeds needsTitle="Discover Our " needsTitleBlue="Enterprise Mobility" needsMoreTitle="Solutions" NeedsImage="/images/mobility-right.png"
                    needsDescription="Having a strong enterprise mobility strategy is essential for tech businesses and startups seeking to thrive. Our enterprise mobility solutions empower your organization by integrating technology into every facet of your operations. Enhance productivity, streamline workflows, and secure your mobile environment with our tailored services. Leverage this technology to support remote work and improve communication." />
                <ExpertServices needsTitle="You Need The Best " needsTitleBlue=" Enterprise Mobility " needsMoreTitle="Management" NeedsImage="/images/mobility-left.png"
                    needsDescription="Enterprise Mobility Management (EMM) empowers organizations to efficiently oversee, control, and manage all mobile devices, applications, and data from a single, centralized platform. Our EMM solutions offer a robust suite of tools designed to enhance visibility, monitor device usage, and ensure regulatory compliance. By streamlining the management of your mobile assets, we help you maintain a secure environment." />
                <CloudOps needsTitle="Have a Look at What " needsTitleBlue=" We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default EnterpriseMobility;
