import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css';
import { addfile } from '@/utils';
import Image from 'next/image';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

interface IFormInputs {

    name: string;


}

const JobFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" })
        .max(50, { message: "Name must be less than 50 characters" }),
    city: z
        .string()
        .min(1, { message: "City is required" })
        .max(50, { message: "City must be less than 50 characters" }),
    email: z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" }),
    phoneNumber: z
        .string()
        .min(1, { message: "Phone number is required" })
        .regex(/^[0-9]+$/, { message: "Phone number must be numeric" })
        .max(13, { message: "Phone number must not exceed 13 characters" }),
    aboutYourself: z
        .string()
        .optional(),
    linkedIn: z
        .string()
        .url({ message: "Invalid LinkedIn profile link" })
        .optional(),
    position: z
        .string()
        .min(1, { message: "Position is required" }),
    educationalBackground: z
        .string()
        .min(1, { message: "Educational background is required" }),
    otherEducationalBackground: z
        .string()
        .optional(),
    workExperience: z
        .string()
        .min(1, { message: "Work experience details are required" }),
    currentCompany: z
        .string()
        .min(1, { message: "Current company name is required" }),
    currentSalary: z
        .string()
        .min(1, { message: "Current salary is required" }),
    expectedSalary: z
        .string()
        .min(1, { message: "Expected salary is required" }),
    joiningNotice: z
        .string()
        .min(1, { message: "Joining notice is required" }),
    resume: z
        .any()
});


const JobForm = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        const allowedTypes = ['application/pdf', 'application/xml'];
        const maxSize = 10 * 1024 * 1024;

        if (file) {
            if (!allowedTypes.includes(file.type)) {

                setSelectedFile(null);
                return;
            }
            if (file.size > maxSize) {

                setSelectedFile(null);
                return;
            }


        }
    };



    return (
        <section className={` pb-10 md:py-20 px-5 `}>

            <Container>
                <Row className='border-1 border-[#B4D2FF] rounded-[16px] sm:pb-[140px] md:py-[60px] px-[20px] bg-white [filter:drop-shadow(0px_4px_16px_rgba(0,_0,_0,_0.16))]'>

                    <div className=" ">
                        <h1 className='text-[#000000] text-2xl  font-semibold'>Personal Details</h1>
                        <p className='text-[#5D5D5D] text-lg  '>
                            To be considered for an open position at Novatore Solutions, please complete the application form below.
                        </p>


                    </div>
                    <Form className='contact-form sm:pt-10 md:pt-0' >
                        <Row className='gap-y-7 '>

                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '> Name</Form.Label>
                                    <input
                                        {...register('name')}
                                        type="text"
                                        className=' bg-[#F5F9FE] form-input rounded-[16px] border border-solid border-[#B7B7B7]   text-[#33384B] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Your Name"
                                        maxLength={50}
                                    />
                                    {errors.name && <p className='text-[#FF9494]'>{errors.name.message}</p>}
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '> City</Form.Label>
                                    <input
                                        type="text"
                                        className=' bg-[#F5F9FE] form-input rounded-[16px] border border-solid border-[#B7B7B7]   text-black p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Your City"
                                        maxLength={50}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold '>Email</Form.Label>
                                    <input
                                        type="mail"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Your Active Email"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Phone Number</Form.Label>
                                    <input
                                        type="number"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Your Phone Number"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={12} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>
                                        Let us know about yourself
                                    </Form.Label>
                                    <p className='text-[#33384B] '>Please provide a brief introduction about your background, experience, and what motivates you to join Novatore Solutions.</p>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-[#F5F9FE]  text-black px-[14px] py-[24px] text-[18px] not-italic font-normal'
                                        placeholder="About Yourself"
                                    />

                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Please share your LinkedIn Profiles Link*</Form.Label>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="LinkedIn Link"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Position</Form.Label>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F1F1F1]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Position"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Educational Background</Form.Label>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="University/College"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold'>Other Educational Background</Form.Label>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Enter"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Work Experience Details*</Form.Label>
                                    <p className='text-[#33384B] '>How many total years of experience do you have in your career?</p>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE] text-black border-[#B7B7B7] px-[14px] py-[24px] text-[18px] not-italic font-normal'
                                        placeholder="About Yourself"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Work Experience Details*</Form.Label>
                                    <p className='text-[#33384B] '>How many years of relevant experience do you have for this position?</p>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] px-[14px] py-[24px] text-[18px] not-italic font-normal'
                                        placeholder="About Yourself"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={12} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Work Experience Details</Form.Label>
                                    <p className='text-[#33384B] '>How much total experience (in years) do you have in career related to the position you applied? </p>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] px-[14px] py-[24px] text-[18px] not-italic font-normal'
                                        placeholder="About Yourself"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Current Company Name?*</Form.Label>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Company Name"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Whats your Current Salary?*</Form.Label>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Current Salary"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={12} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>Whats your Expected Salary?*</Form.Label>
                                    <p className='text-[#33384B] '>Please be realistic as it will be considered for shortlisting candidates.</p>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] px-[14px] py-[24px] text-[18px] not-italic font-normal'
                                        placeholder="Your Answer"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12}>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>What will be your joining notice? Please mention in terms of days.*</Form.Label>
                                    <input
                                        type="text"
                                        className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[14px] text-[18px] not-italic font-normal'
                                        placeholder="Your Answer"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} xs={12} className='job-file'>
                                <Form.Group className='flex flex-col gap-1'>
                                    <Form.Label className='text-[#33384B]  font-semibold  '>
                                        Please upload your resume*
                                    </Form.Label>


                                    <div className='form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[9px] text-[18px] not-italic font-normal'>
                                        <input
                                            id="file-input"
                                            type="file"
                                            accept=".pdf, .xml"
                                            onChange={handleFileChange}
                                            className='  hidden form-input rounded-[16px] border border-solid bg-[#F5F9FE]  text-black border-[#B7B7B7] p-[0px] text-[18px] not-italic font-normal'
                                        />

                                        <label htmlFor="file-input" className=' w-[90px] h-[38px] flex items-center gap-1 justify-center cursor-pointer rounded-[8px] border-1 bg-white text-[#2776EA] border-[#2776EA] text-[13px] '>
                                            <Image src={addfile} alt="upload" width={16} height={20} />
                                            Add File
                                        </label>
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col lg={12} md={12} xs={12} className='flex justify-end gap-3'>
                                <button className='  text-[16px] md:text-[18px] font-normal text-[#645555] not-italic bg-transparent rounded-[16px] py-[13px] md:py-[16px] px-[10px] md:px-[24px] max-w-[150px] md:max-w-[180px] w-full border-1 border-[#2776EA]' >
                                    Cancel
                                </button>
                                <button className='btn-submit text-white text-[16px] md:text-[18px] font-normal not-italic bg-[#2776EA] rounded-[16px] py-[13px] md:py-[16px] px-[10px] md:px-[24px] max-w-[150px] md:max-w-[180px] w-full ' type='submit'>
                                    Submit
                                </button>

                            </Col>
                        </Row>
                    </Form>

                </Row>
            </Container>

        </section>
    );
}

export default JobForm;
