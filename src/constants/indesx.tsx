import { caseone, casetwo, casefour, casethree, AIOne, AITwo, AIThree, AIFour, AIFive, AISix, ComprehensiveIcon, StorageIcon, NetworkingIcon, AnalyticsIcon, CovaBg, dataautomation, AngelflowBg, CloudServiceicon, About, ComplianceAI, ApplicationCompliance, RedTeaming, webAppSecurity, SecurityAudits, NetworkSecurityTesting, GovernanceFramework, Dataprivacy, RiskManagement, Airbolt, ANGELFLOW, AngelLogo, Assistant, blogImageOne, blogImageTwo, Buisness, Career, Catalyst, ChooseFour, ChooseOne, ChooseThree, ChooseTwo, Cova, COVA, CovaLogo, Developer, Industries, Insights, London, Protium, Services, Upsure, DataImageOne, DataImageTwo, DataImageThree, DataImageFour, CloudOne, CloudTwo, CloudThree, CloudFour, AwsOne, AwsTwo, AwsThree, ImageOne, ImageTwo, ImageThree, CloudFive, CloudSix, DataImageFive, DataImageSix, CLOUD, Amazon, DATA, artificialIntelligence, Cybersecurity, DigitalService, AutomationOne, AutomationThree, AutomationFour, AutomationFive, AutomationSix, AutomationTwo, RemoteIT, ConsultingService, CloudService, HelpDesk, NetworkSecurity, SystemSupport, MigrationOne, MigrationTwo, MigrationThree, ProductFour, ProductThree, ProductTwo, ProductOne, ProductFive, ProductSix, ServicesSix, ServicesFive, ServicesFour, ServicesThree, ServicesTwo, ServicesOne, Vulnerability, CustomAnalyticsSix, CustomAnalyticsFive, CustomAnalyticsFour, CustomAnalyticsThree, CustomAnalyticsTwo, CustomAnalyticsOne, TransformThree, TransformTwo, TransformOne, TreeThree, TreeTwo, TreeOne, WebThree, WebTwo, WebOne, AutomationImageOne, AutomationImageTwo, AutomationImageThree, PresentOne, PresentTwo, PresentThree, PresentFour, PresentFive, PresentSix, ConsultingOne, ConsultingTwo, ConsultingThree, ConsultingFour, ConsultingFive, ConsultingSix, BlogBannerThree, BlogBannerTwo, BlogBannerOne, BlogBannerFour, CryptoOne, CryptoTwo, CryptoFive, CryptoFour, CryptoThree, CryptoSix, GamingOne, GamingTwo, GamingThree, HealthCareOne, HealthCareTwo, HealthCareThree, InsuranceOne, InsuranceTwo, InsuranceThree, RealEstateOne, RealEstateTwo, RealEstateThree, RealEstateFour, RealEstateFive, RealEstateSix, IconWeb4, IconWeb3, IconWeb2, IconWeb1 } from "@/utils";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { link } from "fs";
import ProductEngineering from '../pages/product-engineering';



export const services = [
    {
        id: 1,
        title: 'Digital Services',
        description: 'From consulting to product engineering, we provide the best digital solutions.',
        backgroundimg: "/images/digital-services-new.png",
        link: "/digital-service"
    },
    {
        id: 2,
        title: 'Data',
        description: 'Expertise in data science to drive your business forward.',
        backgroundimg: "/images/Data-new.png",
        link: "/data"
    },
    {
        id: 3,
        title: 'Cloud',
        description: 'Smoothen your operations with AWS, Azure, and GCP.',
        backgroundimg: "/images/Cloud-new.png",
        link: "/cloud-services"
    },
    {
        id: 4,
        title: 'Artificial Intelligence',
        description: 'Innovative AI solutions, generative models, and machine learning.',
        backgroundimg: "/images/Artificial-intelligence-new.png",
        link: "/artificial-Intelligence"
    },
    {
        id: 5,
        title: 'Amazon',
        description: 'Complete solutions including storage, networking, and analytics services.',
        backgroundimg: "/images/Amazon-new.png",
        link: "/amazon-web-services"
    },
    {
        id: 6,
        title: 'Cyber Security',
        description: 'Protect your business with governance, data privacy, and penetration testing.',
        backgroundimg: "/images/Cyber-security-new.png",
        link: "/cyber-security"
    },
];


export const whyChooseLogo = [
    { img: ChooseOne, alt: "ChooseOne" },
    { img: ChooseTwo, alt: "ChooseTwo" },
    { img: ChooseThree, alt: "ChooseThree" },
    { img: ChooseFour, alt: "ChooseFour" },
]

export const contactDetails = [
    {
        icon: <IoMdMail size={22} />,
        text: 'info@novatoresols.com',
    },
    {
        icon: <FaPhoneAlt size={22} />,
        text: '+12183001965',
    },
    {
        icon: <ImLocation size={22} />,
        text: 'US Office: 8 The Green STE B Dover, DE 19901',
    },
];
export const whyChooseUs = [
    { title: 98, percentage: "%", description: 'Client satisfaction' },
    { title: 300, percentage: "+", description: 'Successful projects' },
    { title: 11, percentage: "+", description: 'Years in IT services' },
    { title: 40, percentage: "+", description: 'Team members' }
];

export const menuitems = [
    { id: 1, title: "Services", img: Services, url: '/', description: "The Power of Data: How Analytics Can Transform Your Business.", heading: "Services" },
    { id: 2, title: "About", img: About, url: '/', description: "The Ultimate Guide to Choosing the Right Cybersecurity Software" },
    { id: 3, title: "Insights", img: Insights, url: '/', description: "Virtual Tours and Beyond: The Tech Revolutionizing Real Estate" },
    { id: 4, title: "Careers", img: Career, url: '/', description: "Beyond the Code: Essential Soft Skills for Every Software Developer" },
    { id: 5, title: "Industries", img: Industries, url: '/', description: "The Power of Data: How Analytics Can Transform Your Business " }
];

export const customSoftware = [
    { link: '/web-app-development', title: 'Web Application Development' },
    { link: '/mobile-app-development', title: 'Mobile App Development' },
    { link: '/ui-ux-design', title: 'UI/UX Design' }
]
export const itServices = [
    { link: '/enterprise-mobility', title: 'Enterprise Mobility' },
    { link: '/digital-transformation', title: 'Digital Transformation' },
    { link: '/staff-augmentation', title: 'Staff Augmentation' }
]

export const realEstate = [
    { link: '/', title: 'Crypto' },
    { link: '/', title: 'Entertainment' },
    { link: '/', title: 'Gaming' },
    { link: '/', title: 'Healthcare' },
    { link: '/', title: 'Insurance' },
    { link: '/', title: 'Real Estate' },
    { link: '/', title: 'Retail' },
    { link: '/', title: 'Social' },
    { link: '/', title: 'Sports' },
    { link: '/', title: 'Education' },
]
export const whitepapers = [
    { link: '/', title: 'Industry Reports' },
    { link: '/', title: 'Research Studies' },
    { link: '/', title: 'Technical Guides' }
]
export const insightsData = [
    { link: '/', title: 'Blog' },
    { link: '/', title: 'Latest Trends ' },
    { link: '/', title: 'Expert Opinions' },
    { link: '/', title: 'Case Studies' }
]
export const aboutData = [
    { link: '/', title: 'Our Story' },
    { link: '/', title: 'Company History' },
    { link: '/', title: 'Mission & Vision' },
    { link: '/', title: 'Partners & Alliances' }
]
export const eventsData = [
    { link: '/', title: 'Company News' },
    { link: '/', title: 'Industry Events' },
    { link: '/', title: 'Press Releases' },
]
export const careersData = [
    { link: '/', title: 'Job Openings' },
    { link: '/', title: 'Life at Novatore' },
    { link: '/', title: 'Internships' },
]
export const siteMapData = [
    { link: '/', title: 'Testimonials' },
    { link: '/', title: 'Site Map' },
    { link: '/', title: 'Press Kit' },
    { link: '/', title: 'Privacy Policy' },
    { link: '/', title: 'Copyright ' },
    { link: '/', title: '© NovatoreSols2024' },
    { link: '/', title: 'All Rights Reserved.' },
]
export const aboutServicesData = [
    { title: "Cloud Solutions", description: "Including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) for scalable and secure infrastructure." },
    { title: "Artificial Intelligence", description: "Utilizing AI to automate processes and enhance decision-making." },
    { title: "Blockchain", description: "Implementing blockchain for secure and transparent transactions." },
    { title: "Mobile and Web Development", description: "Developing responsive and user-friendly applications." },
    { title: "Custom Software Development", description: "Creating tailored software solutions to meet specific business needs." },
]
export const socialData = [
    { icon: <TiSocialLinkedin size={20} />, link: 'https://www.linkedin.com/company/novatore-solutions/mycompany/verification/', title: 'Linkedin', },
    { icon: <FaFacebookF size={15} />, link: 'https://www.facebook.com/NovatoreSols/', title: 'Facebook' },
    { icon: <FaInstagram size={16} />, link: 'https://www.instagram.com/novatore_solutions/?locale=de-DE', title: 'Instagram' },
]
export const milestones = [
    {
        title: 'Global Reach',
        description: 'Extensive global operations with over 50,000 hours of service.',
        icon: '/images/milestone-icon1.svg',
    },
    {
        title: 'Experience',
        description: 'Over 11 years in the industry, successfully delivering more than 100 projects.',
        icon: '/images/milestone-icon2.svg',
    },
    {
        title: 'Client Satisfaction',
        description: 'Hundreds of happy customers worldwide more than 100 projects.',
        icon: '/images/milestone-icon3.svg',
    }
];
export const trendings = [
    {
        id: 1,
        title: 'Virtual Assistants And How Customer Service',
        banner: BlogBannerOne,
        date: 'JANUARY 12, 2022',
        user: 'By JOHN DOE',
        description: 'Explore how virtual assistants are transforming customer service',
        link: '/blog/virtual-assistants'
    },
    {
        id: 2,
        title: 'PropTech. Is This the Future of Real Estate?',
        banner: BlogBannerTwo,
        date: 'MARCH 12, 2025',
        user: 'By RIDA',
        description: 'Dive into the world of PropTech and discover how technology is reshaping the real estate industry.',
        link: '/blog/proptech-future'
    },
    {
        id: 3,
        title: '10 Ways to Achieve Your Business Goal',
        banner: BlogBannerThree,
        date: 'APRIL 19, 2024',
        user: 'By JESSICA',
        description: 'Duis aute irure dolor lipsum simply free text the local markets',
        link: '/blog/business-goals'
    },
    {
        id: 4,
        title: 'Artificial Intelligence',
        banner: BlogBannerFour,
        date: 'JANUARY 13, 2022',
        user: 'By RIDA',
        description: 'Innovative AI Solutions, Generative Models, And Machine Learning.',
        link: '/blog/artificial-intelligence'
    }
];


export const sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'rating', label: 'Rating' }
];

export const industriesOptions = [
    { value: 'tech', label: 'Technology' },
    { value: 'health', label: 'Health' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' }
];

export const servicesOptions = [
    { value: 'consulting', label: 'Consulting' },
    { value: 'development', label: 'Development' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'design', label: 'Design' }
];


export const slidesContent = [
    { title: 'Future-Driven Solutions', description: 'Merging Data and AI to Prepare Your Business For Tomorrow ', link: "/data" },
    {
        title: 'Empower Your Business, Transform Digitally', description: 'Smart and Powerful Solutions to Kickstart Your Growth', link: "/transformative-solutions", className: 'hero-banner-screen z-50 max-w-4xl relative flex flex-col justify-center  min-h-[50vh] md:min-h-[100vh] items-start'
    },
    { title: 'Move Beyond the Ordinary', description: 'It’s time to innovate, rethink, and excel', link: "/artificial-Intelligence" },
];

export const companiesdata = [
    { id: 1, logo: Protium },
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

export const searchitems = [
    {
        id: 1,
        title: "Recent searches",
        details: ["Job Opening", "Life at Novatore", "Internships"],
    },
    {
        id: 2,
        title: "Popular searches",
        details: ["Job Opening", "Life at Novatore", "Internships"],
    },
    {
        id: 3,
        title: "Quick Links",
        details: ["Job Opening", "Life at Novatore", "Internships"],
    },
];

export const studies = [
    {
        id: 1,
        logo: AngelLogo,
        banner: ANGELFLOW,
        backgroundimg: AngelflowBg,
        color: "#FA6238",
        description: 'A user-friendly platform using React, Node.js, and Postgres, enabling investors and start-ups to connect and collaborate effectively. '
    },

    {
        id: 2,
        logo: CovaLogo,
        banner: COVA,
        backgroundimg: CovaBg,
        color: "#5D5FEF",
        description: 'Created an AI-powered insurance web portal using Next.js, Node.js, and AWS, enhancing interactions among brokers, customers, and underwriters.'
    },

    {
        id: 3,
        logo: AngelLogo,
        banner: ANGELFLOW,
        backgroundimg: AngelflowBg,
        color: "#FA6238",
        description: 'Created an AI-powered insurance web portal using Next.js, Node.js, and AWS, enhancing interactions among brokers, customers, and underwriters.'
    },

    {
        id: 4,
        logo: CovaLogo,
        banner: COVA,
        backgroundimg: CovaBg,
        color: "#5D5FEF",
        description: 'Created an AI-powered insurance web portal using Next.js, Node.js, and AWS, enhancing interactions among brokers, customers, and underwriters.'
    }
];

export const listingstable: any = {
    services: [
        {
            id: "custom software development",
            link: '/custom-software-development',
            heading: "Custom Software Development",
            details: [
                { text: "Web applications development", link: '/web-app-development' },
                { text: "Mobile app development", link: '/mobile-app-development' },
                { text: "UI/UX design", link: '/ui-ux-design' }
            ]
        },
        {
            id: "IT services",
            link: '/it-services',
            heading: "IT Services",
            details: [
                { text: "Enterprise Mobility", link: '/enterprise-mobility' },
                { text: "Digital Transformation", link: '/digital-transformation' },
                { text: "Staff Augmentation", link: '/staff-augmentation' }
            ]
        },
        {
            id: "digital services",
            link: '/digital-service',
            heading: "Digital Services",
            details: [
                { text: "Digital Consulting & Strategy", link: '/digital-strategy' },
                { text: "Digital Business Applications", link: '/digital-business' },
                { text: "Product Engineering", link: '/product-engineering' }
            ]
        }
    ],
    insights: [
        {
            id: "Blogs",
            link: "/blogs",
            heading: "Blogs",
            details: [
                { text: "Latest Trends", link: '/' },
                { text: "Expert Opinions", link: '/' },
                { text: "Case Studies", link: '/' }
            ]
        },
        {
            id: "Whitepapers",
            link: "/",
            heading: "Whitepapers",
            details: [
                { text: "Industry Reports", link: '/' },
                { text: "Research Studies", link: '/' },
                { text: "Technical Guides", link: '/' }
            ]
        }
    ],
    about: [
        {
            id: "About Us",
            link: "/about",
            heading: "About Us",
            details: [
                { text: "Our Story", link: '/' },
                { text: "Company History", link: '/' },
                { text: "Mission and Vision", link: '/' },
                { text: "Partners and Alliances", link: '/' }
            ]
        }
    ],
    careers: [
        {
            id: "Careers",
            link: "/careers",
            heading: "Careers",
            details: [
                { text: "Job Openings", link: '/' },
                { text: "Life at Novatore", link: '/' },
                { text: "Internship", link: '/' }
            ]
        }
    ],
    industries: [
        {
            id: "Industries",
            link: "/",
            heading: "Industries",
            details: [
                { text: "Crypto", link: '/crypto-currency' },
                { text: "Entertainment", link: '/entertainment' },
                { text: "Gaming", link: '/gaming' },
                { text: "Healthcare", link: '/healthcare' },
                { text: "Insurance", link: '/insurance' },
                { text: "Real Estate", link: '/real-estate' }, { text: "Retail", link: '/retail' }, { text: "Social", link: '/social' }, { text: "Education", link: '/' }, { text: "Sports", link: '/' }

            ]
        }
    ]
};

export const featurestable: any = {
    services: [
        { id: "transformative solutions", link: "/transformative-solutions", heading: "Transformative Solutions", details: [{ text: "Business Process Automation", link: '/business-process-automation' }, { text: "Testing and QA", link: '/testing-and-qa' }, { text: "System Support", link: '/system-support' }] },
        { id: "Amazon Web Services", link: "/amazon-web-services", heading: "Amazon Web Services", details: [{ text: "Storage services", link: '/storage-services' }, { text: "Networking services", link: '/networking-services' }, { text: "Analytics services", link: '/analytics-services' }] },
        { id: "Data", heading: "Data", link: "/data", details: [{ text: "Data Engineering", link: '/data-engineering' }, { text: "Data Management & Governance", link: '/data-management-and-governance' }, { text: "Analytics & Platform Implementation", link: '/analytics-and-platform-implementation' }] }
    ],
    insights: [
        { id: "News & Events ", link: "/", heading: "News & Events", details: [{ text: "Company News", link: '/' }, { text: "Industry Events", link: '/' }, { text: "Press Releases", link: '/' }] },

    ],
    // industries: [{ id: "Industries", link: "/", heading: "", details: [{ text: "Real Estate", link: '/' }, { text: "Retail", link: '/' }, { text: "Social", link: '/' }, { text: "Education", link: '/' }, { text: "Sports", link: '/' }] }]

};

export const blogData = [
    {
        id: 1,
        image: blogImageOne,
        category: "Blog",
        tag: "Artificial Intelligence",
        title: "How Generative AI Can Play Its Part In Uplifting The Entire Data Management Lifecycle.",
        link: "/blog-detail"
    },
    {
        id: 2,
        image: blogImageTwo,
        category: "Blog",
        tag: "Artificial Intelligence",
        title: "How Generative AI Can Play Its Part In Uplifting The Entire Data Management Lifecycle.",
        link: "/blog-detail"
    },
    {
        id: 3,
        image: blogImageOne,
        category: "Blog",
        tag: "Artificial Intelligence",
        title: "How Generative AI Can Play Its Part In Uplifting The Entire Data Management Lifecycle.",
        link: "/blog-detail"
    },
    {
        id: 4,
        image: blogImageTwo,
        category: "Blog",
        tag: "Artificial Intelligence",
        title: "How Generative AI Can Play Its Part In Uplifting The Entire Data Management Lifecycle.",
        link: "/blog-detail"
    },
    {
        id: 5,
        image: blogImageOne,
        category: "Blog",
        tag: "Artificial Intelligence",
        title: "How Generative AI Can Play Its Part In Uplifting The Entire Data Management Lifecycle.",
        link: "/blog-detail"
    },
    {
        id: 6,
        image: blogImageTwo,
        category: "Blog",
        tag: "Artificial Intelligence",
        title: "How Generative AI Can Play Its Part In Uplifting The Entire Data Management Lifecycle.",
        link: "/blog-detail"
    },
];

export const Enterprises = [
    { title: 98, percentage: "+", description: ' Client Satisfaction', icon: IconWeb1 },
    { title: 300, percentage: "+", description: ' Successful project', icon: IconWeb2 },
    { title: 11, percentage: "+", description: ' Years in IT services', icon: IconWeb3 },
    { title: 40, percentage: "+", description: ' Team members', icon: IconWeb4 },
];

export const dataServices = [
    {
        title: 'Data Engineering',
        description: 'Transform raw data into a structured and usable format, ready for analysis and reporting.',
        icon: DataImageOne,
    },
    {
        title: 'Data Management',
        description: 'Ensure your data is accurate, secure, and compliant with the highest industry standards. ',
        icon: DataImageTwo,
    },
    {
        title: 'Analytics & Platform',
        description: 'Implement robust analytics platforms that provide actionable insights and drive business growth.',
        icon: dataautomation,
    },
    {
        title: 'Data Science',
        description: 'Leverage advanced algorithms and machine learning techniques to uncover hidden patterns.',
        icon: DataImageFour,
    },
    {
        title: 'Big Data Solutions',
        description: 'We offer tailored Big Data Solutions to help organizations harness the power of large datasets.',
        icon: DataImageFive,
    },
    {
        title: 'Data Visualization',
        description: 'Our Data Visualization services transform complex data into interactive and visual formats.',
        icon: DataImageSix,
    },
];
export const processAutomationData = [
    {
        title: 'IT System Support',
        description: 'Keep your systems running smoothly with proactive monitoring and maintenance to prevent downtime.',
        icon: SystemSupport,
    },
    {
        title: 'Network Security Solutions',
        description: 'Protect your business from cyber threats with cutting-edge security measures.',
        icon: NetworkSecurity,
    },
    {
        title: 'IT Help Desk Services',
        description: 'Immediate assistance for your team with any IT-related issues, ensuring quick resolutions.',
        icon: HelpDesk,
    },
    {
        title: 'Cloud Support Services',
        description: 'Optimize your cloud environment with our expert support, ensuring seamless integration and operation.',
        icon: CloudService,
    },
    {
        title: 'Remote IT Support',
        description: 'Access our expert technicians from anywhere, ensuring your business receives the support it needs.',
        icon: RemoteIT,
    },
    {
        title: 'Technology Consulting',
        description: 'Leverage our industry expertise to align your technology strategy with your business goals.',
        icon: ConsultingService,
    },
];

export const processBusinessData = [
    {
        title: 'Business Process Automation Consulting',
        description: 'Our consulting services are designed to help you identify areas for automation and develop a roadmap.',
        icon: PresentOne,
    },
    {
        title: 'Custom Business Process Automation Solutions',
        description: 'We provide tailored business process automation solutions that meet your specific needs.',
        icon: PresentTwo,
    },
    {
        title: 'Business Process Automation Software',
        description: 'Our expert team develops advanced business process automation software. ',
        icon: PresentThree,
    },
    {
        title: 'Workflow Process Automation Software',
        description: 'Automate your business processes with our comprehensive business process automation solutions.  ',
        icon: PresentFour,
    },
    {
        title: 'Robotic Process Automation (RPA)',
        description: 'RPA allows you to automate routine and complex tasks, enabling your workforce to focus on more activities.',
        icon: PresentFive,
    },
    {
        title: 'AI-Driven Decision Automation',
        description: 'This solution enhances accuracy, empowering your business to stay ahead in competitive environments.',
        icon: PresentSix,
    },
];


export const processAnalyticsData = [
    {
        title: 'Analytics Platform Services',
        description: 'We offer end-to-end analytics platform implementation services, from consultation to deployment.  ',
        icon: CustomAnalyticsOne,
    },
    {
        title: 'Analytics Consulting Services',
        description: 'We provide strategic guidance on selecting the right analytics tools, and optimizing your data processes.',
        icon: CustomAnalyticsTwo,
    },
    {
        title: 'Analytics Platform Solutions',
        description: 'Our solutions enhance data accessibility, and support advanced analytics functions.',
        icon: CustomAnalyticsThree,
    },
    {
        title: 'Data Analytics Platform Providers',
        description: 'Whether you need a cloud-based solution or an on-premises setup, we have the expertise.',
        icon: CustomAnalyticsFour,
    },
    {
        title: 'Analytics Implementation Experts',
        description: 'We ensure that your analytics platform is implemented efficiently, with minimal disruption.',
        icon: CustomAnalyticsFive,
    },
    {
        title: 'Custom Analytics Dashboard Development',
        description: 'We create tailored dashboards that provide real-time insights and visualization.',
        icon: CustomAnalyticsSix,
    },
];

export const CloudData = [
    {
        title: 'Business Process Automation',
        description: 'Streamline and automate your business processes to improve efficiency and reduce operational costs.',
        icon: CloudServiceicon,
    },
    {
        title: 'CloudOps',
        description: 'Maintain and optimize your cloud infrastructure with our comprehensive CloudOps services.',
        icon: CloudTwo,
    },
    {
        title: 'AWS, Azure & GCP',
        description: 'Leverage the power of leading cloud platforms to enhance your business operations and scalability.',
        icon: CloudThree,
    },
    {
        title: 'Cloud Migration',
        description: 'Seamlessly transition your existing infrastructure to the cloud with minimal disruption and maximum efficiency.',

        icon: CloudSix,
    },
    {
        title: 'Cloud Security Services',
        description: 'Protecting your cloud infrastructure with tailored security solutions, protecting your business.',
        icon: CloudFour,
    },
    {
        title: 'Cloud Cost Optimization',
        description: 'We help you save on cloud expenses with cost-saving strategies, helping your operateions runs smoothly.',
        icon: CloudFive,
    },
];
export const CryptoData = [
    {
        title: 'Blockchain Technology Integration',
        icon: CryptoOne,
    },
    {
        title: 'NFT Marketplace Development',
        icon: CryptoTwo,
    },
    {
        title: 'Crypto Wallet Development',
        icon: CryptoThree,
    },
    {
        title: 'Defi Applications',
        icon: CryptoFour,
    },
    {
        title: 'Cryptocurrency News Platforms',
        icon: CryptoFive,
    },
    {
        title: 'Crypto Trading Platforms',
        icon: CryptoSix,
    },
];
export const GamingData = [
    {
        title: 'Custom Game Development',
        icon: GamingOne,
        listItems: [
            'Game creation for PC, console, and mobile platforms.',
            'Multiplayer game design and development.',
        ]
    },
    {
        title: 'E-commerce Platform Solutions',
        icon: GamingTwo,
        listItems: [
            'Online marketplaces for gaming assets and services. ',
            'Secure payment integration and cryptocurrency support.',
        ]
    },
    {
        title: 'Virtual and Augmented Reality Solutions',
        icon: GamingThree,
        listItems: [
            'Immersive gaming experiences using VR and AR technologies.',
            'Cross-platform compatibility and integration.',
        ]
    },

];
export const HealthCareData = [
    {
        title: 'Telemedicine Solutions',
        icon: HealthCareOne,
        listItems: [
            'Virtual Consultation Platforms ',
            'Remote Patient Monitoring',
        ]
    },
    {
        title: 'Patient Management Systems',
        icon: HealthCareTwo,
        listItems: [
            'EHR and EMR Development ',
            'Patient Engagement Tools',
        ]
    },
    {
        title: 'Health Information Systems',
        icon: HealthCareThree,
        listItems: [
            'Data Analytics & Business Intelligence',
            'Clinical Decision Support Systems',
        ]
    },

];
export const InsuranceData = [
    {
        title: 'Policy Management Systems',
        icon: InsuranceOne,
        listItems: [
            'Automated Policy Handling',
            'Claims Processing Solutions',
        ]
    },
    {
        title: 'AI and Analytics Platforms',
        icon: InsuranceTwo,
        listItems: [
            'Predictive Analytics for Risk Management',
            'Customer Behavior Analysis',
        ]
    },
    {
        title: 'Customer Engagement Solutions',
        icon: InsuranceThree,
        listItems: [
            'Digital Insurance Portals',
            'Chatbots and Virtual Assistants',
        ]
    },

];
export const RealEstateData = [
    {
        title: 'Custom Real Estate Software Development',
        description: 'We create bespoke software solutions designed to meet the unique requirements of real estate businesses, from pro ',
        icon: RealEstateOne,
    },
    {
        title: 'Property Management Systems',
        description: 'Our property management solutions help real estate firms manage their portfolios efficiently, with features like tenant tracking, lease management, and maintenance scheduling.',
        icon: RealEstateTwo,
    },
    {
        title: 'Real Estate Portal Development',
        description: 'We build feature-rich real estate portals that facilitate seamless property search and transactions, equipped with advanced search filters, listing management, and user-friendly interfaces.',
        icon: RealEstateThree,
    },

    {
        title: 'Mobile App Development',
        description: 'Our mobile applications provide on-the-go access to property listings, market trends, and client interactions, enhancing the experience for both agents and clients.',
        icon: RealEstateFour,
    },

    {
        title: 'AI and Machine Learning Integration',
        description: 'We integrate AI and machine learning technologies to offer intelligent property recommendations, market analysis, and personalized user experiences. ',
        icon: RealEstateFive,
    },

    {
        title: 'Customer Engagement Solutions',
        description: 'We offer tailored CRM systems, personalized communication tools, and AI-driven insights that help real estate professionals build stronger relationships with their clients.',
        icon: RealEstateSix,
    },

];
export const AwsAutomationData = [
    {
        title: 'AWS Consulting Services ',
        description: 'Our consultants offer deep insights into AWS tools and technologies and we tailor solutions to your needs.',
        icon: MigrationOne,
    },
    {
        title: 'AWS Implementation Services ',
        description: 'From initial setup to full-scale deployment, our team excels in designing AWS solutions.',
        icon: MigrationTwo,
    },
    {
        title: 'AWS Cloud Migration ',
        description: 'Migrating to AWS offers significant benefits, including cost savings and improved agility.  ',
        icon: MigrationThree,
    },
];

export const WebAutomationData = [
    {
        title: 'Expertise and Experience',
        description: 'Our team comprises experienced developers who stay updated with the latest trends.',
        icon: AutomationImageOne,
    },
    {
        title: 'Client-Centric Approach',
        description: 'We work closely with you throughout the development process to ensure your vision is realized.',
        icon: AutomationImageTwo,
    },
    {
        title: 'Comprehensive Support ',
        description: 'From initial consultation to post-launch support, we provide services to ensure your success. ',
        icon: ComprehensiveIcon,
    },
];


export const AiData = [
    {
        title: 'AI Consulting',
        description: 'We provide expert guidance to help you navigate the complexities of AI, implementing the right strategies.',
        icon: ImageOne,
    },
    {
        title: 'Generative AI',
        description: 'Our generative AI solutions help you create new and innovative content, designs, and products.',
        icon: ImageTwo,
    },
    {
        title: 'Machine Learning',
        description: 'We develop and deploy machine learning models that analyze data, and make decisions.',
        icon: ImageThree,
    },
];
export const AwsData = [
    {
        title: 'Storage Services',
        description: 'Secure and scalable storage solutions tailored to meet your business needs and help you to elevate.',
        icon: StorageIcon,
    },
    {
        title: 'Networking Services',
        description: 'Efficient networking services that enhance connectivity and performance.',
        icon: NetworkingIcon,
    },
    {
        title: 'Analytics Services',
        description: 'Advanced analytics tools to turn your data into actionable insights, driving efficiency.',
        icon: AnalyticsIcon,
    },
];

export const ProductEngineeringData = [
    {
        title: 'Kick-Off',
        description: 'We start by translating your requirements into detailed technical documentation.',
        icon: ProductOne,
    },
    {
        title: 'Development',
        description: 'We facilitate User Acceptance Testing to ensure the product meets all your specifications.',
        icon: ProductTwo,
    },
    {
        title: 'Quality Assurance',
        description: 'We provide continuous server monitoring, and offer comprehensive customer support.',
        icon: ProductThree,
    },
    {
        title: 'Next Steps',
        description: 'Modern software demands regular updates to stay relevant. We offer scalable support for updates.',
        icon: ProductFour,
    },
    {
        title: 'Integration and Testing',
        description: 'Our team performs integration testing to ensure different modules interact seamlessly. ',
        icon: ProductFive,
    },
    {
        title: 'Deployment and Maintenance',
        description: 'Following rigorous testing and quality assurance, we transition to the deployment phase.',
        icon: ProductSix,
    },
];
export const ConsultingData = [
    {
        title: 'AI Strategy Development',
        description: 'Our strategic approach guarantees a seamless AI adoption that maximizes ROI and efficiency.',
        icon: ConsultingOne,
    },
    {
        title: 'Machine Learning Consulting',
        description: 'Whether it’s automating manual processes or developing intelligent applications, our solutions.',
        icon: ConsultingTwo,
    },
    {
        title: 'Data Analytics Intelligence',
        description: 'Harness the power of data with our advanced analytics and business intelligence services.',
        icon: ConsultingThree,
    },
    {
        title: 'Natural Language Processing',
        description: 'Unlock the potential of your data with NLP solutions that interpret and analyze human language. ',
        icon: ConsultingFour,

    },
    {
        title: 'Predictive Analytics',
        description: 'Stay ahead of the curve with predictive analytics that forecast trends and behaviours. ',
        icon: ConsultingFive,
    },
    {
        title: 'AI Integration and Automation',
        description: 'Our AI integration services ensure that your AI solutions are scalable, secure, and aligned with your business objectives.',
        icon: ConsultingSix,
    },
];

export const ProductTransformationData = [
    {
        title: 'Business Process Automation',
        description: 'Utilize robotic process automation (RPA) to minimize human errors and ensure precision in every task.',
        icon: TransformOne,
    },
    {
        title: 'Testing and Quality Assurance',
        description: 'Identify bottlenecks and optimize your software for superior performance in the digital landscape.',
        icon: TransformTwo,
    },
    {
        title: 'System Support',
        description: "Whether your infrastructure is cloud-based or on-premise, we've got you covered. Let us take care of your support needs.",
        icon: TransformThree,
    },
];
export const ProductServicesData = [
    {
        title: 'Enterprise Mobility Solutions',
        description: 'Enable seamless access to business resources anytime, anywhere, and on any device.',
        icon: TreeOne,
    },
    {
        title: 'Digital Transformation ',
        description: 'Revolutionize your business with cutting-edge technologies and optimized processes.',
        icon: TreeTwo,
    },
    {
        title: 'Staff Augmentation',
        description: "Enhance your team's capabilities with our skilled IT professionals and high-quality expertise.",
        icon: TreeThree,
    },
];

export const ProductWebData = [
    {
        title: 'Web Application Development',
        description: 'Build robust and scalable web applications that cater to your business needs using the latest technologies.',
        icon: WebOne,
    },
    {
        title: 'Mobile App Development',
        description: 'Create intuitive and engaging mobile apps for both iOS and Android platforms that enhance user engagement.',
        icon: WebTwo,
    },
    {
        title: 'UI/UX Design',
        description: "Deliver exceptional user experiences through intuitive and aesthetically pleasing interfaces that captivate your audience.",
        icon: WebThree,
    },
];


export const ServicesDataLocal = [
    {
        title: 'Data Management Services',
        description: 'Our data management solutions focus on organizing, storing, and maintaining your data. ',
        icon: ServicesOne,
    },
    {
        title: 'Data Governance Consulting',
        description: 'Our experts work with you to define data governance principles and policies that align with your business.',
        icon: ServicesTwo,
    },
    {
        title: 'Data Governance Framework',
        description: 'Implement a strong data governance framework that outlines the processes, and responsibilities.',
        icon: ServicesThree,
    },
    {
        title: 'Data Management Strategies',
        description: 'Our strategies include data collection, storage, processing, and analysis.',
        icon: ServicesFour,
    },
    {
        title: 'Data Governance Policies',
        description: 'Create and enforce data governance policies that define how data is handled, stored, and protected. ',
        icon: ServicesFive,
    },
    {
        title: 'Data Management Lifecycle',
        description: 'Manage the entire data lifecycle from creation to disposal with our expert services.s',
        icon: ServicesSix,
    },
];
export const GovernanceDataPrivacy = [
    {
        title: 'AI Governance Frameworks',
        description: 'Our AI governance frameworks ensure ethical and responsible AI use with robust guidelines and standards. ',
        icon: GovernanceFramework,
    },
    {
        title: 'AI Risk Management',
        description: 'We offer in-depth risk assessments and strategies to mitigate threats, ensuring resilient and reliable AI systems.',
        icon: RiskManagement,

    },
    {
        title: 'Compliance in AI',
        description: 'With evolving regulations like GDPR and the upcoming EU AI Act, compliance is increasingly challenging. ',
        icon: Dataprivacy,

    },
    {
        title: 'Data Privacy Regulations',
        description: 'We help implement strong data privacy practices to safeguard sensitive information and ensure global compliance.',
        icon: ComplianceAI,
    },

];
export const PenetrationTestingData = [
    {
        title: 'Vulnerability Assessment',
        description: 'Our vulnerability assessments pinpoint weaknesses in your network, applications, and systems.',
        icon: Vulnerability,
    },
    {
        title: 'Network Security Testing',
        description: 'We conduct extensive network security tests to uncover potential vulnerabilities.',
        icon: NetworkSecurityTesting,
    },
    {
        title: 'Web Application Security',
        description: 'Our experts perform rigorous web application penetration tests to identify security flaws.',
        icon: webAppSecurity,
    },
    {
        title: 'Security Audits',
        description: 'We provide detailed security audits to evaluate your organization adherence to security policies.',
        icon: SecurityAudits,
    },
    {
        title: 'Red Teaming',
        description: 'Our red teaming exercises simulate advanced persistent threats, providing an in-depth assessment. ',
        icon: RedTeaming,
    },
    {
        title: 'Application Security',
        description: 'We guide you through the entire process of compliance—from initial assessment to final verification.',
        icon: ApplicationCompliance,
    },

];
export const servicesoffer = {
    digitalservice: [
        {
            id: "digitalservice",
            title: "Digital Consulting & Strategy",
            details: "Explore our comprehensive suite of business applications designed to elevate your productivity and streamline your operations. From software solutions to tailored product development and engineering services, we provide the tools you need to transform your ideas into reality. Our approach ensures that each solution is crafted with efficiency and your unique business goals in mind. ",
            description: "We provide strategic insights and tailored consulting to help you navigate the digital landscape.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "Business Applications",
            description: "Design and implement robust business applications that enhance productivity and streamline processes.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "Product Engineering",
            description: "Innovative product development and engineering solutions to bring your ideas to life with efficiency and precision.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: "DevOps & SecOps",
            description: "Optimize your development and security operations with our comprehensive DevOps and SecOps services.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        }
    ],
    cybersecurity: [

        {
            id: "cybersecurity",
            title: "Governance, Risk & Compliance",
            details: "Our team of experts is dedicated to providing solutions that not only protect your critical data but also ensure seamless compliance with regulatory requirements. We offer tailored strategies to mitigate risks, enhance security protocols, and maintain the integrity of your operations. With our support, you can confidently navigate the complexities of your industry.",
            description: "Ensure your organization meets regulatory requirements and mitigates risks effectively.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "Security Services",
            description: "Protect your data with our comprehensive security strategies and solutions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "Penetration Testing",
            description: "Identify and fix vulnerabilities in your systems before they can be exploited.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    digitalstrategy: [

        {
            id: "digitalstrategy",
            title: "Product Innovation",
            details: "At Novatore Solutions, we are passionately committed to transforming visions into reality through our unparalleled expertise in digital innovation. Our highly skilled specialists work tirelessly to craft design-driven solutions that not only address complex challenges but also anticipate the evolving needs of our clients. We pride ourselves on delivering customized services that empower businesses.",
            description: "We develop advanced solutions that address complex problems, ensuring heightened customer engagement and satisfaction.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "User-Centric Approach",
            description: "By learning from users, we create immersive experiences that tell compelling stories and evoke strong emotional responses.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "Scalable Design",
            description: "As an integral part of enterprise transformation, we drive scalable growth through strategic design initiatives.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: "Simplifying Success for You and Your Customers",
            description: "Our integrated engineering approach fosters business resilience and high-performance results, creating flawless experiences.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    digitalbusiness: [
        {
            id: "digitalbusiness",
            title: "Integrated Solutions with Industry Leaders",
            details: "At Novatore Solutions, we are dedicated to transforming enterprises by delivering scalable, cloud-based business applications tailored to your unique needs. Our comprehensive solutions cover a wide range of business functions, including Customer Relationship Management (CRM), Enterprise Resource Planning (ERP), and beyond. By integrating these advanced technologies, we empower your organization to achieve unmatched efficiency.",
            description: "Our integrated solutions ensure smooth connectivity across all key functional areas, giving you a holistic view of your operations for informed decision-making",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "CRM Systems",
            description: "Consolidate your data and customize without code to manage interactions, track sales, and streamline marketing effortlessly.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "ERP Systems",
            description: "Integrate finance, HR, inventory, and supply chain into one platform, reducing costs and enhancing efficiency.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: "Project Management Software",
            description: "Facilitate collaboration, streamline workflows, and ensure your projects stay on schedule and within budget.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 5,
            title: " HRM Systems ",
            description: "From recruitment to payroll, automate HR processes and gain real-time insights to improve job satisfaction and effectiveness. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 6,
            title: "Inventory Management Software",
            description: " Our solutions provide real-time visibility, automate reorder processes, and help maintain optimal stock levels, reducing costs and improving efficiency.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 7,
            title: "Financial Management Software",
            description: " Automate bookkeeping, generate detailed reports, and make strategic financial decisions with ease.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 8,
            title: "Business Intelligence (BI) & Analytics",
            description: " Visualize data, uncover trends, and drive growth with data-driven decisions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 9,
            title: "E-commerce Platforms",
            description: "Effortlessly manage product listings, process payments, and enhance the shopping experience for your customers. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 10,
            title: "SCM Systems",
            description: " Optimize procurement, production, and distribution for faster, more efficient delivery to your customers.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 11,
            title: "Marketing Automation Software",
            description: " Manage campaigns, analyze performance, and engage your audience effectively across multiple channels.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 12,
            title: "Sales Automation Tools",
            description: " Manage leads, track activities, and forecast revenue, allowing your team to focus on closing deals.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 13,
            title: "Customer Support Software",
            description: " Look out for inquiries, track tickets, and resolve issues efficiently, improving customer satisfaction and loyalty.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 14,
            title: "Document Management Systems (DMS)",
            description: "Securely manage your documents with our scalable DMS. Centralize storage, organize files, and streamline sharing, ensuring easy access and enhanced collaboration.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    mobiledevelopment: [
        {
            id: "mobiledevelopment",
            title: "Custom Mobile App Development",
            details: "Innovate and Grow with Our Cross-Platform Expertise. Elevate your digital presence by leveraging our extensive mobile app development capabilities, tailored to deliver seamless, engaging, and user-friendly experiences across all platforms, including iOS, Android, and beyond. Our team of experts is dedicated to crafting robust, scalable solutions that meet the unique needs of your business.",
            description: "We offer customized app solutions with intuitive interfaces and smooth integration into your current systems.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "iOS & Android App Development",
            description: "Our expertise spans across both iOS and Android platforms, utilizing the best mobile app development tools.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "Cross-Platform App Development",
            description: "We use mobile app development platforms like React Native and Flutter to ensure your app performs seamlessly.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: "Mobile App Development Outsourcing",
            description: "Our mobile app development outsourcing services provide you with the expertise and resources you need.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        }
    ],
    testing: [
        {
            id: "testing",
            title: "Software Testing Services",
            details: "We are committed to ensuring that your software is not only secure but also operates at peak efficiency while providing an exceptional user experience. With our team of experts and state-of-the-art tools, we tailor our approach to meet the unique needs of each project, ensuring thorough testing and quality assurance at every stage of development.",
            description: "End-to-end testing to ensure software integrity and functionality.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "Quality Assurance Solutions",
            description: "Customized QA strategies to enhance software quality and performance.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "QA Testing for IT",
            description: "Specialized IT testing services for seamless system integration and operation.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: "Automated Testing Services",
            description: "Advanced automation tools for efficient and reliable software testing.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 5,
            title: "Security Testing for Software",
            description: "Comprehensive security testing to protect against vulnerabilities and threats.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 6,
            title: "Agile QA Testing",
            description: "Agile methodologies to keep up with fast-paced software development cycles.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]

        },
    ],
    buisnessautomation: [
        {
            id: "businessautomation",
            title: "Benefits of Business Process Automation",
            details: "Our services are tailored to meet the unique needs of your organization, ensuring that you achieve maximum efficiency while maintaining high standards of quality. Whether you're looking to automate repetitive tasks, integrate advanced technologies, or optimize your entire business process, Novatore Solutions has the expertise to drive innovation and deliver measurable results that propel your business forward.",
            description: "Our services are designed to boost efficiency, reduce costs, improve accuracy, and ensure scalability.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]

        },
        {
            id: 2,
            title: "Tools and Techniques ",
            description: "Our team ensures that all key considerations for business process automation are addressed to deliver optimal results.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "Challenges in Business Process Automation",
            description: "We provide support and solutions to overcome challenges in business process automation, ensuring a seamless transition.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    azure: [{
        id: "azure",
        title: "Microsoft Azure Services",
        details: "We provide solutions that leverage the full capabilities of Microsoft Azure and Google Cloud Platform (GCP) to meet the diverse and evolving needs of your business. Our team of experts ensures that you not only harness the power of these robust cloud platforms but also maximize their potential to drive innovation, scalability, and efficiency across your operations.",
        description: "Microsoft Azure is a cloud computing platform and service provided by Microsoft, offering computing and networking. ",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 2,
        title: "Azure Architecture",
        description: "Azure architecture is designed to provide a resilient, secure, and scalable environment for cloud applications. ",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 3,
        title: "Google Cloud Platform (GCP) Services",
        description: "Known for its high performance, GCP is designed to support the deployment of cloud-native applications.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },],
    cloudmigration: [{
        id: "cloudmigration",
        title: "Cloud Computing Services ",
        details: "We provide seamless cloud migration and computing solutions, helping businesses transition effortlessly to the cloud. With our expertise and partnerships with top cloud providers like AWS, Azure, and Google Cloud, we deliver services tailored to your unique business needs.",
        description: "We help you migrate your applications and data to leading cloud platforms like AWS, Azure, and Google Cloud, ensuring high performance and reliability.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 2,
        title: "Cloud Storage Solutions ",
        description: "Our solutions are designed to ensure data integrity and availability, minimizing downtime and maximizing productivity.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 3,
        title: "Cloud Service Providers  ",
        description: "Our strategic alliances with AWS, Azure, and Google Cloud enable us to deliver customized solutions that meet your specific business requirements, ensuring optimal performance and security.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 4,
        title: "Cloud Hosting Services  ",
        description: "Enhance your web presence with our cloud hosting services. We provide reliable and high-performance hosting solutions that scale with your business needs. ",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 5,
        title: "Cloud Software Solutions ",
        description: "Our team of experts helps you design, develop, and deploy software solutions that are optimized for the cloud, ensuring seamless integration and superior performance.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 6,
        title: "Cloud Infrastructure Providers  ",
        description: "Transform your IT infrastructure with our cloud infrastructure services. We assist you in migrating to a cloud environment that is robust, scalable, and secure. ",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 7,
        title: " Cloud Migration Services  ",
        description: "We handle every aspect of the migration process, from planning and assessment to execution and optimization, ensuring minimal disruption to your business operations.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 8,
        title: " Cloud Consulting Firms ",
        description: "Benefit from our expert cloud consulting services to develop a strategic migration plan that aligns with your business goals.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 9,
        title: "Cloud Managed Services   ",
        description: " We provide comprehensive support, including monitoring, maintenance, and security, allowing you to focus on your core business activities.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    {
        id: 10,
        title: "  Cloud Backup Solutions ",
        description: "Protect your valuable data with our cloud backup solutions. We offer reliable and secure backup services that ensure data recovery in case of any disaster.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
    },
    ],
    cloudops: [
        {
            id: "cloudops",
            title: "CloudOps Consulting ",
            details: "Discover the full potential of your cloud infrastructure with our comprehensive CloudOps services. At Novatore Solutions, we are committed to not only improving your operational efficiency and streamlining your deployment processes but also ensuring unparalleled high availability and robust security. Partner with us to transform your cloud operations into a powerhouse of reliability and innovation. ",
            description: "We provide expert guidance on best practices, tools, and technologies, ensuring that your cloud strategy aligns with your business objectives.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: " CloudOps Implementation",
            description: "Our team excels in deploying cloud operations frameworks that enhance performance, security, and scalability.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: " CloudOps Managed Services",
            description: "We offer continuous monitoring, maintenance, and optimization to ensure your cloud environment runs smoothly and efficiently.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    digitaltransformation: [
        {
            id: "digitaltransformation",
            title: "Digital Transformation Solutions ",
            details: "We offer a comprehensive suite of services meticulously crafted to address the diverse needs of modern businesses seeking to revolutionize their operations and maintain a competitive edge in today's fast-paced market. Our expert team is dedicated to providing innovative solutions that not only enhance efficiency and productivity but also foster sustainable growth and long-term success.  ",
            description: "Customized approaches that address your specific business challenges and opportunities.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: " IT Modernization Services",
            description: "Upgrade your IT infrastructure for enhanced performance and security.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: " Cloud Migration Strategies",
            description: "Expert guidance to move your operations to a scalable, flexible cloud environment.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: " Data Analytics & Insights",
            description: "Leverage data to gain actionable insights and improve decision-making.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 5,
            title: " Enterprise Software Development",
            description: "Develop software tailored to your unique business requirements.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 6,
            title: " Tech-Driven Business Growth",
            description: "Harness technology to drive innovation and business expansion.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    staffaugmentation: [
        {
            id: "staffaugmentation",
            title: "IT Staff Augmentation Services ",
            details: "We offer comprehensive IT staff augmentation services designed to seamlessly integrate top-tier tech talent into your team, enabling you to scale your workforce with agility and precision. Whether you're looking to fill short-term gaps or build a long-term partnership, our tailored solutions provide you with the flexibility to meet your evolving business needs.",
            description: "Quickly integrate skilled developers, engineers, and IT specialists into your projects to boost productivity and innovation.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: " Development Team Augmentation",
            description: "Build a powerhouse development team. Strengthen your software development capabilities with our talented engineers and developers.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: " Tech Talent Augmentation",
            description: "Access the best tech talent. Leverage our extensive network of IT professionals to find the perfect match for your technical requirements.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: " IT Workforce Expansion",
            description: "Seamlessly expand your IT workforce with qualified professionals who integrate smoothly into your existing structure.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 5,
            title: " Technology Staff Augmentation",
            description: "Augment your team with specialists who are proficient in the latest technologies and industry trends.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 6,
            title: " Agile IT Team Scaling",
            description: "Our agile staffing solutions enable you to rapidly respond to market changes and business challenges.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    storageservices: [
        {
            id: "storageservices",
            title: "Cloud Storage Solutions ",
            details: "Our comprehensive storage services are meticulously designed to cater to the diverse and evolving needs of modern businesses. Whether you are a small startup or a large enterprise, our solutions offer high performance. We understand that every business has unique requirements, which is why our services are customizable, scalable, and built to adapt to your specific demands.",
            description: "Experience seamless data access and collaboration with our state-of-the-art cloud storage solutions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: " Data Backup Services",
            description: "Safeguard your critical business information with reliable and automated data backup solutions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: " IT Storage Solutions",
            description: "Tailored IT storage solutions that ensure your data is always available, protected, and easy to manage.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: " Scalable Storage Solutions",
            description: "Adapt to changing business needs with scalable storage solutions that grow with your enterprise.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 5,
            title: " Storage Management Software",
            description: "Streamline operations with our intuitive storage management software, simplifying data oversight.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 6,
            title: " Storage as a Service (StaaS)",
            description: "Enjoy hassle-free data management with our comprehensive Storage as a Service offering.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    generativeAI: [
        {
            id: "generativeAI",
            title: "Text-to-Image AI",
            details: "Whether you're looking to revolutionize content creation or drive innovation, our comprehensive solutions are designed to elevate your enterprise to new heights. From advanced text-to-image generation that brings your ideas to life, to robust AI governance that ensures ethical and efficient AI deployment, we provide the tools and expertise you need to stay ahead in today's digital landscape.",
            description: "Create stunning visuals with our Text-to-Image AI services. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "Multimodal AI",
            description: "Experience seamless integration of multiple data types with our Multimodal AI solutions. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: " AI Governance",
            description: "Ensure your AI systems operate ethically and securely with our AI Governance services. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: "Generative Design",
            description: "Innovate faster with Generative Design. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 5,
            title: "AI Music Generation",
            description: "Transform your audio content with AI Music Generation. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 6,
            title: " Synthetic Data",
            description: "Enhance your machine learning models with Synthetic Data. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 7,
            title: " Speech Synthesis AI",
            description: "Improve communication and accessibility with Speech Synthesis AI. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 8,
            title: "Conversational AI ",
            description: "Elevate customer interactions with Conversational AI. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 9,
            title: " AI-Generated Content ",
            description: "Automate content creation with AI-Generated Content. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    machinelearning: [
        {
            id: "machinelearning",
            title: "  Quantum Machine Learning",
            details: "Dive into the future of technology with our cutting-edge machine learning services, meticulously crafted to transform and elevate your business capabilities. Our innovative solutions harness the power of the latest advancements in artificial intelligence, enabling you to unlock new opportunities, optimize operations, and stay ahead in a rapidly evolving digital landscape. Embrace the future with confidence.",
            description: "We specialize in creating  solutions that leverage quantum algorithms and high-speed data processing.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Deep Learning",
            description: "We provide advanced neural network models that ensure high accuracy in data interpretation and offer scalable solutions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "  Explainable AI (XAI)",
            description: "Our company provides services that ensure transparent AI models and foster enhanced trust and reliability.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: " Edge Computing",
            description: "We offer services that optimize data processing locally, significantly reduce latency, and enhance real-time performance.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: " Autonomous Driving",
            description: "We offer advanced solutions in intelligent systems, including the ability to detect and classify objects, and plan optimal paths.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "6",
            title: " Computer Vision",
            description: "We provide advanced solutions for analyzing and inspecting visual content, with capabilities for automated inspection.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "7",
            title: " Generative Adversarial Networks (GANs)",
            description: "We offer advanced services that elevate content quality and enrich data-driven insights.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "8",
            title: " Natural Language Processing (NLP)",
            description: "We provide advanced solutions for analyzing text and speech, detecting sentiment, and supporting multiple languages.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "9",
            title: " Predictive Analytics",
            description: "We offer comprehensive services that help businesses gain valuable insights through trend analysis.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    productengineering: [
        {
            id: "productengineering",
            title: "  Custom Enterprise Products",
            description: "From AI platforms and IoT ecosystems to labor management portals, we develop custom products that tackle business challenges and drive growth.",
            details: "Our seasoned experts are committed to navigating enterprises through the intricate landscape of software development, providing end-to-end guidance to ensure your products are not only robust and scalable but also leverage the most cutting-edge technologies available. From AI and IoT to blockchain and beyond, we help you harness these innovations to stay ahead of the competition.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Custom Mobile Products",
            description: "Our designers and developers craft memorable mobile experiences that keep users invested and achieve your business objectives.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: " Progressive Technology Solutions",
            description: "We provide cutting-edge technology solutions, including IoT, AR/VR, ML/AI, blockchain, and geolocation services.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" },]
        },
    ],
    dataengineering: [
        {
            id: "dataengineering",
            title: "  Data Processing Speed",
            description: "Automated, real-time processing",
            details: "Unlock the full potential of your business with our comprehensive data engineering solutions. We specialize in transforming raw, unstructured data into valuable, actionable insights that drive informed decision-making and fuel growth. Whether you're looking to enhance your data capabilities or gain a competitive edge, we are committed to delivering tailored solutions that meet your unique business needs.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Cost Efficiency",
            description: "Lower costs through automation and optimization",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: " Data Integration",
            description: "Seamless, unified data integration",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: " Security and Compliance",
            description: "Advanced security protocols and compliance",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: " Scalability",
            description: "Highly scalable data architecture",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "6",
            title: " Data Quality",
            description: "Enhanced data quality through validation",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "7",
            title: " Collaboration",
            description: "Improved collaboration with DataOps practices",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "8",
            title: " Infrastructure",
            description: "Flexible, cloud-based infrastructure",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    securityservices: [
        {
            id: "securityservices",
            title: "  Cybersecurity Solutions",
            description: "Utilizing advanced threat intelligence and real-time monitoring, we ensure your network is secure against the latest cyber threats.",
            details: "Explore our comprehensive suite of IT security services, meticulously designed to safeguard your digital assets against the ever-evolving landscape of cyber threats. Our expert solutions offer robust protection for your network, data, and cloud environments, ensuring that your business remains secure and resilient. With a proactive approach, we address potential vulnerabilities before they can be exploited.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Network Security Services",
            description: "By deploying state-of-the-art intrusion detection and prevention systems (IDS/IPS), we can detect and neutralize threats before they can cause harm.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: " Managed IT Security",
            description: "With our Managed IT Security services, you can focus on your core business while we handle your security needs. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: " Endpoint Security",
            description: "Our Endpoint Security solutions protect all your devices, from desktops to mobile devices, against malware, ransomware, and other threats. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: "Cloud Security Services",
            description: "Our Cloud Security Services protect your cloud-based assets with comprehensive security strategies. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "6",
            title: " IT Security Consulting",
            description: "Our IT Security Consulting services provide expert guidance to enhance your security posture. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "7",
            title: "SIEM",
            description: "By collecting and analyzing data from across your IT environment, we provide actionable insights to detect and respond to security incidents promptly. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "8",
            title: " Threat Detection & Response",
            description: "Utilizing advanced analytics and AI-driven tools, we detect anomalous activities and respond to incidents in real-time. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "9",
            title: "Identity and Access Management (IAM)",
            description: "We implement robust authentication and authorization mechanisms to protect your business from unauthorized access and insider threats.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    penetrationtesting: [
        {
            id: "penetrationtesting",
            title: "  Expertise & Experience",
            description: "We bring extensive knowledge and experience in conducting thorough penetration tests that meet the industry standards.",
            details: "Introducing the essential and increasingly critical field of penetration testing, where our team of seasoned ethical hackers employs a comprehensive range of state-of-the-art techniques to simulate real-world cyberattacks. By meticulously assessing your organization's digital infrastructure, we identify potential vulnerabilities that could be exploited by malicious actors. This proactive approach safeguards your systems and enhances your security.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Tools and Techniques",
            description: "We leverage the latest tools and methodologies, such as Metasploit, Burp Suite, and Wireshark, to deliver penetration testing services.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Tailored Testing Approach",
            description: "Our services are customized to meet your specific needs, whether it's network security or compliance testing, ensuring a targeted approach.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: " Actionable Insights",
            description: "We provide detailed reports with actionable insights and recommendations to help you address vulnerabilities and strengthen your security posture.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },


    ],
    UIUXDesign: [
        {
            id: "UIUXDesign",
            title: "  UI/UX Design Services:",
            description: "Crafting visually stunning and highly functional designs that captivate and convert users.",
            details: "Let us partner with you to create software that is not only functional but also a joy to use, leaving a lasting impression on your users. Our UI/UX design expertise goes beyond aesthetics, creating intuitive experiences that align with your business. With our help, your software product will not only meet user needs but also exceed expectations.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " User Interface Design",
            description: "Focused on creating interactive and visually appealing interfaces that enhance user interaction.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Custom UI/UX Solutions",
            description: "Tailored design solutions that meet specific business needs, ensuring relevance and effectiveness",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: " Mobile App Design",
            description: "Designing mobile interfaces that provide seamless and engaging experiences on smartphones and tablets.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    enterprisemobility: [
        {
            id: "enterprisemobility",
            title: "  Enterprise Mobility Management (EMM)",
            description: "Centralize control over all mobile devices and applications.",
            details: "Our tailored solutions empower your workforce by enabling access to data and applications from any device, anywhere, at any time. By enhancing productivity and streamlining workflows, we help your organization stay competitive and agile in an ever-evolving market. With our expertise, we transform your mobile strategy into a powerful tool, ensuring your business is always at the forefront.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Mobile Device Management (MDM)",
            description: "Securely deploy and manage mobile devices across your organization.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Cloud-Based Mobility Solutions",
            description: "Access critical applications and data from anywhere with cloud integration.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: " Mobile Application Management (MAM)",
            description: "Efficiently manage and secure mobile apps within your enterprise.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: "BYOD (Bring Your Own Device) Policies",
            description: "Integrate personal devices securely into your business environment.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    networkingservices: [
        {
            id: "networkingservices",
            title: "  IT Network Services",
            description: "Tailored network services designed to meet the specific needs of your company.",
            details: "We understand the unique and evolving needs of software companies and are committed to offering a comprehensive suite of customized services designed to optimize your network infrastructure. Our goal is that your business stays competitive and remains at the forefront of technological innovation. From enhancing security protocols to scaling your infrastructure, our solutions are tailored to support your business's success.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Network Security",
            description: "Protect your valuable data with our advanced security protocols.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Cloud Networking",
            description: "Leverage the power of cloud technology to enhance your network capabilities.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: "Network Infrastructure",
            description: "Build a strong foundation with our expert network infrastructure services.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: "Managed IT Services",
            description: "Let us handle your IT needs while you focus on growing your business.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "6",
            title: "IT Consulting",
            description: "Expert advice to help you make informed IT decisions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    analyticsservices: [
        {
            id: "analyticsservices",
            title: "  Data Analytics Services",
            description: "Our comprehensive data analytics services offer end-to-end solutions to collect, process, and analyze your data efficiently.",
            details: "We specialize in turning your raw data into actionable insights that drive your business forward. Our comprehensive data engineering solutions enable you to harness the full potential of your data, transforming it into business intelligence that empowers strategic decision-making. With our expertise, you gain access to up-to-the-minute data, ensuring you can respond swiftly to emerging trends.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Predictive Analytics Tools",
            description: "Utilize our predictive analytics tools to anticipate market trends and customer behavior, enabling proactive decision-making.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "IT Analytics Solutions",
            description: "Optimize IT operations with our specialized analytics solutions that identify inefficiencies and enhance performance.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: "Cloud-Based Analytics",
            description: "Access your analytics tools anytime, anywhere with our secure cloud-based solutions that offer flexibility and scalability.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: "Real-Time Data Processing",
            description: "Get real-time insights with our robust processing solutions that ensure you are always ahead of the competition.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "6",
            title: "Custom Analytics Software",
            description: "Tailor-made analytics software solutions designed to fit your unique business requirements and objectives.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    webappdevelopment: [
        {
            id: "webappdevelopment",
            title: " Custom Web Application Development",
            description: "We provide customized digital solutions that cater to specific business requirements, ensuring responsive design. ",
            details: "Discover our suite of services, ranging from custom web application development to progressive web apps, each meticulously crafted to address your unique business requirements. We prioritize performance optimization, ensuring your applications run smoothly and efficiently, while adhering to the highest security best practices to safeguard your digital assets and provide peace of mind.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Front-end Web Development",
            description: "We specialize in leveraging modern web technologies and frameworks to create responsive and dynamic user interfaces.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Back-end Web Development",
            description: "We use a diverse range of technologies to deliver efficient and scalable solutions",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: "Full-stack Web Development",
            description: "We provide comprehensive development services that integrate seamless collaboration across cross-functional teams. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: "Web App Performance Optimization",
            description: "Our optimization services ensure your web app loads quickly, runs smoothly, and provides an excellent user experience.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "6",
            title: "Web App Security Best Practices",
            description: "We implement best practices to protect your web applications from vulnerabilities and ensure data integrity.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "7",
            title: "Progressive Web Apps (PWA)",
            description: "We develop progressive web apps that combine the best of web and mobile applications. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    cryptocurrency: [
        {
            id: "cryptocurrency",
            title: " Extensive Experience",
            description: "With more than a decade in the industry, our team understands the intricacies of blockchain technology ",
            details: "Partner with us to discover our extensive experience and technical proficiency in blockchain technology.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Successful Projects",
            description: "Over 75 projects delivered worldwide, from startups to established enterprises.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Technical Proficiency",
            description: "Expertise in technologies such as Ethereum blockchain, React, Vue, and JavaScript.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: " Client-Focused Approach",
            description: "Solutions designed to meet the specific needs and objectives of your business.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    entertainment: [
        {
            id: "entertainment",
            title: " Expertise",
            description: "Our team comprises industry veterans with deep knowledge of the entertainment sector and cutting-edge technologies.",
            details: "We specialize in developing personalized and interactive experiences that retain audiences in a competitive market.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Customization",
            description: "We tailor our solutions to meet the unique needs and goals of each client, ensuring maximum impact and ROI.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Innovation",
            description: "We stay ahead of industry trends, continuously innovating to provide our clients with the latest and most effective solutions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    gaming: [
        {
            id: "gaming",
            title: "Extensive Experience",
            description: "With more than a decade in the industry, our team understands the intricacies of game development and platform integration.",
            details: "Our deep expertise in technologies such as Unity, Unreal Engine, React, NextJS, and NodeJS ensures that we provide you with the best possible tools to bring your vision to life.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: "Successful Projects",
            description: " Over 50 projects delivered worldwide, from startups to established enterprises.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Technical Proficiency",
            description: "Expertise in technologies such as Unity, Unreal Engine, React, NextJS, and NodeJS.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Client-Focused Approach",
            description: "Solutions designed to meet the specific needs and objectives of your business.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    healthcare: [
        {
            id: "healthcare",
            title: "Extensive Experience",
            description: "With more than a decade in the industry, our team understands the intricacies of game development and platform integration.",
            details: "Partner with us to harness our extensive experience and technical proficiency in healthcare technology. With over a decade in the industry, we have a deep understanding of the complexities and regulatory requirements.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: "Successful Projects",
            description: " Over 50 projects delivered worldwide, from startups to established enterprises.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Technical Proficiency",
            description: "Expertise in technologies such as Unity, Unreal Engine, React, NextJS, and NodeJS.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Client-Focused Approach",
            description: "Solutions designed to meet the specific needs and objectives of your business.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    insurance: [
        {
            id: "insurance",
            title: "Extensive Experience",
            description: "With more than a decade in the industry, our team understands the intricacies of game development and platform integration.",
            details: "Partner with us to harness our extensive experience and technical proficiency in healthcare technology. With over a decade in the industry, we have a deep understanding of the complexities and regulatory requirements.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: "Successful Projects",
            description: " Over 50 projects delivered worldwide, from startups to established enterprises.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Technical Proficiency",
            description: "Expertise in technologies such as Unity, Unreal Engine, React, NextJS, and NodeJS.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Client-Focused Approach",
            description: "Solutions designed to meet the specific needs and objectives of your business.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
    ],
    realestate: [
        {
            id: "realstate",
            title: "Proven Track Record",
            description: "With numerous successful projects, our track record speaks for itself in delivering high-quality real estate software solutions.",
            details: "Our client-centric approach ensures that we focus on understanding your business objectives, crafting solutions that drive real value and success. Let’s work together to transform your ideas into reality.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: "Client-Centric Approach",
            description: " We focus on understanding your business needs and tailoring our solutions to provide maximum value.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Innovative Solutions",
            description: "We leverage the latest technologies and industry trends to create innovative solutions that keep you ahead of the competition.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    retail: [
        {
            id: "innovativetechnology",
            title: "Advanced E-Commerce Platforms",
            description: "We design and develop e-commerce websites that offer smooth and intuitive shopping experiences, featuring robust product catalogs, secure payment systems, and efficient order management.",
            details: "Our capabilities also extend to building robust systems and data-driven insights and analytics to optimize your operations and drive growth. Let’s collaborate to create innovative solutions that will set your business apart.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: "Integrated Omnichannel Solutions",
            description: " Our omnichannel solutions ensure that retailers can provide a unified and consistent customer experience across digital and physical channels.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Comprehensive CRM Systems",
            description: "We create powerful customer relationship management systems that help businesses build stronger relationships with their customers, manage sales processes, and gain valuable insights from data analytics.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "4",
            title: "Innovative Mobile Applications",
            description: " Our expertise in mobile app development allows us to create apps that drive customer engagement, offering personalized experiences and easy access to products and promotions.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "5",
            title: "Data-Driven Insights and Analytics",
            description: "By utilizing data analytics, we help retailers make informed decisions, optimize their operations, and enhance overall business performance.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    social: [
        {
            id: "innovativesoftware",
            title: "Proven Expertise in Social Solutions",
            description: "Our extensive experience in the social sector allows us to deliver solutions that resonate with users and drive engagement.",
            details: "Partner with us to innovate and elevate your business by leveraging the latest technologies, to drive engagement and deliver unmatched results.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: "Tailored Solutions for Unique Needs",
            description: " We customize our software solutions to meet the specific requirements of your social enterprise, ensuring optimal performance and satisfaction.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Innovative and User-Centric Approach",
            description: "We focus on creating innovative solutions that prioritize user experience, leveraging the latest technologies and design trends.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
}

export const data = [
    {
        id: 1,
        heading: 'Cyber Security ',
        link: "/cyber-security",
        items: [{ text: "Governance, Risk & Compliance, Data Privacy", link: '/governance-and-dataprivacy' }, { text: "Security Services", link: '/security-services' }, { text: "Penetration Testing", link: '/penetration-testing' },],
    },

    {
        id: 2,
        heading: 'Artificial Intelligence',
        link: "/artificial-Intelligence",
        items: [{ text: "AI Consulting", link: '/ai-consulting' }, { text: "Generative AI", link: '/generative-ai' }, { text: "Machine Learning", link: '/machine-learning' },],
    },
    {
        id: 3,
        heading: 'Cloud',
        link: "/cloud-services",
        items: [{ text: "CloudOps", link: '/cloud-ops' }, { text: "AWS", link: '/aws' }, { text: "Azure & GCP", link: '/azure-and-gcp' }, { text: "Cloud Migration", link: '/cloud-migration' },],
    },

];



export const caseStudiesslidedata = [
    {
        title: "A Customized Marketplace",
        description: "We developed a feature-rich NFT marketplace with a user-friendly interface and secure crypto wallet integration for NFT Hunterz.",
        backgroundimg: caseone,
    },
    {
        title: "Revolutionizing Transactions",
        description: "Our team created an advanced NFT platform for Juggernaut DeFi, incorporating secure blockchain integration and global accessibility.",
        backgroundimg: casetwo,
    },
    {
        title: "Enhancing Transparency",
        description: "We built a secure blockchain-based platform for Commit Good, ensuring transparent cryptocurrency donations.",
        backgroundimg: casethree,
    },
    {
        title: "Streamlining Crypto Portfolio Management",
        description: "For Swap Folio, we delivered a comprehensive crypto portfolio management platform with real-time analytics.",
        backgroundimg: casefour,
    }
];