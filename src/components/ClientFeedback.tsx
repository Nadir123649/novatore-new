import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image';
import { Catalyst, London, Upsure, Cova, Protium, Airbolt } from '@/utils';
import { feedbacksdataforward, feedbacksdatabackword } from '@/constants/indesx';
const ClientFeedback = () => {

    return (
        <section className='feedback-section py-20 '>
            <h2 className="text-center text-[40px]  pb-20 font-semibold">Client <span className='text-[#2776EA]'>feedback</span> </h2>
            <Container>
                <div className='  flex justify-center items-center overflow-hidden rounded-2xl '>
                    <div className='slider-feedback'>
                        <div className='feedback-slide-track-forward h-full  pt-10 '>
                            {feedbacksdataforward.map((feedback, index) => (
                                <div
                                    key={index}
                                    className='feedback-slide-forward card  w-[410px]  h-[242px] p-3 relative '
                                >
                                    <Image src={feedback.profile} alt='protium' width={75} height={75} className='w-[75px] h-[75px] absolute top-[-35px] left-[20px] ' />
                                    <p className='pt-[50px]'>They were very receptive to our feedback and always made sure we were happy with our project. They were also great with communication and being available when we had questions or needed help.</p>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h2 className='text-[18px] font-medium'>{feedback.profilename}</h2>
                                            <p className='text-xs text-[#505050]'>{feedback.position}</p>
                                        </div>
                                        <Image src={feedback.logo} alt='protium' width={160} height={70} className='w-[160px] h-[70px]' />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='feedback-slide-track-reverse h-full mt-20 '>
                            {feedbacksdatabackword.map((feedback, index) => (
                                <div
                                    key={index}
                                    className='feedback-slide-reverse card  w-[410px] h-[242px] p-3 relative'
                                >
                                    <Image src={feedback.profile} alt='protium' width={75} height={75} className='w-[75px] h-[75px] absolute top-[-35px] left-[20px] ' />
                                    <p className='pt-[50px]'>They were very receptive to our feedback and always made sure we were happy with our project. They were also great with communication and being available when we had questions or needed help.</p>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h2 className='text-[18px] font-medium'>{feedback.profilename}</h2>
                                            <p className='text-xs text-[#505050]'>{feedback.position}</p>
                                        </div>
                                        <Image src={feedback.logo} alt='protium' width={160} height={70} className='w-[160px] h-[70px]' />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </Container>
        </section>
    )
}

export default ClientFeedback
