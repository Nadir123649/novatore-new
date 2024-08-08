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
        <Layout title="Novatore Sols - Digital Strategy and Consultation" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Digital Strategy and Consultation" previewImage="/images/digital-service.png" />
                <ServicesNeeds needsTitle="Turning Your Vision Into" needsTitleBlue="Reality" needsMoreTitle="" NeedsImage="/images/digital-reality.png"
                    needsDescription="In today's fast-paced digital world, where change is constant and customer expectations are ever-rising, we help our clients master this dynamic environment. Our expertise in digital innovation enables businesses to stay ahead of the curve." />
                <ExpertServices needsTitle="Digital Strategies" needsTitleBlue=" Ready For The Future" NeedsImage="/images/digital-strategy.png"
                    needsDescription="Drawing on our extensive digital experience, we develop adaptable strategies that uncover new growth opportunities. Our personalized digital consulting services are engineered to produce ground-breaking results, empowering clients to transform their operations and achieve unparalleled success." />
                <CloudOps needsTitle="What DO" needsTitleBlue="We Offer"/>
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DigitalStrategy;
