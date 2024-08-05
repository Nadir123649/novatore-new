import CaseStudies from "@/components/CaseStudies";
import ClientLogos from "@/components/ClientLogos";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import TrendingNow from "@/components/TrendingNow";
import WhyChooseUs from "@/components/WhyChooseUs";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Novatore Sols - Home" description="Welcome to Novatore Sols, setting new standards in technology with unmatchable code.">
        <Hero />
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
