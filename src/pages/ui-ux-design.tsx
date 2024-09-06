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
        <Layout showContactForm={true} title="Novatore Solutions" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="UI/UX Design Services, User Interface Design, User Experience Design, Custom UI/UX Solutions, Mobile App Design, Responsive Web Design, UI/UX Design Process, User-Centered Design, UI/UX Consulting, Usability Testing">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Driving Excellence in UI/UX and Branding Services" pagetitle="Custom Software Development" needsMoreTitle="Get in Touch" previewImage="/images/ui-ux-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="Explore Our " needsTitleBlue="UI/UX Design Services" NeedsImage="/images/ux-image-right.png"
                    needsDescription="In a digital-first world, the success of your software hinges on the user experience it delivers. Our UI/UX design services combine aesthetic appeal with functional excellence, every touchpoint meets the high expectations. At Novatore, we understand that exceptional UI/UX design is not just about looking good — it's about creating user interfaces that are intuitive, engaging, and efficient." />
                <ExpertServices needsTitle="Why Choose Us for Your " needsTitleBlue=" UI/UX Needs?" NeedsImage="/images/ui-ux-banner-left.png"
                    needsDescription="Our bespoke UI/UX services are crafted to meet the unique needs of software businesses. We employ a user-centered approach that prioritizes accessibility, ensuring that our designs are functional. By choosing us, you tap into a wealth of knowledge, creativity, and technical expertise, all aimed at transforming your software applications into powerful, user-friendly tools that drive business success." />
                <CloudOps needsTitle="Our UI/UX Design " needsTitleBlue="Services " needsMoreTitle="Include:" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default UiUxDesign;
