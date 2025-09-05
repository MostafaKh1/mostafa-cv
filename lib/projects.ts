export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  // SaaS projects first
  {
    id: 5,
    slug: "b2b-contract-saas",
    title: "B2B Multi-Tenant Contract Generation SaaS",
    category: "SaaS (B2B)",
    shortDescription:
      "Multi-tenant platform for AI-generated contract creation, management, and organization-wide access.",
    description: [
      "A B2B platform where each organization has its own isolated space (multi-tenant) to create, manage, and store contracts.",
      "Users select a contract type and AI generates a draft which can be reviewed, edited, and exported to PDF.",
      "Built with Next.js and Supabase (auth + DB), initially targeting 35k+ contracting companies in Egypt.",
    ],
    features: [
      "Authentication & multi-tenancy (organization isolation)",
      "AI-powered contract generation",
      "Contract management: view, edit, save, export to PDF",
      "Organization-wide shared contract history",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "AI/LLM Integration"],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [],
    timeline: "2024–2025",
    role: "Full Stack Developer",
  },
  {
    id: 6,
    slug: "photo-feedback-saas",
    title: "B2C Photo Feedback SaaS",
    category: "SaaS (B2C)",
    shortDescription:
      "Consumer platform where users upload photos and receive honest, community-driven feedback.",
    description: [
      "Users upload photos (profile, fashion, etc.) and receive anonymous ratings and comments focused on honest opinions.",
      "Community-first approach with interactive rating system, user feedback collection, and responsive design for seamless user experience.",
      "Built with React and modern web technologies for optimal performance and user engagement.",
    ],
    features: [
      "Photo upload and user profiles",
      "Interactive rating system with visual feedback",
      "Anonymous feedback (ratings/comments)",
      "User review submission and management",
      "Dynamic rating displays and statistics",
      "Community-driven honesty & moderation",
      "Responsive design for all devices",
      "Real-time rating updates",
      "Gamification (points/badges) – planned",
      "Premium feedback & AI analysis – planned",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    coverImage: "/ratting-app/image.png",
    thumbnailImage: "/ratting-app/image.png",
    gallery: [
      { url: "/ratting-app/image.png", caption: "Main Rating Interface" },
      { url: "/ratting-app/s.png", caption: "Rating Dashboard" },
      { url: "/ratting-app/3.png", caption: "User Reviews Section" },
      { url: "/ratting-app/tes.png", caption: "Rating Statistics" },
      { url: "/ratting-app/twe.png", caption: "Mobile Responsive View" },
    ],
    timeline: "2024–2025",
    role: "Full Stack Developer",
    liveUrl: "https://rating-app-1.vercel.app/",
  },
  {
    id: 7,
    slug: "business-listings-saas",
    title: "SellMyBus App - Business Listings Marketplace",
    category: "SaaS (Marketplace)",
    shortDescription:
      "Marketplace where owners list businesses for sale/equity; buyers use credits to unlock details, chat, and run AI analysis.",
    description: [
      "Owners can list businesses for sale or equity, including descriptions, financials, documents, industry and location.",
      "Buyers browse listings for free and spend credits to unlock full details, request contact, and run AI analysis.",
      "Secure in-app buyer–seller chat and dashboards for both sides to manage activity and insights.",
    ],
    features: [
      "Business listings with description, financials, documents (Supabase Storage)",
      "Seller dashboard to create, manage, and remove listings",
      "Buyer browsing with credits to unlock financials, documents, owner info",
      "Secure in-app chat after unlock with report/block controls",
      "AI analysis: valuation, risk assessment, growth recommendations (result cached per listing)",
      "Credit system: unlock details, request contact, run AI; refill via payments (Stripe/PayPal planned)",
      "User dashboards for sellers and buyers with favorites, unlocks, chats, and analysis history",
      "Real-time chat system for instant buyer-seller communication",
      "Email notifications for listing updates and buyer inquiries",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (Auth, DB, Realtime, Storage)",
      "AI/LLM Integration",
      "Stripe/PayPal (planned)",
    ],
    coverImage: "/sell-bus/1.jpg",
    thumbnailImage: "/sell-bus/1.jpg",
    gallery: [
      { url: "/sell-bus/1.jpg", caption: "App Home Screen" },
      { url: "/sell-bus/2.jpg", caption: "Vehicle Listing" },
      { url: "/sell-bus/3.jpg", caption: "Photo Gallery" },
      { url: "/sell-bus/4.jpg", caption: "Vehicle Details" },
      { url: "/sell-bus/5.jpg", caption: "Search Interface" },
      { url: "/sell-bus/6.jpg", caption: "User Profile" },
    ],
    timeline: "2024–2025",
    role: "Full Stack Developer",
  },
  // Other projects
  {
    id: 1,
    slug: "fullstack-mern-social-media",
    title: "Fullstack MERN Social Media",
    category: "Fullstack Web App",
    shortDescription:
      "Dynamic social media platform built with React, TypeScript, Redux, Tailwind CSS (frontend) and Node.js, Express.js, MongoDB, JWT (backend).",
    description: [
      "A full-featured social platform allowing users to sign up, authenticate, create posts, and interact in real-time.",
      "Frontend built with React, TypeScript, Redux, Tailwind CSS; backend powered by Node.js, Express.js, MongoDB, and JWT.",
      "Deployed for production with environment-ready configuration and responsive UI.",
    ],
    features: [
      "JWT authentication and protected routes",
      "Post creation, feed, and interactions",
      "Responsive UI with Tailwind CSS",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [],
    timeline: "2024",
    role: "Full Stack Developer",
    liveUrl: "https://fullstack-mern-social-media.vercel.app/",
  },
  {
    id: 2,
    slug: "furniture-ecommerce",
    title: "Furniture E-commerce",
    category: "E-commerce Website",
    shortDescription:
      "E-commerce website built with React.js, Lazy loading, Redux, Tailwind CSS, and React Router.",
    description: [
      "A modern furniture e-commerce experience with product browsing and shopping cart.",
      "Optimized routing and performance with code-splitting and lazy loading.",
      "Styled with Tailwind CSS for a responsive, clean UI.",
    ],
    features: [
      "Product browsing and details",
      "Shopping cart and state management",
      "Responsive design",
    ],
    technologies: ["React", "Redux", "React Router", "Tailwind CSS"],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [],
    timeline: "2024",
    role: "Frontend Developer",
    liveUrl: "https://furniture-ecommerce-brown.vercel.app/",
  },
  {
    id: 3,
    slug: "netflix-clone",
    title: "Netflix Clone (Next.js)",
    category: "Web App",
    shortDescription:
      "Netflix clone built with Next.js, TypeScript, and Tailwind CSS. Includes user authentication with Firebase and browsing movies & TV.",
    description: [
      "A clone of Netflix featuring authentication and content browsing.",
      "Implemented with Next.js and Tailwind CSS for a responsive layout.",
      "Authentication flows handled via Firebase.",
    ],
    features: [
      "User authentication with Firebase",
      "Movie and TV browsing UI",
      "Responsive layout with Tailwind CSS",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [],
    timeline: "2023",
    role: "Frontend Developer",
    liveUrl: "https://netflix-clone-nextjs-z8wc.vercel.app/",
  },
  {
    id: 4,
    slug: "password-generator",
    title: "Password Generator",
    category: "Web App",
    shortDescription:
      "A simple Next.js app to generate strong and secure passwords with customizable options.",
    description: [
      "Generates strong, secure passwords with configurable length and character sets.",
      "Built with Next.js, TypeScript, and Tailwind CSS.",
      "Deployed on Vercel for quick access.",
    ],
    features: [
      "Configurable password length and options",
      "Responsive UI",
      "Instant copy to clipboard",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [],
    timeline: "2023",
    role: "Frontend Developer",
    liveUrl: "https://password-generator-six-lyart.vercel.app/",
  },
]

export { projects }

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
