import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import DataServicesSection from "@/components/DataServicesSection";
import { AiData } from "@/constants/indesx";
import DiagramSlider from "@/components/DiagramSlider";
import { AIDiagram } from "@/utils";
import Layout from "@/components/Layout";

const ArtificialIntelligence: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Artificial Intelligence" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Access Our High-Quality AI Services" pagetitle="Artificial Intelligence" needsMoreTitle="Get in Touch" previewImage="/images/artifical-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="The Real Power of " needsTitleBlue="Artificial Intelligence" NeedsImage="/images/ai-right.png"
                    needsDescription="In the fast-evolving digital landscape, Artificial Intelligence (AI) stands as a beacon of innovation, transforming industries and driving new levels of efficiency, intelligence, and creativity. As businesses across the globe grapple with the challenges of staying competitive in a rapidly changing environment, AI emerges as a crucial enabler of strategic growth, operational excellence, and personalized customer experiences. " />
                <ExpertServices needsTitle="Customised " needsTitleBlue="AI Solutions" needsMoreTitle="for Your Business" NeedsImage="/images/ai-left.png"
                    needsDescription="We pride ourselves on our expertise and dedication to providing customised AI solutions that meet the unique needs of each client.
                Our team of experienced professionals works closely with you to understand your challenges and objectives, ensuring that our AI services not only meet but exceed your expectations.
                With our robust and scalable AI offerings, you can stay ahead of the competition and drive your business towards a future of innovation and success. " />
                <DataServicesSection heading="Our AI" headingBlue="Services" data={AiData} />
                <DiagramSlider heading="AI-Driven Solutions for" headingBlue="Modern Challenges" image={AIDiagram} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default ArtificialIntelligence;
