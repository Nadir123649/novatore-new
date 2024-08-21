import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const UiUxDesign: NextPage = () => {
    return (
        <Layout title="Novatore Sols - UI/UX Design" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Driving Excellence in UI/UX and Branding Services" previewImage="/images/ui-ux-banner.png" />
                <ServicesNeeds needsTitle="Elevate Your Digital Experience with Our " needsTitleBlue=" UI/UX Design Services" NeedsImage="/images/ux-image-right.png"
                    needsDescription="In a digital-first world, the success of your software hinges on the user experience it delivers. Our UI/UX design services combine aesthetic appeal with functional excellence, ensuring that every touchpoint meets the high expectations of modern users. At Novatore, we understand that exceptional UI/UX design is not just about looking good — it's about creating user interfaces that are intuitive, engaging, and efficient. " />
                <ExpertServices needsTitle="Why Choose Us for Your " needsTitleBlue=" UI/UX Needs?" NeedsImage="/images/ui-ux-banner-left.png"
                    needsDescription="Our bespoke UI/UX services are crafted to meet the unique needs of software businesses. We employ a user-centered approach that prioritizes accessibility, ensuring that our designs are not only beautiful but also functional and inclusive. By choosing us, you tap into a wealth of knowledge, creativity, and technical expertise, all aimed at transforming your software applications into powerful, user-friendly tools that drive business success." />
                <CloudOps needsTitle="Our UI/UX Design " needsTitleBlue="Services " needsMoreTitle="Include:" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default UiUxDesign;
