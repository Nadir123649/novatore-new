import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import CloudOps from "@/components/CloudOps";

const AzureAndGcp: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="What is Microsoft Azure, Azure best practices, Azure services list, Benefits of Azure, Azure architecture, What is Google Cloud Platform, GCP best practices, GCP services list, Benefits of GCP, GCP architecture">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Azure & GCP: Powering the Future of Cloud Computing" pagetitle="Cloud" needsMoreTitle="Get in Touch" previewImage="/images/azure-banner-bg.png" maxwidth="900px" />
                <ServicesNeeds needsTitle="Cloud Strategy with Microsoft Azure and GCP " needsTitleBlue="Services" NeedsImage="/images/azure-right-image.png"
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
