import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramCustomServices, DiagramServices } from "@/utils";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { ProductWebData } from "@/constants/indesx";

const CustomSoftwareDevelopment: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Custom Software Development" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Custom Software Development" previewImage="/images/custom-software-banner.png" />
                <ServicesNeeds needsTitle="Innovative Software Development for " needsTitleBlue="  Modern Businesses" NeedsImage="/images/software-image-right.png"
                    needsDescription="Businesses require innovative and adaptable software solutions to stay competitive. Our custom software development services offer tailored solutions that align with your unique business needs, helping you achieve your goals with efficiency and precision. By using advanced technologies and industry best practices, we ensure that your digital transformation journey is seamless and impactful." />
                <ExpertServices needsTitle="Our " needsTitleBlue="Expertise" needsMoreTitle=" in Web and Mobile Application Development" NeedsImage="/images/software-image-left.png"
                    needsDescription="At Novatore Solutions, we deliver exceptional software solutions that enhance user experience, streamline operations, and drive business growth. Our team of experienced developers and designers is dedicated to crafting high-quality web applications, mobile apps, and UI/UX designs that resonate with your target audience. With our expertise, you can transform your ideas into powerful digital assets that propel your business forward. " />
                <DataServicesSection heading="Explore Our Comprehensive " headingBlue="Services"  data={ProductWebData} />
                <DiagramSlider heading="A Superior " headingBlue="Software Development" needsMoreTitle="Approach" image={DiagramCustomServices} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default CustomSoftwareDevelopment;
