import IMAGES from "../assets/images";
import { SiGit, SiNodejs, SiReact, SiExpress, SiMongodb, SiMysql, SiDocker } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa'; // Import from Font Awesome

const data = {
  header_list: ["Home", "Experience", "About", "Contact"],


     profile:{
      name:"Aakash Patel",
      occupation:"Software Develoepr",
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
        icon: <SiReact size={30} /> // Binding React Icon
      }, {
        id: "2",
        name: "Aakash Patel",
        gender: "Male",
        age: "22",
        contact: "8757943974",
        expertise: "Node Specialist",
        img: IMAGES.my_image,
        exp: "3 year",
        icon: <FaNodeJs size={30} /> // Binding Node.js Icon
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
        icon: <SiExpress size={30} /> // Binding Express Icon
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
        icon: <SiGit size={30} /> // Binding Git Icon
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
        icon: <SiMysql size={30} /> // Binding MySQL Icon
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
        icon: <SiMongodb size={30} /> // Binding Docker Icon
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
        icon: <SiDocker size={30} /> // Binding Docker Icon
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
    description:" Built a scalable Front- end architecture using React.js, to handle high traffic and data sets. Designed a responsive and mobile-first front-end using React and Material-UI, resulting in a increase in mobiletraffic. Implemented RESTful APIs to allow seamless communication between the front-end and the back-end services."
  },
  {
    role: "Service Associate",
    description: "Expert I led the operations of a high- performing eCommerce website, managing a team of 12 members. I strategically assigned tasks, collaborated with the tech team, and worked closely with clients to deliver tailored solutions, driving business growth and optimizing product performance across the platform."
  },
  {
    role: "Profile 3: DevOps Engineer",
    description: "Managed Docker containers and CI/CD pipelines to streamline deployment processes. Experienced in using Git for version control and collaboration.",
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
      description: "React is a JavaScript library for building user interfaces.",
      strengths: [
        "Component-based architecture",
        "Efficient and fast rendering with Virtual DOM",
        "Widely used for building dynamic and interactive web apps"
      ],
      deepPoints: [
        "Supports unidirectional data flow and state management",
        "Strong community support and ecosystem (Redux, React Router, etc.)",
        "Hooks API for functional components and advanced features"
      ],        img: IMAGES.my_image,

    },
    {
      name: "Node.js",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      strengths: [
        "Event-driven, non-blocking I/O model",
        "Highly scalable and efficient for handling multiple connections",
        "Great for building real-time applications"
      ],
      deepPoints: [
        "Supports server-side scripting, making it easy to build RESTful APIs",
        "Large ecosystem of open-source libraries and packages (npm)",
        "Can handle asynchronous programming with promises and async/await"
      ],
    img: IMAGES.my_image,

    },
    {
      name: "Express.js",
      description: "Express.js is a fast, unopinionated, and minimalist web framework for Node.js.",
      strengths: [
        "Lightweight and flexible framework for building web applications",
        "Supports middleware for handling requests and responses",
        "Easy to integrate with other Node.js libraries"
      ],
      deepPoints: [
        "Commonly used for building RESTful APIs and backend services",
        "Supports routing, templating, and more",
        "Works well with database systems like MongoDB and MySQL"
      ],        img: IMAGES.my_image,

    },
    {
      name: "Git",
      description: "Git is a distributed version control system for tracking changes in source code during software development.",
      strengths: [
          "Supports distributed development, allowing multiple developers to work on the same project simultaneously",
          "Efficiently handles large projects with speed and flexibility",
          "Provides robust branching and merging capabilities"
      ],
      deepPoints: [
          "Enables easy collaboration and code sharing through repositories (e.g., GitHub, GitLab)",
          "Facilitates easy tracking of changes and history, allowing for rollback if needed",
          "Integrates with various CI/CD tools for automated workflows and deployments"
      ],
      img: IMAGES.git_image, // Replace with the actual image for Git
  },
  
    {
      name: "MySQL",
      description: "MySQL is an open-source relational database management system.",
      strengths: [
        "Widely used and well-documented relational database",
        "Supports complex queries, joins, and indexing",
        "Reliable performance with ACID compliance"
      ],
      deepPoints: [
        "Ideal for structured data and relational schemas",
        "Scalable for small to large applications",
        "Integration with various backend languages like Node.js, PHP, etc."
      ],        img: IMAGES.my_image,

    },
   
    {
      name: "Docker",
      description: "Docker is a platform for developing, shipping, and running applications in containers.",
      strengths: [
        "Enables consistent environments across development, testing, and production",
        "Lightweight and efficient compared to virtual machines",
        "Large ecosystem of prebuilt images (Docker Hub)"
      ],
      deepPoints: [
        "Supports microservices architecture with isolated containers",
        "Easily integrates with CI/CD pipelines for automated deployment",
        "Docker Compose for managing multi-container applications"
      ],        img: IMAGES.my_image,

    },
    
    {
      name: "MongoDB",
      description: "MongoDB is a NoSQL, document-oriented database designed for scalability and flexibility.",
      strengths: [
        "Schema-less structure, allowing for flexibility in data modeling",
        "Highly scalable with built-in horizontal scaling (sharding)",
        "Supports large volumes of unstructured or semi-structured data"
      ],img: IMAGES.my_image,

      deepPoints: [
        "Great for real-time analytics, content management, and IoT applications",
        "Uses BSON format, which is JSON-like and allows for nested data",
        "Strong integration with JavaScript environments like Node.js"
      ]
    }
    
  ],
  
};

export default data;
