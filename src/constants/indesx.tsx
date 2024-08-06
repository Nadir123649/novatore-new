import { AIOne, AITwo, AIThree, AIFour, AIFive, AISix, CovaBg, AngelflowBg, About, Airbolt, ANGELFLOW, AngelLogo, Assistant, blogImageOne, blogImageTwo, Buisness, Career, Catalyst, ChooseFour, ChooseOne, ChooseThree, ChooseTwo, Cova, COVA, CovaLogo, Developer, Industries, Insights, London, Protium, Services, Upsure, DataImageOne, DataImageTwo, DataImageThree, DataImageFour, CloudOne, CloudTwo, CloudThree, CloudFour, AwsOne, AwsTwo, AwsThree, ImageOne, ImageTwo, ImageThree, CloudFive, CloudSix, DataImageFive, DataImageSix, CLOUD, Amazon,DATA, artificialIntelligence,Cybersecurity,DigitalService } from "@/utils";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { link } from "fs";



export const services = [
    {
        title: 'Digital Services',
        description: 'From Consulting To Product Engineering, We Provide The Best Digital Solutions.',
        backgroundimg: "/images/digitalservice.svg",
    },
    {
        title: 'Data',
        description: 'Expertise In Data Science To Drive Your Business Forward.',
        backgroundimg: "/images/data.svg",
    },
    {
        title: 'Cloud',
        description: 'Smoothen Your Operations With AWS, Azure, And GCP.',
        backgroundimg: "/images/cloud.svg",
    },
    {
        title: 'Artificial Intelligence',
        description: 'Innovative AI Solutions, Generative Models, And Machine Learning.',
        backgroundimg: "/images/artificialIntelligence.svg",
    },
    {
        title: 'Amazon ',
        description: 'Complete solutions including storage, networking, and analytics services.',
        backgroundimg: "/images/aws.svg",
    },
    {
        title: 'Cyber Security',
        description: 'Protect your business with governance, data privacy and penetration testing.',
        backgroundimg: "/images/Cybersecurity.svg",
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
        link: '/digitalservice',
        heading: "Digital Services",
        details: [
          { text: "Digital Consulting & Strategy", link: '/' },
          { text: "Digital Business Applications", link: '/' },
          { text: "Product Engineering", link: '/' }
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
        { id: "transformative solutions", link:"/", heading: "Transformative Solutions", details: [ { text: "Business Process Automation", link: '/' },{ text: "Testing and QA", link: '/' } ,{ text: "System Support", link: '/' } ] },
        { id: "Amazon Web Services", link:"/aws", heading: "Amazon Web Services", details: [  { text: "Storage services", link: '/' },{ text: "Networking services", link: '/' } ,{ text: "Analytics services", link: '/' }] },
        { id: "Data", heading: "Data", link:"/", details: [{ text: "Data Engineering", link: '/dataengineering' },{ text: "Data Management & Governance", link: '/' } ,{ text: "Analytics & Platform Implementation", link: '/' }]}
    ],
    insights: [
        { id: "News & Events ", link:"/", heading: "News & Events", details: [{ text: "Company News", link: '/' },{ text: "Industry Events", link: '/' } ,{ text: "Press Releases", link: '/' } ] },

    ],
    industries: [{ id: "Industries", link:"/", heading: "", details: [{ text: "Real Estate", link: '/' },{ text: "Retail", link: '/' } ,{ text: "Social", link: '/' },{ text: "Education", link: '/' },{ text: "Sports", link: '/' } ] }]

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

export const servicesoffer = {
    digitalservice: [
        {
            id: "digitalservice",
            title: "CloudOps Consulting",
            details: "Find out with our CloudOps services. At Novatore Solutions, we are dedicated to enhancing operational efficiency, deployment processes, and ensuring high availability through our advanced CloudOps solutions. ",
            description: "We provide expert guidance on best practices, tools, and technologies, ensuring that your cloud strategy aligns with your business objectives.",
        },
        {
            id: 2,
            title: "CloudOps Implementation",
            description: "Our team excels in deploying cloud operations frameworks that enhance performance, security, and scalability, tailored to your unique requirements.",
        },
        {
            id: 3,
            title: "CloudOps Managed Services",
            description: "We offer continuous monitoring, maintenance, and optimization to ensure your cloud environment runs smoothly and efficiently.",
        }
    ],
    cybersecurity: [

        {
            id: "cybersecurity",
            title: "Governance, Risk & Compliance",
            details: "Check out our services designed to safeguard your organisation and ensure operational excellence. We help you meet regulatory requirements effectively, ensuring that your data is protected",
            description: "Ensure your organization meets regulatory requirements and mitigates risks effectively.",
        },
        {
            id: 2,
            title: "Security Services",
            description: "Protect your data with our comprehensive security strategies and solutions.",
        },
        {
            id: 3,
            title: "Penetration Testing",
            description: "Identify and fix vulnerabilities in your systems before they can be exploited.",
        },

    ]

}


export const data = [
    {
      id: 1,
      heading: 'Cloud',
      link:"/cloudservices",
      items: [ { text: "CloudOps", link: '/' }, { text: "AWS, Azure & GCP", link: '/' } , { text: "Cloud Migration", link: '/' },],
    },
    {
      id: 2,
      heading: 'Artificial Intelligence',
      link:"/artificialIntelligence",
      items: [ { text: "AI Consulting", link: '/' }, { text: "Generative AI", link: '/' } , { text: "Machine Learning", link: '/' },],
    },
    {
      id: 3,
      heading: 'Cyber Security ',
      link:"/cybersecurity",
      items: [ { text: "Governance, Risk & Compliance, Data Privacy", link: '/' }, { text: "Security Services", link: '/' } , { text: "Penetration Testing", link: '/' },],
    },
];