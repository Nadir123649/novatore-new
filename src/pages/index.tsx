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
import CaseStudiesSlider from "@/components/CaseStudiesSlider";

const Home: NextPage = () => {
  const getAllAuthors = async () => {
    const res = await client.fetch("*[_type== 'author']");
    return res;
  }

  useEffect(() => {
    getAllAuthors()
  })

  const [activeLink, setActiveLink] = useState('');
  return (
    <>
      <Layout showContactForm={true} title="Novatore Solutions: Expert IT Services for Businesses" description="We are dedicated to setting new industry standards with our innovative approach. Explore how our  tailored technology solutions can help you achieve your business goals.">
        <Hero setActiveLink={setActiveLink} />
        <Services />
        <WhyChooseUs />
        <CaseStudiesSlider heading="Case" blueheading="Studies" />
        <ClientLogos />
        <TrendingNow />
      </Layout>
    </>
  );
};

export default Home;
