import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";

const CloudOpsPage: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="What is CloudOps, CloudOps best practices, Benefits of CloudOps, CloudOps vs DevOps, CloudOps tools and technologies, CloudOps services, CloudOps consulting, CloudOps implementation, CloudOps solutions, CloudOps managed services">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Achieve Operational Excellence with Professional CloudOps" pagetitle="Cloud" needsMoreTitle="Get in Touch" previewImage="/images/cloud-ops-banner.png" maxwidth="1000px" />
                <ServicesNeeds needsTitle=" Exceptional Software Performance with" needsTitleBlue="CloudOps" NeedsImage="/images/cloud-image-right.png"
                    needsDescription="In the ever-evolving digital landscape, achieving top-tier software performance is crucial for businesses seeking competitive advantage. CloudOps, a blend of cloud computing and IT operations, is designed to optimize and streamline your software applications, ensuring they run efficiently and reliably. Our CloudOps services empower businesses by enhancing operational efficiency, improving deployment processes, and guaranteeing high availability." />
                <ExpertServices needsTitle="CloudOps Services Tailored to " needsTitleBlue=" Your Needs" NeedsImage="/images/cloud-image-left.png"
                    needsDescription="Novatore Solutions offers a comprehensive suite of CloudOps services designed to align with your unique business goals. Our CloudOps consulting provides expert guidance on best practices and cutting-edge tools, ensuring that your cloud strategy is robust and effective. With our CloudOps implementation services, we deploy frameworks that prioritize performance, security, and scalability." />
                <h2 className="mx-auto text-center font-bold text-[48px] max-w-[800px]">Explore The Power Of <span className="text-[#2776ea] ">CloudOps</span>  For Superior Software Performance</h2>
                <CloudOps needsTitle="Have a Look at What " needsTitleBlue="We Offer?" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default CloudOpsPage;
