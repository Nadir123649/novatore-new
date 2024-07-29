import React from 'react';
import { Container } from 'react-bootstrap';

const CanHelp = () => {
    return (
        <section className='pt-3 mb-20'>
            <Container className='py-20 can-help-section min-h-[300px] text-center h-full bg-no-repeat bg-cover bg-center rounded-[24px] bg-[#FFFFFFDE]' >
                <h1 className='mb-[24px] text-[40px] font-bold leading-normal not-italic text-[#3F3F3F]'>
                    How can we
                    <span className='text-[#2776EA]'> help you</span>?
                </h1>
                <p className='text-[22px] font-lato not-italic leading-normal text-[#3F3F3F] font-light mb-[40px]'>Are you ready to push boundaries and explore new frontiers of innovation?</p>
                <button className='bg-[#2776EA] rounded-[16px] py-[16px] px-[24px] text-white max-w-[225px] w-full text-[18px] '>Let’s work together</button>
            </Container>
        </section>
    );
}

export default CanHelp;
