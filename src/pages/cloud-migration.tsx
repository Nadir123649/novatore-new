import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import CloudOps from "@/components/CloudOps";

const CloudMigration: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Cloud Migration" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="Cloud computing services, Cloud storage solutions, Cloud service providers, Cloud hosting services, Cloud software solutions, Cloud infrastructure providers, Cloud migration services, Cloud consulting firms, Cloud managed services, Cloud backup solutions">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Cloud Migration" pagetitle="Cloud" needsMoreTitle="Get in Touch" previewImage="/images/cloud-migration-banner.png" />
                <ServicesNeeds needsTitle="Cloud Ops" needsTitleBlue="Services" NeedsImage="/images/cloud-migration-bg-right.png"
                    needsDescription="Transitioning your business to the cloud can be a complex process, but with our expertise and comprehensive solutions, 
                    we ensure a smooth and successful migration, enabling you to reap the full benefits of cloud computing. 
                    Explore our range of services designed to meet all your cloud migration needs." />
                <CloudOps needsTitle="What" needsTitleBlue="We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default CloudMigration;
