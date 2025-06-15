import {
  FaRegCalendarAlt,
  FaCloudDownloadAlt,
  FaBookOpen,
  FaHeadphonesAlt,
} from "react-icons/fa";

export const SLIDES = [
  {
    title: "Explore a Universe of Knowledge",
    description:
      "Dive into our vast catalog of courses, from cutting-edge tech to creative arts. Your next learning adventure starts here.",
    img: "https://i.ibb.co/CsYQRQXq/explore.jpg",
    buttonText: "Browse Courses",
    buttonLink: "/courses",
  },
  {
    title: "Enroll with a Single Click",
    description:
      "Seamlessly enroll in courses, track your progress, and access expert-led content. Learning has never been this easy.",
    img: "https://i.ibb.co/YFCVtkch/oneClick.jpg",
    buttonText: "Start Learning",
    buttonLink: "/dashboard",
  },
  {
    title: "Your Path to Growth and Mastery",
    description:
      "Unlock new skills, earn certifications, and advance your career. Learnosphere empowers you to achieve your potential.",
    img: "https://i.ibb.co/RpsVkLN3/grow.jpg",
    buttonText: "View Success Stories",
    buttonLink: "/success-stories",
  },
];

export const FEATURES = [
  {
    title: "Flexible classes",
    description: "You pick schedule.",
    icon: FaRegCalendarAlt,
  },
  {
    title: "Offline mode",
    description: "Download classes.",
    icon: FaCloudDownloadAlt,
  },
  {
    title: "10k online courses",
    description: "Explore a fresh topics.",
    icon: FaBookOpen,
  },
  {
    title: "Educator help",
    description: "Always get answers.",
    icon: FaHeadphonesAlt,
  },
];

export const FAQs = [
  {
    question: "What is this Course Management System?",
    answer:
      "This is an online platform designed to help you discover and enroll in various courses. You can browse through available courses, easily enroll with a single click, and keep track of all the courses you've joined, all within a secure environment.",
  },
  {
    question: "How do I get started and enroll in a course?",
    answer:
      "First, you'll need to log in to your account. Once logged in, you can browse the list of available courses. When you find a course you like, simply click the \"Enroll\" button, and you'll be registered for that course instantly.",
  },
  {
    question: "Is my personal information and enrollment data secure?",
    answer:
      "Absolutely. We use <strong>JWT (JSON Web Token) authentication</strong> to secure your sessions. All your interactions, including Browse and enrollment, are protected via secure API calls, ensuring your data remains private and safe.",
  },
  {
    question: "Can I see all the courses I've enrolled in?",
    answer:
      "Yes! After logging in, you'll have access to a dedicated section where you can view a comprehensive list of all the courses you've successfully enrolled in.",
  },
  {
    question: "What if I forget my password or have trouble logging in?",
    answer:
      'While the system is designed for secure access, in a real-world application, there would be a "Forgot Password" or account recovery option. For this project, assume standard login procedures. If you encounter issues, please double-check your credentials.',
  },
  {
    question: "Are there any prerequisites for enrolling in courses?",
    answer:
      "Course prerequisites depend on the individual course content. While the system allows you to enroll directly, always check the course description for any recommended knowledge or skills needed to get the most out of the material.",
  },
];
