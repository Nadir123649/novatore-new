import { contactDetails } from '@/constants/indesx';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image';
import 'react-phone-input-2/lib/style.css'
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';


interface IFormInputs {
    help: string;
    fullName: string;
    email: string;
    contact: string;
    message?: string;
    phone?: string;
    subscribe?: boolean;
    country?: string;


}
interface Country {
    name: string;
    flag: string;
    code: string;
    country?: string;
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
    country: z.string().nonempty({ message: "Country is required." }),
    contact: z.string()
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
    const [selected, setSelected] = useState("");
    const [isLoading, setIsLoading] = useState(false);


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

            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };
        fetchCountries();
    }, []);

    const { register, handleSubmit, clearErrors, setValue, formState: { errors } } = useForm<IFormInputs>({
        resolver: zodResolver(schema),
    });

    const handleCountryChange = (selectedOption: any) => {
        const country = countries.find(c => c.name === selectedOption?.value);
        if (country) {
            setSelectedCountry(country);
            setValue('phone', country.code);
            setValue('country', country.name);
            clearErrors('country');
        }
    };

    const onSubmit = async (data: IFormInputs) => {
        try {
            setIsLoading(true);
            toast.success("Submitting...");

            const fullPhoneNumber = `${selectedCountry?.code || ''}-${data.contact}`;
            data.contact = fullPhoneNumber;

            const response = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                cache: "no-cache",
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast.success("Submitted successfully!");
            } else {
                toast.error("Unable to submit.");
            }
        } catch (err) {
            console.log(err, 'error');
            toast.error("An error occurred. Unable to submit.");
        } finally {
            setIsLoading(false);
        }
    };




    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            width: '400px',
            borderRadius: '16px',
            borderColor: '#B7B7B7',
            padding: '14px',
        }),
        option: (provided: any) => ({
            ...provided,
            fontSize: '18px',
        }),
    };
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (selectedCountry) {
            if (value.startsWith(selectedCountry.code)) {
                setValue('phone', value);
            } else {
                setValue('phone', selectedCountry.code);
            }
        } else {
            setValue('phone', value);
        }
    };


    return (
        <section className={`${isVisible ? "fadeIn" : "opacity-0 "
            } contact-form-section pb-10 md:py-20 bg-center bg-no-repeat bg-cover `}>
            <div id='contact-us-form' className='layer-form bg-center bg-no-repeat mx-5 bg-cover rounded-[16px] sm:pb-[140px] md:py-[60px]'>
                <Container  >
                    <Row >
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

                                    <Col lg={6} md={12} xs={12} className='h-[100px]'>
                                        <Form.Group className="flex flex-col gap-1">
                                            <Form.Label className="text-[#645555] text-[18px] font-medium not-italic relative">Country</Form.Label>
                                            <Select
                                                options={countries.map(country => ({ value: country.name, label: country.name }))}
                                                {...register('country')}
                                                onChange={handleCountryChange}
                                                styles={customStyles}
                                                placeholder="Select a country"
                                                className=' custom-select-country  '
                                            />

                                            {selectedCountry && (
                                                <div className=" mt-2 flex items-center gap-2 w-[34px] h-[30px] border-r border-[#A3A3A3] relative  bottom-[54px] left-[10px] ">
                                                    <Image src={selectedCountry.flag} alt="flag" width={28} height={28} className='h-[20px] w-[30px] bg-[#ff0000]' style={{ width: "30px", height: "20px" }} />
                                                </div>

                                            )}

                                            {errors.country && <p className="text-[#FF9494]">{errors.country.message}</p>}
                                        </Form.Group>
                                    </Col>


                                    <Col lg={6} md={12} xs={12} className='h-[110px]'>
                                        <Form.Group className="flex flex-col gap-1">
                                            <Form.Label className="text-[#645555] text-[18px] font-medium not-italic">Phone Number</Form.Label>

                                            <div className="phone-container bg-white form-input rounded-[16px] border border-solid border-[#B7B7B7]  text-black p-[14px] text-[18px] not-italic font-normal"
                                            >
                                                <input
                                                    type="tel"
                                                    id="countryCode"
                                                    value={selectedCountry?.code || ''}
                                                    readOnly
                                                    className="country-code-style"
                                                />
                                                <input
                                                    type="tel"
                                                    {...register('contact')}
                                                    id="phoneNumber"
                                                    placeholder="111 2222222"
                                                    className="phone-number-style"
                                                    maxLength={14}
                                                    onKeyPress={(e) => {

                                                        const allowedKeys = /^[0-9\+\-\(\)\s]*$/;
                                                        if (!allowedKeys.test(e.key)) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                />
                                            </div>
                                            {errors.contact && <p className="text-[#FF9494]">{errors.contact.message}</p>}
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
                                        <button disabled={isLoading} className='btn-submit text-white text-[18px] font-normal not-italic bg-[#2776EA] rounded-[16px] py-[12px] md:py-[16px] px-[14px] md:px-[24px] max-w-[180px] w-full border border-solid border-[#B7B7B7]' type='submit'>
                                            Submit {" "}
                                            {isLoading && (
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </button>
                                        <ToastContainer
                                            bodyClassName="toastbody" />
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
