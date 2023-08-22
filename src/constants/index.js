import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse, mobile, cloud,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
    style: ''
  },
  {
    title: 'Backend Developer',
    icon: backend,
    style: ''
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
    style: 'invert'
  },
  {
    title: 'Cloud Architecture',
    icon: cloud,
    style: 'invert'
  },
];

const technologies = [
  {
    name: 'Java',
    icon: html,
  },
  {
    name: 'Spring Boot',
    icon: html,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'SQL',
    icon: postgresql,
  },
  {
    name: 'mongoDB',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'openshift',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Freelance',
    icon: coverhunt,
    date: 'Apr 2016 - Feb 2023',
    description: "Website development for individual clients.",
    tech: "Gradle · ReactJS · HTML · JavaScript · CSS · WordPress"
  },
  {
    title: 'Full Stack Developer',
    company_name: 'CDA Informatica',
    icon: microverse,
    date: 'Nov 2018 - Nov 2019',
    description:"I was assigned to the development of technological solutions for the client Banco Galicia, where I helped in the construction of internal workflow management tools for the processing of credit applications for large companies. After it went into production, I was in charge of its maintenance and incident management.",
    tech:"SOAP · Java · SQL · Hibernate · JavaServer Faces (JSF)"
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Colonia Suiza',
    icon: kelhel,
    date: 'Nov 2019 - Apr 2020',
    description:"Development and maintenance of clinic management system with billing to AFIP (Argentina's national revenue service), continuous improvement work.",
    tech:"REST APIs · JPA · Java · SQL · JavaScript · Struts 2"
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Baufest',
    icon: dcc,
    date: 'Apr 2020 - Apr 2021',
    description:"I was part of the development team assigned to the Warner Media client, where we worked on building new infrastructure solutions and in the iterative process of continuous improvement of existing software.",
    tech:"Gradle · Angular · Spring Integration · Spring Boot · REST APIs · Java"
  },
  {
    title: 'Innovation Lead',
    company_name: 'AssA Alimentos del Sur',
    icon: dcc,
    date: 'Feb 2022 - Oct 2022',
    description:"In charge of designing, building and implementing an internal inventory tracking system, with package traceability via Android mobile app.",
    tech:"Gradle · Android · DevOps · Automation · Java"
  },
  {
    title: 'Director',
    company_name: 'Buffer Project',
    icon: dcc,
    date: 'Aug 2018 - Feb 2023',
    description:"Non-profit initiative that functions as an incubator for IT professionals by creating a space for collaboration and learning. As director, I was responsible for the daily project management activities, such as the assembly and maintenance of the technological infrastructure and team management. In addition, I acted as a teacher if necessary.",
    tech:"Gradle · Web Design · React.js · REST APIs · Java · SQL"
  },
  {
    title: 'Senior Technical Consultant',
    company_name: 'Kin + Carta',
    icon: dcc,
    date: 'Mar 2023 - Present',
    description:"",
    tech:""
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'GESI.org.ar',
    description: 'Institutional website for GESI built with ReactJS.',
    image: komikult,
    repo: 'https://github.com/GermoAlt/sitio-gesi',
    demo: 'https://www.gesi.org.ar/',
  },
  {
    id: 'project-2',
    name: 'Lorena',
    description:
      'A discord bot built with Java/Kotlin that provides a \"hall of fame\" ' +
        'of messages that users store via emoji reactions. ' +
        'It also provides automatic/on demand unit conversions.',
    image: leaderboard,
    repo: 'https://github.com/Buffer-Project/Lorena',
  },
  {
    id: 'project-3',
    name: 'Barcode Scanner',
    description: 'Android native app that scans barcodes for warehouse inventory tracking.',
    image: math,
    repo: 'https://github.com/GermoAlt/BarcodeScanner',
  },
  {
    id: 'project-4',
    name: 'SQL Injection',
    description: `Educational site to demonstrate the mechanics of SQL injection built with ReactJS 
    and an in-memory SQLite database.`,
    image: movie,
    repo: 'https://github.com/GermoAlt/sql-injection-demo',
    demo: 'https://sql-spa-injection-demo-3b3a23d88bb2.herokuapp.com/',
  },
  {
    id: 'project-5',
    name: 'iRent',
    description:
      'Demo site for an e-commerce platform built with ReactJS',
    image: nyeusi,
    repo: 'https://github.com/GermoAlt/iRent_front',
    demo: 'https://i-rent-front.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
