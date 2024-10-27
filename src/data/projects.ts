interface Project {
  title: string;
  description: string;
  technologies: string[];
  slug: string;
  imageUrl: string;
  features: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Travel Agency Website",
    description: "A modern, responsive travel agency website showcasing destinations and services with an elegant user interface and seamless booking experience.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Framer Motion"],
    slug: "travel-agency",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
    features: [
      "Responsive design for all devices",
      "Interactive destination showcase",
      "Real-time booking system",
      "Dynamic content management",
      "Integrated payment gateway",
      "Customer reviews system"
    ],
    githubUrl: "https://github.com/Pasachiya/travel-agency"
  },
  {
    title: "AR Sales Assistant",
    description: "An innovative augmented reality assistant that uses voice commands and AR animations to provide interactive sales support.",
    technologies: ["Unity", "Flask", "Azure", "Docker", "Kubernetes"],
    slug: "ar-sales-assistant",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
    features: [
      "Voice command interaction",
      "Real-time AR responses",
      "Cloud infrastructure on AKS",
      "Containerized microservices",
      "Custom API integration"
    ],
    githubUrl: "https://github.com/SAIMA-Team/AR-Sale-Assistant"
  },
  {
    title: "MY-Notes",
    description: "A MEAN stack web application for managing personal notes with tagging and search functionality.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    slug: "my-notes",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070",
    features: [
      "CRUD operations for notes",
      "Tagging system",
      "Search functionality",
      "User authentication"
    ],
    githubUrl: "https://github.com/Pasachiya/MY-Notes"
  },
  {
    title: "EduShare",
    description: "Educational material sharing platform for university students with comprehensive resource management.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    slug: "edushare",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
    features: [
      "User authentication",
      "Resource management",
      "Search functionality",
      "Download system"
    ],
    githubUrl: "https://github.com/Pasachiya/EduShare"
  },
  {
    title: "Multi-Service Conversion",
    description: "A microservices-based platform for document conversion and OCR processing with extensive format support.",
    technologies: ["React", "Flask", "Docker", "PostgreSQL"],
    slug: "conversion-service",
    imageUrl: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=2070",
    features: [
      "Multi-format support",
      "OCR functionality",
      "Batch processing",
      "Microservices architecture"
    ],
    githubUrl: "https://github.com/Pasachiya/Multi-Service-Conversion-Website"
  },
  {
    title: "Restaurant E-Commerce",
    description: "Full-stack restaurant management and e-commerce platform with order processing capabilities.",
    technologies: ["React", "Node.js", "MySQL", "Express.js"],
    slug: "restaurant-ecommerce",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    features: [
      "Online ordering",
      "Menu management",
      "Payment processing",
      "Order tracking"
    ],
    githubUrl: "https://github.com/Pasachiya/E-Commerce-Platform"
  }
];