import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { processBusinessData, } from "@/constants/indesx";

const BusinessProcessAutomation: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="What is business process automation, Benefits of business process automation, Business process automation best practices, Steps in business process automation, Business process automation tools, Types of business process automation, Business process automation workflow, Key considerations for business process automation, Business process automation examples, Challenges in business process automation, Business process automation services, Business process automation solutions, Business process automation providers, Business process automation consulting, Business process automation software" >
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Cost-Effective Business Process Automation" pagetitle="Transformative Solutions" needsMoreTitle="Get in Touch" previewImage="/images/process-automation.png" maxwidth="900px" />
                <ServicesNeeds needsTitle="Process Automation to" needsTitleBlue="Transform" needsMoreTitle="Your Business" NeedsImage="/images/automation-right.png"
                    needsDescription="Experience the future of efficiency with Novatore Solution’s forefront business process automation (BPA) solutions. Our services are intended to accelerate processes, increase efficiency, and result in significant cost savings. We improve the speed and dependability of your operations by utilizing advanced business process automation solutions and best practices. Our skilled team offers end-to-end business process automation services." />
                <DataServicesSection heading="Our Business Process Automation " headingBlue="Services" data={processBusinessData} />
                <CloudOps needsTitle="The Automations That Every" needsTitleBlue="Tech Business Needs" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default BusinessProcessAutomation;
