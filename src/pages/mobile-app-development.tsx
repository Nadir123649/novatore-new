import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";

const MobileAppDevelopment: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Mobile App Development" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Mobile App Development" previewImage="/images/mobile-banner.png" />
                <ServicesNeeds needsTitle="Introduction" NeedsImage="/images/mobile-introduction.png"
                    needsDescription="As one of the best mobile app development companies, we offer comprehensive mobile app development services tailored
                     to meet your business needs. Our team of experts uses advanced technologies and best practices to deliver high-quality mobile applications
                      that drive business growth." />
                 <CloudOps needsTitle="Our" needsTitleBlue="Services"/>
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default MobileAppDevelopment;
