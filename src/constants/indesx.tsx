import { AIOne, AITwo, AIThree, AIFour, AIFive, AISix, CovaBg, AngelflowBg, About, Airbolt, ANGELFLOW, AngelLogo, Assistant, blogImageOne, blogImageTwo, Buisness, Career, Catalyst, ChooseFour, ChooseOne, ChooseThree, ChooseTwo, Cova, COVA, CovaLogo, Developer, Industries, Insights, London, milestonIconOne, milestonIconThree, milestonIconTwo, milestonOne, milestonThree, milestonTwo, Protium, Services, Upsure, DataImageOne, DataImageTwo, DataImageThree, DataImageFour, CloudOne, CloudTwo, CloudThree, CloudFour, AiOne, AiTwo, AiThree, AwsOne, AwsTwo, AwsThree, ImageOne, ImageTwo, ImageThree } from "@/utils";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { url } from "inspector";



export const services = [
    { title: 'Digital Services', description: 'From Consulting To Product Engineering, We Provide The Best Digital Solutions.', banner: Services, backgroundimg: Career },
    { title: 'Data', description: 'Expertise In Data Science To Drive Your Business Forward.', banner: Career, backgroundimg: Career },
    { title: 'Cloud', description: 'Smoothen Your Operations With AWS, Azure, And GCP.', banner: Insights, backgroundimg: Career },
    { title: 'Artificial Intelligence', description: 'Innovative AI Solutions, Generative Models, And Machine Learning.', banner: Industries, backgroundimg: Career }
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
    { title: '98', percentage: "%", description: 'Client satisfaction' },
    { title: '300', percentage: "+", description: 'Successful projects' },
    { title: '11', percentage: "+", description: 'Years in IT services' },
    { title: '40', percentage: "+", description: 'Team members' }
];

export const menuitems = [
    { id: 1, title: "Services", img: Services, url: '/', description: "The Power of Data: How Analytics Can Transform Your Business., " },
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
    { link: '/', title: 'Copyright © NovatoreSols2024' },
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
    { icon: <TiSocialLinkedin size={20} />, link: '/', title: 'Linkedin', },
    { icon: <FaFacebookF size={15} />, link: '/', title: 'Facebook' },
    { icon: <FaInstagram size={16} />, link: '/', title: 'Instagram' },
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
        { id: "custom software development", heading: "Custom Software Development", details: ["Web applications development", "Mobile app development", "UI/UX design"] },
        { id: "IT services", heading: "IT Services", details: ["Enterprise Mobility ", "Digital transformation", "Staff augmentation"] },
        { id: "digital services", heading: "Digital Services", details: ["Digital Consulting & Strategy", "Digital Business Applications", "Product Engineering"] }
    ],
    insights: [
        { id: "Blogs", heading: "Blogs", details: ["Latest Trends ", "Expert Opinions", "Case Studies"] },
        { id: "Whitepapers", heading: "Whitepapers", details: ["Industry Reports", "Research Studies", "Technicl guides"] }
    ],
    about: [
        { id: "About Us", link: "/about", heading: "About Us", details: ["Our Story", "Company History", "Mission and Vision", "Partners and Alliances"] }
    ],
    careers: [{ id: "Careers", heading: "Careers", details: ["Job Opnenings", "Life at Novatore", "Internship"] }],
    industries: [{ id: "Industries", heading: "Industries", details: ["Crypto", "Entertainment", "Gaming", "Healthcare", "Insurance"] }]

};

export const featurestable: any = {
    services: [
        { id: "transformative solutions", heading: "Transformative Solutions", details: ["Business Process Automation", "Testing and QA", "System Support"] },
        { id: "Amazon Web Services", heading: "Amazon Web Services", details: ["Storage services", "Networking services", "Analytics services"] },
        { id: "Data", heading: "Data", details: ["Data Engineering ", "Data Management & Governance", "Analytics & Platform Implementation"] }
    ],
    insights: [
        { id: "News & Events ", heading: "News & Events", details: ["Company News ", "Industry Events", "Press Releases"] },

    ],
    industries: [{ id: "Industries", heading: "", details: ["Real Estate", "Retail", "Social", "Education", "Sports"] }]

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
    { title: '100', percentage: "+", description: 'Digitally Transformed Enterprises' },
    { title: '130', percentage: "+", description: 'Organizations Empowered Through Omnichannel Experiences' },
    { title: '500', percentage: "+", description: ' Design-Driven Solutions Implemented' },
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
];

export const AiData = [
    {
        title: 'AI Consulting',
        description: 'We provide expert guidance to help you navigate the complexities of AI, ensuring you implement the right strategies and technologies to achieve your goals.',
        icon: AiOne,
    },
    {
        title: 'Generative AI',
        description: 'Our generative AI solutions help you create new and innovative content, designs, and products, pushing the boundaries of what’s possible.',
        icon: AiTwo,
    },
    {
        title: 'Machine Learning',
        description: 'We develop and deploy machine learning models that analyze data, identify patterns, and make informed decisions, driving smarter business operations.',
        icon: AiThree
        ,
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