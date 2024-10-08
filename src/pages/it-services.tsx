import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramServices } from "@/utils";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { ProductServicesData } from "@/constants/indesx";

const ItServices: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore's IT Expertise At Your Service " description="Novatore Solutions delivers expert IT services to help businesses thrive in the digital age. We provide tailored solutions that enhance efficiency and security. ">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Novatore's IT Expertise At Your Service" pagetitle="IT Services" needsMoreTitle="Get in Touch" previewImage="/images/It-banner.png" maxwidth="780px" />
                <ServicesNeeds needsTitle="Uplift Your Business with" needsTitleBlue=" Advanced" needsMoreTitle="IT Services" NeedsImage="/images/it-service-right.png"
                    needsDescription="In an increasingly mobile world, ensuring your team has access to vital business resources from any location is crucial. Our IT services are designed to empower your business with the tools and expertise needed to stay ahead of the competition. From enhancing mobility to transforming digital strategies, we deliver tailored solutions that align with your business goals and ensure sustained growth." />
                <ExpertServices needsTitle="You Need The Best " needsTitleBlue=" Enterprise Mobility " needsMoreTitle="Management" NeedsImage="/images/it-service-left.png"
                    needsDescription="By partnering with us, you gain access to a wealth of experience and knowledge, enabling your business to thrive in the digital era. With a focus on excellence and innovation, our team of experts is dedicated to delivering unparalleled service quality, ensuring your business operates efficiently and securely. Discover how our services can transform your enterprise and position you for success in the digital age. " />
                <DataServicesSection heading="Our " headingBlue="Services" data={ProductServicesData} />
                <DiagramSlider heading="Comprehensive IT Solutions for " headingBlue="Business Excellence" image={DiagramServices} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default ItServices;
