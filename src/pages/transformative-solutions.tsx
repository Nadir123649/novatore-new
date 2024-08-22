import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramTransformation } from "@/utils";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { ProductTransformationData } from "@/constants/indesx";

const TransformativeSolutions: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Transformative Solutions" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="The Transformative Solutions Your Business Needs" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/transformation-image-banner.png" />
                <ServicesNeeds needsTitle="Transformative" needsTitleBlue=" Solutions" needsMoreTitle="For Your Tech Business" NeedsImage="/images/transformative-solutions-right.png"
                    needsDescription="Staying ahead requires not just keeping up with technology but harnessing it to transform your business operations. At Novatore Solutions, we specialize in delivering transformative solutions that streamline processes, enhance quality, and ensure robust support systems. Our services in Business Process Automation, Testing and QA, and System Support are designed to elevate your business to new heights, enabling you to focus on what truly matters: innovation and growth. " />
                <ExpertServices needsTitle="Gain " needsTitleBlue=" Insights and Optimize " needsMoreTitle="Your Processes" NeedsImage="/images/transformative-solutions-left.png"
                    needsDescription="Our commitment to excellence and innovation has established us as a leader in the software industry. We partner with businesses to provide tailored solutions that align with your strategic goals, leveraging our expertise to optimize efficiency and deliver exceptional results. Discover how our services can transform your operations and position your business for long-term success. " />
                <DataServicesSection heading="Introducing Our  " headingBlue="Services" data={ProductTransformationData} />
                <DiagramSlider heading="Transformative Solutions" headingBlue="Framework" image={DiagramTransformation} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default TransformativeSolutions;
