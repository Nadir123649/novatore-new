import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";
import DataServicesSection from "@/components/DataServicesSection";
import { ProductEngineeringData } from "@/constants/indesx";

const Data: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Data" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Data" previewImage="/images/data-banner.png" />
                <ServicesNeeds needsTitle="Unlock the " needsTitleBlue=" Power of Your Data" NeedsImage="/images/data-expert-right.png"
                    needsDescription="We believe data is the cornerstone of informed decision-making and innovation. We understand that having accurate and actionable data is crucial for maintaining a competitive edge. Our team of experts works tirelessly to ensure that your data is not only collected and stored efficiently but also transformed into meaningful insights that can guide your strategic decisions. Whether you are a startup looking to establish a data-driven culture or an established enterprise aiming to optimize your data processes, we are here to support you. " />
                <ExpertServices needsTitle="Unlock Innovation with " needsTitleBlue=" Tailored Software " NeedsImage="/images/product-image-left.png"
                    needsDescription="Whether you're looking to develop enterprise software, mobile applications, or integrate the latest technologies like AI, IoT, or blockchain, our expert team is here to guide you through every step of the process. Let us help you navigate the complexities of software development and achieve your business goals. " />
                <CloudOps />
                <DataServicesSection heading="Our Proven Product Engineering " headingBlue=" Process" data={ProductEngineeringData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default Data;
