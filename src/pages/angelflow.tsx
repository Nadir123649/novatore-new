import HeroBanner from "@/components/HeroBanner";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";

const Angelflow: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Sols - Retail" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner bannerHeading="Empowering Retail and Consumer Goods with Innovative Technology " needsMoreTitle={true} previewImage="/images/retail-banner.png" pagetitle="" maxwidth="1100px" />
                <TechStack title="Technology Stack" />
            </div>
        </Layout>
    );
};

export default Angelflow;
