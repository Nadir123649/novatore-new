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
        <Layout showContactForm={true} title="Novatore Sols - Custom Software Development" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Explore Our Expertise in Custom Software Development" pagetitle="Custom Software Development" needsMoreTitle="Get in Touch" previewImage="/images/custom-software-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitleBlue="Software Development" needsMoreTitle="for Modern Businesses" NeedsImage="/images/custom-development-image.png"
                    needsDescription="Businesses require innovative and adaptable software solutions to stay competitive. Our custom software development services offer tailored solutions that align with your unique business needs, helping you achieve your goals with efficiency and precision. By using advanced technologies and industry best practices, we ensure that your digital transformation journey is seamless and impactful." />
                <ExpertServices needsTitle="Our Expertise in  " needsTitleBlue="Web" spantitle="&" needsMoreTitleblue="Mobile" needsMoreTitle=" Application Development" NeedsImage="/images/expertise-applications-image.png"
                    needsDescription="At Novatore Solutions, we are passionate about delivering innovative software solutions that redefine user experiences, streamline complex operations, and accelerate business growth. Our team of expert developers and designers is dedicated to crafting high-quality web applications, dynamic mobile apps, and visually stunning UI/UX designs. We pride ourselves on turning your unique ideas into powerful digital assets that exceed expectations." />
                <DataServicesSection heading="Explore Our Comprehensive " headingBlue="Services" data={ProductWebData} />
                <DiagramSlider heading="A Superior " headingBlue="Software Development" needsMoreTitle="Approach" image={DiagramCustomServices} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default CustomSoftwareDevelopment;
