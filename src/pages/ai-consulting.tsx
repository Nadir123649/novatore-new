import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { ConsultingData } from "@/constants/indesx";

const AiConsulting: NextPage = () => {
    return (
        <Layout title="Novatore Sols -  Ai Consulting" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Transform Your Business with AI Consulting Services" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/consulting-banner-bg.png" />
                <ServicesNeeds needsTitleBlue="Introduction" NeedsImage="/images/consulting-image-right.png"
                    needsDescription="We blend strategy, technology, and innovation to help your business thrive in the era of artificial intelligence with our AI Consulting services. Our full set of services, including AI Strategy Development, Machine Learning Consulting, and Predictive Analytics, is designed to elevate your business operations and decision-making processes. " />
                <DataServicesSection heading="Our AI Consulting " headingBlue=" Services" data={ConsultingData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AiConsulting;
