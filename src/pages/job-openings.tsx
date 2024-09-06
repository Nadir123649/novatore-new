import { NextPage } from 'next';
import WhyChooseUs from '@/components/WhyChooseUs';
import HeroBanner from '@/components/HeroBanner';
import CareersColumn from '@/components/CareersColumn';
import Layout from '@/components/Layout';
import ServicesNeeds from '@/components/ServicesNeeds';
import ExpertServices from '@/components/ExpertServices';
import Enterprise from '@/components/Enterprise';
import Innovation from '@/components/Innovation';
import DataServicesSection from '@/components/DataServicesSection';
import { jobOpeningData } from '@/constants/indesx';

const JobOpenings: NextPage = () => {

    return (

        <Layout showContactForm={true} title="Novatore Solutions - Careers" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Opportunities to Grow, Innovate, and Lead" needsMoreTitle={true} previewImage="/images/jobopenings-bg.png" pagetitle="Job Openings" maxwidth="800px" />
            <ServicesNeeds needsTitle='Discover Exciting' needsTitleBlue="Career Opportunities " needsMoreTitle=' at Novatore' NeedsImage="/images/jobs-image-right.png"
                needsDescription="Explore our latest job openings and find your next opportunity at Novatore. We're looking for talented individuals who are ready to take on new challenges and contribute to projects. Whether you're a seasoned professional or just starting your career, we have a variety of roles across different departments that might be the perfect fit for you.  " />
            <DataServicesSection heading="Novatore" data={jobOpeningData} />
            <Enterprise />
            <Innovation className="" />
        </Layout>
    );
};

export default JobOpenings;