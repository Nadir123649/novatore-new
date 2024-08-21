import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const NetworkingServices: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Networking Services" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Networking Redefined: Connecting Your Business to Success" previewImage="/images/networking-banner.png" />
                <ServicesNeeds needsTitle="Solutions for Your " needsTitleBlue=" IT Needs" NeedsImage="/images/networking-image-right.png"
                    needsDescription="Efficient and secure networking is the backbone of any successful business. We offer state-of-the-art networking solutions designed to enhance your business's connectivity and productivity. Our team of experts delivers tailored IT network services, ensuring robust network security and seamless management to keep your operations running smoothly." />
                <ExpertServices needsTitle="Why Choose " needsTitleBlue=" Novatore Solutions" needsMoreTitle=" for Networking Services?" NeedsImage="/images/networking-image-left.png"
                    needsDescription="Our dedication to providing top-notch IT services makes us a leader in the industry. With years of experience and a focus on innovation, we empower businesses with reliable and scalable network solutions. We understand the unique needs of software companies and offer customized services to optimize your network infrastructure, ensuring your business remains at the forefront of technology." />
                <CloudOps needsTitle="Comprehensive Networking Services " needsTitleBlue="We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default NetworkingServices;
