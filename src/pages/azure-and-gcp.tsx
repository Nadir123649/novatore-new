import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import CloudOps from "@/components/CloudOps";

const AzureAndGcp: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Azure & GCP" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Azure & GCP: Powering the Future of Cloud Computing" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/azure-banner-bg.png" />
                <ServicesNeeds needsTitle="Optimize Your Cloud Strategy with Microsoft Azure and GCP" needsTitleBlue="Services" NeedsImage="/images/azure-right-image.png"
                    needsDescription="In the ever-evolving landscape of cloud computing, choosing the right provider is crucial for maximizing efficiency, scalability, and cost-effectiveness.
                     Our software company offers comprehensive services utilizing two leading cloud platforms: Microsoft Azure and Google Cloud Platform (GCP). Both platforms provide robust solutions
                      for a variety of business needs, including data storage, machine learning, application development, and more." />
                <CloudOps needsTitle="Microsoft Azure" needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default AzureAndGcp;
