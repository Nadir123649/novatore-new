import Head from 'next/head';
import { NextPage } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import HeroBanner from '@/components/HeroBanner';
import CareersColumn from '@/components/CareersColumn';

const Careers: NextPage = () => {

    return (
        <>
            <Head>
                <title>Novatore Sols</title>
                <meta name="Novatore Sols" content="Setting new standards in technology with unmatchable code." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HeroBanner bannerHeading="Careers" previewImage="/images/careers-bg.png" />
            <CareersColumn />
            <WhyChooseUs />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Careers;