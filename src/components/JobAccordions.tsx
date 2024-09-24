import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { accordionData } from '@/constants/indesx';
import { FaChevronDown } from "react-icons/fa6";

const JobAccordions = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

    const toggleAccordion = (id: number) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section className="pb-10 md:py-20 px-5">
            <Container>
                <div id="accordion-color" data-accordion="collapse">
                    {accordionData.map((item) => (
                        <div key={item.id} className=''>
                            <h2 id={`accordion-color-heading-${item.id}`} className='mt-4 mb-0'>
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-4 font-medium text-[#000] text-[32px]  border-[#B4D2FF] rounded-[16px] gap-3 transition-transform duration-300 ${activeAccordion === item.id ? 'rounded-tl-[16px] rounded-tr-[16px] rounded-bl-none rounded-br-none border-t border-x' : 'rounded-[16px] border-1'}`}
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={activeAccordion === item.id}
                                    aria-controls={`accordion-color-body-${item.id}`}
                                >
                                    <span>{item.title}</span>
                                    <FaChevronDown className={`w-[24px] h-[24px] transform text-[#666666] transition-transform duration-300 ${activeAccordion === item.id ? 'rotate-180 ' : ''}`} />
                                </button>


                            </h2>
                            <div
                                id={`accordion-color-body-${item.id}`}
                                className={`${activeAccordion === item.id ? '' : 'hidden'}`}
                                aria-labelledby={`accordion-color-heading-${item.id}`}
                            >
                                <div
                                    className={`p-4  border-[#B4D2FF] rounded-tl-none rounded-br-[16px] rounded-tr-none rounded-bl-[16px] transition-transform duration-300 ${activeAccordion === item.id ? 'border-b border-x' : ' border-1'}`}
                                >
                                    <h1 className="text-lg font-bold mb-2">Job Overview</h1>
                                    <p className="">{item.content}</p>

                                    <h1 className="text-lg font-bold mb-2">Responsibilities</h1>
                                    <ul className="list-disc pl-5 mb-4">
                                        {item.responsibilities.map((responsibility, index) => (
                                            <li key={index} className="">
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>

                                    <h1 className="text-lg font-bold mb-2">Requirements</h1>
                                    <ul className="list-disc pl-5">
                                        {item.requirements.map((requirement, index) => (
                                            <li key={index} className="">
                                                {requirement}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className=' text-white text-[16px] md:text-[18px] font-normal  bg-[#2776EA] rounded-[16px] py-[13px] md:py-[16px] px-[10px] md:px-[24px] max-w-[150px] md:max-w-[180px] w-full ' type='submit'>
                                        Apply Now
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default JobAccordions;
