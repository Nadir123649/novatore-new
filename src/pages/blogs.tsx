import { NextPage } from 'next';
import HeroBanner from '@/components/HeroBanner';
import BlogsContainer from '@/components/BlogsContainer';
import CanHelp from '@/components/CanHelp';
import Layout from '@/components/Layout';

const Blogs: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Blogs" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Blogs" previewImage="/images/careers-bg.png" />
            <BlogsContainer />
            <CanHelp />
        </Layout>
    );
};

export default Blogs;