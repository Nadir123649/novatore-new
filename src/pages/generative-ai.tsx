import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const GenerativeAi: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Generative AI: Revolutionizing Art, Design, and Content Creation" description="Unlock the transformative power of Generative AI with our comprehensive suite of services designed to elevate your business to new heights. Learn more today!" keywords="Generative AI, Text-to-Image AI, Multimodal AI, AI Governance, Generative Design, AI Music Generation, Synthetic Data, Speech Synthesis AI, Conversational AI, AI-Generated Content">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Generative AI: Revolutionizing Art, Design, and Content Creation" pagetitle="Artificial Intelligence" needsMoreTitle="Get in Touch" previewImage="/images/generative-banner-bg.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="Explore Our " needsTitleBlue="Generative AI" needsMoreTitle="Solutions" NeedsImage="/images/generative-right-image.png"
                    needsDescription="Unlock the transformative power of Generative AI with our comprehensive suite of services designed to elevate your business to new heights. Our offerings cover a wide range of innovative applications, including text-to-image generation and multimodal AI solutions, which seamlessly integrate multiple forms of data to provide holistic insights and creative outputs. By leveraging our Generative AI, you can enhance operational efficiency." />
                <ExpertServices needsTitle="AI Implementation with Advanced " needsTitleBlue="AI Governance" NeedsImage="/images/generative-left-image.png"
                    needsDescription="As businesses increasingly adopt AI technologies, it becomes imperative to implement robust governance frameworks to ensure ethical and responsible usage. Our Generative AI services include a strong focus on AI governance, providing you with the tools and strategies needed to navigate the complexities of AI deployment.  By partnering with us, you can confidently explore the potential of Generative AI while maintaining transparency, accountability, and trust with your stakeholders." />
                <CloudOps needsTitle="Our Generative AI" needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default GenerativeAi;
