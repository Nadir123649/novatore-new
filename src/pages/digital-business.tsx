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
                <HeroBanner bannerHeading="Business Applications for Modern Enterprises" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/bussinees-banner.png" maxwidth="1100px" />
                <ServicesNeeds  needsTitleBlue="Scalable, Cloud-Based " needsMoreTitle="Solutions" NeedsImage="/images/needs-image-finalest.png"
                    needsDescription="In today's fast-paced digital world, where technological advancements and market trends shift rapidly, businesses face the ongoing challenge of adapting to constant change and meeting increasingly sophisticated customer expectations. Our deep expertise in digital innovation, coupled with a commitment to understanding each client's unique needs, allows us to craft tailored solutions that satisfy our clients." />
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
