import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";

const SecurityServices: NextPage = () => {
    return (
        <Layout title="Novatore Sols - Security Services" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Protecting Your Digital Frontier: Comprehensive IT Security Services" pagetitle="Services" needsMoreTitle="Get in Touch" previewImage="/images/securityservice-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="Explore Our " needsTitleBlue="Cybersecurity Solutions" needsMoreTitle="" NeedsImage="/images/cybeersecurity-solutions.png"
                    needsDescription="In an era where cyber threats are constantly evolving, securing your digital assets has never been more critical. Our comprehensive IT Security Services offer a robust shield to protect your business from the ever-present dangers lurking in the digital landscape. By leveraging advanced threat intelligence and real-time monitoring, our cybersecurity solutions ensure your network remains impervious to the latest cyber threats." />
                <ExpertServices needsTitle="Data and Endpoint Security for " needsTitleBlue="Modern Enterprises" needsMoreTitle="" NeedsImage="/images/Modern-Enterprises.png"
                    needsDescription="Data is the lifeblood of any organization, and its protection is paramount. Our Data Protection Services employ cutting-edge encryption, data loss prevention (DLP) tools, and comprehensive backup solutions to safeguard your sensitive information from unauthorized access and accidental loss. We recognize that today's workforce is increasingly mobile and interconnected, which is why our Endpoint Security solutions extend to all devices, from desktops to mobile gadgets, ensuring comprehensive protection against malware, ransomware, and other cyber threats." />
                <CloudOps needsTitle="Comprehensive" needsTitleBlue=" IT Security Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default SecurityServices;
