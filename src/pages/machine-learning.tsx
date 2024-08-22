import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const MachineLearning: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Machine Learning " description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Unleash Your Potential With Our Machine Learning Tools" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/machine-learning-banner.png" maxwidth="1000px" />
                <ServicesNeeds needsTitle="Discover Our " needsTitleBlue=" Machine Learning " needsMoreTitle="Solutions" NeedsImage="/images/machine-right-bg.png"
                    needsDescription="In the rapidly evolving world of technology, our advanced Machine Learning services stand at the forefront, offering innovative solutions tailored to meet the dynamic needs of various industries. From developing sophisticated quantum algorithms that process data at unparalleled speeds to creating robust neural network models for deep learning, our services are designed to drive transformative results. Our deep learning solutions deliver high accuracy and scalability, ensuring your business stays ahead of the competition. " />
                <ExpertServices needsTitle="Transparent & Real-Time " needsTitleBlue="AI Technologies" NeedsImage="/images/machine-left-bg.png"
                    needsDescription="Trust and transparency are at the heart of our Machine Learning services, with Explainable AI (XAI) ensuring compliance and fostering confidence in AI-driven decisions. Our solutions offer enhanced real-time capabilities through edge computing, reducing latency and enabling local data processing for improved performance. We bring autonomous driving to life with state-of-the-art object detection, path planning, and real-time sensor data processing, ensuring safety and efficiency on the road. " />
                <CloudOps needsTitle="Our Machine Learning " needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default MachineLearning;
