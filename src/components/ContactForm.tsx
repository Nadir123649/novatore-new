import { contactDetails } from '@/constants/indesx';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface IFormInputs {
    help: string;
    fullName: string;
    email: string;
    country: string;
    phone: string;
    message?: string;
    subscribe?: boolean;
}

const schema = z.object({
    help: z.string().nonempty({ message: "Please specify how we can help you." }),
    fullName: z.string().min(5, { message: "Full name must be at least 2 characters long." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    country: z.string().nonempty({ message: "Please enter your country." }),
    phone: z.string()
        .regex(/^[\d\s\+\-\(\)]*$/, { message: "Phone number can only contain digits, spaces, '+', '-', '(', and ')'." })
        .max(14, { message: "Phone number cannot exceed 13 characters." })
        .min(7, { message: "Phone number must be at least 7 characters long." }),
    message: z.string().optional(),
    subscribe: z.boolean().optional(),
});


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



    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <section className={`${isVisible ? "fadeIn" : "opacity-0 "
            } contact-form-section pb-10 md:pb-20 pt-20 bg-center bg-no-repeat bg-cover`}>
            <div className='layer-form bg-center bg-no-repeat mx-5 bg-cover rounded-[16px] sm:pb-[140px] md:py-[60px]'>
                <Container id='contact-us-form'>
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
                            <Form className='contact-form sm:pt-10 md:pt-0' onSubmit={handleSubmit(onSubmit)}>
                                <Row className='gap-y-4'>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>How We Can Help You?</Form.Label>
                                            <input
                                                type="text"
                                                {...register('help')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="Web Development"
                                            />
                                            {errors.help && <p className='text-[#FF9494]'>{errors.help.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>Full Name</Form.Label>
                                            <input
                                                type="text"
                                                {...register('fullName')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="Alexa David"
                                            />
                                            {errors.fullName && <p className='text-[#FF9494]'>{errors.fullName.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>Email Address</Form.Label>
                                            <input
                                                type="text"
                                                {...register('email')}
                                                className='form-input rounded-[16px] border border-solid bg-white  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="Alexadavid@email.com"
                                            />
                                            {errors.email && <p className='text-[#FF9494]'>{errors.email.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>Country</Form.Label>
                                            <input
                                                type="text"
                                                {...register('country')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="United States"

                                            />
                                            {errors.country && <p className='text-[#FF9494]'>{errors.country.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>Phone Number <sup className='text-[#FF9494]'>*</sup></Form.Label>
                                            <input
                                                type="text"
                                                {...register('phone')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal'
                                                placeholder="+00 111 2222222"
                                                onKeyPress={(e) => {

                                                    const allowedKeys = /^[0-9\+\-\(\)\s]*$/;
                                                    if (!allowedKeys.test(e.key)) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                maxLength={14}
                                            />
                                            {errors.phone && <p className='text-[#FF9494]'>{errors.phone.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='form-input text-[#645555] text-[18px] font-medium not-italic'>Message</Form.Label>
                                            <textarea
                                                id=""
                                                {...register('message')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] min-h-[140px] text-[18px] not-italic font-normal '
                                                placeholder='Message'></textarea>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group controlId="subscribe" className='flex flex-col gap-1'>
                                            <Form.Check
                                                type="checkbox"
                                                {...register('subscribe')}
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
