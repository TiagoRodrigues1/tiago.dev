import {
  Home,
  Send,
  Github,
  Linkedin,
  WandSparkles,
  FileText,
  Bookmark,
} from "lucide-react";

import { Job, SidebarMenuItem, StackItem, YearLog } from "@/lib/types";

export const BAR_ITEMS: SidebarMenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "CV",
    url: "/cv",
    icon: FileText,
  },
  {
    title: "Journey",
    url: "/journey",
    icon: Send,
  },
  {
    title: "Stack",
    url: "/stack",
    icon: WandSparkles,
  },
  {
    title: "Bookmarks",
    url: "/bookmarks",
    icon: Bookmark,
  },
];

export const SOCIALS: SidebarMenuItem[] = [
  {
    title: "Github",
    url: "https://github.com/TiagoRodrigues1",
    icon: Github,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/josetiagorodrigues",
    icon: Linkedin,
  },
];

export const STACK_ITEMS: StackItem[] = [
  {
    title: "Tabby",
    url: "https://tabby.sh/",
    description:
      "Infinitely customizable cross-platform terminal app for local shells, serial, SSH and Telnet connections.",
  },
  {
    title: "Ulauncher",
    url: "https://ulauncher.io/",
    description: "Application launcher for Linux.",
  },
  {
    title: "Raycast",
    url: "https://www.raycast.com/",
    description:
      "Application laucher currenly only for macOS. Looking forward to use it on Windows.",
  },
  {
    title: "Cursor",
    url: "https://www.cursor.com/",
    description: "Been trying cursor for personal projects and it's so good!",
  },
  {
    title: "Notion",
    url: "https://www.notion.com/",
    description: "Everyone know this one! :)",
  },
  {
    title: "Warp",
    url: "https://www.warp.dev/",
    description: "Been using warp terminal, for now I'm enjoying it.",
  },
];

export const JOBS: Job[] = [
  {
    company: "Mobileum",
    startDate: "October 2021",
    endDate: undefined,
    role: "Fullstack Software Engineer @ Mobileum",
    achievments: [
      "Migrated legacy JavaScript modules from node 12 to node 20+ and upgraded Webpack to version 5, ensuring better performance and maintainability.",
      "Integrated the front-end team for 1 year where I contributed to a complete front-end overhaul using React, improving UI performance by 40%, reducing issues by 10%, and delivering a cleaner, more modern user experience.",
      "Implemented a key-value store feature for efficient data distribution across multiple instances while optimizing resource sharing.",
      "Designed a real-time event processing system using an H2 database for rapid storage, transformation, and analytics.",
      "Integrated Keycloak for OAuth2.0 and OpenID-based Single Sign-On across backend and frontend applications.",
      "Led the development of microservices for customer-facing documentation, improving search performance and user experience.",
      "Built and maintained CI/CD pipelines with Jenkins, automating documentation generation, unit testing, and product builds.",
      "Integrated AWS for deploying Docker images, streamlining cloud-based product delivery.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Javascript",
      "Typescript",
      "AWS",
      "Jenkins",
      "Docker",
      "PostgreSQL",
      "OracleDB",
      "MongoDB",
      "Kafka",
      "Git",
      "Hadoop",
    ],
  },
];

export const JOURNEY_ITEMS: YearLog[] = [
  {
    year: 2025,
    logs: [
      {
        title: "New UI for my portfolio",
        description: "Gave it a new minimalist look, using mainly shadcn",
      },
    ],
  },
  {
    year: 2024,
    logs: [
      {
        title: "Went to Budapeste",
        description: "Had lots of fun! 🇭🇺",
        image: {
          url: "https://u73kp26vd1.ufs.sh/f/3FmnM8A0jrV222BCx6voVw7hWFQzNXqevDfZ9BdiSjPkLxGY",
          width: 620,
          height: 620,
          title: "budapeste parlament",
        },
      },
      {
        title: "Visited Milan",
        description: "Frst time in Italy 🇮🇹",
        image: {
          url: "https://u73kp26vd1.ufs.sh/f/3FmnM8A0jrV20bjLXJNIVc5x6Ny4zmOG8jwbJMgHPaBfrQud",
          width: 620,
          height: 620,
          title: "Lago di como italy",
        },
      },
    ],
  },
  {
    year: 2021,
    logs: [
      {
        title: "Joined Mobieum",
        description: "First job after graduation, exited!",
        image: {
          url: "https://u73kp26vd1.ufs.sh/f/3FmnM8A0jrV2brx02EwSHZgLePu6E8dRQ3mFqD0wiY4vXGkO",
          width: 620,
          height: 620,
          title: "Mobileum logo",
        },
      },
      {
        title: "Graduates from University",
        description: "3 years after, its done! :)",
      },
    ],
  },
  {
    year: 2018,
    logs: [
      {
        title: "Started at Universidade Fernando Pessoa",
        description: "Feeling lucky to study Software Engineering",
      },
    ],
  },
];

export const SUMBIT_FORM_URL = "Website URL";
export const SUMBIT_FORM_EMAIL = "Email";
export const SUMBIT_FORM_TYPE = "Type";
export const SUBMIT_FORM_TILTE = "Submit a bookmark";
export const SUBMIT_FORM_DESCRIPTION =
  "Send a website, or something you like if I like it, I'll add it here. Please don't submit more than 5 a day.";

export const TWEETS_COLLECTION_ID: number = 53584229;
