import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import ExpertServices from "@/components/ExpertServices";
import CloudOps from "@/components/CloudOps";

const StaffAugmentation: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Staff Augmentation | Scale Your Team with Novatore Solutions" description="Expand your team with expert talent through Novatore Solutions' staff augmentation services. Achieve flexibility and innovation with our workforce solutions.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Scale Your Team with Expert Staff Augmentation Solutions" pagetitle="IT Services" needsMoreTitle="Get in Touch" previewImage="/images/staff-banner-bg.png" maxwidth="1100px" />
                <ServicesNeeds needsTitle="IT Staff " needsTitleBlue="Augmentation Services" NeedsImage="/images/digital-staff-right.png"
                    needsDescription="In the fast-paced world of technology, staying ahead of the competition requires agility and the ability to scale your team with the right talent quickly. At Novatore Solutions, we provide top-tier IT Staff Augmentation Services tailored to meet your software development needs. Our mission is to seamlessly integrate expert tech talent into your existing teams, enabling you to tackle complex projects with confidence and efficiency. Discover how our specialized services can transform your business and accelerate your growth." />
                <ExpertServices needsTitleBlue="Unmatched Expertise" needsMoreTitle="in Tech Talent Augmentation" NeedsImage="/images/unmatched-expertise.png"
                    needsDescription="We specialize in Tech Talent Augmentation that empowers your business to adapt to the ever-changing demands of the tech industry. Our seasoned professionals bring a wealth of knowledge and experience to your projects, ensuring that you have the right skills at your fingertips. Our Flexible Software Staffing approach ensures that you can scale your workforce." />
                <CloudOps needsTitle="Our" needsTitleBlue="Services" />
                <Enterprise />
                <Innovation />
            </div>
        </Layout>
    );
};

export default StaffAugmentation;
