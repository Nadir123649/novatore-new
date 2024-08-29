import CaseStudies from "@/components/CaseStudies";
import ClientLogos from "@/components/ClientLogos";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import TrendingNow from "@/components/TrendingNow";
import WhyChooseUs from "@/components/WhyChooseUs";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [activeLink, setActiveLink] = useState('');
  return (
    <>
      <Layout showContactForm={true} title="Novatore Sols - Home" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
        <Hero setActiveLink={setActiveLink} />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <ClientLogos />
        <TrendingNow />
      </Layout>
    </>
  );
};

export default Home;
