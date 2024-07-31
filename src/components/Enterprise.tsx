import { Enterprises } from '@/constants/indesx'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';

const Enterprise = () => {
  return (
    <section className='choose-us-section py-20 bg-center bg-no-repeat bg-cover'>
      <Container>
        <h2 className='text-[30px] md:text-[52px] not-italic font-medium text-white mb-12 text-center'>Reshaping Enterprises for the Digital Age</h2>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="card-features grid grid-cols-12 gap-5 ">
                  {Enterprises.map((data, index) => (
                    <div key={index} className={`col-span-4 card-text text-center flex flex-col px-[20px] my-[0px] md:my-[100px] ${index !== Enterprises.length - 1
                        ? 'border-r-2 border-solid border-[#8E8C8C]'
                        : ''
                      }`} >
                      <h3 className='text-[56px] not-italic font-bold text-white mb-0'>{data.title} <sup><span className='text-[24px] font-normal text-[#F9D00D] pl-[6px]'>{data.percentage}</span></sup></h3>
                      <p className=' font-medium text-white mb-0'>{data.description}</p>
                    </div>
                  ))}
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Enterprise