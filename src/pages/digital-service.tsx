import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramOne, DiagramOneServices } from "@/utils";
import Layout from "@/components/Layout";

const DigitalService: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Digital Services" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Our Digital Services to Enhance Your Online Presence" pagetitle="Digital Services" needsMoreTitle="Get in Touch" previewImage="/images/digital-service.png" maxwidth="1000px" />
                <ServicesNeeds needsTitle="Best-Suited" needsTitleBlue="Digital Services" needsMoreTitle="For Your Needs" NeedsImage="/images/digital-service-right.png"
                    needsDescription="At Novatore Solutions, we are dedicated to empowering businesses through innovative digital solutions. Our suite of digital services 
            is designed to streamline operations, enhance customer experiences, and drive growth. With a team of experienced professionals and a commitment to excellence,
             we offer services that cater to the unique needs of each client. " />
                <ExpertServices needsTitle="Expert Guidance for Your" needsTitleBlue="Digital Journey" NeedsImage="/images/digital-service-left.png"
                    needsDescription="Our comprehensive digital services portfolio is designed to empower your business at every stage of its digital transformation journey. We offer a broad spectrum of specialized services, including Digital Consulting & Strategy, where we work closely to develop a roadmap that aligns with your long-term business goals and market dynamics. Our Business Applications services include designing, developing, and implementing software solutions. " />
                <CloudOps needsTitle="What DO" needsTitleBlue="We Offer" />
                <DiagramSlider heading="A Superior" headingBlue="Digital Services" needsMoreTitle="Approach" image={DiagramOneServices} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DigitalService;
