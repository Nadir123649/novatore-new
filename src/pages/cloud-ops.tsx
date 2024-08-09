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
        <Layout title="Novatore Sols - CloudOps" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="CloudOps" previewImage="/images/cloud-ops-banner.png" />
                <ServicesNeeds needsTitle="Unlock Exceptional Software Performance with" needsTitleBlue="CloudOps" NeedsImage="/images/cloud-image-right.png"
                    needsDescription="In the ever-evolving digital landscape, achieving top-tier software performance is crucial for businesses seeking competitive advantage. 
                    CloudOps, a blend of cloud computing and IT operations, is designed to optimize and streamline your software applications, ensuring they run efficiently and reliably.
                     At Novatore Solutions, our CloudOps services empower businesses by enhancing operational efficiency, improving deployment processes, and guaranteeing high availability." />
                <ExpertServices needsTitle="Comprehensive" needsTitleBlue=" CloudOps Services" needsMoreTitle="Tailored to Your Needs" NeedsImage="/images/cloud-image-left.png"
                    needsDescription="Novatore Solutions offers a comprehensive suite of CloudOps services designed to align with your unique business goals. Our CloudOps consulting provides
                     expert guidance on best practices and cutting-edge tools, ensuring that your cloud strategy is robust and effective.
                     With our CloudOps implementation services, we deploy frameworks that prioritize performance, security, and scalability, all tailored to meet your specific needs." />
                <h2 className="mx-auto text-center font-bold text-[48px] max-w-[800px]">Explore The Power Of <span className="text-[#2776ea] ">CloudOps</span>  For Superior Software Performance</h2>
                <CloudOps needsTitle="Have a Look at What " needsTitleBlue="We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default CloudOpsPage;
