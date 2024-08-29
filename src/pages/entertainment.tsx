import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const Entertainment: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Entertainment" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Your Partner in Entertainment Innovation" needsMoreTitle={true} previewImage="/images/entertainment-banner.png" pagetitle="Entertainment" />
                <ServicesNeeds needsTitleBlue="Advanced Solutions" needsMoreTitle=" to Meet Evolving Consumer Demands in Entertainment" NeedsImage="/images/entertainment-image-right.png"
                    needsDescription="The entertainment industry is driven by innovation and evolving consumer demands. From streaming services and gaming to live events and AR/VR experiences, technology plays a crucial role in creating engaging and immersive content. Our mission is to empower entertainment companies with advanced solutions to captivate audiences and stay ahead of the curve." />
                <CloudOps needsTitle="Why Choose " needsTitleBlue=" Us?" />
                <Enterprise />
                <CaseStudiesSlider heading="Case" blueheading="Studies" />
                <Innovation className="innovation-bg text-white" />
            </div>
        </Layout>
    );
};

export default Entertainment;
