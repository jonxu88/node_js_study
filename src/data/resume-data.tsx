import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jon Xu",
  initials: "JX",
  location: "Sendai, Japan",
  locationLink: "https://www.google.com/maps/place/Sendai",
  about:
    "AI Engineer, Mathematician",
  summary:
    "Started as an academic mathematician, transitioned into the tech industry, now working as an AI engineer. My goal is to leverage my mathematics and AI expertise to create useful and user-friendly products. I have worked on all aspects of the machine learning pipeline, from initial testing and proof of concept development to deployment and staging.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  avatarUrl: "https://github.com/jonxu88/jonxu88.github.io/blob/master/pic.jpeg?raw=true",
  personalWebsiteUrl: "https://jonxu88.github.io/",
  contact: {
    email: "jonxu88@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jonxu88",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/jon-xu-248059174",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Melbourne",
      degree: "PhD (Mathematics). My PhD thesis was in representation theory, an area of pure mathematics.",
      start: "2012",
      end: "2018",
    },
    {
      school: "University of Sydney",
      degree: "Bachelor of Science (Advanced Mathematics). Graduated with First Class Honours. Developed a strong foundation of clear thinking based on mathematics and science.",
      start: "2007",
      end: "2012",
    },
  ],
  work: [
    {
      company: "AI inside 株式会社",
      link: "https://inside.ai/en/",
      badges: ["Remote"],
      title: "Artificial Intelligence Engineer",
      start: "2021",
      end: "ongoing",
      description:
        `Worked as an AI engineer in a team of five. \n \n Wrote OCR postprocessing code improving accuracy from ~75% to >99%. \
        \n Developed inference and deployment pipelines using Triton Inference Server. Load tested with Locust, making adjustments to match specifications. Implementation of YOLOv7 into Kubeflow, providing useful performance/results tracking for the team, as well as significantly improving over previous best results on small object detection. \
        Development of an object tracking application based on drone footage and flight records for a construction company: responsibilities included experiment management, development tasks, feedback, requests and communication with the client (in Japanese).  \
        Development of novel ML-based workflows in Temporal incorporating the ChatGPT OpenAI API. \
        Development of Retrieval Augmented Generation using LlamaIndex, enabling 'smart' queries to be performed on company documents. `,
    },
    {
      company: "Tohoku University",
      link: "https://www.is.tohoku.ac.jp/en/",
      badges: [],
      title: "JSPS Postdoctoral Fellow (日本学術振興会外国人特別研究員)",
      start: "2019",
      end: "2021",
      description:
        "Postdoctoral research in algebraic combinatorics, representation theory and graph theory.",
    },
    {
      company: "University of Melbourne",
      link: "https://ms.unimelb.edu.au/",
      badges: [],
      title: "Tutor",
      start: "2013",
      end: "2019",
      description:
        "I was a tutor for many mathematics courses ranging from first year differential calculus to final year abstract algebra. This experience taught me how to speak in front of audiences, and how to communicate highly technical concepts in a simple and clear manner.",
    },
  ],
  skills: [
    "Python",
    "Machine Learning",
    "PyTorch",
    "Keras",
    "Kubeflow", "Tritonserver", "Locust",
    "OpenCV",
    "FastAPI",
    "LlamaIndex",
    "NumPy",
    "Pandas",
    "Git",
    "DVC",
    "Kubernetes",
    "Docker", "Kubeflow",
    "SQL", "MongoDB", "Weaviate",
    "Temporal", "AWS"
  ],
  projects: [
  ],
} as const;
