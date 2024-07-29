import CaseStudies from "@/components/CaseStudies";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TrendingNow from "@/components/TrendingNow";
import WhyChooseUs from "@/components/WhyChooseUs";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Novatore Sols</title>
        <meta
          name="Novatore Sols"
          content="Setting new standards in technology with unmatchable code."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <ClientLogos />
      <TrendingNow />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
