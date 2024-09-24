import { NextPage } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Layout from '@/components/Layout';
import JobAccordions from '@/components/JobAccordions';


const JobApplicationForm: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - Job Detail" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Explore Exciting Job Opportunities and Build Your Career with Us" needsMoreTitle={true} previewImage="/images/jobdetailherobanner.png" pagetitle="Job Openings" maxwidth="1100px" />
            <JobAccordions />
        </Layout>
    );
};

export default JobApplicationForm;