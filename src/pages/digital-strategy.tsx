import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";

const DigitalStrategy: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Digital Consulting & Strategy Services | Novatore Solutions" description="Unlock business potential with Novatore Solutions' expert digital consulting and strategy services. We build solutions for digital innovation. Contact us now!" keywords="Digital strategy, Digital consultation, Digital innovation, Personalized digital consulting, Digital transformation" >
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Optimized Digital Strategy & Consultation" pagetitle="Digital Services" needsMoreTitle="Get in Touch" previewImage="/images/digitalstrategy-banner.png" maxwidth="700px" />
                <ServicesNeeds needsTitle="Turning Your Vision Into" needsTitleBlue="Reality" needsMoreTitle="" NeedsImage="/images/strategy-right.png"
                    needsDescription="Enterprise Mobility Management (EMM) empowers organizations to efficiently oversee, control, and manage all mobile devices, applications, and data from a single, centralized platform. Our EMM solutions offer a robust suite of tools designed to enhance visibility, monitor device usage, and ensure regulatory compliance. By streamlining the management of your mobile assets, we help you maintain a secure environment." />
                <ExpertServices needsTitle="Digital Strategies" needsTitleBlue=" Ready For The Future" NeedsImage="/images/strategy-left.png"
                    needsDescription="Our personalized digital consulting services are not just about meeting immediate needs; they are engineered to deliver groundbreaking and sustainable results that drive long-term success. By aligning cutting-edge technologies with our clients' unique goals, we empower them to transform their operations, enhance their competitive edge, and achieve unparalleled success in an ever-evolving digital landscape." />
                <CloudOps needsTitle="What DO" needsTitleBlue="We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DigitalStrategy;
