import { useEffect, useRef, useState, FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import { servicesoffer } from "../constants/indesx";
import { useRouter } from "next/router";

interface CloudOpsProps {
  needsTitle?: string;
  needsTitleBlue?: string;
  needsMoreTitle?: string;
}

const CloudOps: FC<CloudOpsProps> = ({
  needsTitle,
  needsTitleBlue,
  needsMoreTitle
}) => {
  const ulRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const getDetailsForCurrentRoute = () => {
    const { pathname } = router;
    const { digitalservice, cybersecurity, digitalstrategy, digitalbusiness, UIUXDesign, penetrationtesting, securityservices, dataengineering, productengineering, machinelearning, storageservices, generativeAI, mobiledevelopment, testing, staffaugmentation, buisnessautomation, azure, cloudmigration, cloudops, digitaltransformation, enterprisemobility, networkingservices, analyticsservices, webappdevelopment } = servicesoffer;

    if (pathname.includes("digital-service")) {
      return digitalservice;
    } else if (pathname.includes("cyber-security")) {
      return cybersecurity;
    } else if (pathname.includes("digital-strategy")) {
      return digitalstrategy;
    } else if (pathname.includes("digital-business")) {
      return digitalbusiness;
    } else if (pathname.includes("mobile-app-development")) {
      return mobiledevelopment;
    } else if (pathname.includes("testing-and-qa")) {
      return testing;
    } else if (pathname.includes("business-process-automation")) {
      return buisnessautomation;
    } else if (pathname.includes("azure-and-gcp")) {
      return azure;
    } else if (pathname.includes("cloud-migration")) {
      return cloudmigration;
    } else if (pathname.includes("cloud-ops")) {
      return cloudops;
    } else if (pathname.includes("digital-transformation")) {
      return digitaltransformation;
    } else if (pathname.includes("staff-augmentation")) {
      return staffaugmentation;
    } else if (pathname.includes("storage-services")) {
      return storageservices;
    } else if (pathname.includes("generative-ai")) {
      return generativeAI;
    } else if (pathname.includes("machine-learning")) {
      return machinelearning;
    } else if (pathname.includes("product-engineering")) {
      return productengineering;
    } else if (pathname.includes("data-engineering")) {
      return dataengineering;
    } else if (pathname.includes("security-services")) {
      return securityservices;
    } else if (pathname.includes("penetration-testing")) {
      return penetrationtesting;
    } else if (pathname.includes("ui-ux-design")) {
      return UIUXDesign;
    } else if (pathname.includes("enterprise-mobility")) {
      return enterprisemobility;
    } else if (pathname.includes("networking-services")) {
      return networkingservices;
    } else if (pathname.includes("analytics-services")) {
      return analyticsservices;
    } else if (pathname.includes("web-app-development")) {
      return webappdevelopment;
    }
    return [];
  };

  const detailsForCurrentRoute = getDetailsForCurrentRoute();


  const duplicatedDetails = [
    ...detailsForCurrentRoute,
    ...detailsForCurrentRoute.slice(0, 2)
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (ulRef.current) {
        const listItems = ulRef.current.querySelectorAll<HTMLLIElement>("li");
        const scrollTop = ulRef.current.scrollTop;
        const clientHeight = ulRef.current.clientHeight;
        const itemHeight = listItems[0]?.clientHeight || 0;
        const scrollTopAdjusted = scrollTop + clientHeight / 2;
        const middleIndex = Math.floor(scrollTopAdjusted / itemHeight);
        setActiveIndex(middleIndex % duplicatedDetails.length - 1);
      }
    };

    const ulElement = ulRef.current;
    ulElement?.addEventListener("scroll", handleScroll);

    return () => {
      ulElement?.removeEventListener("scroll", handleScroll);

    };
  }, [duplicatedDetails.length]);

  const handleVisibility = () => {
    const element = document.getElementById("CloudOps-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      const isElementInView = elementTop <= window.innerHeight && elementBottom >= 0;

      setIsVisible(isElementInView);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    handleVisibility();
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  return (
    <section
      id="CloudOps-section"
      className={`${isVisible ? "fadeIn" : "opacity-0"} CloudOps-section py-[10px] md:py-20`}
    >
      <Container>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <h2 className="font-semibold md:font-bold text-[30px] md:text-[40px] pb-[20px]">
              {needsTitle} {" "}

              <span className="text-[#2776EA]">{needsTitleBlue}</span>
              {needsMoreTitle ? <span> {needsMoreTitle}</span> : null}
            </h2>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="grid grid-cols-12 gap-4 py-[20px] min-h-[100vh]">
                  <div className="col-span-12 md:col-span-4">
                    <div className="cloudops-card text-white bg-[#2776EA] rounded-2xl p-4 min-h-[45vh] md:min-h-[80vh] max-w-[360px] relative">
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
                  <div className="col-span-12 md:col-span-8">
                    <div
                      className="overflow-y-scroll h-[440px] md:h-[700px] parallax-section relative"
                      ref={ulRef}
                    >
                      <ul className="pr-[40px] flex flex-col gap-16">
                        {duplicatedDetails.map((data, index) => (
                          <li
                            key={index}
                            className={`relative h-[160px] md:h-[200px] px-[20px] py-10 transition-all duration-300 ${index === activeIndex ? "opacity-100 scale-110" : "opacity-50 scale-100"
                              }`}
                          >
                            <div className="d-flex items-center gap-3">
                              <div className="bullet"></div>
                              <h1 className="text-[20px] md:text-[28px] font-semibold">
                                {data.title}
                              </h1>
                            </div>
                            <p className="text-15px pl-9">{data.description}</p>
                            <p className="pl-9">{data.keyheading}</p>
                            <ul
                              className={`d-flex flex-col pl-20 ${data.keyfeatures.some(
                                (feature) => feature.paragraph.length > 0
                              )
                                ? "list-disc"
                                : "list-none"
                                }`}
                            >
                              {data.keyfeatures.map(
                                (feature, featureIndex) => (
                                  <li key={featureIndex} className="">
                                    {feature.paragraph}
                                  </li>
                                )
                              )}
                            </ul>
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
