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
        <Layout showContactForm={true} title="Novatore Solutions -  Ai Consulting" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Transform Your Business with AI Consulting Services" pagetitle="Artificial Intelligence" needsMoreTitle="Get in Touch" previewImage="/images/consulting-banner-bg.png" maxwidth="800px" />
                <ServicesNeeds needsTitleBlue="Introduction" NeedsImage="/images/consulting-image-right.png"
                    needsDescription="We seamlessly integrate strategy, cutting-edge technology, and forward-thinking innovation to empower your business to excel in the rapidly evolving era of artificial intelligence. Our comprehensive AI Consulting services are meticulously crafted to meet the unique needs of your organization, ensuring that you stay ahead of the competition. Our team of experts is dedicated to elevating your business operations." />
                <DataServicesSection heading="Our AI Consulting " headingBlue=" Services" data={ConsultingData} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AiConsulting;
