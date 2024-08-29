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
import Layout from '@/components/Layout';

const About: NextPage = () => {

    return (
        <Layout showContactForm={true} title="Novatore Sols - About" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="About Us" previewImage="/images/about-hero-bg.png" />
            <AboutNovatore />
            <AboutServices />
            <OurMilestones />
        </Layout>
    );
};

export default About;