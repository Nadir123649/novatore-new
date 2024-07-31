import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { servicesoffer } from "../constants/indesx";
import { useRouter } from "next/router";

const CloudOps: React.FC = () => {
  const ulRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(1);
  const { digitalservice, cybersecurity } = servicesoffer;

  useEffect(() => {
    const handleScroll = () => {
      if (ulRef.current) {
        const listItems = ulRef.current.querySelectorAll<HTMLLIElement>("li");
        const scrollTop = ulRef.current.scrollTop;
        const clientHeight = ulRef.current.clientHeight;
        const itemHeight = listItems[0]?.clientHeight || 0;

        // Calculate which item is in the center of the view
        const middleIndex = Math.floor((scrollTop + clientHeight / 3 ) / itemHeight);
        setActiveIndex(middleIndex);

        if (scrollTop + clientHeight >= ulRef.current.scrollHeight - 1) {
          ulRef.current.scrollTop = 0;
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (ulRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = ulRef.current;
        const delta = event.deltaY;

        if (
          (delta < 0 && scrollTop === 0) ||
          (delta > 0 && scrollTop + clientHeight >= scrollHeight)
        ) {
          event.preventDefault();
        }
      }
    };

    const ulElement = ulRef.current;
    ulElement?.addEventListener("scroll", handleScroll);
    ulElement?.addEventListener("wheel", handleWheel);

    return () => {
      ulElement?.removeEventListener("scroll", handleScroll);
      ulElement?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Data mapping according to current route 
  const getDetailsForCurrentRoute = () => {
    const { pathname } = router;
    if (pathname.includes("digitalservice")) {
      return digitalservice;
    } else if (pathname.includes("cybersecurity")) {
      return cybersecurity;
    }
    return [];
  };

  const detailsForCurrentRoute = getDetailsForCurrentRoute();
  const duplicatedDetails = [...detailsForCurrentRoute, ...detailsForCurrentRoute];

  return (
    <section className="CloudOps-section py-[10px] md:py-20">
      <Container>
        <h2 className="text-[34px] md:text-[52px] not-italic font-semibold md:font-bold mb-[10px] md:mb-12 text-center pb-[20px] md:pb-[40px]">
          Explore the Power of <span className="text-[#2776EA]">CloudOps</span>{" "}
          for Superior Software Performance
        </h2>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <h2 className="font-semibold md:font-bold text-[30px]  md:text-[40px] pb-[20px]">
              Have a Look at What{" "}
              <span className="text-[#2776EA]">we offer?</span>
            </h2>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="grid grid-cols-12 gap-4 py-[20px] min-h-[100vh]">
                  <div className="col-span-12 md:col-span-4">
                    <div className="text-white bg-[#2776EA] rounded-2xl p-4 min-h-[45vh] md:min-h-[70vh] max-w-[360px] relative">
                      {detailsForCurrentRoute.map((data, index) => (
                        <p key={index} className="text-xl md:text-2xl">
                          {data.details}
                        </p>
                      ))}
                      <div className="w-[44px] h-[44px] d-flex items-center justify-center border border-[#fff] rounded-full absolute bottom-8 right-6">
                        <FaArrowRightLong />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12  md:col-span-8">
                    <div
                      className="overflow-y-scroll h-[440px] md:h-[700px] parallax-section relative"
                      ref={ulRef}
                    >
                      <ul className="pr-[40px] flex flex-col gap-10">
                        {duplicatedDetails.map((data, index) => (
                          <li
                            key={index}
                            className={`relative h-[160px] md:h-[200px] px-[20px] py-10 transition-all duration-300 ${index === activeIndex
                                ? "opacity-100 scale-110"
                                : "opacity-50 scale-100"
                              }`}
                          >
                            <div className="d-flex items-center gap-3">
                              <div className="bullet"></div>
                              <h1 className="text-[20px] md:text-[28px] font-semibold">
                                {data.title}
                              </h1>
                            </div>
                            <p className="text-15px pl-9">{data.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CloudOps;
