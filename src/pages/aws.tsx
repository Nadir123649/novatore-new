import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { AwsAutomationData } from "@/constants/indesx";

const AWS: NextPage = () => {
    return (
        <Layout title="Novatore Sols - AWS" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="AWS Innovation Hub: Transforming Ideas into Reality" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/aws-banner-bg.png" />
                <ServicesNeeds needsTitle="Harness the Power of AWS with Our" needsTitleBlue="Expert Services" NeedsImage="/images/aws-image-right.png"
                    needsDescription="Our offerings include AWS architecture design, cloud migration, managed services, and consulting, all grounded in AWS best practices.
                     Whether you're exploring the benefits of AWS or seeking expert guidance on AWS implementation, our team of certified professionals is here to guide you every 
                     step of the way." />
                <DataServicesSection heading="Our AWS" headingBlue="Services" data={AwsAutomationData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AWS;
