import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image';
import { Catalyst, London, Upsure, Cova, Protium, Airbolt } from '@/utils';

const ClientFeedback = () => {
    const feedbacksdataforward = [
        {
            id: 1,
            profile: Protium,
            description: "They were very receptive to our feedback and always made sure we were happy with our project. They were also great with communication and being available when we had questions or needed help.",
            title: "Protium",
            position: "Software Engineer",
            logo: Protium,
        },
        { id: 2, logo: Catalyst },
        { id: 3, logo: Upsure },
        { id: 4, logo: Cova },
        { id: 5, logo: London },
        { id: 6, logo: Airbolt },
        { id: 7, logo: Protium },
        { id: 8, logo: Catalyst },
        { id: 9, logo: Upsure },
        { id: 10, logo: Cova },
        { id: 11, logo: London },
        { id: 12, logo: Airbolt }
    ]
    const feedbacksdatabackword = [
        {
            id: 1,
            profile: Protium,
            description: "They were very receptive to our feedback and always made sure we were happy with our project. They were also great with communication and being available when we had questions or needed help.",
            title: "Protium",
            position: "Software Engineer",
            logo: Protium,
        },
        { id: 2, logo: Catalyst },
        { id: 3, logo: Upsure },
        { id: 4, logo: Cova },
        { id: 5, logo: London },
        { id: 6, logo: Airbolt },
        { id: 7, logo: Protium },
        { id: 8, logo: Catalyst },
        { id: 9, logo: Upsure },
        { id: 10, logo: Cova },
        { id: 11, logo: London },
        { id: 12, logo: Airbolt }
    ]
    return (
        <section className='feedback-section py-20 bg-black'>
            <h2 className="text-center text-white leading-normal text-4xl font-semibold capitalize mb-16">Client feedback</h2>
            <Container>
                <div className='  flex justify-center items-center overflow-hidden rounded-2xl '>
                    <div className='slider-feedback'>
                        <div className='feedback-slide-track h-full '>
                            {feedbacksdataforward.map((feedback, index) => (
                                <div
                                    key={index}
                                    className='feedback-slide card  w-[410px] h-[242px] '
                                >

                                    <p>They were very receptive to our feedback and always made sure we were happy with our project. They were also great with communication and being available when we had questions or needed help.</p>
                                    <div className='flex'>
                                        <div>
                                            <h2>Lindsay</h2>
                                            <p>CEO alpha alliance</p>
                                        </div>
                                        <Image src={feedback.logo} alt='protium' width={160} height={70} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='feedback-slide-track h-full mt-20'>
                            {feedbacksdatabackword.map((feedback, index) => (
                                <div
                                    key={index}
                                    className='feedback-slide card  w-[410px] h-[242px]'
                                >

                                    <p>They were very receptive to our feedback and always made sure we were happy with our project. They were also great with communication and being available when we had questions or needed help.</p>
                                    <h2>Lindsay</h2>
                                    <p>CEO alpha alliance</p>
                                    <Image src={feedback.logo} alt='protium' width={160} height={70} />

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
