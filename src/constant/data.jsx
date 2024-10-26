import IMAGES from "../assets/images";
import { SiGit, SiReact, SiExpress, SiMongodb, SiMysql, SiDocker } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';


const data = {
  header_list: ["Home", "Experience", "Overview", "Contact"],
  // my_resume:my_resume,


     profile:{
      name:"Aakash Patel",
      occupation:"Software Developer",
      img: IMAGES.my_image,
     },
     expertList: [
      {
        id: "1",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "8757943974",
        expertise: "React Expert",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <SiReact size={45} /> // Binding React Icon
      }, {
        id: "2",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "8757943974",
        expertise: "Node Specialist",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <FaNodeJs size={45} /> // Binding Node.js Icon
      },
      {
        id: "3",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "8757943974",
        expertise: "Express Developer",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <SiExpress size={45} /> // Binding Express Icon
      },
      {
        id: "4",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "8757943974",
        expertise: "Git Explorer",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <SiGit size={45} /> // Binding Git Icon
      },
     
      
      {
        id: "5",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "8757943974",
        expertise: "MySQL Specialist",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <SiMysql size={45} /> // Binding MySQL Icon
      },
      {
        id: "6",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "4757953974",
        expertise: "Mongo Enthusiast",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <SiMongodb size={45} /> // Binding Docker Icon
      },
      {
        id: "7",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "4757953974",
        expertise: "Docker Enthusiast",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <SiDocker size={45} /> // Binding Docker Icon
      },
    ],
  aboutUsPage:{
    content:
      "Passionate Front-End Software Developer with experience in building responsive, user-centric web applications. Proficient in modernJavaScript frameworks such as React.js and Node.js, with a strong emphasis on writing clean, maintainable code and optimizingperformance. Adept at translating UI/UX designs into high-quality code while ensuring cross-browser compatibility and adherence toaccessibility standards.",
      key:"I am a passionate Software Engineer with a strong foundation in both front-end and back-end development, complemented by my expertise in data visualization. My journey in tech began with a fascination for creating intuitive user experiences, and I have since honed my skills to encompass the full software development lifecycle.",

Idea:"With a focus on building scalable and efficient applications, I thrive on challenges that allow me to leverage my problem-solving abilities. I am proficient in a range of programming languages and frameworks, which empowers me to deliver innovative solutions tailored to user needs.",

skill:"I believe in the power of data to drive decisions and enhance user engagement. My experience in data visualization enables me to transform complex datasets into meaningful insights, making it easier for stakeholders to understand and act upon the information.",

key:"I am constantly exploring new technologies and methodologies to improve my craft, and I am excited about opportunities to collaborate with others who share my passion for technology and innovation.",
  
  
    },
   // data.js
 experienceData : [
  {
    role:"Frontend Development Specialist",
    org:"Actual Pixel",
    description:" Built a scalable Front- end architecture using React.js, to handle high traffic and data sets. Designed a responsive and mobile-first front-end using React and Material-UI, resulting in a increase in mobile traffic. Implemented RESTful APIs to allow seamless communication between the front-end and the back-end services."
  },
  {
    role:"Software Developer",
    org:"Actual Pixel",
    description:"Served as a key front-end resource across multiple projects, successfully implementing critical features,improving UI/UX, and optimizing performance, while collaborating closely with teams to deliver impactful, high- quality solutions using React, Node and modern web technologies"
  },
  {
    role: "Service Associate",
    org:"Taleperformance",
    description: "Expert I led the operations of a high- performing eCommerce website, managing a team of 12 members. I strategically assigned tasks, collaborated with the tech team, and worked closely with clients to deliver tailored solutions, driving business growth and optimizing product performance across the platform."
  },
  {
    role: "Side Engineer Intern",
    org: "Reliance Digital",
    description: "Delivered 1FT demos and technical presentations explaining internet architecture, protocols, and network configurations. Led the end-to-end setup and integration of internet services, ensuring optimized performance and reliable connectivity in enterprise environments.",
  },
  
  
],


    
    
  contactMePage: {
    content:
      "Passionate Front-End Software Developer with experience in building responsive, user-centric web applications. Proficient in modernJavaScript frameworks such as React.js and Node.js, with a strong emphasis on writing clean, maintainable code and optimizingperformance. Adept at translating UI/UX designs into high-quality code while ensuring cross-browser compatibility and adherence toaccessibility standards.",
  },
  overviewPage: {
    content:
      "Passionate Front-End Software Developer with experience in building responsive, user-centric web applications. Proficient in modernJavaScript frameworks such as React.js and Node.js, with a strong emphasis on writing clean, maintainable code and optimizingperformance. Adept at translating UI/UX designs into high-quality code while ensuring cross-browser compatibility and adherence toaccessibility standards.",},
  experiencePage: {
    content:
      "Passionate Front-End Software Developer with experience in building responsive, user-centric web applications. Proficient in modernJavaScript frameworks such as React.js and Node.js, with a strong emphasis on writing clean, maintainable code and optimizingperformance. Adept at translating UI/UX designs into high-quality code while ensuring cross-browser compatibility and adherence toaccessibility standards.",
  },
  skillSets: [
    {
        name: "React.js",
        description: "A powerful JavaScript library for building responsive, dynamic user interfaces.",
        strengths: [
            "Component-based architecture for modular code structure",
            "Efficient and fast rendering with Virtual DOM",
            "Rich ecosystem with reusable libraries and tools",
            "Supports unidirectional data flow and state management for predictable UI behavior",
        ],
        deepPoints: [
            "Strong community support with extensive resources (Redux, React Router, etc.)",
            "Optimized for mobile and web with reusable components",
            "Seamless integration with server-side rendering frameworks"
        ],
        offerings: [
            "Custom React component development",
            "Single-page application (SPA) architecture",
            "State management solutions (Redux, Context API)",
            "Advanced hooks (useMemo, useCallback) for performance",
            "UI performance optimization techniques"
        ],
        img: IMAGES.my_image,
    },
    {
        name: "Node.js",
        description: "An efficient JavaScript runtime built on Chrome's V8 engine for server-side applications.",
        strengths: [
            "Event-driven, non-blocking I/O for asynchronous operations",
            "Highly scalable architecture suited for high-traffic applications",
            "Strong ecosystem (npm) supporting real-time applications and integrations"
        ],
        deepPoints: [
            "Robust for server-side scripting and RESTful APIs",
            "Supports asynchronous programming (promises, async/await)",
            "Large, active community with extensive library support"
        ],
        offerings: [
            "Scalable RESTful API development",
            "Real-time data processing applications",
            "Microservices architecture",
            "Database integration (MongoDB, MySQL)",
            "Implementation of efficient async patterns"
        ],
        img: IMAGES.my_image,
    },
    {
        name: "Express.js",
        description: "A minimalist web framework for Node.js, enabling robust server-side applications.",
        strengths: [
            "Lightweight and fast for efficient request handling",
            "Middleware support for extensible functionality",
            "Comprehensive routing and request/response handling"
        ],
        deepPoints: [
            "Widely used for RESTful API development",
            "Supports templating, static file serving, and middleware integration",
            "Compatible with various database systems like MongoDB and MySQL"
        ],
        offerings: [
            "Middleware implementation for modular architecture",
            "API endpoint creation with error handling",
            "Integration with templating engines (e.g., EJS, Pug)",
            "Advanced logging and request tracking solutions"
        ],
        img: IMAGES.my_image,
    },
    {
        name: "Git",
        description: "A distributed version control system crucial for collaborative software development.",
        strengths: [
            "Facilitates distributed development with robust branching and merging",
            "Supports collaboration through multiple repository hosting services",
            "Efficiently manages project history with rollback capabilities"
        ],
        deepPoints: [
            "Enables easy code sharing and collaboration (e.g., GitHub, GitLab)",
            "Tracks changes for seamless history and version control",
            "Integrates with CI/CD pipelines for streamlined deployments"
        ],
        offerings: [
            "Setup and management of version control workflows",
            "Branching strategies and best practices",
            "Collaboration and code review processes",
            "CI/CD integration and automation",
            "Code quality and release management"
        ],
        img: IMAGES.git_image,
    },
    {
        name: "MySQL",
        description: "A reliable and high-performance relational database system.",
        strengths: [
            "ACID-compliant for reliable transaction handling",
            "Supports complex queries, joins, and indexing",
            "Widely used and documented with high availability"
        ],
        deepPoints: [
            "Ideal for structured data and large-scale applications",
            "Scalable for both small and large deployments",
            "Seamless integration with backend languages like Node.js, PHP"
        ],
        offerings: [
            "Database schema design and optimization",
            "Complex query development for efficient data access",
            "Data migration and backup strategies",
            "Performance tuning, indexing, and query optimization"
        ],
        img: IMAGES.my_image,
    },
    {
        name: "MongoDB",
        description: "A NoSQL database providing flexibility with a document-oriented model.",
        strengths: [
            "Schema-less, supporting flexible data structures",
            "Built for high scalability with sharding support",
            "Efficient for large volumes of unstructured or semi-structured data"
        ],
        deepPoints: [
            "Ideal for real-time analytics, content management, and IoT",
            "BSON format for flexible nested data storage",
            "Seamless integration with JavaScript environments like Node.js"
        ],
        offerings: [
            "Schema design tailored for dynamic data models",
            "Real-time data analytics solutions",
            "Application integration and optimization",
            "Advanced indexing and query optimization"
        ],
        img: IMAGES.my_image,
    },
    {
        name: "Docker",
        description: "A platform for containerizing applications, ensuring consistency across environments.",
        strengths: [
            "Lightweight compared to virtual machines, ensuring efficient resource usage",
            "Supports consistent development, testing, and production environments",
            "Ecosystem includes Docker Hub with prebuilt images"
        ],
        deepPoints: [
            "Enables isolated environments ideal for microservices",
            "Facilitates rapid development with Docker Compose",
            "Integrates smoothly with CI/CD for automated deployment"
        ],
        offerings: [
            "Application containerization for cross-environment consistency",
            "Setup of scalable microservices architecture",
            "CI/CD pipeline integration",
            "Multi-container management with Docker Compose",
            "Optimization for resource-efficient deployments"
        ],
        img: IMAGES.my_image,
    },
]


  
};

export default data;
