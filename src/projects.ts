import finalWhistleLogo from "./assets/finalWhistle.svg";
import communitasLogo from "./assets/communitas.svg";
import passwordManagerLogo from "./assets/passwordManager.svg";
import expenseTrackerLogo from "./assets/expenseTracker.svg";
import gardenJournalLogo from "./assets/gardenJournal.svg";
import dealbariLogo from "./assets/dealbari.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import graphql from "./assets/graphql.svg";
import prisma from "./assets/prisma.svg";
import postgreSQL from "./assets/postgreSQL.svg";
import nodeJS from "./assets/nodeJS.svg";
import nextJS from "./assets/nextJS.svg";
import mongoDB from "./assets/mongoDB.svg";
import flutter from "./assets/flutter.svg";
import firebase from "./assets/firebase.svg";
import sqlite from "./assets/sqlite.svg";
import expo from "./assets/expo.svg";
import redwoodJS from "./assets/redwoodJS.svg";
import supabase from "./assets/supabase.svg";
import fw0 from "./assets/finalWhistle/bg.png";
import fw1 from "./assets/finalWhistle/1.png";
import fw2 from "./assets/finalWhistle/2.png";
import fw3 from "./assets/finalWhistle/3.png";
import fw4 from "./assets/finalWhistle/4.png";
import fw5 from "./assets/finalWhistle/5.png";
import fw6 from "./assets/finalWhistle/6.png";
import fw7 from "./assets/finalWhistle/7.png";
import fw8 from "./assets/finalWhistle/8.png";
import fw9 from "./assets/finalWhistle/9.png";
import fw10 from "./assets/finalWhistle/10.png";
import fw11 from "./assets/finalWhistle/11.png";
import fw12 from "./assets/finalWhistle/12.png";
import fw13 from "./assets/finalWhistle/13.png";
import fw14 from "./assets/finalWhistle/14.png";
import fw15 from "./assets/finalWhistle/15.png";
import fw16 from "./assets/finalWhistle/16.png";
import fw17 from "./assets/finalWhistle/17.png";
import co0 from "./assets/communitas/bg.png";
import co1 from "./assets/communitas/1.png";
import co2 from "./assets/communitas/2.png";
import co3 from "./assets/communitas/3.png";
import co4 from "./assets/communitas/4.png";
import co5 from "./assets/communitas/5.png";
import co6 from "./assets/communitas/6.png";
import co7 from "./assets/communitas/7.png";
import co8 from "./assets/communitas/8.png";
import co9 from "./assets/communitas/9.png";
import et0 from "./assets/expenseTracker/bg.png";
import et1 from "./assets/expenseTracker/1.png";
import et2 from "./assets/expenseTracker/2.png";
import et3 from "./assets/expenseTracker/3.png";
import et4 from "./assets/expenseTracker/4.png";
import et5 from "./assets/expenseTracker/5.png";
import et6 from "./assets/expenseTracker/6.png";
import et7 from "./assets/expenseTracker/7.png";
import et8 from "./assets/expenseTracker/8.png";
import et9 from "./assets/expenseTracker/9.png";
import et10 from "./assets/expenseTracker/10.png";
import et11 from "./assets/expenseTracker/11.png";
import pm0 from "./assets/passwordManager/bg.png";
import pm1 from "./assets/passwordManager/1.png";
import pm2 from "./assets/passwordManager/2.png";
import pm3 from "./assets/passwordManager/3.png";
import pm4 from "./assets/passwordManager/4.png";
import pm5 from "./assets/passwordManager/5.png";
import pm6 from "./assets/passwordManager/6.png";
import pm7 from "./assets/passwordManager/7.png";
import pm8 from "./assets/passwordManager/8.png";
import pm9 from "./assets/passwordManager/9.png";
import gj0 from "./assets/gardenJournal/bg.png";
import gj1 from "./assets/gardenJournal/1.png";
import gj2 from "./assets/gardenJournal/2.png";
import gj3 from "./assets/gardenJournal/3.png";
import gj4 from "./assets/gardenJournal/4.png";
import gj5 from "./assets/gardenJournal/5.png";

export interface ProjectType {
  index: number;
  link: string;
  name: string;
  isMobile: boolean;
  desc: string;
  appLogoUrl: string;
  videoUrl: string;
  githubUrl: string;
  demoUrl?: string;
  apkUrl?: string;
  gallery: string[];
  tools: {
    name: string;
    logo: string;
  }[];
}

const projects: ProjectType[] = [
  {
    index: 0,
    link: "final-whistle",
    name: "Final Whistle",
    isMobile: false,
    desc: "A fantasy football score prediction game built as a full stack web app in React",
    appLogoUrl: finalWhistleLogo.src,
    videoUrl: "https://youtu.be/xynhDVU4TWc",
    githubUrl: "https://github.com/kakashiorion/final-whistle",
    demoUrl: "https://final-whistle.netlify.app",
    gallery: [fw0.src,fw1.src, fw2.src, fw3.src,fw4.src, fw5.src, fw6.src,fw7.src, fw8.src, fw9.src,fw10.src, fw11.src, fw12.src,fw13.src, fw14.src, fw15.src,fw16.src, fw17.src,],
    tools: [
      { name: "ReactJS", logo: react.src },
      { name: "TailwindCSS", logo: tailwind.src },
      { name: "GraphQL", logo: graphql.src },
      { name: "Prisma", logo: prisma.src },
      { name: "PostgreSQL", logo: postgreSQL.src },
    ],
  },
  {
    index: 1,
    link: "communitas",
    name: "Communitas",
    isMobile: false,
    desc: "A content discussion social media web platform (lightweight Reddit) built with NextJS",
    appLogoUrl: communitasLogo.src,
    videoUrl: "https://youtu.be/y1Y0xsq8UYI",
    githubUrl: "https://github.com/kakashiorion/odin-communitas",
    demoUrl: "https://odin-communitas.vercel.app",
    gallery: [co0.src,co1.src, co2.src, co3.src, co4.src, co5.src, co6.src,co7.src,co8.src,co9.src],
    tools: [
      {
        name: "NextJS",
        logo: nextJS.src,
      },
      {
        name: "TailwindCSS",
        logo: tailwind.src,
      },
      {
        name: "NodeJS",
        logo: nodeJS.src,
      },
      {
        name: "MongoDB",
        logo: mongoDB.src,
      },
    ],
  },
  {
    index: 2,
    link: "password-manager",
    name: "Password Manager",
    isMobile: true,
    desc: "A react native mobile app for storing personal data like passwords",
    appLogoUrl: passwordManagerLogo.src,
    videoUrl: "https://youtu.be/xxEnGn4n3C0",
    githubUrl: "https://github.com/kakashiorion/rn-password-manager",
    apkUrl: "https://drive.google.com/drive/u/0/folders/12uW0gg5RJ7wN5qANwHVXylk0Tf3_hb9s",
    gallery: [pm0.src,pm1.src, pm2.src, pm3.src, pm4.src, pm5.src, pm6.src, pm7.src, pm8.src, pm9.src],
    tools: [
      {
        name: "ReactJS",
        logo: react.src,
      },
      {
        name: "Firebase",
        logo: firebase.src,
      },
      {
        name: "Expo",
        logo: expo.src,
      },
    ],
  },
  {
    index: 3,
    link: "expense-tracker",
    name: "Expense Tracker",
    isMobile: true,
    desc: "A personal financial transactions tracking mobile app built with Flutter",
    appLogoUrl: expenseTrackerLogo.src,
    videoUrl: "https://youtu.be/gGJ1nV5cT9k",
    githubUrl: "https://github.com/kakashiorion/Expense-Tracker-App",
    apkUrl: "https://drive.google.com/drive/u/0/folders/1atgBxQzbCdNSRrds6noeQ2sbJyVG8857",
    gallery: [et0.src,et1.src, et2.src, et3.src, et4.src, et5.src, et6.src, et7.src,et8.src, et9.src, et10.src, et11.src],
    tools: [
      {
        name: "Flutter",
        logo: flutter.src,
      },
      {
        name: "Firebase",
        logo: firebase.src,
      },
    ],
  },
  {
    index: 4,
    link: "garden-journal",
    name: "Garden Journal",
    isMobile: true,
    desc: "A Flutter based mobile app to track watering of plants in a garden",
    appLogoUrl: gardenJournalLogo.src,
    videoUrl: "https://youtu.be/Iz1T-oVCJUw",
    githubUrl: "https://github.com/kakashiorion/GardeningApp",
    apkUrl: "https://drive.google.com/drive/u/0/folders/1yYDZ78-WmEkyI0ddRYSN7iv3jfDvMC-P",
    gallery: [gj0.src, gj1.src, gj2.src, gj3.src, gj4.src,gj5.src],
    tools: [
      {
        name: "Flutter",
        logo: flutter.src,
      },
      {
        name: "SQLite",
        logo: sqlite.src,
      },
    ],
  },
  // {
  //   index: 5,
  //   link: "dealbari",
  //   name: "Dealbari",
  //   isMobile: false,
  //   desc: "A crowdfunding platform for connecting startups and investors built with RedwoodJS",
  //   appLogoUrl: dealbariLogo.src,
  //   videoUrl: "",
  //   githubUrl: "https://github.com/kakashiorion/crowdfunding-app  ",
  //   demoUrl: "",
  //   gallery: [],
  //   tools: [
  //     {
  //       name: "RedwoodJS",
  //       logo: redwoodJS.src,
  //     },
  //     {
  //       name: "TailwindCSS",
  //       logo: tailwind.src,
  //     },
  //     {
  //       name: "GraphQL",
  //       logo: graphql.src,
  //     },
  //     {
  //       name: "Prisma",
  //       logo: prisma.src,
  //     },
  //     {
  //       name: "Supabase",
  //       logo: supabase.src,
  //     },
  //   ],
  // },
];
export default projects;
