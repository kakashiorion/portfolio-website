import finalWhistleLogo from "./assets/finalWhistle.png";
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
    videoUrl: "",
    githubUrl: "https://github.com/kakashiorion/final-whistle",
    demoUrl: "",
    gallery: ["", "", ""],
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
    videoUrl: "",
    githubUrl: "https://github.com/kakashiorion/odin-communitas",
    demoUrl: "",
    gallery: [],
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
    videoUrl: "../assets/PasswordManagerApp_Web.mp4",
    githubUrl: "https://github.com/kakashiorion/rn-password-manager",
    apkUrl: "",
    gallery: [],
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
    videoUrl: "",
    githubUrl: "https://github.com/kakashiorion/Expense-Tracker-App",
    apkUrl: "",
    gallery: [],
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
    videoUrl: "",
    githubUrl: "https://github.com/kakashiorion/GardeningApp",
    apkUrl: "",
    gallery: [],
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
  {
    index: 5,
    link: "dealbari",
    name: "Dealbari",
    isMobile: false,
    desc: "A crowdfunding platform for connecting startups and investors built with RedwoodJS",
    appLogoUrl: dealbariLogo.src,
    videoUrl: "",
    githubUrl: "https://github.com/kakashiorion/crowdfunding-app  ",
    demoUrl: "",
    gallery: [],
    tools: [
      {
        name: "RedwoodJS",
        logo: redwoodJS.src,
      },
      {
        name: "TailwindCSS",
        logo: tailwind.src,
      },
      {
        name: "GraphQL",
        logo: graphql.src,
      },
      {
        name: "Prisma",
        logo: prisma.src,
      },
      {
        name: "Supabase",
        logo: supabase.src,
      },
    ],
  },
];
export default projects;
