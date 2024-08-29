import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const DigitalTransformation: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Digital Transformation" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Empowering Your Journey With Our Digital Transformation" pagetitle="IT Services" needsMoreTitle="Get in Touch" previewImage="/images/digital-transformation-banner.png" maxwidth="1000px" />
                <ServicesNeeds needsTitle="Empower Your Business with" needsTitleBlue="Expert Solutions" NeedsImage="/images/transformation-righht.png"
                    needsDescription="Staying ahead of the competition requires more than just adopting new technologies. It requires a comprehensive digital transformation strategy tailored to your unique business needs. We specialize in providing Digital Transformation Solutions that drive innovation, enhance efficiency, and fuel growth. Our team of experts is dedicated to helping you navigate the complexities of technology to achieve long-term success." />
                <ExpertServices needsTitleBlue="Novatore Solutions" needsMoreTitle="for Digital Success" NeedsImage="/images/transformation-left.png"
                    needsDescription=" We understand that every business is unique. That's why we offer personalized solutions that align with your specific goals and challenges. Our IT Modernization Services ensure that your technology infrastructure is optimized for performance, security, and scalability. With our proven Cloud Migration Strategies, we help you seamlessly transition to the cloud, unlocking new possibilities for your business. Trust us to be your partner in transforming your business with cutting-edge technology." />
                <CloudOps needsTitle="Our DIgital Transformation" needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DigitalTransformation;
