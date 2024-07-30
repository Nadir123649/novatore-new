
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
import CloudOps from "@/components/CloudOps";

const DigitalService: NextPage = () => {
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
            <HeroBanner bannerHeading="Digital Services" previewImage="/images/digital-service.png" />
            <ServicesNeeds needsTitle="Best-Suited" needsTitleBlue="Digital Services" needsMoreTitle="For Your Needs" NeedsImage="/images/needs-img-one.png"
                needsDescription="At Novatore Solutions, we are dedicated to empowering businesses through innovative digital solutions. Our suite of digital services 
                is designed to streamline operations, enhance customer experiences, and drive growth. With a team of experienced professionals and a commitment to excellence,
                 we offer services that cater to the unique needs of each client. " />

            <ExpertServices needsTitle="Expert Guidance for Your" needsTitleBlue="Digital Journey" NeedsImage="/images/needs-image-two.png"
                needsDescription="Our digital services encompass a range of specialized areas, including Digital Consulting & Strategy, Business Applications,
                 Product Engineering, and DevOps & SecOps. Each service is tailored to address specific challenges and opportunities, ensuring that you receive
                  the support and guidance you need to achieve your business objectives. " />
            <CloudOps />
            <Enterprise />
            <Innovation />
            <ContactForm />
            <Footer />
        </>
    );
};

export default DigitalService;
