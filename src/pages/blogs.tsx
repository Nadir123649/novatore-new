import { NextPage } from 'next';
import HeroBanner from '@/components/HeroBanner';
import BlogsContainer from '@/components/BlogsContainer';
import CanHelp from '@/components/CanHelp';
import Layout from '@/components/Layout';
import ServicesNeeds from '@/components/ServicesNeeds';
import TableofContents from '@/components/TableofContents';
import { contents } from '@/constants/indesx';

const Blogs: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Blogs" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Exploring the Top 10 Emerging Technologies of 2024" needsMoreTitle={true} previewImage="/images/blogherobanner.png" pagetitle="Blog" maxwidth="1100px" />
            <ServicesNeeds needsTitle='Whats Driving the Future? ' NeedsImage="/images/blog-image-right.png"
                needsDescription="From AI-driven scientific discoveries to sustainable tech solutions, understanding these advancements is necessary for staying ahead in a competitive market. This guide dives into the top 10 technologies that promise to transform the way we live and work. " />
            <TableofContents contents={contents} />
        </Layout>
    );
};

export default Blogs;