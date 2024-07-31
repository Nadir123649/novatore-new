import ContactForm from "@/components/ContactForm";
import ExpertServices from "@/components/ExpertServices";
import Enterprise from "@/components/Enterprise";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import Navbar from "@/components/Navbar";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Head from "next/head";
import DataServicesSection from "@/components/DataServicesSection";
import { CloudData, } from "@/constants/indesx";

const CloudServices: NextPage = () => {
    return (
        <>
            <Head>
                <title>Novatore Sols</title>
                <meta
                    name="Novatore Sols"
                    content="Setting new standards in technology with unmatchable code."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HeroBanner bannerHeading="Cloud Services" previewImage="/images/cloud-banner.png" />
            <ServicesNeeds needsTitle="Discover the Power of" needsTitleBlue="Cloud Ops" NeedsImage="/images/needs-image-five.png"
                needsDescription="Businesses need agile and scalable solutions to stay ahead in today’s world. Our cloud services are designed to help you
                navigate the complexities of the modern digital landscape with ease. Whether you are looking to migrate your infrastructure to the cloud,
                streamline your business processes, or optimize your operations, our cloud solutions are here to support you every step of the way. " />

            <ExpertServices needsTitle="Take Your Productivity to the" needsTitleBlue=" Next Level" NeedsImage="/images/needs-image-six.png"
                needsDescription="Our team of cloud experts is dedicated to helping you transform your business operations and achieve greater efficiency.
                 We understand that every business is different, which is why we offer personalized solutions that address your specific challenges and goals. 
                 From cloud migration to ongoing CloudOps support, we are committed to providing you with the tools and expertise you need to succeed in the digital era.
                  Discover how our cloud services can revolutionize your business today." />
            <DataServicesSection heading="Our Cloud" headingBlue="Services" data={CloudData} />
            <Enterprise />
            <Innovation />
            <ContactForm />
            <Footer />
        </>
    );
};

export default CloudServices;
