import { NextPage } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Layout from '@/components/Layout';
import JobForm from '@/components/JobForm';



const JobApplicationForm: NextPage = () => {
    return (
        <Layout showContactForm={false} title="Novatore Solutions - Job Application Form" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Join Our Team of Experts – Apply Today" needsMoreTitle={true} previewImage="/images/blogherobanner.png" pagetitle="Job Application Form" maxwidth="1100px" />
            <JobForm />
        </Layout>
    );
};

export default JobApplicationForm;