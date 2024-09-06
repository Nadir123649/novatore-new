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
import Enterprise from '@/components/Enterprise';
import ServicesNeeds from '@/components/ServicesNeeds';
import DataServicesSection from '@/components/DataServicesSection';
import ExpertServices from '@/components/ExpertServices';
import ClientFeedback from '@/components/ClientFeedback';

const About: NextPage = () => {

    return (
        <Layout showContactForm={true} title="Novatore Solutions - Careers" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="A Legacy of Trust and Technology" needsMoreTitle={true} previewImage="/images/aboutus-herobanner.png" pagetitle="About Us" maxwidth="800px" />
            <ServicesNeeds needsTitle='Discover Exciting' needsTitleBlue="Career Opportunities " needsMoreTitle=' at Novatore' NeedsImage="/images/about-image-right.png"
                needsDescription="Explore our latest job openings and find your next opportunity at Novatore. We're looking for talented individuals who are ready to take on new challenges and contribute to projects. Whether you're a seasoned professional or just starting your career, we have a variety of roles across different departments that might be the perfect fit for you.  " needsmoreDescription={'Our journey has been marked by constant learning, adaptation, and a deep understanding of the evolving needs of our clients. Today, Novatore Solutions stands as a trusted partner for businesses around the world, helping them navigate the complexities of digital transformation and achieve their strategic objectives. '} />
            <ExpertServices needsTitle="How Did it " needsTitleBlue=" All Start" needsMoreTitle='?' NeedsImage="/images/about-image-left.png"
                needsDescription="Founded in 2013 by Ameer Haider, a former World Bank Consultant, Novatore Solutions was established with the vision of enhancing the tech ecosystem in the US and globally. " needsmoreDescription={'Our early days were marked by a focus on small, bespoke projects, where we honed our skills and built a reputation for delivering high-quality solutions on time and within budget. As our client base grew, so did our expertise, leading us to expand our service offerings to include Cloud Solutions, Artificial Intelligence, Blockchain, and more. '} />
            <ServicesNeeds needsTitle='Our' needsTitleBlue="Mission " NeedsImage="/images/ourmission-image-right.png"
                needsDescription=" Our mission at Novatore Solutions is to empower businesses to achieve their full potential through innovative technology solutions. We are dedicated to developing software and IT services that are not only effective but also scalable, secure, and sustainable." />
            <ExpertServices needsTitle="Our " needsTitleBlue=" Vision" NeedsImage="/images/ourvision-image-left.png"
                needsDescription="Our vision is to be a global leader in the software industry, known for our unwavering commitment to quality, innovation, and customer satisfaction. We envision a future where Novatore Solutions is synonymous with technological advancement and business success. " />
            <Enterprise />
            <ClientFeedback />
        </Layout>

    );
};

export default About;