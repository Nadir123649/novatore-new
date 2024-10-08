import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";

const MobileAppDevelopment: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Discover Efficiency With Novatore Solutions' Mobile App Development" description="We offer expert mobile app development services for Android and iOS platforms. Now, you can explore seamless functionality and robust performance with our solutions." keywords="Best mobile app development companies, Mobile app development services, Mobile app development cost, Hire mobile app developer, Mobile app development agency, Mobile app development company, Mobile app development outsourcing, Mobile app development services USA, Mobile app development platform, Best mobile app development tools" >
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Maximizing Efficiency With Our Mobile App Development" pagetitle="Custom Software Development" needsMoreTitle="Get in Touch" previewImage="/images/mobile-banner.png" maxwidth="1100px" />
                <ServicesNeeds needsTitleBlue="Introduction" NeedsImage="/images/mobile-introduction.png"
                    needsDescription="As a leading mobile app development company, we pride ourselves on offering a wide range of comprehensive mobile app development services designed to meet the unique needs of your business. Whether you're a startup looking to make a mark in the mobile space or an established enterprise, our team of seasoned professionals is here to help you succeed." />
                <CloudOps needsTitle="Our" needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default MobileAppDevelopment;
