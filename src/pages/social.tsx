import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";
import { retaildataImages } from "@/constants/indesx";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";


const Social: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Social" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Transforming Social Experiences with Innovative Software " needsMoreTitle={true} previewImage="/images/social-banner.png" pagetitle="Social" maxwidth="1100px" />
                <ServicesNeeds needsTitle=" " needsTitleBlue="Overview" needsMoreTitle="" NeedsImage="/images/social-card.png"
                    needsDescription="With over 6 years of expertise in the social sector, our team has successfully delivered 25+ projects that redefine how people connect and interact online. We specialize in developing engaging and user-friendly platforms that enhance social interactions, foster communities, and streamline event planning. Our solutions are designed to meet the unique needs of social enterprises, from community-driven platforms to comprehensive event management systems." />
                <CloudOps needsTitle="Why" needsTitleBlue=" Choose " needsMoreTitle=" Us?" />
                <TechStack title="Technologies We Use" images={retaildataImages} />
                <Enterprise />
                <CaseStudiesSlider heading="Case" blueheading="Studies" />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Social;
