import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramOne } from "@/utils";
import Layout from "@/components/Layout";

const DigitalService: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Digital Services" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Digital Services" previewImage="/images/digital-service.png" />
                <ServicesNeeds needsTitle="Best-Suited" needsTitleBlue="Digital Services" needsMoreTitle="For Your Needs" NeedsImage="/images/bestsuited-digitalservice.png"
                    needsDescription="At Novatore Solutions, we are dedicated to empowering businesses through innovative digital solutions. Our suite of digital services 
            is designed to streamline operations, enhance customer experiences, and drive growth. With a team of experienced professionals and a commitment to excellence,
             we offer services that cater to the unique needs of each client. " />
                <ExpertServices needsTitle="Expert Guidance for Your" needsTitleBlue="Digital Journey" NeedsImage="/images/digital-journey.png"
                    needsDescription="Our digital services encompass a range of specialized areas, including Digital Consulting & Strategy, Business Applications,
             Product Engineering, and DevOps & SecOps. Each service is tailored to address specific challenges and opportunities, ensuring that you receive
              the support and guidance you need to achieve your business objectives. " />
                <CloudOps needsTitle="What DO" needsTitleBlue="We Offer" />
                <DiagramSlider heading="A Superior" headingBlue="Digital Services" needsMoreTitle="Approach" image={DiagramOne} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DigitalService;
