import { NextPage } from 'next';
import WhyChooseUs from '@/components/WhyChooseUs';
import HeroBanner from '@/components/HeroBanner';
import CareersColumn from '@/components/CareersColumn';
import Layout from '@/components/Layout';

const Careers: NextPage = () => {

    return (
        <Layout title="Novatore Sols - Home" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Careers" previewImage="/images/careers-bg.png" />
            <CareersColumn />
            <WhyChooseUs />
        </Layout>
    );
};

export default Careers;