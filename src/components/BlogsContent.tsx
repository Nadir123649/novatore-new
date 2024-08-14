import { blogContentImage } from '@/utils';
import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'


const BlogsContent = () => {
    return (
        <section className='bg-white py-20'>
            <Container>
                <div>
                    <h2 className='text-[20px] text-[#2776EA] font-semibold mb-[24px]'>1. Transforming data extraction with generative AI</h2>
                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Generative AI transformation has already taken data management to new levels. This translates to faster data collection, improved accuracy, and the ability to handle diverse data types. Generative AI can adapt to changing website structures during web scraping, infer data schemas from unstructured sources, and parse complex documents with human-like intelligence, ultimately leading to a more efficient and reliable data extraction process.
                    </p>
                    <h2 className='text-[20px] text-[#2776EA] font-semibold mb-[24px]'>
                        Some of the changing methods are:
                    </h2>

                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Web scraping on autopilot: Web scraping involves extracting data from websites. Generative AI can automate this process by learning the structure and layout of websites. It can then adapt to changes in website design, ensuring continuous data collection.
                    </p>
                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Cracking the code of unstructured data: GenAI can analyze large datasets to understand the relationships between different data points and infer the underlying schema. This allows for the extraction of valuable insights from previously unusable data sources.
                    </p>
                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Parsing with precision: It can be trained on massive amounts of text data to understand context and relationships between words. This allows it to parse complex documents like contracts, financial reports, or scientific papers with high accuracy, extracting the relevant information needed for further analysis.
                    </p>

                    <Image src={blogContentImage} alt="blog content" className='w-full h-full mb-[24px]' />
                    <h2 className='text-[20px] text-[#2776EA] font-semibold mb-[24px]'>1. Transforming data extraction with generative AI</h2>
                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Generative AI transformation has already taken data management to new levels. This translates to faster data collection, improved accuracy, and the ability to handle diverse data types. Generative AI can adapt to changing website structures during web scraping, infer data schemas from unstructured sources, and parse complex documents with human-like intelligence, ultimately leading to a more efficient and reliable data extraction process.
                    </p>
                    <h2 className='text-[20px] text-[#2776EA] font-semibold mb-[24px]'>
                        Some of the changing methods are:
                    </h2>

                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Web scraping on autopilot: Web scraping involves extracting data from websites. Generative AI can automate this process by learning the structure and layout of websites. It can then adapt to changes in website design, ensuring continuous data collection.
                    </p>
                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Cracking the code of unstructured data: GenAI can analyze large datasets to understand the relationships between different data points and infer the underlying schema. This allows for the extraction of valuable insights from previously unusable data sources.
                    </p>
                    <p className='text-black not-italic font-normal capitalize text-[20px] mb-[24px]'>
                        Parsing with precision: It can be trained on massive amounts of text data to understand context and relationships between words. This allows it to parse complex documents like contracts, financial reports, or scientific papers with high accuracy, extracting the relevant information needed for further analysis.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default BlogsContent;
