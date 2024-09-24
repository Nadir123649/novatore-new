import { NextPage } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Layout from '@/components/Layout';


const Blogs: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Blogs" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Exploring the Top 10 Emerging Technologies of 2024" needsMoreTitle={true} previewImage="/images/blogherobanner.png" pagetitle="Blog" maxwidth="1100px" />
        </Layout>
    );
};

export default Blogs;