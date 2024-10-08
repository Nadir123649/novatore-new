import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";

const TestingAndQa: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Testing & QA Services to Ensure Reliability | Novatore Solutions" description="Ensure top-notch quality with Novatore Solutions' testing and QA services. Our processes guarantee reliable, high-performance software. Learn more!">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Reliable QA Services to Elevate Your Software Quality" pagetitle="Transformative Solutions" needsMoreTitle="Get in Touch" previewImage="/images/testing-banner.png" maxwidth="1000px" />
                <ServicesNeeds needsTitle="Excellent and Reliable " needsTitleBlue=" Software Testing Services" NeedsImage="/images/testing-bg.png"
                    needsDescription="In today's fast-paced digital world, delivering flawless software is critical to staying ahead of the competition. 
                    At Novatore Solutions, we offer top-tier Software Testing Services and Quality Assurance Solutions to ensure your software products are robust, 
                    reliable, and ready for market. Our dedicated team of experts employs state-of-the-art testing methodologies to provide comprehensive QA Testing for IT systems,
                    ensuring they meet the highest standards of quality and performance." />
                <ExpertServices needsTitle="Unparalleled" needsTitleBlue="Quality Assurance" needsMoreTitle="Solutions" NeedsImage="/images/testing-rectangle.png"
                    needsDescription="We pride ourselves on being leaders in the field of software testing and quality assurance. With years of experience and a team of highly skilled professionals,
                     we provide industry-leading solutions that ensure your software operates seamlessly. Our commitment to excellence and
                    customer satisfaction sets us apart as a trusted partner in the tech industry." />
                <CloudOps needsTitle="Explore Our Top" needsTitleBlue="Testing and QA Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default TestingAndQa;
