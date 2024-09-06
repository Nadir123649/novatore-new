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
        <Layout showContactForm={true} title="Novatore Solutions - AWS" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="What is AWS, AWS best practices, AWS architecture, AWS services list, Benefits of AWS, AWS consulting services, AWS managed services, AWS cloud migration, AWS solutions provider, AWS implementation services">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="AWS Innovation Hub: Transforming Ideas into Reality" pagetitle="Cloud" needsMoreTitle="Get in Touch" previewImage="/images/aws-banner-bg.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="The Power of AWS with Our" needsTitleBlue="Expert Services" NeedsImage="/images/aws-image-right.png"
                    needsDescription="Our AWS services encompass a wide range of solutions tailored to meet the specific needs of your business. We specialize in AWS architecture design, ensuring that your cloud infrastructure is built with scalability, security, and efficiency in mind. Our cloud migration services are designed to seamlessly transition your existing workloads to AWS, minimizing downtime and ensuring a secure transfer." />
                <DataServicesSection heading="Our AWS" headingBlue="Services" data={AwsAutomationData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AWS;
