import { NextPage } from 'next';
import WhyChooseUs from '@/components/WhyChooseUs';
import HeroBanner from '@/components/HeroBanner';
import CareersColumn from '@/components/CareersColumn';
import Layout from '@/components/Layout';
import ServicesNeeds from '@/components/ServicesNeeds';
// import CloudOps from './cloud-ops';
import CloudOps from "@/components/CloudOps";
import ExpertServices from '@/components/ExpertServices';
import Enterprise from '@/components/Enterprise';
import Innovation from '@/components/Innovation';

const Careers: NextPage = () => {

    return (

        <Layout showContactForm={true} title="Novatore Solutions - Careers" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="Innovate with a Team That Drives Change" needsMoreTitle={true} previewImage="/images/careers-bg.png" pagetitle="Careers" maxwidth="800px" />
            <ServicesNeeds needsTitle='Shape The' needsTitleBlue=" Future Of Technology " needsMoreTitle='With Us' NeedsImage="/images/careers-image-right.png"
                needsDescription="At Novatore, we believe in fostering a culture of innovation, collaboration, and continuous growth. Our team is made up of passionate professionals who thrive on solving complex challenges and pushing the boundaries of technology. Whether you're an experienced developer, a creative designer, or an ambitious business strategist, we offer a dynamic environment where your skills can flourish and your ideas can make a real impact. Join us, and let's build the future together. " />
            <ExpertServices needsTitle="Life At" needsTitleBlue="Novatore" NeedsImage="/images/careers-left-image.png"
                needsDescription="Life at Novatore is about more than just work—it's about being part of a vibrant community. Our team enjoys a supportive and inclusive workplace where creativity is encouraged, and collaboration is key. From regular team-building activities to opportunities for professional development, we make sure our employees feel valued and empowered. Plus, with flexible working arrangements, comprehensive benefits, and a focus on work-life balance, Novatore is a place where you can grow both personally and professionally. " />
            < CloudOps needsTitle="What Our " needsTitleBlue=" Employees" needsMoreTitle=" Have to Say " />
            <Enterprise />
            <Innovation className="" />
        </Layout>
    );
};

export default Careers;