import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import CloudOps from "@/components/CloudOps";

const DataEngineering: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Data Engineering" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code." keywords="What is data engineering, Benefits of cloud migration, Data engineering services, Data architecture design, Data analytics and visualization, Data management best practices, Data security importance, Data integration methods, Data quality enhancement, DataOps benefits">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Comprehensive Data Engineering Tools" pagetitle="Data" needsMoreTitle="Get in Touch" previewImage="/images/data-banner-bg.png" maxwidth="800px" />
                <ServicesNeeds needsTitle="Advanced " needsTitleBlue="Data Engineering " needsMoreTitle="Solutions" NeedsImage="/images/data-engineering-right.png"
                    needsDescription="Our team of experienced data engineers is dedicated to delivering high-quality solutions. We offer data engineering services designed to empower businesses by harnessing the full potential of their data. Our expertise encompasses building robust and reliable data pipelines, implementing scalable and flexible data architectures, and ensuring seamless data integration across a wide range of platforms and systems." />
                <ExpertServices needsTitle="What Can " needsTitleBlue=" Data Engineering " needsMoreTitle="Do For You? " NeedsImage="/images/data-engineering-left.png"
                    needsDescription="From comprehensive data architecture design and seamless cloud migration to advanced data analytics, reporting, and dynamic visualization, we cover every facet of data management to empower your organization with actionable insights. Our dedicated team of experts leverages industry-leading tools, and best practices to ensure your data is not only accurate and secure but also optimized for performance. " />
                <CloudOps needsTitle="How We Drive" needsTitleBlue="Business Efficiency" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default DataEngineering;
