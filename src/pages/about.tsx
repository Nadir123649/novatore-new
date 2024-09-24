import { NextPage } from 'next';
import HeroBanner from '@/components/HeroBanner';
import Layout from '@/components/Layout';
import Enterprise from '@/components/Enterprise';
import ServicesNeeds from '@/components/ServicesNeeds';
import ExpertServices from '@/components/ExpertServices';
import ClientFeedback from '@/components/ClientFeedback';

const About: NextPage = () => {

    return (
        <Layout showContactForm={true} title="Novatore Solutions - About" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <HeroBanner bannerHeading="A Legacy of Trust and Technology" needsMoreTitle={true} previewImage="/images/aboutus-herobanner.png" pagetitle="About Us" maxwidth="800px" />
            <ServicesNeeds  needsTitle='Transforming' needsTitleBlue="Technology Concepts" needsMoreTitle=' into Market-Leading Solutions' NeedsImage="/images/about-image-right.png"
                needsDescription="From our humble beginnings, we have grown into a dynamic and forward-thinking company, driven by a desire to make an impact in the tech industry.
                 Our journey has been marked by learning and a deep understanding of the needs of our clients. Today, Novatore Solutions stands as a trusted partner for businesses around the world, helping them navigate the complexities of digital transformation. " />
            <ExpertServices  needsTitle="How Did it " needsTitleBlue=" All Start" needsMoreTitle='?' NeedsImage="/images/about-image-left.png"
                needsDescription="Founded in 2013 by Ameer Haider, Novatore Solutions was established with the vision of enhancing the tech ecosystem globally.
                Our early days included a focus on small projects, where we honed our skills and built a reputation. As our client base grew, so did our expertise, leading us to expand our service offerings to include Cloud Solutions, Artificial Intelligence, and more. " />
            <ServicesNeeds  needsTitle='Our' needsTitleBlue="Mission " NeedsImage="/images/ourmission-image-right.png"
                needsDescription="Our mission at Novatore Solutions is to empower businesses to achieve their full potential through innovative technology solutions. We are dedicated to developing software and IT services that are not only effective but also scalable, secure, and sustainable. Our solutions are not only effective but also designed to scale with your growth, ensuring your technology infrastructure remains robust and reliable." />
            <ExpertServices needsTitle="Our " needsTitleBlue=" Vision" NeedsImage="/images/ourvision-image-left.png"
                needsDescription="We aspire to be more than just a global leader in the software industry. Our vision is to create a world where Novatore Solutions is synonymous with technological advancement, where businesses thrive and customers are empowered by our solutions. We envision a future where our name is synonymous with trust and unparalleled expertise,shaping the future of the software industry. " />
            <Enterprise />
            <ClientFeedback />
        </Layout>

    );
};

export default About;