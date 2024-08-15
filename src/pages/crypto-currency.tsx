import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { CryptoData } from "@/constants/indesx";

const Cryptocurrency: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Cryptocurrency" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Expertise in Cryptocurrency and Blockchain Technology" needsMoreTitle={true} previewImage="/images/crypto-banner.png" />
                <ServicesNeeds needsTitle="A " needsTitleBlue="Decade of Success" needsMoreTitle="in Delivering Crypto Projects" NeedsImage="/images/crypto-image-right.png"
                    needsDescription="With 12 years of dedicated experience in the cryptocurrency industry, we have successfully delivered over 75 projects, making us a leader in blockchain technology solutions. Our expertise spans the full spectrum of crypto services, including NFT marketplaces, DeFi applications, and cryptocurrency trading platforms. We are committed to providing exceptional services that empower businesses to thrive in the fast-evolving digital currency market." />
                <CloudOps needsTitle="Why " needsTitleBlue=" Partner " needsMoreTitle=" with Us?" />
                <DataServicesSection heading="Our " headingBlue="Cryptocurrency" needsMoreTitle=" Software Services" data={CryptoData} cardMinHeight="150px" />
                <Enterprise />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Cryptocurrency;
