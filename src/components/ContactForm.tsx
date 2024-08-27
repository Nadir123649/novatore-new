import { contactDetails } from '@/constants/indesx';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image';
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface IFormInputs {
    help: string;
    fullName: string;
    email: string;
    country: string;
    phone: string;
    message?: string;
    subscribe?: boolean;
}
interface Country {
    name: string;
    flag: string;
    code: string;
}
const schema = z.object({

    help: z.string().optional(),
    fullName: z.string()
        .nonempty({ message: "Full name is required." })
        .regex(/^[a-zA-Z\s'-]*$/, { message: "Full Name can only contain letters, spaces, hyphens, and apostrophes." })
        .min(2, { message: "Full name must be at least 2 characters long." })
        .max(50, { message: "Full name cannot exceed 50 characters." }),

    email: z.string()
        .nonempty({ message: "Email is required." })
        .email({ message: "Please enter a valid email address." }),

    country: z.string()
        .nonempty({ message: "Please Select a country" }),
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

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [selected, setSelected] = useState("US");


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

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countryData = response.data.map((country: any) => ({
                    name: country.name.common,
                    flag: country.flags.svg,
                    code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
                }));
                setCountries(countryData);

                const defaultCountry = countryData.find(c => c.name === "United States");
                if (defaultCountry) {
                    setSelectedCountry(defaultCountry);
                    setValue('country', defaultCountry.name);
                    setValue('phone', defaultCountry.code);
                } else if (countryData.length > 0) {
                    setSelectedCountry(countryData[0]);
                    setValue('country', countryData[0].name);
                    setValue('phone', countryData[0].code);
                }
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };
        fetchCountries();
    }, []);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInputs>({
        resolver: zodResolver(schema),
    });

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const country = countries.find(c => c.name === event.target.value);
        if (country) {
            setSelectedCountry(country);
            setValue('phone', country.code);
        }
    };

    const onSubmit = async (data: IFormInputs) => {
        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                cache: "no-cache",
                body: JSON.stringify(data)
            })
            await response.json();
        } catch (err) {
            console.log(err, 'error')
        }
    };

    return (
        <section id='contact-us-form' className={`${isVisible ? "fadeIn" : "opacity-0 "
            } contact-form-section pb-10 md:pb-20 bg-center bg-no-repeat bg-cover`}>
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
                            <Form className='contact-form sm:pt-10 md:pt-0' onSubmit={handleSubmit(onSubmit)}>
                                <Row className='gap-y-4'>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[18px] font-medium not-italic'>
                                                How We Can Help You?
                                            </Form.Label>
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
                                                maxLength={50}
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
                                        <Form.Group className="flex flex-col gap-1  ">
                                            <Form.Label className="text-[#645555] text-[18px] font-medium not-italic">Country</Form.Label>
                                            <select
                                                {...register('country')}
                                                className="pl-[60px]  relative form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white cursor-pointer  text-black p-[14px] text-[18px] not-italic font-normal custom-select"
                                                onChange={handleCountryChange}
                                            >

                                                {countries.map((country, index) => (

                                                    <option key={index} value={country.name}>

                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {selectedCountry && (
                                                <div className="mt-2 flex items-center gap-2 relative bottom-[60px] left-[20px] w-[35px]  h-[40px] border-r border-[#A3A3A3] ">
                                                    <Image src={selectedCountry.flag} alt="flag" width={26} height={26} />

                                                </div>
                                            )}


                                            {errors.country && <p className="text-[#FF9494]">{errors.country.message}</p>}
                                        </Form.Group>
                                    </Col>

                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className="flex flex-col gap-1">
                                            <Form.Label className="text-[#645555] text-[18px] font-medium not-italic">Phone Number</Form.Label>
                                            <input
                                                type="text"
                                                {...register('phone')}
                                                className="form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[18px] not-italic font-normal"
                                                placeholder="+00 111 2222222"
                                                maxLength={14}
                                                onKeyPress={(e) => {

                                                    const allowedKeys = /^[0-9\+\-\(\)\s]*$/;
                                                    if (!allowedKeys.test(e.key)) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            />

                                            {errors.phone && <p className="text-[#FF9494]">{errors.phone.message}</p>}
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
                                                className="my-2 text-[#645555] text-[18px] font-medium not-italic custom-checkbox"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12} className='flex justify-end'>
                                        <button className='btn-submit text-white text-[18px] font-normal not-italic bg-[#2776EA] rounded-[16px] py-[12px] md:py-[16px] px-[14px] md:px-[24px] max-w-[180px] w-full border border-solid border-[#B7B7B7]' type='submit'>
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
