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

const CyberSecurity: NextPage = () => {
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
            <HeroBanner bannerHeading="Cyber Security" previewImage="/images/cyber-banner.png" />
            <ServicesNeeds needsTitle="Ensuring Your" needsTitleBlue="Digital Safety" NeedsImage="/images/needs-image-nine.png"
                needsDescription="Protecting your data and ensuring compliance with regulatory standards is more important than ever. At Novatore Solutions,
                 we offer you cybersecurity solutions that keep your information safe from threats while ensuring your organisation adheres to all relevant laws and regulations.
                  Our team of experts is dedicated to delivering tailored services that meet your specific needs, whether it's securing your network or performing thorough risk assessments. " />

            <ExpertServices needsTitle="Comprehensive" needsTitleBlue="Cybersecurity Solutions" NeedsImage="/images/needs-image-ten.png"
                needsDescription="Our cybersecurity services include everything from governance, risk, and compliance to detailed penetration testing.
                 We understand the complexities of data privacy and work diligently to protect your sensitive information from potential breaches.
                 Our goal is to provide peace of mind by safeguarding your digital assets with robust and reliable security measures." />
            <Enterprise />
            <Innovation />
            <ContactForm />
            <Footer />
        </>
    );
};

export default CyberSecurity;

