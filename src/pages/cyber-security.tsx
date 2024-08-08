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
                <HeroBanner bannerHeading="Cyber Security" previewImage="/images/cyber-banner.png" />
                <ServicesNeeds needsTitle="Ensuring Your" needsTitleBlue="Digital Safety" NeedsImage="/images/needs-image-nine.png"
                    needsDescription="Protecting your data and ensuring compliance with regulatory standards is more important than ever. At Novatore Solutions,
                 we offer you cybersecurity solutions that keep your information safe from threats while ensuring your organisation adheres to all relevant laws and regulations.
                  Our team of experts is dedicated to delivering tailored services that meet your specific needs, whether it's securing your network or performing thorough risk assessments. " />

                <ExpertServices needsTitle="Comprehensive" needsTitleBlue="Cybersecurity Solutions" NeedsImage="/images/needs-image-ten.png"
                    needsDescription="Our cybersecurity services include everything from governance, risk, and compliance to detailed penetration testing.
                 We understand the complexities of data privacy and work diligently to protect your sensitive information from potential breaches.
                 Our goal is to provide peace of mind by safeguarding your digital assets with robust and reliable security measures." />
                 <CloudOps needsTitle="What DO" needsTitleBlue="We Offer"/>
                <DiagramSlider heading="Comprehensive Cybersecurity Strategy:" headingBlue="Safeguarding Every Layer" image={DiagramFive} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default CyberSecurity;

