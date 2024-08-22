import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const StorageServices: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Storage Services" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Storage Services for Uninterrupted Business Growth" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/storage-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="Unlock the Power of " needsTitleBlue="Data Management" NeedsImage="/images/storage-image-right.png"
                    needsDescription="In the digital age, data is the backbone of every business. Our IT Storage Solutions provide the reliability, security, and scalability your enterprise needs to thrive. With our advanced storage technology, you can safeguard your data, streamline operations, and focus on what truly matters—growing your business. Our team of experts delivers tailored solutions designed to meet your demands." />
                <ExpertServices needsTitle="Empowering Your Business with" needsTitleBlue="Innovative Storage" NeedsImage="/images/storage-img-left.png"
                    needsDescription="Choosing Novatore Solutions means partnering with industry leaders who are committed to your success. Our storage services empower businesses to maximize their potential through secure and efficient data management. Whether you're a startup or a large enterprise, our solutions are designed to scale with your needs, providing unparalleled support at every stage of your growth." />
                <CloudOps needsTitle="Our" needsTitleBlue="Storage Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default StorageServices;
