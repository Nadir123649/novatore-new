import { NextPage } from 'next';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import CanHelp from '@/components/CanHelp';
import RecentArticles from '@/components/RecentArticles';
import BlogsContent from '@/components/BlogsContent';

const Details: NextPage = () => {
    
    return (
        <>
            <Head>
                <title>Novatore Sols</title>
                <meta name="description" content="Read more about" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HeroBanner bannerHeading="How Generative AI can play its part in uplifting the entire data management lifecycle" previewImage="/images/careers-bg.png" />
            <BlogsContent />
            <RecentArticles />
            <CanHelp />
            <Footer />
        </>
    );
};

export default Details;
