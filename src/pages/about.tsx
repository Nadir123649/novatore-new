import Head from 'next/head';
import { NextPage } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import HeroBanner from '@/components/HeroBanner';
import AboutNovatore from '@/components/AboutNovatore';
import AboutServices from '@/components/AboutServices';
import OurMilestones from '@/components/OurMilestones';

const About: NextPage = () => {

    return (
        <>
            <Head>
                <title>Novatore Sols</title>
                <meta name="Novatore Sols" content="Setting new standards in technology with unmatchable code." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HeroBanner bannerHeading="About Us" previewImage="/images/about-hero-bg.png" />
            <AboutNovatore />
            <AboutServices />
            <OurMilestones />
            <ContactForm />
            <Footer />
        </>
    );
};

export default About;