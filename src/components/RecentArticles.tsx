import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogsCard from './BlogsCard';
import { blogData } from '@/constants/indesx';

const RecentArticles = () => {
    return (
        <section  className='bg-[#F6F6F6] pt-16 pb-20 mb-16'>
            <Container>
                <h1 className='text-center text-[#1B232E] text-[40px] font-bold capitalize not-italic leading-[55px] max-w-[590px] mx-auto mb-[80px]'>
                    Read our <span className='text-[#2776EA]'>Recent Articles</span>
                </h1>
                <div className='mt-[40px]'>
                    <Row className='gap-y-8'>
                        {blogData.slice(0, 2).map(blog => (
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
                </div>
            </Container>
        </section>
    );
}

export default RecentArticles;
