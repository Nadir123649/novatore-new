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
    const { register, handleSubmit, clearErrors, setValue, formState: { errors }, reset } = useForm<IFormInputs>({
        resolver: zodResolver(schema),
    });

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

    const handleCountryChange = (countryName: string) => {
        const country = countries.find(c => c.name === countryName);
        if (country) {
            setSelectedCountry(country);
            setValue('country', country.name);
        }
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
                reset();
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
                console.log('API Response:', response.data);
                const countryData = response.data.map((country: any) => {
                    let code = '';
                    if (country.idd) {
                        code = country.idd.root || '';
                        if (country.idd.suffixes && country.idd.suffixes.length > 0) {
                            code += country.idd.suffixes[0];
                        }
                    }

                    return {
                        name: country.name.common,
                        flag: country.flags.svg,
                        code: code,
                    };
                }).sort((a: any, b: any) => a.name.localeCompare(b.name));

                const unitedStates = countryData.find((country: any) => country.name === 'United States');
                if (unitedStates) {
                    unitedStates.code = '+1';
                    setSelectedCountry(unitedStates);
                    setCountries(countryData);
                    setValue('country', unitedStates.name);
                    setValue('phone', unitedStates.code);
                } else {

                    console.error('United States not found in fetched country data.');
                }
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchCountries();
    }, []);


    return (
        <section className={`${isVisible ? "fadeIn" : "opacity-0 "
            } contact-form-section pb-10 md:py-20 bg-center bg-no-repeat bg-cover `}>
            <div id='contact-us-form' className='layer-form bg-center bg-no-repeat mx-5 bg-cover rounded-[16px] sm:pb-[140px] md:py-[60px]'>
                <Container >
                    <Row >
                        <Col lg={4} md={12} xs={12}>
                            <div className="contact-form-content mt-[20px] md:mt-[30px]">
                                <h1 className='text-[#2D2D2D] font-bold not-italic mb-2 md:mb-4 max-w-full md:max-w-[290px] '>Let’s reach new <span className='text-[#2776EA]'>heights</span>!</h1>
                                <p className='text-[#4C4C4C] not-italic text-[18px] md:text-[24px] font-normal max-w-full md:max-w-[274px] '>
                                    Book a call today and see
                                    where we can take you.
                                </p>
                                <div className='contact-details flex flex-col px-[10px] md:px-[0px] gap-4 mt-[30px] md:mt-[90px]'>
                                    {contactDetails.map((data, index) => (
                                        <div key={index} className='contact-details-item flex gap-3 items-center text-[#2776EA]'>
                                            {data.icon}
                                            {data.link ? (
                                                <a
                                                    href={data.link}
                                                    className='text-[16px] md:text-[18px] text-[#2A2A2A] max-w-[315px] font-normal'
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {data.text}
                                                </a>
                                            ) : (
                                                <span className='text-[16px] md:text-[18px] text-[#2A2A2A] max-w-[315px] font-normal'>
                                                    {data.text}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} xs={12}>
                            <Form className='contact-form sm:pt-10 md:pt-0 ' onSubmit={handleSubmit(onSubmit)}>
                                <Row className='gap-y-4'>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>
                                                How We Can Help You?
                                            </Form.Label>
                                            <input
                                                type="text"
                                                {...register('help')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="How can we help?"
                                            />
                                            {errors.help && <p className='text-[#FF9494]'>{errors.help.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Full Name</Form.Label>
                                            <input
                                                type="text"
                                                {...register('fullName')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white text-black p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="Alexa David"
                                                maxLength={50}
                                            />
                                            {errors.fullName && <p className='text-[#FF9494]'>{errors.fullName.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Email Address</Form.Label>
                                            <input
                                                type="text"
                                                {...register('email')}
                                                className='form-input rounded-[16px] border border-solid bg-white  text-black border-[#B7B7B7] p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="Alexadavid@email.com"
                                            />
                                            {errors.email && <p className='text-[#FF9494]'>{errors.email.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='new-custom-select  flex flex-col gap-1'>
                                            <Form.Label htmlFor="countries" className=' text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Country</Form.Label>
                                            <select
                                                {...register('country')}
                                                id="countries"
                                                className="form-input country-team pl-[50px] rounded-[16px] border border-solid bg-white text-black border-[#B7B7B7] p-[14px] text-[16px] md:text-[18px] not-italic font-normal w-full box-border"
                                                onChange={(e) => handleCountryChange(e.target.value)}
                                            >
                                                <option value="" disabled>Choose a country</option>
                                                {countries && countries.map((country) => (
                                                    <option key={country.name} value={country.name} >
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>

                                            {selectedCountry && (
                                                <div className="mt-2 flex items-center gap-2 w-[34px] h-[30px] border-r border-[#A3A3A3] relative bottom-[54px] left-[10px]">
                                                    <Image
                                                        src={selectedCountry.flag}
                                                        alt="flag"
                                                        width={28}
                                                        height={28}
                                                        className='h-[20px] w-[30px]'
                                                        style={{ width: "30px", height: "20px" }}
                                                    />
                                                </div>
                                            )}
                                            {errors.country && <p className="text-[#FF9494]">{errors.country.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12} >
                                        <Form.Group className="flex flex-col gap-1">
                                            <Form.Label className="text-[#645555] text-[16px] md:text-[18px] font-medium not-italic">Phone Number</Form.Label>
                                            <div className="phone-container bg-white form-input rounded-[16px] border border-solid border-[#B7B7B7]  text-black p-[14px] text-[16px] md:text-[18px] not-italic font-normal">
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
                                            <Form.Label className='form-input text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Message</Form.Label>
                                            <textarea
                                                id=""
                                                {...register('message')}
                                                className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] min-h-[140px] text-[16px] md:text-[18px] not-italic font-normal '
                                                placeholder='Message'></textarea>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group controlId="subscribe" className='flex  gap-3 items-center'>
                                            <Form.Check
                                                type="checkbox"
                                                {...register('subscribe')}
                                                className="my-2 text-[#645555] text-[16px] md:text-[18px] font-medium not-italic custom-checkbox "
                                            />
                                            <label
                                                className="mt-2 text-[#645555] text-[16px] md:text-[18px] font-medium not-italic "
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Check here to subscribe for updates.
                                            </label>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12} className='flex justify-end'>
                                        <button disabled={isLoading} className='btn-submit text-white text-[16px] md:text-[18px] font-normal not-italic bg-[#2776EA] rounded-[16px] py-[13px] md:py-[16px] px-[10px] md:px-[24px] max-w-[150px] md:max-w-[180px] w-full border border-solid border-[#B7B7B7]' type='submit'>
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
                                            bodyClassName="toastbody"
                                        />
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
