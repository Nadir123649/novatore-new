import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogsFilter from './BlogsFilter';
import BlogsCard from './BlogsCard';
import { blogData } from '@/constants/indesx';

const BlogsContainer = () => {
    return (
        <section className='blogs-section py-20'>
            <Container>
                <h1 className='text-center text-[#1B232E] text-[40px] font-bold capitalize not-italic leading-[55px] max-w-[590px] mx-auto mb-[80px]'>
                    Tech experts latest: Innovations in <span className='text-[#2776EA]'>digital enterprise</span>
                </h1>
                <BlogsFilter />
                <div className='mt-[60px]'>
                    <Row className='gap-y-8'>
                        {blogData.map(blog => (
                            <Col key={blog.id} lg={6} md={6} xs={12}>
                                <BlogsCard
                                    id={blog.id}
                                    image={blog.image}
                                    category={blog.category}
                                    tag={blog.tag}
                                    title={blog.title}
                                    link={blog.link}
                                />
                            </Col>
                        ))}
                    </Row>
                    <button className='text-white text-[18px] not-italic font-normal leading-normal py-[16px] px-[24px] rounded-[16px] max-w-[180px] mx-auto block mt-[60px] w-full bg-[#2776EA]'>
                        Load More
                    </button>
                </div>
            </Container>
        </section>
    );
}

export default BlogsContainer;
