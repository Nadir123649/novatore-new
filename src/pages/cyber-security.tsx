import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramFive } from "@/utils";
import Layout from "@/components/Layout";

const CyberSecurity: NextPage = () => {

    return (
        <Layout title="Novatore Sols - Cyber Security" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Prevent, Detect, Respond: Total Cybersecurity" pagetitle="Cybersecurity" needsMoreTitle="Get in Touch" previewImage="/images/cyber-banner.png" />
                <ServicesNeeds needsTitle="Ensuring Your" needsTitleBlue="Digital Safety" NeedsImage="/images/cyber-security-right.png"
                    needsDescription="Protecting your data and ensuring compliance with regulatory standards is more important than ever. At Novatore Solutions,
                 we offer you cybersecurity solutions that keep your information safe from threats while ensuring your organisation adheres to all relevant laws and regulations.
                  Our team of experts is dedicated to delivering tailored services that meet your specific needs, whether it's securing your network or performing thorough risk assessments. " />
                <ExpertServices needsTitle="Comprehensive" needsTitleBlue="Cybersecurity Solutions" NeedsImage="/images/cyber-security-left.png"
                    needsDescription="Our comprehensive cybersecurity services cover every aspect of protecting your digital environment, ensuring that your business remains secure in an increasingly complex landscape. From governance, risk management, and compliance to in-depth penetration testing and vulnerability assessments, we provide tailored solutions to meet your unique security needs. We are committed to delivering robust and reliable security measures." />
                <CloudOps needsTitle="What DO" needsTitleBlue="We Offer?" />
                <DiagramSlider heading="Comprehensive Cybersecurity Strategy:" headingBlue="Safeguarding Every Layer" image={DiagramFive} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default CyberSecurity;

