import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import DataServicesSection from "@/components/DataServicesSection";
import { AwsData } from "@/constants/indesx";
import DiagramSlider from "@/components/DiagramSlider";
import { AWSDiagram } from "@/utils";
import Layout from "@/components/Layout";

const AWS: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Amazon Web Services" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Flexible Network Architecture With Our AWS" pagetitle="Amazon Web Services" needsMoreTitle="Get in Touch" previewImage="/images/aws-banner.png" maxwidth="800px" />
                <ServicesNeeds needsTitle="Transforming Businesses With " needsTitleBlue="AWS" NeedsImage="/images/amazon-right.png"
                    needsDescription="Amazon Web Services (AWS) stands as a powerhouse, enabling businesses to leverage scalable and reliable cloud solutions.
               At our software company, we use the full potential of AWS to drive innovation, enhance productivity, and streamline operations.
               Our dedicated team of AWS-certified experts ensures that your business can seamlessly integrate cloud solutions, offering a competitive
               edge in today’s fast-paced market." />

                <ExpertServices needsTitle="AWS Services:Changing Your " needsTitleBlue="Digital Landscape" NeedsImage="/images/amazon-left.png"
                    needsDescription="With AWS, we offer a suite of services designed to meet the diverse needs of our clients.
               From robust storage solutions to advanced networking capabilities, and insightful analytics,
               we provide comprehensive support to ensure your business runs smoothly and efficiently. 
               Explore our AWS services and discover how we can help you achieve your digital transformation goals. " />
                <DataServicesSection heading="Our AWS" headingBlue="Services" data={AwsData} />
                <DiagramSlider heading="Overview of Key AWS Solutions for Enhanced " headingBlue="System Performance" image={AWSDiagram} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AWS;
