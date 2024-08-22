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
                <HeroBanner bannerHeading="Maximizing Efficiency With Our Mobile App Development" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/mobile-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="Introduction" NeedsImage="/images/mobile-introduction.png"
                    needsDescription="As a leading mobile app development company, we pride ourselves on offering a wide range of comprehensive mobile app development services designed to meet the unique needs of your business. Whether you're a startup looking to make a mark in the mobile space or an established enterprise, our team of seasoned professionals is here to help you succeed." />
                <CloudOps needsTitle="Our" needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default MobileAppDevelopment;
