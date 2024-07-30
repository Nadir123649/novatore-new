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

const AWS: NextPage = () => {
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
            <HeroBanner bannerHeading="Amazon Web Services" previewImage="/images/aws-banner.png" />
            <ServicesNeeds needsTitle="Transforming Businesses with" needsTitleBlue="Amazon Web Services" NeedsImage="/images/needs-image-eleven.png"
                needsDescription="Amazon Web Services (AWS) stands as a powerhouse, enabling businesses to leverage scalable and reliable cloud solutions.
                At our software company, we use the full potential of AWS to drive innovation, enhance productivity, and streamline operations.
                Our dedicated team of AWS-certified experts ensures that your business can seamlessly integrate cloud solutions, offering a competitive
                edge in today’s fast-paced market." />

            <ExpertServices needsTitle="AWS Services: Changing Your Digital" needsTitleBlue="Landscape" NeedsImage="/images/needs-image-final.png"
                needsDescription="With AWS, we offer a suite of services designed to meet the diverse needs of our clients.
                From robust storage solutions to advanced networking capabilities, and insightful analytics,
                we provide comprehensive support to ensure your business runs smoothly and efficiently. 
                Explore our AWS services and discover how we can help you achieve your digital transformation goals. " />
            <Enterprise />
            <Innovation />
            <ContactForm />
            <Footer />
        </>
    );
};

export default AWS;
