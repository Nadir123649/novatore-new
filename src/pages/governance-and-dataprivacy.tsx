import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";

import DataServicesSection from "@/components/DataServicesSection";
import { GovernanceDataPrivacy } from "@/constants/indesx";

const GovernanceAndDataPrivacy: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Governance, Risk & Compliance, Data Privacy | Novatore Solutions" description="We offer expert governance, risk, and compliance services, ensuring your business stays secure and compliant with regulations. Protect your data with confidence." keywords="AI Governance Frameworks, AI Risk Management, Compliance in AI, Data Privacy Regulations, Ethical AI Practices, AI Policy Development, GDPR and AI, AI Compliance Standards, Data Security in AI, AI Regulatory Compliance">
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
