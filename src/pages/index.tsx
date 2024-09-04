import CaseStudies from "@/components/CaseStudies";
import ClientLogos from "@/components/ClientLogos";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import TrendingNow from "@/components/TrendingNow";
import WhyChooseUs from "@/components/WhyChooseUs";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const Home: NextPage = () => {
  const getAllAuthors = async () => {
    const res = await client.fetch("*[_type== 'author']");
    console.log(res)
    return res;
  }

  useEffect(() => {
    getAllAuthors()
  })

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
