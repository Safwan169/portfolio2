// import {
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   loom,
//   proshop,
//   forkify,
//   threejs,
//   adam,
//   ian,
//   laura,
//   matrix,
// } from "../assets";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
//   {
//     id: "resume",
//     icon: true,
//     title: "Resume",
//   },
// ];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "Web Designer",
//     icon: creator,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
// ];

// const experiences = [
//   {
//     title: "Front-end Developer Internee",
//     company_name: "Matrix Systems Pvt. Ltd.",
//     icon: matrix,
//     iconBg: "#E6DEDD",
//     date: "Nav 2023 - Mar 2024",
//     points: [
//       "Developed proficiency in Angular.",
//       "Implemented front-end features for an investment bank, namely UBS (Union Bank of Switzerland)",
//       "Utilized unit testing framework jasmine and test runner karma to maximize the project's code coverage",
//       "Showcased excellent communication and collaboration abilities by working effectively within the team",
//       "Demonstrated strong problem-solving skills by overcoming many technical challenges",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Adam Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: adam,
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Ian Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: ian,
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Laura Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: laura,
//   },
// ];

const projects = [
  {
    name: "Loom",
    description:
      "A zoom clone that allows user to create instant meetings, schedule meeting, have personal meeting rooms and record their meetings to view later.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "stream",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: '/quickbite.png',
    project_link: "https://loom-safwan.vercel.app/",
    source_code_link: "https://github.com/safwan6395/loom/",
  },

  {
    name: "Forkify",
    description:
      "Forkify is a comprehensive recipe web app, offering users a full suite of features to search, view, modify, bookmark, and even add recipes to their personal collection.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: '/quickbite.png',
    project_link: "https://forkify-webapp-v1.netlify.app/",
    source_code_link: "https://github.com/safwan6395/forkify/",
  },
  {
    name: "Proshop",
    description:
      "An E-commerce web application that allows user to browse and purchase the latest gadgets and accessories with ease. It also contains all the necessary admin features",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: '/quickbite.png',
    source_code_link: "https://github.com/safwan6395/proshop/",
  },
];

export {  projects };
