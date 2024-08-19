import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import { GamingData } from "@/constants/indesx";
import TechStack from "@/components/tech-stack";


const Social: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Social" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Transforming Social Experiences with Innovative Software " needsMoreTitle={true} previewImage="/images/social-banner.png" pagetitle="Social" />
                <ServicesNeeds needsTitle=" " needsTitleBlue="Overview" needsMoreTitle="" NeedsImage="/images/social-card.png"
                    needsDescription="With over 6 years of expertise in the social sector, our team has successfully delivered 25+ projects that redefine how people connect and interact online. We specialize in developing engaging and user-friendly platforms that enhance social interactions, foster communities, and streamline event planning. Our solutions are designed to meet the unique needs of social enterprises, from community-driven platforms to comprehensive event management systems." />
                <CloudOps needsTitle="Why" needsTitleBlue=" Choose " needsMoreTitle=" Us?" />
                <TechStack title="Technoligies We Use" />
                <Enterprise />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Social;
