import ContactForm from "@/components/ContactForm";
import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import Navbar from "@/components/Navbar";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Head from "next/head";
import DataServicesSection from "@/components/DataServicesSection";
import { AiData } from "@/constants/indesx";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramFour } from "@/utils";
import Layout from "@/components/Layout";

const ArtificialIntelligence: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutionss - Artificial Intelligence" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Artificial Intelligence" previewImage="/images/artifical-banner.png" />
                <ServicesNeeds needsTitle="The Real Power of " needsTitleBlue="Artificial Intelligence" NeedsImage="/images/needs-image-seven.png"
                    needsDescription="In the fast-evolving digital landscape, Artificial Intelligence (AI) stands as a beacon of innovation, transforming industries
                 and driving new levels of efficiency and intelligence. Our software company is at the forefront of this revolution, offering a suite of AI services
                  designed to empower businesses to use the full potential of this technology. " />
                <ExpertServices needsTitle="Customised " needsTitleBlue="AI Solutions" needsMoreTitle="for Your Business" NeedsImage="/images/needs-image-eight.png"
                    needsDescription="We pride ourselves on our expertise and dedication to providing customised AI solutions that meet the unique needs of each client.
                Our team of experienced professionals works closely with you to understand your challenges and objectives, ensuring that our AI services not only meet but exceed your expectations.
                With our robust and scalable AI offerings, you can stay ahead of the competition and drive your business towards a future of innovation and success. " />
                <DataServicesSection heading="Our AI" headingBlue="Services" data={AiData} />
                <DiagramSlider heading="AI-Driven Solutions for" headingBlue="Modern Challenges" image={DiagramFour} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default ArtificialIntelligence;
