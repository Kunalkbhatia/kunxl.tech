import javascript from "../../public/javascript (1).svg";
import typescript from "../../public/typescript.svg";
import cpp from "../../public/cpp-svgrepo-com.svg";
import go from "../../public/go-svgrepo-com.svg";
import docker from "../../public/docker.svg";
import aws from "../../public/aws.svg";
import github from "../../public/github-color-svgrepo-com.svg";
import react from "../../public/react.svg";
import express from "../../public/express.svg";
import nextjs from "../../public/nextjs-svgrepo-com.svg";
import mongodb from "../../public/mongodb.svg";
import redis from "../../public/redis.svg";
import postgres from "../../public/postgresql.svg";
import bash from "../../public/bash-icon-svgrepo-com.svg";
import git from "../../public/git.svg";
import electron from "../../public/electron-svgrepo-com.svg";
export interface Skill {
  skill: string;
  image: string;
  color: string;
}

export interface Work {
  company: string,
  role: string,
  description: string[],
  techStack: string[],
  location: string,
  fromTo: string,
}

export interface Project {
  name: string,
  description: string,
  techStack: string[],
  github?: string,
  liveURL?: string,
}

export const languages: Skill[] = [
  {
    skill: "Javascript",
    image: javascript,
    color: "#FF085E",
  },
  {
    skill: "Typescript",
    image: typescript,
    color: "#FF085E",
  },
  {
    skill: "C++",
    image: cpp,
    color: "#FF085E",
  },
  {
    skill: "Go",
    image: go,
    color: "#FF085E",
  },
];

export const devops: Skill[] = [
  {
    skill: "Docker",
    image: docker,
    color: "#0CDCF7",
  },
  {
    skill: "AWS",
    image: aws,
    color: "#0CDCF7",
  },
  {
    skill: "Github",
    image: github,
    color: "#0CDCF7",
  },
];

export const frameworks: Skill[] = [
  {
    skill: "React",
    image: react,
    color: "#CAA6F7",
  },
  {
    skill: "NextJs",
    image: nextjs,
    color: "#CAA6F7",
  },
  {
    skill: "Electron",
    image: electron,
    color: "#CAA6F7",
  },
  {
    skill: "Express",
    image: express,
    color: "#CAA6F7",
  },
];

export const database: Skill[] = [
  {
    skill: "MongoDB",
    image: mongodb,
    color: "#BBF7D0",
  },
  {
    skill: "Postgres",
    image: postgres,
    color: "#BBF7D0",
  },
  {
    skill: "Redis",
    image: redis,
    color: "#BBF7D0",
  },
];

export const versionControl: Skill[] = [
  {
    skill: "Bash",
    image: bash,
    color: "#6ee7b7",
  },
  {
    skill: "Git",
    image: git,
    color: "#6ee7b7",
  },
];

export const work: Work[] = [
  {
    company: "Manufac Analytics",
    role: "Software Developer Engineer",
    description: [
      "Collaboratively developed Boutique, a custom data visualization library using Apache ECharts with React, facilitating seamless chart integration to provide real-time insights across finance, healthcare, and business intelligence for our team.",
      "Developed advanced annotation functionality in a collaborative document project called Annotation, similar to Google Docs, with features such as nested annotations.",
      "Led the development of a product from scratch aimed at assisting Software Architects and Cybersecurity experts in identifying and resolving potential application threats and vulnerabilities.",
      "Automated the code-signing process for Electron apps on Linux using DSA and RSA algorithms, reducing manual effort by 50%"
    ],
    techStack: ["React" , "TypeScript", "NodeJS", "Express", "Shell", "PostgreSQl", "Prisma", "Mantine UI"],
    location: "Gurgaon, India",
    fromTo: "May 2024 - Present",
  },
  {
    company: "Frame.io | Freelance",
    role: "Full Stack Developer",
    description: [
      "Developed a screen recorder application for macOS, named Frame.io, within 2 months, featuring a custom mouse simulation over the video recording.",
      "Implemented a binary search algorithm to achieve 90% precision in mouse simulation, enhancing the accuracy of mouse pointer tracking in recorded videos.",
      "Eliminated 100% manual updates in electron based macOs Full Stack app by electron github publish."
    ],
    techStack: ["React" , "TypeScript", "NodeJS", "ElectronJS", "RecordKit"],
    location: "Remote, India",
    fromTo: "March 2024 - April 2024",
  },
  {
    company: "XpressBites",
    role: "Software Engineer Intern",
    description: [
      "Developed a full stack application using React, Express.js, and MongoDB.",
      "Implemented a RESTful API for the application.",
      "Utilized AWS S3 to store and serve images for the application."
    ],
    techStack: ["React" , "TypeScript", "Express.js", "MongoDB", "AWS"],
    location: "Remote, India",
    fromTo: "March 2024 - April 2024",
  }
]

export const projects: Project[] = [
  {
    name: "Hook Master",
    description: "A fully featured React custom hook library",
    techStack: ["React.js", "Next.js", "Typescript", "Tailwind", "Nextra"],
    github: "https://github.com/Kunalkbhatia/HookMaster",
    liveURL: "https://www.hook-master.xyz/"
  },
  {
    name: "Short Me",
    description: "URL shortening amplified, where insights meet impact",
    techStack: ["React.js", "Next.js", "NextAuth", "Typescript", "Tailwind"],
    github: "https://github.com/Kunalkbhatia/shortMe",
    liveURL: "https://www.shortme.fun/"
  },
  {
    name: "kunxl.tech",
    description: "A portfolio handcrafter by me in 7hours.",
    techStack: ["NextJs", "Shadcn", "Framer-motion", "Websockets"],
    liveURL: "https://www.kunxl.tech/",
    github: "https://www.kunxl.tech/",
  },
  {
    name: "Quick Intern",
    description: "Automate the process of apply internship at Internshala",
    techStack: ["Javascript", "Node.js", "Puppeteer.js"],
    github: "https://github.com/Kunalkbhatia/QuickIntern",
  },
]