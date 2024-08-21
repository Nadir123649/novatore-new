import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import DataServicesSection from "@/components/DataServicesSection";
import { dataServices } from "@/constants/indesx";
import DiagramSlider from "@/components/DiagramSlider";
import { DiagramTwo } from "@/utils";
import Layout from "@/components/Layout";

const Data: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Data" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Our Innovative Approach Towards Data Engineering " previewImage="/images/data-engenering.png" />
                <ServicesNeeds needsTitle="Unlock the" needsTitleBlue="Power of Your Data" NeedsImage="/images/needs-image-three.png"
                    needsDescription="We believe data is the cornerstone of informed decision-making and innovation. We understand that having accurate 
                and actionable data is crucial for maintaining a competitive edge. Our team of experts works tirelessly to ensure that your
                data is not only collected and stored efficiently but also transformed into meaningful insights that can guide your strategic decisions.
                Whether you are a startup looking to establish a data-driven culture or an established enterprise aiming to optimize your data processes,
                we are here to support you." />
                <ExpertServices needsTitle="Tailored" needsTitleBlue="Data Solutions" needsMoreTitle="for Every Need" NeedsImage="/images/needs-imagge-four.png"
                    needsDescription="We take pride in offering tailored solutions that cater to the specific needs of your organization. By leveraging the latest
                 technologies and methodologies, we ensure that your data is processed, analyzed, and presented in a way that is easy to understand and actionable.
                 Our approach is holistic, covering everything from data collection and storage to advanced analytics and predictive modeling. We are committed to
                 helping you make data-driven decisions that lead to sustainable growth and success. " />
                <DataServicesSection heading="Our Data" headingBlue="Services" data={dataServices} />
                <DiagramSlider heading="Our Proven" headingBlue="Data Engineering" needsMoreTitle="Workflow" image={DiagramTwo} />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default Data;
