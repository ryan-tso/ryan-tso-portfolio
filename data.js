
export const ABOUT_ME = [
  "I'm a recent computer science graduate who is passionate about creating interactive, easy-to-use, and responsive " +
  "full-stack web applications.",
  "I specialize in JavaScript, React, Next.js, and RESTful APIs along with a myriad of backend technology such as Django, " +
  "Node.js, and AWS Lambda and AWS API Gateway; and, if there is tech that I'm not familiar with, it won't take long for " +
  "me to pick it up!",
  // "Being a freelance artist on the side, I am well versed in translating requirements to solutions while being highly " +
  // "critical of my own work, which is why I give it my all when it comes to the appearance and functionality of what I " +
  // "create.",
]

export const SKILLS = [
  {
    name: "Front End",
    skills: [
      {name: "HTML", value: 0.9},
      {name: "CSS", value: 0.8},
      {name: "JavaScript", value: 0.95},
      {name: "TypeScript", value: 0.7},
      {name: "React.js", value: 0.95},
      {name: "Next.js", value: 0.75},
      {name: "Redux", value: 0.9},
      {name: "Material UI", value: 0.8}
    ]
  },
  {
    name: "Back End",
    skills: [
      {name: "Java", value: 0.7},
      {name: "Python", value: 0.6},
      {name: "C / C++", value: 0.4},
      {name: "Django", value: 0.65},
      {name: "Node.js", value: 0.7},
      {name: "RESTful APIs", value: 0.95},
      {name: "MySQL", value: 0.7},
      {name: "NoSQL", value: 0.4},
      {name: "Serverless", value: 0.6},
      {name: "Cloud", value: 0.7},
    ]
  },
  {
    name: "Dev Ops",
    skills: [
      {name: "GitHub", value: 0.7},
      {name: "Agile", value: 0.8},
      {name: "Jira", value: 0.9},
      {name: "Confluence", value: 0.9}
    ]
  }
]

export const EXPERIENCE = [
  {
    company: "Ensemble Scientific",
    picture: `https://career-files.s3.us-west-1.amazonaws.com/portfolio/FarmPlot.jpg`,
    role: "Full-Stack-Developer",
    period: "2021 - 2022",
    description: "Ensemble Scientific is a company that produces IoT sensors and devices used primarily in the " +
      "measurement of agricultural environments, enabling farms to become 'smart' and allowing farmers to effectively " +
      "monitor and manage their farms to reduce waste and to optimize yield.",
    responsibilities: [
      "Implemented the back-end RESTful API server using Python, Django Rest Framework, and MySQL which provided extensive " +
      "models to company IOT devices and end-points to manage users, devices, data, telemetry, and organization information " +
      "from the front-end cloud app or from the IOT devices themselves",
      "Developed the front-end using JavaScript, React, Next.js, and Redux which allowed users to create or join organizations, " +
      "as well as claim, manage, or view the data from the IOT devices for their organization in real time",
      "Created and maintained comprehensive test suites for back-end API using Pytest and Postman API",
      "Helped to develop QMS modules for in-house IoT device production that adheres to the requirements of ISO 9001",
      "Constructed an intuitive roadmap for the company to become ISO 9001 certified",
    ],
    skills: [
      "Python",
      "Django Rest Framework",
      "JavaScript",
      "React",
      "Redux",
      "Next.js",
      "Material UI",
      "MySQL",
    ]
  },
  {
    company: "Organika Health Products Inc.",
    picture: `https://career-files.s3.us-west-1.amazonaws.com/portfolio/OrganikaPic.jpg`,
    role: "Quality Control Supervisor",
    period: "2012 - 2019",
    description: "Organika is a natural health supplements company specializing in manufacturing and distribution, " +
      "providing the latest effective products that meet their customers' daily needs.",
    responsibilities: [
      "Supervised the Quality team and laboratory and guided them on proper quality procedures and operations",
      "Improved intra-department and inter-department effectiveness by designing and implementing SOPs integrating newer technologies",
      "Responsible for transitioning the office to paperless which improved department efficiency by 50%",
      "Participated in ISO 9001 and HACCP audits as the main point-man and acquired HACCP certification for the company",
      "Practiced rigorous acceptance testing on a product-to-product basis that reduced non-compliance to 2%"
    ],
    skills: [
      "Quality Control",
      "Quality Assurance",
      "Acceptance Testing",
      "Auditing",
      "GMP",
      "ISO 9001",
      "HACCP",
      "Manufacturing",
    ]
  }
]

export const PROJECTS = [
  {
    title: 'AWExpress',
    subtitle: 'A full-stack AWS-based marketplace',
    picUrl: `https://career-files.s3.us-west-1.amazonaws.com/portfolio/AWExpressPic.jpg`,
    gitHubUrl: 'https://github.com/ryan-tso/AWExpress',
    demoUrl: 'https://main.d3kth9ne2jpxsc.amplifyapp.com',
    description: "AWExpress is a full-stack academic project developed for Amazon as an internal marketplace for employees. " +
      "The frontend is built with React, Next.js, Redux, and Material UI, while the backend RESTful API server was " +
      "constructed using serverless cloud technology such as AWS Lambda and AWS API Gateway.  Users are able to login " +
      "using Google authentication with a Lambda Authorizer to browse, add to cart, and purchase products, as well as " +
      "list their own items for sale."
  },
  {
    title: 'Portfolio',
    subtitle: 'A website about me',
    picUrl: `https://career-files.s3.us-west-1.amazonaws.com/portfolio/PortfolioPic.jpg`,
    gitHubUrl: 'https://github.com/ryan-tso/ryan-tso-portfolio',
    description: "This portfolio was planned and designed in Adobe Photoshop with a mobile-first approach, and is built " +
      "with React, Next.js and Redux with Material UI for styling.  Nav bar logic and smooth page navigation was created " +
      "using Redux along with a custom IntersectionObserver hook. Next.js was used to future-proof this site if ever it " +
      "needed to be expanded with greater functionality.  This project is under continuous deployment using AWS Amplify."
  },
  {
    title: "More to Come!",
    subtitle: "Striving for growth",
    picUrl: `https://career-files.s3.us-west-1.amazonaws.com/portfolio/ProgrammingPic.jpg`,
    description: "I hope to work with you to develop great products and effective solutions for you or your customers' " +
      "needs.  Let us collaborate together and make the world a little bit easier!"
  }
]