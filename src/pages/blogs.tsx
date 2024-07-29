import Head from 'next/head';
import { NextPage } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import BlogsContainer from '@/components/BlogsContainer';
import CanHelp from '@/components/CanHelp';

const Blogs: NextPage = () => {
    return (
        <>
            <Head>
                <title>Novatore Sols</title>
                <meta name="Novatore Sols" content="Setting new standards in technology with unmatchable code." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HeroBanner bannerHeading="Blogs" previewImage="/images/careers-bg.png" />
            <BlogsContainer />
            <CanHelp />
            <Footer />
        </>
    );
};

export default Blogs;