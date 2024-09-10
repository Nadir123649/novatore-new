import Enterprise from "@/components/Enterprise";
import HeroBanner from "@/components/HeroBanner";
import Innovation from "@/components/Innovation";
import ServicesNeeds from "@/components/ServicesNeeds";
import { NextPage } from "next";
import CloudOps from "@/components/CloudOps";
import Layout from "@/components/Layout";
import TechStack from "@/components/tech-stack";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import HeadlineBanner from "@/components/HeadlineBanner";
import CaseBackground from "@/components/CaseBackground";
import CaseChallanges from "@/components/CaseChallanges";
import CaseOutcomes from "@/components/CaseOutcomes";
import DataServicesSection from "@/components/DataServicesSection";
import { zeusxcaseData } from "@/constants/indesx";
import { zeusxtechStackImages } from "@/constants/indesx";
import { zeusxchallengesData, zeusxoutcomesData, nftHuntersHeadlines } from "@/constants/indesx";

const ZeusX: NextPage = () => {
    return (
        <Layout showContactForm={true} title="Novatore Solutions - ZeusX" description="Welcome to Novatore Solutions, setting new standards in technology with unmatchable code.">
            <div className="overflow-x-hidden">
                <HeroBanner beforeyellowtext="ZeusX:" bannerHeading=" Revolutionizing the Digital Goods Marketplace for Gamers" needsMoreTitle={true} previewImage="/images/zeusxherobanner.png" pagetitle="" maxwidth="1100px" />
                <HeadlineBanner headlinesData={nftHuntersHeadlines} />
                <CaseBackground cardLogo={"/images/zesusxlogo.svg"} cardDescription="ZeusX revolutionizes the gaming marketplace by providing a secure, user-friendly platform where gamers can effortlessly trade digital goods, setting a new standard for reliability in the industry."
                    backgroundDescription={"ZeusX is a global marketplace where gamers can buy and sell digital goods, including gaming accounts, in-game items, and gift cards. The platform is designed to offer a secure and hassle-free trading experience for gamers around the world. Our client approached us with the vision to create a user-friendly, efficient, and reliable platform that would stand out in the competitive gaming industry."} />
                <CaseChallanges cardBanner={"/images/zeusxbanner.png"} challenges={zeusxchallengesData} />
                <TechStack title="Tech Stacks" images={zeusxtechStackImages} />
                <DataServicesSection heading="Solutions" data={zeusxcaseData} textalign="left" />
                <CaseOutcomes outcomesBanner={"/images/zeusxoutcomesbanner.png"} outcomes={zeusxoutcomesData} />

            </div>
        </Layout>
    );
};

export default ZeusX;
