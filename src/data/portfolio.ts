export const personalInfo = {
  name: "BAHRAOUI Yassir",
  title: "Future Software Engineer | Full Stack & Web3 Developer",
  tagline: "Passionate about technology, algorithms, and building innovative solutions",
  bio: "Currently a 1st-year engineering student at ENSIASD Taroudant, passionate about software development, algorithms, and problem-solving. I specialize in Web3 development, full-stack applications, and mobile development with a keen interest in blockchain technology and modern web frameworks.",
  email: "bahraoui.yassir@gmail.com",
  phone: "+212 687 688 524",
  location: "Taroudant, Morocco",
  resumeUrl: "/resume.pdf", // You can add this later
  social: {
    github: "https://github.com/yassir",
    linkedin: "https://linkedin.com/in/yassir-bahraoui",
    twitter: "https://twitter.com/yassir",
  }
};

export const education = [
  {
    degree: "Engineering Cycle",
    school: "École Nationale Supérieure de l'Intelligence Artificielle et Sciences des Données (ENSIASD)",
    location: "Taroudant, Morocco",
    period: "2024 - Present",
    description: "Specializing in Software Engineering with focus on AI and Data Sciences",
    status: "current"
  },
  {
    degree: "University Diploma in Technology",
    school: "École Supérieure de Technologie (EST), Khouribga",
    location: "Khouribga, Morocco", 
    period: "2022 - 2024",
    description: "Software Engineering specialization with focus on web and mobile development",
    status: "completed"
  },
  {
    degree: "Baccalaureate",
    school: "Lycée Omar Ousama, Ouad Zem",
    location: "Ouad Zem, Morocco",
    period: "2021 - 2022",
    description: "Physics Sciences specialization",
    status: "completed"
  }
];

export const skills = {
  "Web3 & Blockchain": [
    { name: "Solidity", level: 85, icon: "⛓️" },
    { name: "Hardhat", level: 80, icon: "🔨" },
    { name: "Ethers.js", level: 75, icon: "🌐" },
    { name: "Smart Contracts", level: 80, icon: "📜" }
  ],
  "Frontend Development": [
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "JavaScript/TypeScript", level: 90, icon: "⚡" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "TailwindCSS", level: 90, icon: "🎯" },
    { name: "Bootstrap", level: 85, icon: "🅱️" }
  ],
  "Backend Development": [
    { name: "PHP Laravel", level: 80, icon: "🐘" },
    { name: "REST APIs", level: 85, icon: "🔌" },
    { name: "Node.js", level: 75, icon: "🟢" }
  ],
  "Mobile Development": [
    { name: "Flutter", level: 75, icon: "📱" },
    { name: "Dart", level: 75, icon: "🎯" }
  ],
  "Databases": [
    { name: "MySQL", level: 85, icon: "🗄️" },
    { name: "PostgreSQL", level: 80, icon: "🐘" },
    { name: "Oracle Database", level: 70, icon: "🔶" },
    { name: "Firebase", level: 75, icon: "🔥" }
  ],
  "DevOps & Tools": [
    { name: "Git/GitHub", level: 90, icon: "🐙" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "Linux", level: 75, icon: "🐧" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Green Step Web Application",
    description: "Interactive web application for The Green Step Association, focused on environmental protection with location-based features and Google Maps API integration.",
    image: "/project-images/green-step.jpg",
    technologies: ["React.js", "Bootstrap", "PHP", "CSS3", "Google Maps API"],
    github: "https://github.com/yassir/green-step",
    demo: "https://green-step-demo.com",
    category: "Web Application",
    status: "completed"
  },
  {
    id: 2,
    title: "Real-time Chat Application", 
    description: "Full-stack chat application with secure authentication using Bcrypt, real-time messaging with Server-Sent Events (SSE), and PostgreSQL database.",
    image: "/project-images/chat-app.jpg",
    technologies: ["JavaScript", "PHP", "Bcrypt", "SSE", "PostgreSQL"],
    github: "https://github.com/yassir/chat-app",
    demo: "https://chat-app-demo.com",
    category: "Web Application",
    status: "completed"
  },
  {
    id: 3,
    title: "Rapid Delivery Mobile App",
    description: "Cross-platform delivery application built with Flutter and Firebase, featuring real-time tracking, secure authentication, and interactive user interface.",
    image: "/project-images/rapid-delivery.jpg",
    technologies: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/yassir/rapid-delivery",
    demo: "https://rapid-delivery-demo.com",
    category: "Mobile Application",
    status: "completed"
  },
  {
    id: 4,
    title: "Busify - Bus Booking System",
    description: "Bus reservation platform with comprehensive booking management, secure user authentication, and intuitive dashboard interface.",
    image: "/project-images/busify.jpg", 
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/yassir/busify",
    demo: "https://busify-demo.com",
    category: "Web Application", 
    status: "completed"
  },
  {
    id: 5,
    title: "Forum Web Application",
    description: "Community forum platform with user authentication, post management, and interactive discussion features.",
    image: "/project-images/forum.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/yassir/forum-app",
    demo: "https://forum-demo.com", 
    category: "Web Application",
    status: "completed"
  },
  {
    id: 6,
    title: "Web3 DeFi Platform",
    description: "Decentralized finance platform with smart contracts, token staking, and yield farming capabilities. Built with modern Web3 technologies.",
    image: "/project-images/web3-defi.jpg",
    technologies: ["Solidity", "Hardhat", "Ethers.js", "React", "TypeScript"],
    github: "https://github.com/yassir/web3-defi",
    demo: "https://web3-defi-demo.com",
    category: "Blockchain",
    status: "coming-soon"
  }
];

export const experiences = [
  {
    id: 1,
    title: "Assistant Developer",
    company: "1337 Coding School, Khouribga",
    location: "Khouribga, Morocco",
    period: "Apr 2024 - Jun 2024",
    duration: "2 months",
    type: "internship",
    description: "Worked on mobile application development using Flutter with secure authentication, QR codes, Google Maps API integration, and interactive interfaces.",
    technologies: ["Flutter", "Google Maps API", "QR Codes", "Firebase"],
    achievements: [
      "Developed mobile application with Flutter framework",
      "Implemented secure user authentication systems", 
      "Integrated Google Maps API for location services",
      "Created interactive user interfaces"
    ]
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "1337 Coding School, Khouribga", 
    location: "Khouribga, Morocco",
    period: "Mar 2023",
    duration: "1 month",
    type: "internship",
    description: "Developed a forum web application using JavaScript, HTML, CSS, and React.js, focusing on creating an interactive and responsive user interface.",
    technologies: ["JavaScript", "HTML", "CSS", "React.js"],
    achievements: [
      "Built responsive forum web application",
      "Implemented interactive user interfaces", 
      "Enhanced skills in modern web development",
      "Collaborated with development team"
    ]
  }
];