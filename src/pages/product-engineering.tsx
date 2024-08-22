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
                <HeroBanner bannerHeading="Crafting Tomorrow’s Innovations with Precision Product Engineering" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/product-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="Advanced " needsTitleBlue=" Product Engineering" NeedsImage="/images/product-image-right.png"
                    needsDescription="Our expert team is dedicated to guiding you through every phase of the software development lifecycle, ensuring that each stage is meticulously executed to meet your specific needs and exceed your expectations. We begin with in-depth consultation and design, where our creative and technical teams collaborate to craft a solution that aligns perfectly with your vision." />
                <ExpertServices needsTitle="Unlock Innovation with " needsTitleBlue=" Tailored Software " NeedsImage="/images/product-image-left.png"
                    needsDescription="Whether you're looking to develop enterprise software, mobile applications, or integrate the latest technologies like AI, IoT, or blockchain, our expert team is here to guide you through every step of the process. Let us help you navigate the complexities of software development and achieve your business goals. We provide ongoing support to ensure your software continues to perform optimally." />
                <CloudOps needsTitle="What Product Engineering Services Do" needsTitleBlue="We Offer" />
                <DataServicesSection heading="Our Proven Product Engineering " headingBlue=" Process" data={ProductEngineeringData} />
                <p className="text-center text-[#110229] font-medium text-[22px] max-w-[774px] mx-auto pb-16">Take the first step towards impactful software solutions with Novatore Solutions. Lets discuss how we can transform your ideas into reality. <span className="text-[#2776ea] font-semibold">Talk to Us Today!</span> </p>
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default ProductEngineering;
