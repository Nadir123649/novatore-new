import { AIOne, AITwo, AIThree, AIFour, AIFive, AISix, CovaBg, AngelflowBg, About, Airbolt, ANGELFLOW, AngelLogo, Assistant, blogImageOne, blogImageTwo, Buisness, Career, Catalyst, ChooseFour, ChooseOne, ChooseThree, ChooseTwo, Cova, COVA, CovaLogo, Developer, Industries, Insights, London, Protium, Services, Upsure, DataImageOne, DataImageTwo, DataImageThree, DataImageFour, CloudOne, CloudTwo, CloudThree, CloudFour, AwsOne, AwsTwo, AwsThree, ImageOne, ImageTwo, ImageThree, CloudFive, CloudSix, DataImageFive, DataImageSix, CLOUD, Amazon, DATA, artificialIntelligence, Cybersecurity, DigitalService, AutomationOne, AutomationThree, AutomationFour, AutomationFive, AutomationSix, AutomationTwo, RemoteIT, ConsultingService, CloudService, HelpDesk, NetworkSecurity, SystemSupport, MigrationOne, MigrationTwo, MigrationThree, ProductFour, ProductThree, ProductTwo, ProductOne, ProductFive, ProductSix, ServicesSix, ServicesFive, ServicesFour, ServicesThree, ServicesTwo, ServicesOne } from "@/utils";
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
        title: 'Digital Services',
        description: 'From Consulting To Product Engineering, We Provide The Best Digital Solutions.',
        backgroundimg: "/images/DigitalService.png",
    },
    {
        title: 'Data',
        description: 'Expertise In Data Science To Drive Your Business Forward.',
        backgroundimg: "/images/data.png",
    },
    {
        title: 'Cloud',
        description: 'Smoothen Your Operations With AWS, Azure, And GCP.',
        backgroundimg: "/images/cloudService.png",
    },
    {
        title: 'Artificial Intelligence',
        description: 'Innovative AI Solutions, Generative Models, And Machine Learning.',
        backgroundimg: "/images/AI.png",
    },
    {
        title: 'Amazon ',
        description: 'Complete solutions including storage, networking, and analytics services.',
        backgroundimg: "/images/amazonService.png",
    },
    {
        title: 'Cyber Security',
        description: 'Protect your business with governance, data privacy and penetration testing.',
        backgroundimg: "/images/cyberSecurity.png",
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
    { link: '/', title: 'Web Application Development' },
    { link: '/', title: 'Mobile App Development' },
    { link: '/', title: 'UI/UX Design' }
]
export const itServices = [
    { link: '/', title: 'Enterprise Mobility' },
    { link: '/', title: 'Digital Transformation' },
    { link: '/', title: 'Staff Augmentation' }
]
export const transformation = [
    { link: '/', title: 'Business Process Automation' },
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
        title: 'Virtual Assistants And How They Change Customer Service',
        banner: Assistant,
        date: 'JANUARY 12, 2022',
        user: ' By JOHN DOE',
        description: 'Explore how virtual assistants are transforming customer service'
    },
    {
        title: 'PropTech. Is This the Future of Real Estate?',
        banner: Developer,
        date: 'MARCH 12, 2025',
        user: 'BY RIDA',
        description: 'Dive into the world of PropTech and discover how technology is reshaping the real estate industry.'
    },

    {
        title: '10 Ways to achieve your business goal',
        banner: Buisness,
        date: 'APRIL 19, 2024',
        user: 'BY JESSICA',
        description: 'Duis aute irure dolor lipsum simply free text the local markets'
    },
    {
        title: 'Artificial Intelligence',
        banner: Assistant,
        date: 'JANUARY 13, 2022',
        user: 'BY RIDA',
        description: 'Innovative AI Solutions, Generative Models, And Machine Learning.'
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
    { title: 'Empower Your Business, Transform Digitally', description: 'Smart and Powerful Solutions to Kickstart Your Growth ' },
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
        logo: AngelLogo,
        banner: ANGELFLOW,
        backgroundimg: AngelflowBg,
        color: "#FA6238",
        description: 'A user-friendly platform using React, Node.js, and Postgres, enabling investors and start-ups to connect and collaborate effectively. '
    },

    {
        logo: CovaLogo,
        banner: COVA,
        backgroundimg: CovaBg,
        color: "#5D5FEF",
        description: 'Created an AI-powered insurance web portal using Next.js, Node.js, and AWS, enhancing interactions among brokers, customers, and underwriters.'
    },

    {
        logo: AngelLogo,
        banner: ANGELFLOW,
        backgroundimg: AngelflowBg,
        color: "#FA6238",
        description: 'Created an AI-powered insurance web portal using Next.js, Node.js, and AWS, enhancing interactions among brokers, customers, and underwriters.'
    },

    {
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
            link: '/',
            heading: "Custom Software Development",
            details: [
                { text: "Web applications development", link: '/' },
                { text: "Mobile app development", link: '/' },
                { text: "UI/UX design", link: '/' }
            ]
        },
        {
            id: "IT services",
            link: '/',
            heading: "IT Services",
            details: [
                { text: "Enterprise Mobility", link: '/' },
                { text: "Digital Transformation", link: '/' },
                { text: "Staff Augmentation", link: '/' }
            ]
        },
        {
            id: "digital services",
            link: '/digital-service',
            heading: "Digital Services",
            details: [
                { text: "Digital Consulting & Strategy", link: '/' },
                { text: "Digital Business Applications", link: '/' },
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
                { text: "Crypto", link: '/' },
                { text: "Entertainment", link: '/' },
                { text: "Gaming", link: '/' },
                { text: "Healthcare", link: '/' },
                { text: "Insurance", link: '/' }
            ]
        }
    ]
};

export const featurestable: any = {
    services: [
        { id: "transformative solutions", link: "/", heading: "Transformative Solutions", details: [{ text: "Business Process Automation", link: '/business-process-automation' }, { text: "Testing and QA", link: '/testing-and-qa' }, { text: "System Support", link: '/system-support' }] },
        { id: "Amazon Web Services", link: "/amazon-web-services", heading: "Amazon Web Services", details: [{ text: "Storage services", link: '/storage-services' }, { text: "Networking services", link: '/' }, { text: "Analytics services", link: '/' }] },
        { id: "Data", heading: "Data", link: "/data", details: [{ text: "Data Engineering", link: '/data-engineering' }, { text: "Data Management & Governance", link: '/data-management-and-governance' }, { text: "Analytics & Platform Implementation", link: '/' }] }
    ],
    insights: [
        { id: "News & Events ", link: "/", heading: "News & Events", details: [{ text: "Company News", link: '/' }, { text: "Industry Events", link: '/' }, { text: "Press Releases", link: '/' }] },

    ],
    industries: [{ id: "Industries", link: "/", heading: "", details: [{ text: "Real Estate", link: '/' }, { text: "Retail", link: '/' }, { text: "Social", link: '/' }, { text: "Education", link: '/' }, { text: "Sports", link: '/' }] }]

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
        icon: DataImageThree,
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

export const CloudData = [
    {
        title: 'Business Process Automation',
        description: 'Streamline and automate your business processes to improve efficiency and reduce operational costs.',
        icon: CloudOne,
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
        icon: CloudFour,
    },
    {
        title: 'Cloud Security Services',
        description: 'Protecting your cloud infrastructure with tailored security solutions.',
        icon: CloudFive,
    },
    {
        title: 'Cloud Cost Optimization',
        description: 'We help you save on cloud expenses with cost-saving strategies.',
        icon: CloudSix,
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
        icon: ImageOne,
    },
    {
        title: 'Networking Services',
        description: 'Efficient networking services that enhance connectivity and performance.',
        icon: ImageTwo,
    },
    {
        title: 'Analytics Services',
        description: 'Advanced analytics tools to turn your data into actionable insights.',
        icon: ImageThree,
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
    azure:[   {
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
    cloudmigration:[{
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
cloudops:[  
     {  id: "cloudops",
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
digitaltransformation:[  
    {  id: "digitaltransformation",
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
staffaugmentation:[  
    {  id: "staffaugmentation",
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
storageservices:[  
    {  id: "storageservices",
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
generativeAI:[  
    {  id: "generativeAI",
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
machinelearning:[
    {
        id: "machinelearning",
        title: "  Quantum Machine Learning (Quantum ML)",
        details:"Explore the future of technology with our comprehensive machine learning services, designed to elevate your business capabilities, our solutions leverage the latest advancements in AI.",
        description:"",
        keyheading: "",
        keyfeatures: [{ paragraph: "Quantum algorithm development" }, { paragraph: "High-speed data processing" }, { paragraph: "Advanced pattern recognition" }]
     },
     {
        id: "2",
        title: " Deep Learning",
        description:"",
        keyheading: "",
        keyfeatures: [{ paragraph: " Neural network models" }, { paragraph: " High accuracy in data interpretation" }, { paragraph: "Scalable solutions for large datasets" }]
     },
     {
        id: "3",
        title: "  Explainable AI (XAI)",
        description:"",
        keyheading: "",
        keyfeatures: [{ paragraph: "Transparent AI models" }, { paragraph: "Enhanced trust and reliability" }, { paragraph: "Regulatory compliance" }]
     },
     {
        id: "4",
        title: " Edge Computing",
        description:"",
        keyheading: "",
        keyfeatures: [{ paragraph: "Local data processing" }, { paragraph: "Reduced latency" }, { paragraph: "Enhanced real-time capabilities" }]
     },
     {
        id: "5",
        title: " Autonomous Driving",
        description:"",
        keyheading: "",
        keyfeatures:[{ paragraph: "Object detection and classification" }, { paragraph: "Path planning and navigation" }, { paragraph: " Real-time sensor data processing" }]
     },
     {
        id: "6",
        title: " Computer Vision",
        description:"",
        keyheading: "",
        keyfeatures:[{ paragraph: "Image and video analysis" }, { paragraph: "Automated visual inspection" }, { paragraph: "Real-time monitoring" }]
     },
     {
        id: "7",
        title: " Generative Adversarial Networks (GANs)",
        description:"",
        keyheading: "",
        keyfeatures: [{ paragraph: "Realistic content generation" }, { paragraph: "Data augmentation" }, { paragraph: "Enhanced creative capabilities" }]
     },
     {
        id: "8",
        title: " Natural Language Processing (NLP)",
        description:"",
        keyheading: "",
        keyfeatures:[{ paragraph: "Text and speech analysis" }, { paragraph: "Sentiment detection" }, { paragraph: "Multilingual support" }]
     },
     {
        id: "9",
        title: " Predictive Analytics",
        description:"",
        keyheading: "",
        keyfeatures: [{ paragraph: "Trend analysis" }, { paragraph: "Forecasting models" }, { paragraph: "Data-driven decision making" }]
     },
],
productengineering:[
    {
        id: "productengineering",
        title: "  Custom Enterprise Products",
        description:"From AI platforms and IoT ecosystems to labor management portals, we develop custom products that tackle business challenges and drive growth.",
        details:"Our experts are dedicated to guiding enterprises through the complexities of software development, ensuring your products use the latest technologies like AI, IoT, and blockchain.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }]
     },
     {
        id: "2",
        title: " Custom Mobile Products",
        description:"Our designers and developers craft memorable mobile experiences that keep users invested and achieve your business objectives.",
        keyheading: "",
        keyfeatures: [{ paragraph: "" }] },
     {
        id: "3",
        title: " Progressive Technology Solutions",
        description:"Embrace the future with our expertise in the latest technologies. We offer solutions in:",
        keyheading: "",
        keyfeatures: [{ paragraph: "Internet of Things (IoT)" }, { paragraph: "Augmented & Virtual Reality (AR/VR)" }, { paragraph: "Machine Learning & Artificial Intelligence (ML/AI)" }, { paragraph: "Distributed Ledger Technology & Blockchain" },{ paragraph: "Geolocation Technologies" },]
     },
]
}


export const data = [
    {
        id: 1,
        heading: 'Cloud',
        link: "/cloud-services",
        items: [{ text: "CloudOps", link: '/cloud-ops' }, { text: "AWS", link: '/aws' }, { text: "Azure & GCP", link: '/azure-and-gcp' }, { text: "Cloud Migration", link: '/cloud-migration' },],
    },
    {
        id: 2,
        heading: 'Artificial Intelligence',
        link: "/artificial-Intelligence",
        items: [{ text: "AI Consulting", link: '/' }, { text: "Generative AI", link: '/generative-ai' }, { text: "Machine Learning", link: '/machine-learning' },],
    },
    {
        id: 3,
        heading: 'Cyber Security ',
        link: "/cyber-security",
        items: [{ text: "Governance, Risk & Compliance, Data Privacy", link: '/' }, { text: "Security Services", link: '/' }, { text: "Penetration Testing", link: '/' },],
    },
];