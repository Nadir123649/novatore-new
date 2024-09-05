import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import BlogsCard from './BlogsCard';
import { client } from "@/sanity/lib/client";

const RecentArticles = () => {
    const [blogdata, setBlogdata] = useState([]);

    const getBlogData = async () => {
        const res = await client.fetch("*[_type== 'blogs']");
        setBlogdata(res);
    }

    useEffect(() => {
        getBlogData()
    }, []);

    return (
        <section className='bg-[#F6F6F6] pt-16 pb-20 mb-16'>
            <Container>
                <h1 className='text-center text-[#1B232E] text-[40px] font-bold capitalize not-italic leading-[55px] max-w-[590px] mx-auto mb-[80px]'>
                    Read our <span className='text-[#2776EA]'>Recent Articles</span>
                </h1>
                <div className='mt-[40px]'>
                    <Row className='gap-y-8'>
                        {blogdata.map((blog: any) => (
                            <BlogsCard
                                key={blog._id}
                                id={blog._id}
                                image={blog.image}
                                subtitle={blog.sub_title}
                                title={blog.title}
                            />
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default RecentArticles;
