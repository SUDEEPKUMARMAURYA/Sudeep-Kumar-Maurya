import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible and modern user interfaces.",
    icon: Code2,

    skills: [
      {
        name: "HTML5",
        level: "Advanced",
      },
      {
        name: "CSS3",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Advanced",
      },
      {
        name: "React.js",
        level: "Advanced",
      },
      {
        name: "Next.js",
        level: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
      },
      {
        name: "Redux",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Creating reliable APIs and scalable server-side applications.",
    icon: Server,

    skills: [
      {
        name: "Node.js",
        level: "Intermediate",
      },
      {
        name: "Express.js",
        level: "Intermediate",
      },
      {
        name: "REST API",
        level: "Advanced",
      },
      {
        name: "WebSocket",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Database",
    description:
      "Working with structured and NoSQL databases for application data.",
    icon: Database,

    skills: [
      {
        name: "MongoDB",
        level: "Intermediate",
      },
      {
        name: "MySQL",
        level: "Intermediate",
      },
      {
        name: "SQL",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Using modern tools to build, manage and deploy applications.",
    icon: Wrench,

    skills: [
      {
        name: "Git",
        level: "Advanced",
      },
      {
        name: "GitHub",
        level: "Advanced",
      },
      {
        name: "Postman",
        level: "Advanced",
      },
      {
        name: "VS Code",
        level: "Advanced",
      },
      {
        name: "Figma",
        level: "Intermediate",
      },
      {
        name: "CI/CD",
        level: "Intermediate",
      },
    ],
  },
];