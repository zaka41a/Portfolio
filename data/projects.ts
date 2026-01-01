export const projects = [
  {
    title: 'MiniForum',
    description:
      'A minimalist Q&A platform built with PHP 8.2, custom MVC, topics, answers, up/downvotes, MySQL full-text search.',
    tags: ['PHP', 'MVC', 'MySQL'],
    linkGithub: 'https://github.com/zaka41a/MiniForum',
  },
  {
    title: 'Miniplume',
    description:
      'A small secure PHP CMS/blog with tags, comments, admin roles, image uploads, RSS & sitemap. Pure PHP+PDO.',
    tags: ['PHP', 'PDO', 'CMS'],
    linkGithub: 'https://github.com/zaka41a/Miniplume',
  },
  {
    title: 'Pro_KONDA',
    description: '🧠 AI-Powered Knowledge Graph - Transform raw text into interactive knowledge graphs using Ollama LLM + Neo4j graph database + React visualization.',
    tags: ['React', 'Neo4j', 'AI/ML', 'Ollama', 'JavaScript'],
    linkGithub: 'https://github.com/zaka41a/Pro_KONDA',
    featured: true,
  },
  {
    title: 'BiblioSmart',
    description:
      '✨ Premium library SaaS platform with React/Vite frontend, Express + Prisma API, JWT auth, analytics dashboards, and Stripe-ready multi-tenant architecture.',
    tags: ['React', 'Express', 'Prisma', 'PostgreSQL', 'SaaS'],
    linkGithub: 'https://github.com/zaka41a/BiblioSmart',
    featured: true,
  },
  {
    title: 'MyGym',
    description: 'A PHP application for managing gym members, subscriptions, and activities.',
    tags: ['PHP', 'MySQL'],
    linkGithub: 'https://github.com/zaka41a/MyGym',
  },
  {
    title: 'StoreZ',
    description: '🛒 Enterprise Marketplace Platform - Complete online marketplace with Spring Boot REST API, React + TypeScript frontend, product management, orders, and secure authentication.',
    tags: ['Spring Boot', 'Java', 'React', 'TypeScript', 'REST API'],
    linkGithub: 'https://github.com/zaka41a/StoreZ',
    linkLive: 'https://storez-wheat.vercel.app',
    featured: true,
  },
  {
    title: 'RestaurantApp',
    description: 'A restaurant management system for menu, orders, and tables with role-based login.',
    tags: ['PHP', 'MySQL'],
    linkGithub: 'https://github.com/zaka41a/RestaurantApp',
  },
  {
    title: 'CoffeeApp',
    description: 'A café management platform controlling menus, orders, remittances, and tables.',
    tags: ['PHP', 'MySQL'],
    linkGithub: 'https://github.com/zaka41a/CoffeeApp',
  },
  {
    title: 'AtmosFlux',
    description: 'A Spring Boot 3 backend paired with a SPA console for weather-driven prototypes.',
    tags: ['Java', 'Spring Boot'],
    linkGithub: 'https://github.com/zaka41a/AtmosFlux',
  },
  {
    title: 'GreenNest',
    description: '🌱 Premium Plant E-commerce Platform - Full-stack MERN application with JWT authentication, admin dashboard, order management, and modern UI with glassmorphism effects.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'JWT'],
    linkGithub: 'https://github.com/zaka41a/GreenNest',
    linkLive: 'https://greennest-ten.vercel.app',
    featured: true,
  },
] as const
