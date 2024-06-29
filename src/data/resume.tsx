import { Icons } from "@/components/icons";

export const DATA = {
  name: "Amanam Israel",
  initials: "AI",
  url: "https://github.com/amanamisrael",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/lagos",
  description: "Frontend Engineer. I love building things that make life easy.",
  summary:
    "I am a Tech/Productivity enthusiast with a passion for programming and UI Design. I excel at developing efficient workflows, optimizing code for faster load times, and solving complex problems. I stay current with industry trends to ensure top-notch code quality. Currently, I build client-side payment solutions at Apex Network, using Javascript/Typescript, Nodejs, Express, VueJs, Nextjs, React, Angular, Docker, Tailwind, and Vite.",
  avatarUrl: "/me.jpg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Vue.js", "Express"],
  contact: {
    email: "amanamisrael@gmail.com",
    tel: "+2349078957519",
    social: {
      GitHub: {
        url: "https://github.com/amanamisrael",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/amanamisrael/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/amanamisrael",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Apex Network",
      href: "https://apexnetwork.co",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/apexn.png",
      start: "September 2022",
      end: "Present",
      description:
        "I developed client and admin platforms for Apex Network using Vue3, Typescript, and Laravel Blade with Alpine.js, collaborated with a team of frontend engineers to create payment solutions featuring Crypto Swap, fiat and crypto deposits and withdrawals, and local tariff payments, and implemented a client admin console for managing transactions, gift card purchases and sales, payment reversals and settlements, user flagging, and fiat/crypto asset management.",
    },
    {
      company: "Sport Page",
      badges: [],
      href: "https://sportpage.app",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "",
      start: "May 2023",
      end: "Nov 2023",
      description:
        "I built client application for Sportpage using Next.js and Typescript, designed APIs and database models for user and post-recommendation services using Express and MongoDB, unit tested API services for reliability using Chai and Frontend testing with RTL, and improved database read and write operations for game scheduling services.",
    },
    {
      company: "Venture Garden Group",
      href: "https://venturegardengroup.com",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Frontend Engineer",
      logoUrl: "/vgg.png",
      start: "July 2021",
      end: "Sept 2023",
      description:
        "I built client and admin platforms for BaseOne using React, Javascript, Next.js, and Typescript, and collaborated on payment solutions for fintech agencies with features like virtual accounts and scheduled payouts. I developed Vue and React widgets for one-click payouts and KYC verifications, gained experience with micro-frontends and mono-repos, and implemented unit and automated testing with up to 60% coverage. Additionally, I worked on UI design systems, component libraries, and widgets using React and Typescript",
    },
  ],
  education: [
    {
      school: "University of Uyo",
      href: "https://uniuyo.edu.ng",
      degree: "Bachelor's Degree of Engineering (B.ENG)",
      logoUrl: "/uniuyo.jpeg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
