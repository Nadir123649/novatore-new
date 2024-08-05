import { NextPage } from 'next';
import HeroBanner from '@/components/HeroBanner';
import CanHelp from '@/components/CanHelp';
import RecentArticles from '@/components/RecentArticles';
import BlogsContent from '@/components/BlogsContent';
import Layout from '@/components/Layout';

const Details: NextPage = () => {

    return (
        <Layout title="Novatore Sols - Home" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="How Generative AI can play its part in uplifting the entire data management lifecycle" previewImage="/images/careers-bg.png" />
            <BlogsContent />
            <RecentArticles />
            <CanHelp />
        </Layout>
    );
};

export default Details;
