import React from 'react';
import Image from 'next/image';
import { companiesdata } from '@/constants/indesx';

const ClientLogos = () => {

  return (
    <section className='bg-[#F1F1F1]'>
      <div className='container'>
        <div className=' h-[120px] md:h-[120px] flex justify-center items-center overflow-hidden'>
          <div className='slider'>
            <div className='slide-track'>
              {companiesdata.map((company, index) => (
                <div
                  key={index}
                  className='slide'
                >
                  <Image src={company.logo} alt='protium' width={160} height={70} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ClientLogos;
