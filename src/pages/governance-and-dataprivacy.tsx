import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";
import DataServicesSection from "@/components/DataServicesSection";
import { GovernanceDataPrivacy } from "@/constants/indesx";

const GovernanceAndDataPrivacy: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Governance, Risk, Compliance & Data Privacy" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="AI Governance Frameworks, AI Risk Management, Compliance in AI, Data Privacy Regulations, Ethical AI Practices, AI Policy Development, GDPR and AI, AI Compliance Standards, Data Security in AI, AI Regulatory Compliance">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Governance, Risk, Compliance & Data Privacy" pagetitle="Cybersecurity" needsMoreTitle="Get in Touch" previewImage="/images/governence-banner-bg.png" maxwidth="800px" />
                <ServicesNeeds needsTitle="Welcome to Your " needsTitleBlue=" AI Assurance Partner" NeedsImage="/images/assurance-partner.png"
                    needsDescription="We understand the multifaceted complexities and challenges that come with integrating artificial intelligence into your business operations. As a trusted partner, we offer a comprehensive suite of services in Governance, Risk & Compliance, and Data Privacy to guide you through this transformation. Our approach ensures that your AI systems are ethically designed, secure, and fully compliant." />
                <DataServicesSection heading="Our " headingBlue="Services" data={GovernanceDataPrivacy} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default GovernanceAndDataPrivacy;
