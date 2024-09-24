import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const NetworkingServices: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Secure & High-Performance Networks With Novatore Solutions" description="Optimize your business connectivity with our reliable networking services. We deliver secure networks tailored to your needs. Boost your infrastructure today!">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Networking Redefined: Connecting Your Business to Success" pagetitle="Amazon Web Services" needsMoreTitle="Get in Touch" previewImage="/images/networking-banner.png" maxwidth="1000px" />
                <ServicesNeeds needsTitle="Solutions for Your " needsTitleBlue=" IT Needs" NeedsImage="/images/networking-image-right.png"
                    needsDescription="Efficient and secure networking is the backbone of any successful business in today’s digitally-driven world. At our company, we understand that your business relies on a strong, reliable network to connect your teams, customers, and critical systems. That's why we offer state-of-the-art networking solutions that are built to enhance connectivity and are also engineered to boost your business's overall productivity." />
                <ExpertServices needsTitle="Why Choose Us For " needsTitleBlue=" Networking Services?" NeedsImage="/images/networking-image-left.png"
                    needsDescription="Our dedication to providing top-notch IT services makes us a leader in the industry. With years of experience and a focus on innovation, we empower businesses with reliable and scalable network solutions. We understand the unique needs of software companies and offer customized services to optimize your network infrastructure, ensuring your business remains at the forefront of technology." />
                <CloudOps needsTitle="Comprehensive Networking Services " needsTitleBlue="We Offer" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default NetworkingServices;
