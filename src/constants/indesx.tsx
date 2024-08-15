import { AIOne, AITwo, AIThree, AIFour, AIFive, AISix, ComprehensiveIcon, StorageIcon, NetworkingIcon, AnalyticsIcon, CovaBg, dataautomation, AngelflowBg, CloudServiceicon, About, ComplianceAI, ApplicationCompliance, RedTeaming, webAppSecurity, SecurityAudits, NetworkSecurityTesting, GovernanceFramework, Dataprivacy, RiskManagement, Airbolt, ANGELFLOW, AngelLogo, Assistant, blogImageOne, blogImageTwo, Buisness, Career, Catalyst, ChooseFour, ChooseOne, ChooseThree, ChooseTwo, Cova, COVA, CovaLogo, Developer, Industries, Insights, London, Protium, Services, Upsure, DataImageOne, DataImageTwo, DataImageThree, DataImageFour, CloudOne, CloudTwo, CloudThree, CloudFour, AwsOne, AwsTwo, AwsThree, ImageOne, ImageTwo, ImageThree, CloudFive, CloudSix, DataImageFive, DataImageSix, CLOUD, Amazon, DATA, artificialIntelligence, Cybersecurity, DigitalService, AutomationOne, AutomationThree, AutomationFour, AutomationFive, AutomationSix, AutomationTwo, RemoteIT, ConsultingService, CloudService, HelpDesk, NetworkSecurity, SystemSupport, MigrationOne, MigrationTwo, MigrationThree, ProductFour, ProductThree, ProductTwo, ProductOne, ProductFive, ProductSix, ServicesSix, ServicesFive, ServicesFour, ServicesThree, ServicesTwo, ServicesOne, Vulnerability, CustomAnalyticsSix, CustomAnalyticsFive, CustomAnalyticsFour, CustomAnalyticsThree, CustomAnalyticsTwo, CustomAnalyticsOne, TransformThree, TransformTwo, TransformOne, TreeThree, TreeTwo, TreeOne, WebThree, WebTwo, WebOne, AutomationImageOne, AutomationImageTwo, AutomationImageThree, PresentOne, PresentTwo, PresentThree, PresentFour, PresentFive, PresentSix, ConsultingOne, ConsultingTwo, ConsultingThree, ConsultingFour, ConsultingFive, ConsultingSix, BlogBannerThree, BlogBannerTwo, BlogBannerOne, BlogBannerFour, CryptoOne, CryptoTwo, CryptoFive, CryptoFour, CryptoThree, CryptoSix, GamingOne, GamingTwo, GamingThree, HealthCareOne, HealthCareTwo, HealthCareThree, InsuranceOne, InsuranceTwo, InsuranceThree, RealEstateOne, RealEstateTwo, RealEstateThree, RealEstateFour, RealEstateFive, RealEstateSix } from "@/utils";
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
        description: 'From consulting to product enngineering, we provide the best digital solutions.',
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
    { title: 'Future-Driven Solutions', description: 'Merging Data and AI to Prepare Your Business For Tomorrow ' },
    {
        title: 'Empower Your Business, Transform Digitally', description: 'Smart and Powerful Solutions to Kickstart Your Growth', className: 'hero-banner-screen z-50 max-w-4xl relative flex flex-col justify-center  min-h-[50vh] md:min-h-[100vh] items-start'
    },
    { title: 'Move Beyond the Ordinary', description: 'It’s time to innovate, rethink, and excel' },
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
    { title: 100, percentage: "+", description: 'Digitally Transformed Enterprises' },
    { title: 130, percentage: "+", description: 'Organizations Empowered Through Omnichannel Experiences' },
    { title: 500, percentage: "+", description: ' Design-Driven Solutions Implemented' },
];

export const dataServices = [
    {
        title: 'Data Engineering',
        description: 'Transform raw data into a structured and usable format, ready for analysis and reporting.',
        icon: DataImageOne,
    },
    {
        title: 'Data Management & Governance',
        description: 'Ensure your data is accurate, secure, and compliant with industry standards.',
        icon: DataImageTwo,
    },
    {
        title: 'Analytics & Platform Implementation',
        description: 'Implement robust analytics platforms that provide actionable insights and drive business growth.',
        icon: dataautomation,
    },
    {
        title: 'Data Science',
        description: 'Leverage advanced algorithms and machine learning techniques to uncover hidden patterns and predictive insights.',
        icon: DataImageFour,
    },
    {
        title: 'Big Data Solutions',
        description: 'We offer tailored Big Data Solutions to help organizations harness the power of large datasets.',
        icon: DataImageFive,
    },
    {
        title: 'Data Visualization',
        description: 'Our Data Visualization services transform complex data into interactive and intuitive visual formats.',
        icon: DataImageSix,
    },
];
export const processAutomationData = [
    {
        title: 'IT System Support',
        description: 'Keep your systems running smoothly with proactive monitoring and maintenance to prevent downtime and enhance performance.',
        icon: SystemSupport,
    },
    {
        title: 'Network Security Solutions',
        description: 'Protect your business from cyber threats with cutting-edge security measures and proactive threat management.',
        icon: NetworkSecurity,
    },
    {
        title: 'IT Help Desk Services',
        description: 'Immediate assistance for your team with any IT-related issues, ensuring quick resolutions and minimal downtime.',
        icon: HelpDesk,
    },
    {
        title: 'Cloud Support Services',
        description: 'Optimize your cloud environment with our expert support, ensuring seamless integration and operation.',
        icon: CloudService,
    },
    {
        title: 'Remote IT Support',
        description: 'Access our expert technicians from anywhere, ensuring your business receives the support it needs without delay.',
        icon: RemoteIT,
    },
    {
        title: 'Technology Consulting Services',
        description: 'Leverage our industry expertise to align your technology strategy with your business goals for maximum impact.',
        icon: ConsultingService,
    },
];

export const processBusinessData = [
    {
        title: 'Business Process Automation Consulting',
        description: 'Our consulting services are designed to help you identify areas for automation and develop a strategic roadmap.',
        icon: PresentOne,
    },
    {
        title: 'Custom Business Process Automation Solutions',
        description: 'We provide tailored business process automation solutions that meet your specific needs.',
        icon: PresentTwo,
    },
    {
        title: 'Business Process Automation Software',
        description: 'Our expert team develops and deploys advanced business process automation software that integrates with your existing systems. ',
        icon: PresentThree,
    },
    {
        title: 'Workflow Automation',
        description: 'Automate your business processes with our comprehensive business process automation workflow solutions. ',
        icon: PresentFour,
    },
    {
        title: 'Robotic Process Automation (RPA)',
        description: 'RPA allows you to automate routine and complex tasks, reducing manual effort and enabling your workforce to focus on more strategic activities.',
        icon: PresentFive,
    },
    {
        title: 'AI-Driven Decision Automation',
        description: 'This solution enhances accuracy, reduces bias, and speeds up operational processes, empowering your business to stay ahead in competitive environments.',
        icon: PresentSix,
    },
];


export const processAnalyticsData = [
    {
        title: 'Analytics Platform Implementation Services',
        description: 'We offer end-to-end analytics platform implementation services, from initial consultation to final deployment. ',
        icon: CustomAnalyticsOne,
    },
    {
        title: 'Analytics Consulting Services',
        description: 'We provide strategic guidance on selecting the right analytics tools, developing implementation plans, and optimizing your data processes.',
        icon: CustomAnalyticsTwo,
    },
    {
        title: 'Analytics Platform Solutions',
        description: 'Our solutions enhance data accessibility, improve reporting capabilities, and support advanced analytics functions.',
        icon: CustomAnalyticsThree,
    },
    {
        title: 'Data Analytics Platform Providers',
        description: 'Whether you need a cloud-based solution or an on-premises setup, we have the expertise to implement the best-fit platform for your needs.',
        icon: CustomAnalyticsFour,
    },
    {
        title: 'Analytics Implementation Experts',
        description: 'We ensure that your analytics platform is implemented efficiently, with minimal disruption to your operations.',
        icon: CustomAnalyticsFive,
    },
    {
        title: 'Custom Analytics Dashboard Development',
        description: 'We create tailored dashboards that provide real-time insights and visualization, enabling you to make data-driven decisions quickly and effectively.',
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
        description: 'Protecting your cloud infrastructure with tailored security solutions.',
        icon: CloudFour,
    },
    {
        title: 'Cloud Cost Optimization',
        description: 'We help you save on cloud expenses with cost-saving strategies.',
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
        title: 'DeFi Applications',
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
            'Data Analytics and Business Intelligence',
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
        description: 'Digital Insurance Portals Chatbots and Virtual Assistants',
        icon: RealEstateSix,
    },

];
export const AwsAutomationData = [
    {
        title: 'AWS Consulting Services ',
        description: 'Our consultants offer deep insights into AWS tools and technologies and we tailor solutions to your business needs, ensuring optimal architecture and cost efficiency.',
        icon: MigrationOne,
    },
    {
        title: 'AWS Implementation Services ',
        description: 'From initial setup to full-scale deployment, our team excels in designing and deploying AWS solutions that enhance performance.',
        icon: MigrationTwo,
    },
    {
        title: 'AWS Cloud Migration ',
        description: 'Migrating to AWS offers significant benefits, including cost savings and improved agility. Our cloud migration services simplify the process of moving your applications and data to AWS. ',
        icon: MigrationThree,
    },
];

export const WebAutomationData = [
    {
        title: 'Expertise and Experience',
        description: 'Our team comprises experienced developers who stay updated with the latest trends and technologies in web development.',
        icon: AutomationImageOne,
    },
    {
        title: 'Client-Centric Approach',
        description: 'We work closely with you throughout the development process to ensure your vision is realized.',
        icon: AutomationImageTwo,
    },
    {
        title: 'Comprehensive Support ',
        description: 'Migrating to AWS offers significant benefits, including cost savings and improved agility. Our cloud migration services simplify the process of moving your applications and data to AWS. ',
        icon: ComprehensiveIcon,
    },
];


export const AiData = [
    {
        title: 'AI Consulting',
        description: 'We provide expert guidance to help you navigate the complexities of AI, ensuring you implement the right strategies and technologies to achieve your goals.',
        icon: ImageOne,
    },
    {
        title: 'Generative AI',
        description: 'Our generative AI solutions help you create new and innovative content, designs, and products, pushing the boundaries of what’s possible.',
        icon: ImageTwo,
    },
    {
        title: 'Machine Learning',
        description: 'We develop and deploy machine learning models that analyze data, identify patterns, and make informed decisions, driving smarter business operations.',
        icon: ImageThree,
    },
];
export const AwsData = [
    {
        title: 'Storage Services',
        description: 'Secure and scalable storage solutions tailored to meet your business needs.',
        icon: StorageIcon,
    },
    {
        title: 'Networking Services',
        description: 'Efficient networking services that enhance connectivity and performance.',
        icon: NetworkingIcon,
    },
    {
        title: 'Analytics Services',
        description: 'Advanced analytics tools to turn your data into actionable insights.',
        icon: AnalyticsIcon,
    },
];

export const ProductEngineeringData = [
    {
        title: 'Kick-Off',
        description: 'We start by translating your requirements into detailed technical documentation. Our team of experts assembles to create initial prototypes, ensuring your vision is brought to life from the outset.',
        icon: ProductOne,
    },
    {
        title: 'Development',
        description: 'Our developers work diligently on your product. Upon completion, we facilitate User Acceptance Testing (UAT) to ensure the product meets all your specifications.',
        icon: ProductTwo,
    },
    {
        title: 'Quality Assurance',
        description: 'Post-release, we provide continuous server monitoring, assign QA experts for bug fixing, and offer comprehensive customer support to maintain your product’s excellence.',
        icon: ProductThree,
    },
    {
        title: 'Next Steps',
        description: 'Modern software demands regular updates to stay relevant. We offer scalable support for ongoing updates, ensuring your product evolves with market trends and customer needs.',
        icon: ProductFour,
    },
    {
        title: 'Integration and Testing',
        description: 'Our team performs meticulous integration testing to ensure different modules interact seamlessly, maintaining system integrity and performance. ',
        icon: ProductFive,
    },
    {
        title: 'Deployment and Maintenance',
        description: 'Following rigorous testing and quality assurance, we transition to the deployment phase, where your product goes live.',
        icon: ProductSix,
    },
];
export const ConsultingData = [
    {
        title: 'AI Strategy Development',
        description: 'Our strategic approach guarantees a seamless AI adoption that maximizes ROI.',
        icon: ConsultingOne,
        listItems: [
            'Customized AI roadmap',
            'Value realisation strategies',
            'Risk management and compliance',
        ]
    },
    {
        title: 'Machine Learning Consulting',
        description: 'Whether it’s automating manual processes or developing intelligent applications, our solutions.',
        icon: ConsultingTwo,
        listItems: [
            'Algorithm development',
            'Data modelling and analysis',
            'Custom machine learning solutions',
        ]
    },
    {
        title: 'Data Analytics and Business Intelligence',
        description: 'Harness the power of data with our advanced analytics and business intelligence services.',
        icon: ConsultingThree,
        listItems: [
            'Data visualization',
            'Advanced analytics',
            'Real-time data processing',
        ]
    },
    {
        title: 'Natural Language Processing (NLP)',
        description: 'Unlock the potential of your data with NLP solutions that interpret and analyze human language. ',
        icon: ConsultingFour,
        listItems: [
            'Text analysis and mining',
            'Sentiment analysis',
            'Chatbot development',
        ]
    },
    {
        title: 'Predictive Analytics',
        description: 'Stay ahead of the curve with predictive analytics that forecast trends and behaviours. ',
        icon: ConsultingFive,
        listItems: [
            'Demand forecasting',
            'Customer behavior analysis',
            'Risk management',
        ]
    },
    {
        title: 'AI Integration and Automation Solutions',
        description: 'Our AI integration services ensure that your AI solutions are scalable, secure, and aligned with your business objectives.',
        icon: ConsultingSix,
        listItems: [
            'AI-powered automation',
            'System integration',
            'Workflow optimization',
        ]
    },
];

export const ProductTransformationData = [
    {
        title: 'Business Process Automation (BPA)',
        description: 'Utilize robotic process automation (RPA) to minimize human errors and ensure precision in every task.',
        icon: TransformOne,
    },
    {
        title: 'Testing and Quality Assurance (QA)',
        description: 'Identify bottlenecks and optimize your software for superior performance.',
        icon: TransformTwo,
    },
    {
        title: 'System Support',
        description: "Whether your infrastructure is cloud-based or on-premise, we've got you covered.",
        icon: TransformThree,
    },
];
export const ProductServicesData = [
    {
        title: 'Enterprise Mobility Solutions',
        description: 'Enable seamless access to business resources anytime, anywhere, and on any device',
        icon: TreeOne,
    },
    {
        title: 'Digital Transformation Services',
        description: 'Transform your business with innovative technologies and streamlined processes.',
        icon: TreeTwo,
    },
    {
        title: 'Staff Augmentation',
        description: "Enhance your team's capabilities with our skilled IT professionals.",
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
        description: 'Create intuitive and engaging mobile apps for both iOS and Android platforms that enhance user engagement and brand loyalty.',
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
        description: 'Our data management solutions focus on organizing, storing, and maintaining your data to ensure it is reliable and available when needed. ',
        icon: ServicesOne,
    },
    {
        title: 'Data Governance Consulting',
        description: 'Our experts work with you to define data governance principles and policies that align with your business objectives, ensuring data integrity.',
        icon: ServicesTwo,
    },
    {
        title: 'Data Governance Framework Implementation',
        description: 'Implement a strong data governance framework that outlines the processes, and responsibilities for managing your data.',
        icon: ServicesThree,
    },
    {
        title: 'Data Management Strategies',
        description: 'Our strategies include data collection, storage, processing, and analysis, ensuring optimal data utilization and management.',
        icon: ServicesFour,
    },
    {
        title: 'Data Governance Policies',
        description: 'Create and enforce data governance policies that define how data is handled, stored, and protected within your organization. ',
        icon: ServicesFive,
    },
    {
        title: 'Data Management Lifecycle Management',
        description: 'Manage the entire data lifecycle from creation to disposal with our expert services. We ensure that your data is properly managed at every stage.',
        icon: ServicesSix,
    },
];
export const GovernanceDataPrivacy = [
    {
        title: 'AI Governance Frameworks',
        description: 'Our AI governance frameworks are designed to establish robust guidelines and standards that ensure the ethical and responsible use of AI technologies. ',
        icon: GovernanceFramework,
        listItems: [
            'Transparent & Explainable AI Systems',
            'Ethical AI Practices',
            'Comprehensive AI Policy Development',
        ]
    },
    {
        title: 'AI Risk Management',
        description: 'We provide detailed risk assessments and develop strategies to mitigate potential threats, ensuring your AI systems are resilient and reliable.',
        icon: RiskManagement,
        listItems: [
            'AI Risk Management Frameworks',
            'Predictive Risk Analytics',
            'Continuous Monitoring and Reporting',
        ]
    },
    {
        title: 'Compliance in AI',
        description: 'With evolving regulations like the GDPR and the upcoming EU AI Act, staying compliant is more challenging than ever. ',
        icon: Dataprivacy,
        listItems: [
            'GDPR and AI Compliance',
            'Regulatory Compliance Audits',
            'AI Compliance Standards Development',
        ]
    },
    {
        title: 'Data Privacy Regulations',
        description: 'We help you implement robust data privacy practices that safeguard sensitive information and ensure compliance with global data protection regulations.',
        icon: ComplianceAI,
        listItems: [
            'Data Security in AI',
            'Privacy Impact Assessments',
            'Compliance with Data Privacy Regulations',
        ]
    },

];
export const PenetrationTestingData = [
    {
        title: 'Vulnerability Assessment',
        description: 'Our thorough vulnerability assessments pinpoint weaknesses in your network, applications, and systems, providing a detailed analysis and prioritizing remediation efforts.',
        icon: Vulnerability,
    },
    {
        title: 'Network Security Testing',
        description: 'We conduct extensive network security tests to uncover potential vulnerabilities and ensure robust protection against unauthorized access and cyber threats.',
        icon: NetworkSecurityTesting,
    },
    {
        title: 'Web Application Security',
        description: 'Our experts perform rigorous web application penetration tests to identify security flaws, ensuring your web applications are secure against attacks',
        icon: webAppSecurity,
    },
    {
        title: 'Security Audits',
        description: 'We provide detailed security audits to evaluate your organizations adherence to security policies and compliance with industry standards.',
        icon: SecurityAudits,
    },
    {
        title: 'Red Teaming',
        description: 'Our red teaming exercises simulate advanced persistent threats, providing an in-depth assessment of your security posture and response capabilities.',
        icon: RedTeaming,
    },
    {
        title: 'Application Security Compliance',
        description: 'We guide you through the entire process of compliance—from initial assessment to final verification, to ensure that your applications exceed the regulatory standards.',
        icon: ApplicationCompliance,
    },

];
export const servicesoffer = {
    digitalservice: [
        {
            id: "digitalservice",
            title: "Digital Consulting & Strategy",
            details: "Explore our business applications that will enhance your productivity. Our innovative product development and engineering solutions bring your ideas to life with efficiency and precision. ",
            description: "We provide strategic insights and tailored consulting to help you navigate the digital landscape and achieve your business goals.",
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
            description: "Optimize your development and security operations with our comprehensive DevOps and SecOps services, ensuring seamless and secure deployments.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        }
    ],
    cybersecurity: [

        {
            id: "cybersecurity",
            title: "Governance, Risk & Compliance",
            details: "Check out our services designed to safeguard your organisation and ensure operational excellence. We help you meet regulatory requirements effectively, ensuring that your data is protected",
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
            details: "At Novatore Solutions, we are committed to transforming visions into reality with our expertise in digital innovation. Our specialists are dedicated to crafting design-driven solutions that address complex challenges.",
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
            description: "Our integrated engineering approach fosters business resilience and high-performance results, creating flawless experiences across all touchpoints and building businesses with a customer-first focus.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    digitalbusiness: [
        {
            id: "digitalbusiness",
            title: "Integrated Solutions with Industry Leaders",
            details: "At Novatore Solutions, we transform enterprises with scalable, cloud-based business applications. Our solutions streamline operations across CRM, ERP, and more, ensuring unmatched efficiency.",
            description: "Our integrated solutions ensure smooth connectivity across all key functional areas, giving you a holistic view of your operations for informed decision-making",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "Customer Relationship Management (CRM) Systems",
            description: "Consolidate your data and customize without code to manage interactions, track sales, and streamline marketing effortlessly.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "Enterprise Resource Planning (ERP) Systems",
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
            title: "Human Resource Management Systems (HRMS)",
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
            title: "Accounting and Financial Management Software",
            description: " Automate bookkeeping, generate detailed reports, and make strategic financial decisions with ease.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 8,
            title: "Business Intelligence (BI) and Analytics Tools",
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
            title: "Supply Chain Management (SCM) Systems",
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
            title: "Customer Support and Helpdesk Software",
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
            details: "We are a dynamic team of specialists dedicated to delivering cohesive customer experiences through a design-driven methodology. Our focus is on crafting solutions to intricate challenges that deeply resonate with customers. ",
            description: "",
            keyheading: "Key Features:",
            keyfeatures: [{ paragraph: "Tailored app solutions" }, { paragraph: "User-friendly interfaces" }, { paragraph: "Seamless integration with existing systems" }]
        },
        {
            id: 2,
            title: "iOS and Android App Development",
            description: "Our expertise spans across both iOS and Android platforms, utilizing the best mobile app development tools to create robust and scalable applications.  Technologies We Use:Swift, Kotlin,React Native, Flutter ,Xcode, Android Studio",
            keyheading: "Technologies We Use:",
            keyfeatures: [{ paragraph: "Swift, Kotlin" }, { paragraph: "React Native, Flutter" }, { paragraph: "Xcode, Android Studio" }]
        },
        {
            id: 3,
            title: "Cross-Platform App Development",
            description: "Maximize your reach with our cross-platform app development services. We use mobile app development platforms like React Native and Flutter to ensure your app performs seamlessly across all devices.",
            keyheading: "Benefits:",
            keyfeatures: [{ paragraph: "Cost-effective development" }, { paragraph: "Consistent user experience" }, { paragraph: "Faster time-to-market" }]
        },
        {
            id: 4,
            title: "Mobile App Development Outsourcing",
            description: "Looking to expand your capabilities? Our mobile app development outsourcing services provide you with the expertise and resources needed to bring your project to life.",
            keyheading: "Advantages:",
            keyfeatures: [{ paragraph: "Access to skilled developers" }, { paragraph: "Flexible engagement models" }, { paragraph: "Cost-effective solutions" }]
        }
    ],
    testing: [
        {
            id: "testing",
            title: "Software Testing Services",
            details: "Our services are designed to cover every aspect of software testing, from manual to automated processes, ensuring that your software is secure, efficient, and user-friendly. Discover our comprehensive range of services:",
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
            title: "The Benefits of Business Process Automation",
            details: "Discover how Novatore Solutions can revolutionize your business operations with business process automation (BPA) solutions. Our comprehensive services are designed to enhance efficiency.",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Increased Efficiency" }, { paragraph: "Cost Savings" }, { paragraph: "Enhanced Accuracy" }, { paragraph: "Scalability" }]
        },
        {
            id: 2,
            title: "Tools and TechniquesKey Considerations for Business Process Automation",
            description: "When implementing BPA, it's crucial to consider factors such as the complexity of the processes, integration with existing systems, and the potential for scalability. Our team ensures that all key considerations for business process automation are addressed to deliver optimal results.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: "Challenges in Business Process Automation",
            description: "While BPA offers numerous benefits, challenges such as system integration, employee adaptation, and process complexity can arise. We provide support and solutions to overcome these challenges in business process automation, ensuring a seamless transition.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    azure: [{
        id: "azure",
        title: "Microsoft Azure Services",
        details: "We offer modern solutions utilizing Microsoft Azure and (GCP) to meet diverse business needs, ensuring that you harness the full potential of these powerful cloud platforms.",
        description: "Microsoft Azure is a dynamic cloud computing platform and service provided by Microsoft. It offers a wide range of services, including computing, analytics, storage, and networking. ",
        keyheading: "Azure provides a comprehensive array of services, including:",
        keyfeatures: [{ paragraph: "Azure Virtual Machines" }, { paragraph: "Azure Blob Storage" }, { paragraph: "Azure Kubernetes Service (AKS)" }, { paragraph: "Azure Cognitive Services" }]
    },
    {
        id: 2,
        title: "Azure Architecture",
        description: "Azure architecture is designed to provide a resilient, secure, and scalable environment for cloud applications. Key components include:",
        keyheading: "",
        keyfeatures: [{ paragraph: "Resource Groups: Logical containers for managing and organizing resources." }, { paragraph: "Virtual Networks: Isolated networks for securely connecting resources." }, { paragraph: "Azure Service Fabric: Microservices platform for building scalable and reliable applications." }]
    },
    {
        id: 3,
        title: "Google Cloud Platform (GCP) Services",
        description: "Google Cloud Platform (GCP) is a suite of cloud computing services provided by Google. Known for its high performance and cost-effective pricing, GCP is designed to support the deployment of modern, cloud-native applications.",
        keyheading: "Ensuring optimal use of GCP involves",
        keyfeatures: [{ paragraph: "Cost Optimization" }, { paragraph: "Security" }, { paragraph: "Automation" }]
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
            details: "Find out with our CloudOps services. At Novatore Solutions, we are dedicated to enhancing operational efficiency, deployment processes, and ensuring high availability through our advanced CloudOps solutions. ",
            description: "We provide expert guidance on best practices, tools, and technologies, ensuring that your cloud strategy aligns with your business objectives.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: " CloudOps Implementation",
            description: "Our team excels in deploying cloud operations frameworks that enhance performance, security, and scalability, tailored to your unique requirements.",
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
            details: "We offer a full suite of services designed to meet the needs of modern businesses looking to transform their operations and stay ahead of the curve.  ",
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
            title: " Data Analytics and Insights",
            description: "Leverage data to gain actionable insights and improve decision-making..",
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
            details: "We offer IT staff augmentation services to help you quickly integrate top-tier tech talent and scale your workforce with agility and precision.",
            description: "Quickly integrate skilled developers, engineers, and IT specialists into your projects to boost productivity and innovation.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: " Software Development Team Augmentation",
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
            details: "Our storage services are designed to meet the diverse needs of modern businesses, providing flexibility, security, and performance. ",
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
            details: "Discover how our Generative AI services can transform your business landscape and enhance creativity. From text-to-image creation to AI governance, our solutions will empower your enterprise. ",
            description: "Create stunning visuals with our Text-to-Image AI services. Whether you need marketing materials, product visuals, or custom graphics, our AI can generate high-quality images from textual descriptions, saving time and resources.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 2,
            title: "Multimodal AI",
            description: "Experience seamless integration of multiple data types with our Multimodal AI solutions. By combining text, images, audio, and video, our AI models provide a holistic approach to data analysis and content generation.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 3,
            title: " AI Governance",
            description: "Ensure your AI systems operate ethically and securely with our AI Governance services. We help you implement frameworks that prioritize transparency, accountability, and compliance with regulatory standards.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 4,
            title: "Generative Design",
            description: "Innovate faster with Generative Design. Our AI-driven design tools assist in creating efficient, sustainable, and aesthetically pleasing designs for products, architecture, and more.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 5,
            title: "AI Music Generation",
            description: "Transform your audio content with AI Music Generation. Our AI can compose original music, remix tracks, and even generate soundscapes tailored to your needs.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 6,
            title: " Synthetic Data",
            description: "Enhance your machine learning models with Synthetic Data. Generate high-quality, anonymized data to train AI systems without compromising on privacy or data security.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 7,
            title: " Speech Synthesis AI",
            description: "Improve communication and accessibility with Speech Synthesis AI. Our AI can generate lifelike speech from text, supporting multiple languages and accents.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 8,
            title: "Conversational AI ",
            description: "Elevate customer interactions with Conversational AI. Deploy intelligent chatbots and virtual assistants that understand and respond to user queries in real-time.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: 9,
            title: " AI-Generated Content ",
            description: "Automate content creation with AI-Generated Content. From blog posts to social media updates, our AI can produce engaging and relevant content tailored to your audience.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },

    ],
    machinelearning: [
        {
            id: "machinelearning",
            title: "  Quantum Machine Learning (Quantum ML)",
            details: "Explore the future of technology with our comprehensive machine learning services, designed to elevate your business capabilities, our solutions leverage the latest advancements in AI.",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Quantum algorithm development" }, { paragraph: "High-speed data processing" }, { paragraph: "Advanced pattern recognition" }]
        },
        {
            id: "2",
            title: " Deep Learning",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: " Neural network models" }, { paragraph: " High accuracy in data interpretation" }, { paragraph: "Scalable solutions for large datasets" }]
        },
        {
            id: "3",
            title: "  Explainable AI (XAI)",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Transparent AI models" }, { paragraph: "Enhanced trust and reliability" }, { paragraph: "Regulatory compliance" }]
        },
        {
            id: "4",
            title: " Edge Computing",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Local data processing" }, { paragraph: "Reduced latency" }, { paragraph: "Enhanced real-time capabilities" }]
        },
        {
            id: "5",
            title: " Autonomous Driving",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Object detection and classification" }, { paragraph: "Path planning and navigation" }, { paragraph: " Real-time sensor data processing" }]
        },
        {
            id: "6",
            title: " Computer Vision",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Image and video analysis" }, { paragraph: "Automated visual inspection" }, { paragraph: "Real-time monitoring" }]
        },
        {
            id: "7",
            title: " Generative Adversarial Networks (GANs)",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Realistic content generation" }, { paragraph: "Data augmentation" }, { paragraph: "Enhanced creative capabilities" }]
        },
        {
            id: "8",
            title: " Natural Language Processing (NLP)",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Text and speech analysis" }, { paragraph: "Sentiment detection" }, { paragraph: "Multilingual support" }]
        },
        {
            id: "9",
            title: " Predictive Analytics",
            description: "",
            keyheading: "",
            keyfeatures: [{ paragraph: "Trend analysis" }, { paragraph: "Forecasting models" }, { paragraph: "Data-driven decision making" }]
        },
    ],
    productengineering: [
        {
            id: "productengineering",
            title: "  Custom Enterprise Products",
            description: "From AI platforms and IoT ecosystems to labor management portals, we develop custom products that tackle business challenges and drive growth.",
            details: "Our experts are dedicated to guiding enterprises through the complexities of software development, ensuring your products use the latest technologies like AI, IoT, and blockchain.",
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
            description: "Embrace the future with our expertise in the latest technologies. We offer solutions in:",
            keyheading: "",
            keyfeatures: [{ paragraph: "Internet of Things (IoT)" }, { paragraph: "Augmented & Virtual Reality (AR/VR)" }, { paragraph: "Machine Learning & Artificial Intelligence (ML/AI)" }, { paragraph: "Distributed Ledger Technology & Blockchain" }, { paragraph: "Geolocation Technologies" },]
        },
    ],
    dataengineering: [
        {
            id: "dataengineering",
            title: "  Data Processing Speed",
            description: "Automated, real-time processing",
            details: "Discover how our advanced data engineering solutions can revolutionize your business by transforming raw data into actionable insights. With a focus on scalability, security, and efficiency, our expert team is dedicated to enhancing your data capabilities.",
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
            details: "Explore our comprehensive suite of IT security services, designed to protect your digital assets from ever-evolving cyber threats. Our expert solutions provide robust protection for your network, data, and cloud environments.",
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
            description: "Our IT Security Consulting services provide expert guidance to enhance your security posture. We conduct thorough security audits, risk assessments, and compliance checks.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "7",
            title: "Security Information and Event Management (SIEM)",
            description: "By collecting and analyzing data from across your IT environment, we provide actionable insights to detect and respond to security incidents promptly. ",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "8",
            title: " Threat Detection and Response",
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
            title: "  Expertise and Experience",
            description: "With a team of seasoned professionals, we bring extensive knowledge and experience in conducting thorough penetration tests that meet the highest industry standards.",
            details: "Introducing the essential field of penetration testing, our team of seasoned ethical hackers uses state-of-the-art techniques to mimic real-world cyberattacks. This approach ensures your organization's systems are well-protected.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "2",
            title: " Tools and Techniques",
            description: "We leverage the latest tools and methodologies, such as Metasploit, Burp Suite, and Wireshark, to deliver comprehensive and effective penetration testing services.",
            keyheading: "",
            keyfeatures: [{ paragraph: "" }]
        },
        {
            id: "3",
            title: "Tailored Testing Approach",
            description: "Our services are customized to meet your specific needs, whether it's network security, web application security, or compliance testing, ensuring a targeted and efficient approach.",
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
            details: "Let us help you create software that isn't just functional but also delightful to use. Learn how our UI/UX design expertise can elevate your software product and ensure it stands out in the competitive tech marketplace.",
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
            details: "At Novatore Solutions, we provide enterprise mobility solutions that enhance productivity and empower your workforce to thrive in the digital age.",
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
            details: "We understand the unique needs of software companies and offer customized services to optimize your network infrastructure, ensuring your business remains at the forefront of technology.",
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
            details: "We help you transform raw data into meaningful business intelligence and access up-to-the-minute data for timely decision-making. Our data engineering solutions ensure your data is accurate and optimized for growth.",
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
            description: "We develop custom web applications tailored to your business requirements. ",
            details: "Explore our wide range of services, from custom web application development to progressive web apps, each designed to meet specific business needs with a focus on performance optimization and security best practices.",
            keyheading: "Key Features:",
            keyfeatures: [{ paragraph: "Tailored solutions for unique business needs" }, { paragraph: "Responsive design for seamless user experience" }, { paragraph: "Integration with third-party services" }]
        },
        {
            id: "2",
            title: " Front-end Web Development",
            description: "Our front-end development services focus on creating visually appealing and highly interactive user interfaces.",
            keyheading: "Technologies We Use:",
            keyfeatures: [{ paragraph: "HTML5, CSS3, JavaScript" }, { paragraph: "React, Angular, Vue.js" }, { paragraph: "Bootstrap, Materialize" }]
        },
        {
            id: "3",
            title: "Back-end Web Development",
            description: "We use the latest technologies and frameworks to build the backbone of your web applications.",
            keyheading: "Technologies We Use:",
            keyfeatures: [{ paragraph: "Node.js, Python, Ruby on Rails" }, { paragraph: "Express.js, Django, Flask" }, { paragraph: "SQL, NoSQL databases" }]
        },
        {
            id: "4",
            title: "Full-stack Web Development",
            description: "We offer full-stack development services, combining both front-end and back-end development to deliver comprehensive web applications. ",
            keyheading: "Key Capabilities:",
            keyfeatures: [{ paragraph: "End-to-end development" }, { paragraph: "Cross-functional team collaboration" }, { paragraph: "Agile development methodology" }]
        },
        {
            id: "5",
            title: "Web App Performance Optimization",
            description: "Performance is critical for the success of any web application. Our optimization services ensure your web app loads quickly, runs smoothly, and provides an excellent user experience.",
            keyheading: "Optimization Techniques:",
            keyfeatures: [{ paragraph: "Code minification and compression" }, { paragraph: "Caching strategies" }, { paragraph: "Load balancing and CDN integration" }]
        },
        {
            id: "6",
            title: "Web App Security Best Practices",
            description: "Security is a top priority in our web development process. We implement best practices to protect your web applications from vulnerabilities and ensure data integrity.",
            keyheading: "Security Measures:",
            keyfeatures: [{ paragraph: "SSL/TLS encryption" }, { paragraph: "Regular security audits" }, { paragraph: "Secure authentication and authorization" }]
        },
        {
            id: "7",
            title: "Progressive Web Apps (PWA)",
            description: "We develop progressive web apps that combine the best of web and mobile applications. PWAs offer a native app-like experience with the advantages of web technology.",
            keyheading: "Benefits of PWAs:",
            keyfeatures: [{ paragraph: "Offline functionality" }, { paragraph: "Push notifications" }, { paragraph: " Faster loading times" }]
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