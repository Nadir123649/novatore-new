import { aboutData, careersData, customSoftware, eventsData, insightsData, itServices, realEstate, siteMapData, socialData, whitepapers } from '@/constants/indesx'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
const Footer = () => {
  const router = useRouter();
  const handleNavigation = (url: string) => {
    router.push(url);
  };
  return (
    <footer className='footer-section sm:pt-0 md:pt-20 bg-center bg-no-repeat bg-cover'>
      <Container>
        <div className="footer-top pb-[44px]">
          <Row className='footer-list'>
            <Col lg={3} md={6} xs={12} >
              <div className="footer-links">
                <Link href="/custom-software-development"> <h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal">Custom Software Development</h3></Link>
                <ul className='footer-links-list list-none p-0 m-0 flex flex-col  md:gap-[13px]'>
                  {customSoftware.map((data, index) => (
                    <li key={index}>
                      <span
                        onClick={() => handleNavigation(data.link)}
                        className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]'
                      >
                        {data.title}
                      </span>
                    </li>
                  ))
                  }
                </ul>
                <Link href='/it-services'><h3 className="text-[#FFF] text-[18px] not-italic mb-4 mt-4 font-normal">IT Services</h3></Link>

                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[13px]'>
                  {itServices.map((data, index) => (
                    <li key={index} >
                      <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]'>{data.title}</span>
                    </li>
                  ))
                  }
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} xs={12} className=' md:border-l border-[#FFFFFF14] '>
              <div className="footer-links md:pl-6">
                <Link href="/transformative-solutions"><h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal">Transformative Solutions</h3></Link>

                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[13px]'>
                  {realEstate.map((data, index) => (
                    <li key={index} >
                      <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]'>{data.title}</span>
                    </li>
                  ))
                  }
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} xs={12} className='md:border-l  border-[#FFFFFF14] '>
              <div className="footer-links md:pl-6    ">
                <Link href="/"> <h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal">Whitepapers</h3></Link>
                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[13px]'>
                  {whitepapers.map((data, index) => (
                    <li key={index} >
                      <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]'>{data.title}</span>
                    </li>
                  ))
                  }
                </ul>
                <h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal mt-5">Insights</h3>
                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[13px]'>
                  {insightsData.map((data, index) => (
                    <li key={index} >
                      <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]'>{data.title}</span>
                    </li>
                  ))
                  }
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} xs={12} className='md:border-l   border-[#FFFFFF14] '>
              <div className="footer-links md:pl-6">
                <Link href="/"><h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal">News & Events</h3></Link>

                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[13px]'>
                  {eventsData.map((data, index) => (
                    <li key={index} >
                      <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]'>{data.title}</span>
                    </li>
                  ))
                  }
                </ul>
                <Link href="/about"><h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal mt-5">About</h3></Link>

                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[13px]'>
                  {aboutData.map((data, index) => (
                    <li key={index} >
                      <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]' >{data.title}</span>
                    </li>
                  ))
                  }
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} xs={12} className='md:border-l  border-[#FFFFFF14] '>
              <div className="footer-links md:pl-6">
                <Link href="/careers">  <h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal">Careers</h3></Link>

                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[13px]'>
                  {careersData.map((data, index) => (
                    <li key={index} >
                      <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA]'>{data.title}</span>
                    </li>
                  ))
                  }
                </ul>
                <h3 className="text-[#FFF] text-[18px] not-italic mb-4 font-normal mt-5">About</h3>
                <ul className='footer-links-list list-none p-0 m-0 flex flex-col gap-[18px] social-footer'>
                  {socialData.map((data, index) => (
                    <li key={index} >
                      <Link href={data.link} className='text-[#B5B5B5] text-[16px] font-normal not-italic flex flex-row gap-[16px] items-center transition-colors duration-300 hover:text-[#2776EA] ' rel="noopener noreferrer" target="_blank">
                        <span className=' rounded-[50px] border border-solid border-[#717171] w-[30px] h-[30px] flex justify-center items-center'>
                          {data.icon}
                        </span>
                        {data.title}
                      </Link>
                    </li>
                  ))
                  }
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-two border-t border-solid border-[#3D3D3D] ">
          <div className="inner-footer py-[24px]">
            <ul className='footer-links-list list-none p-0 m-0 flex flex-col  md:flex-row justify-between gap-[13px]'>
              {siteMapData.map((data, index) => (
                <li key={index} >
                  <span onClick={() => handleNavigation(data.link)} className='text-[#B5B5B5] text-[16px] font-normal not-italic transition-colors duration-300 hover:text-[#2776EA] hover:underline'>{data.title}</span>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
