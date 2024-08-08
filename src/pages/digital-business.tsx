import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";

const DigitalBusiness: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Digital Business" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Business Applications for Modern Enterprises" previewImage="/images/bussinees-banner.png" />
                <ServicesNeeds needsTitle="Change Your Business with Scalable, Cloud-Based" needsTitleBlue="Solutions" NeedsImage="/images/needs-image-finalest.png"
                    needsDescription="In today's fast-paced digital world, where change is constant and customer expectations are ever-rising, 
                    we help our clients master this dynamic environment. 
                    Our expertise in digital innovation enables businesses to stay ahead of the curve." />
                <ExpertServices needsTitle="Smooth Integration for Unmatched" needsTitleBlue="Efficiency" NeedsImage="/images/needs-image-final-one.png"
                    needsDescription="Now you can experience efficiency like never before with our fully integrated business applications that unify all key functional areas of your enterprise.
                     From Customer Relationship Management (CRM) systems that boost profitability and customer loyalty to Enterprise.
                    Resource Planning (ERP) systems that synchronize finance, HR, and inventory management, our solutions provide an uninterrupted flow of information across your organization. " />
                <CloudOps needsTitle="What DO" needsTitleBlue="We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DigitalBusiness;
