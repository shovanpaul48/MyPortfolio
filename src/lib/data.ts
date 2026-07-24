// =====================================================
// lib/data.ts — All static content for the portfolio
// =====================================================

export const personal = {
  name: 'Shovan Paul',
  title: 'Associate Software Developer',
  tagline: 'Building intelligent systems with LLMs, RAG pipelines & GraphRAG.',
  location: 'Kolkata, India',
  email: 'shovanpaul48@gmail.com',
  github: 'https://github.com/shovanpaul48',
  linkedin: 'https://www.linkedin.com/in/shovan-sundar-paul-7b6a891b1/',
  leetcode: 'https://leetcode.com/shovanpaul48/',
  leetcodeUsername: 'shovanpaul48',
  githubUsername: 'shovanpaul48',
  resumeUrl: '#', // TODO: replace with FlowCV link
}

export const experience = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Associate Software Developer',
    location: 'Kolkata, India',
    period: 'Jan 2024 – Present',
    type: 'Full-time',
    bullets: [
      'Designed and deployed production RAG pipelines using LangChain, Azure OpenAI, and OpenSearch for enterprise knowledge retrieval.',
      'Built GraphRAG systems with Neo4j to enable multi-hop reasoning over complex entity relationships.',
      'Developed FastAPI microservices for LLM orchestration and inference routing (Groq / Llama).',
      'Implemented observability and tracing for LLM pipelines using Langfuse and Grafana dashboards.',
      'Worked with LangGraph for stateful multi-agent workflow orchestration.',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Neo4j', 'Azure OpenAI', 'OpenSearch', 'Langfuse', 'Grafana'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Institute of Engineering & Management (IEM)',
    location: 'Kolkata, India',
    period: '2022 – 2024',
  },
  {
    degree: 'B.Sc. Computer Science (Honours)',
    institution: 'University of Calcutta',
    location: 'Kolkata, India',
    period: '2019 – 2022',
  },
]

export const certifications = [
  {
    title: 'Microsoft Certified: Fabric Analytics Engineer Associate',
    code: 'DP-700',
    issuer: 'Microsoft',
    badgeColor: '#0078d4',
    verifyUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/',
    icon: '🏅',
  },
]

export type Project = {
  title: string
  description: string
  status: 'live' | 'building' | 'archived'
  techStack: string[]
  github?: string
  demo?: string
  featured: boolean
  highlight?: string
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Job Assistant',
    description:
      'End-to-end career intelligence app: resumes parsed → multi-portal job search across Adzuna, JSearch & TinyFish APIs → LLM-based job matching and ranking pipeline. Designed for precision, not spray-and-pray.',
    status: 'building',
    featured: true,
    highlight: 'LLM Matching',
    techStack: ['Python', 'FastAPI', 'LangChain', 'React', 'Next.js', 'Adzuna API', 'JSearch API'],
    github: 'https://github.com/shovanpaul48',
  },
  {
    title: 'Pro(fit)GPT',
    description:
      'Multi-LLM NSE stock analysis pipeline. Combines Neo4j GraphRAG for entity-relationship reasoning, LangChain agents, Groq/Llama inference, APScheduler for market-hours triggers, and Telegram delivery for real-time stock insights.',
    status: 'live',
    featured: true,
    highlight: 'GraphRAG',
    techStack: ['Python', 'LangChain', 'Neo4j', 'Groq', 'Llama', 'APScheduler', 'Telegram Bot API'],
    github: 'https://github.com/shovanpaul48',
  },
  {
    title: 'CRESCO',
    description:
      'Personal productivity and career-growth web app. Full-stack with React frontend, FastAPI backend, and SQLite persistence. Designed to track goals, habits, and career milestones in one dashboard.',
    status: 'live',
    featured: true,
    highlight: 'Full-Stack',
    techStack: ['React', 'FastAPI', 'SQLite', 'Python', 'TypeScript'],
    github: 'https://github.com/shovanpaul48',
  },
]

export const olderProjects: Project[] = [
  {
    title: 'IC Tester',
    description: 'Hardware-software interface for automated IC chip testing.',
    status: 'archived',
    featured: false,
    techStack: ['Python', 'Raspberry Pi'],
  },
  {
    title: 'Movie Recommender',
    description: 'Collaborative filtering-based movie recommendation system.',
    status: 'archived',
    featured: false,
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'Hand Gesture CV',
    description: 'Real-time hand gesture recognition using OpenCV and MediaPipe.',
    status: 'archived',
    featured: false,
    techStack: ['Python', 'OpenCV', 'MediaPipe'],
  },
  {
    title: 'Website Blocker',
    description: 'Productivity tool to block distracting websites on a schedule.',
    status: 'archived',
    featured: false,
    techStack: ['Python'],
  },
  {
    title: 'Matrix Rain',
    description: 'Terminal-style Matrix digital rain animation.',
    status: 'archived',
    featured: false,
    techStack: ['JavaScript', 'Canvas API'],
  },
]

export type SkillCategory = {
  category: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI / LLM',
    icon: '🧠',
    skills: ['LangChain', 'LangGraph', 'RAG Pipelines', 'GraphRAG', 'Azure OpenAI', 'Groq', 'Llama', 'Langfuse'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Python', 'FastAPI', 'APScheduler', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['Neo4j', 'OpenSearch', 'SQLite', 'PostgreSQL'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'Framer Motion'],
  },
  {
    category: 'Observability',
    icon: '📊',
    skills: ['Grafana', 'Langfuse', 'Prometheus'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['Azure', 'GitHub Actions', 'Docker', 'Git'],
  },
]
