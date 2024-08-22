import { contactDetails } from '@/constants/indesx';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const ContactForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("contact-us-form");
        if (element && !hasAnimated) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75) {
                setIsVisible(true);
                setHasAnimated(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasAnimated]);

    return (
        <section id='contact-us-form' className={`${isVisible ? "fadeIn" : "opacity-0 "
            } contact-form-section py-10 md:py-20 bg-center bg-no-repeat bg-cover`}>
            <div className='layer-form bg-center bg-no-repeat mx-5 bg-cover rounded-[16px] sm:pb-[140px] md:py-[60px]'>
                <Container>
                    <Row>
                        <Col lg={4} md={12} xs={12}>
                            <div className="contact-form-content mt-[30px]">
                                <h1 className='text-[#2D2D2D] font-bold not-italic mb-4 max-w-full md:max-w-[290px] '>Let’s reach new <span className='text-[#2776EA]'>heights</span>!</h1>
                                <p className='text-[#4C4C4C] not-italic text-[24px] font-normal max-w-full md:max-w-[274px] '>
                                    Book a call today and see
                                    where we can take you.
                                </p>

                                <div className='contact-details flex flex-col gap-4 mt-[30px] md:mt-[90px]'>
                                    {contactDetails.map((data, index) => (
                                        <div key={index} className='contact-details-item flex gap-3 items-center text-[#2776EA]'>
                                            {data.icon}
                                            <span className='text-[18px] text-[#2A2A2A] max-w-[315px] font-normal'>{data.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} xs={12}>
                            <Form className='contact-form sm:pt-10 md:pt-0'>
                                <Row className='gap-y-4'>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>How We Can Help You?</Form.Label>
                                            <input
                                                type="text"
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="How we can help?"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>First Name</Form.Label>
                                            <input
                                                type="text"
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="Enter First name"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>Last Name</Form.Label>
                                            <input
                                                type="text"
                                                className='form-input rounded-[16px] border border-solid bg-white  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="Enter Last name"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>Country</Form.Label>
                                            <input
                                                type="text"
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="Enter Country name"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>Phone Number</Form.Label>
                                            <input
                                                type="text"
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="Enter Phone number here"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='form-input text-[#645555] text-[18px] font-medium not-italic'>Message</Form.Label>
                                            <textarea name="" id="" className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] min-h-[140px] text-[18px] not-italic font-normal '
                                                placeholder='Message'></textarea>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group controlId="subscribe" className='flex flex-col gap-1'>
                                            <Form.Check
                                                type="checkbox"
                                                label="Check here to subscribe for updates."
                                                className="my-2 text-[#645555] text-[18px] font-medium not-italic custom-checkbox "
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12} className='flex justify-end'>
                                        <button className='btn-submit text-white text-[18px] font-normal not-italic bg-[#2776EA] rounded-[16px] py-[12px] md:py-[16px]  px-[14px] md:px-[24px]  max-w-[180px] w-full border border-solid border-[#B7B7B7]'>
                                            Submit
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ContactForm;
