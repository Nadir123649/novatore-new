import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import DataServicesSection from "@/components/DataServicesSection";
import CloudOps from "@/components/CloudOps";
import { PenetrationTestingData } from "@/constants/indesx";

const PenetrationTesting: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Penetration Testing" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Expert Penetration Testing for Robust Security" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/penetration-testing-banner.png" />
                <ServicesNeeds needsTitle="Fortify Your Digital Defences with Expert  " needsTitleBlue="Penetration Testing" NeedsImage="/images/Penetration-testing.png"
                    needsDescription="In today's rapidly evolving digital landscape, safeguarding your organisation from cyber threats is more crucial than ever. Our penetration testing services provide a comprehensive approach to identifying and mitigating potential vulnerabilities. Our team of seasoned ethical hackers employs cutting-edge techniques to simulate real-world attacks, helping to ensure your systems are resilient against breaches. By proactively uncovering weaknesses, we enable your organization to strengthen its security posture." />
                <DataServicesSection heading="Our Penetration Testing " headingBlue=" Solutions" data={PenetrationTestingData} />
                <CloudOps needsTitle="Why Choose Us for " needsTitleBlue="Penetration Testing?" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default PenetrationTesting;
