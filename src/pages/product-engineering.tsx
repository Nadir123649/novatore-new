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

const ProductEngineering: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Product Engineering" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Product Engineering" previewImage="/images/product-banner.png" />
                <ServicesNeeds needsTitle="Uplift Your Enterprise with Advanced " needsTitleBlue=" Product Engineering" NeedsImage="/images/product-image-right.png"
                    needsDescription="At Novatore Solutions, we specialize in delivering modern software product engineering (SPE) services that change ideas into robust, scalable products. Our approach takes care of every stage of the software lifecycle—from designing and developing to testing, deploying, and maintaining software solutions. " />
                <ExpertServices needsTitle="Unlock Innovation with " needsTitleBlue=" Tailored Software " NeedsImage="/images/product-image-left.png"
                    needsDescription="Whether you're looking to develop enterprise software, mobile applications, or integrate the latest technologies like AI, IoT, or blockchain, our expert team is here to guide you through every step of the process. Let us help you navigate the complexities of software development and achieve your business goals. " />
                <CloudOps needsTitle="What Product Engineering Services Do" needsTitleBlue="We Offer" />
                <DataServicesSection heading="Our Proven Product Engineering " headingBlue=" Process" data={ProductEngineeringData} />
                <p className="text-center text-[#110229] font-medium text-[22px] max-w-[694px] mx-auto pb-16">Take the first step towards impactful software solutions with Novatore Solutions. Lets discuss how we can transform your ideas into reality. <span className="text-[#2776ea] font-semibold">Talk to Us Today!</span> </p>
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default ProductEngineering;
