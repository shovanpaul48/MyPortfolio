// =====================================================
// lib/data.ts — Centralized static data for portfolio
// =====================================================

export const personal = {
  name: 'Shovan Paul',
  title: 'GenAI & Backend Engineer',
  role: 'Associate Software Developer',
  company: 'TCS Kolkata',
  companyUrl: 'https://www.tcs.com/',
  tagline: 'Building production RAG pipelines, GraphRAG with Neo4j, and FastAPI LLM microservices.',
  location: 'Kolkata, India',
  locationUrl: 'https://maps.google.com/?q=Kolkata,India',
  email: 'shovansundarpaul48@gmail.com',
  github: 'https://github.com/shovanpaul48',
  linkedin: 'https://www.linkedin.com/in/shovan-sundar-paul-7b6a891b1/',
  leetcode: 'https://leetcode.com/shovanpaul48/',
  leetcodeUsername: 'shovanpaul48',
  githubUsername: 'shovanpaul48',
  resumeUrl: '#', // FlowCV resume link
}

export const experience = [
  {
    id: 'tcs',
    company: 'Tata Consultancy Services (TCS)',
    companyUrl: 'https://www.tcs.com/',
    role: 'Associate Software Developer',
    location: 'Kolkata, India',
    startDate: '2024-01-01',
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
    institutionUrl: 'https://iem.edu.in/',
    location: 'Kolkata, India',
    period: '2022 – 2024',
    details: 'Focused on Advanced Algorithms, Software Engineering, and AI/Machine Learning.',
  },
  {
    degree: 'B.Sc. Computer Science (Honours)',
    institution: 'University of Calcutta',
    institutionUrl: 'https://www.caluniv.ac.in/',
    location: 'Kolkata, India',
    period: '2019 – 2022',
    details: 'Core Data Structures, Database Systems, Computer Architecture, and Discrete Mathematics.',
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
    date: '2024',
  },
  {
    title: 'IBM AI Engineering Professional Certificate',
    code: 'IBM AI',
    issuer: 'Coursera / IBM',
    badgeColor: '#052147',
    verifyUrl: 'https://coursera.org/share/36d822291d6390b3da69e76d377872fa',
    icon: '🧠',
    date: '2023',
  },
  {
    title: 'IBM Applied AI Professional Certificate',
    code: 'IBM AppAI',
    issuer: 'Coursera / IBM',
    badgeColor: '#052147',
    verifyUrl: 'https://coursera.org/share/b5ab6a7d35675e1061ad9aa52b2bab48',
    icon: '⚡',
    date: '2023',
  },
]

export type Project = {
  id: string
  title: string
  description: string
  status: 'live' | 'building' | 'archived'
  statusText: string
  techStack: string[]
  github?: string
  demo?: string
  featured: boolean
  highlight?: string
}

export const projects: Project[] = [
  {
    id: 'job-assistant',
    title: 'AI-Powered Job Assistant App',
    description:
      'End-to-end career intelligence application: resume parsing → multi-portal job search (Adzuna, JSearch, TinyFish APIs) → LLM-based job matching and ranking pipeline designed for precision matching.',
    status: 'building',
    statusText: 'In Progress',
    featured: true,
    highlight: 'LLM Matching',
    techStack: ['Python', 'FastAPI', 'LangChain', 'React', 'Next.js', 'Adzuna API', 'JSearch API'],
    github: 'https://github.com/shovanpaul48',
  },
  {
    id: 'profit-gpt',
    title: 'Pro(fit)GPT',
    description:
      'Multi-LLM NSE stock analysis pipeline combining Neo4j GraphRAG for entity-relationship reasoning, LangChain agents, Groq/Llama inference, APScheduler for market-hours triggers, and Telegram delivery.',
    status: 'live',
    statusText: 'Live',
    featured: true,
    highlight: 'GraphRAG',
    techStack: ['Python', 'LangChain', 'Neo4j', 'Groq', 'Llama', 'APScheduler', 'Telegram Bot API'],
    github: 'https://github.com/shovanpaul48',
  },
  {
    id: 'cresco',
    title: 'CRESCO',
    description:
      'Personal productivity and career-growth web app built with React, FastAPI, and SQLite persistence to track goals, habits, and career milestones in a unified dashboard.',
    status: 'live',
    statusText: 'Live',
    featured: true,
    highlight: 'Full-Stack',
    techStack: ['React', 'FastAPI', 'SQLite', 'Python', 'TypeScript'],
    github: 'https://github.com/shovanpaul48',
  },
]

export const olderProjects: Project[] = [
  {
    id: 'ic-tester',
    title: 'IC Tester',
    description: 'Hardware-software interface for automated IC chip testing.',
    status: 'archived',
    statusText: 'Archived',
    featured: false,
    techStack: ['Python', 'Raspberry Pi'],
    github: 'https://github.com/shovanpaul48/IC-Testing-device',
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommender',
    description: 'Collaborative filtering-based movie recommendation system.',
    status: 'archived',
    statusText: 'Archived',
    featured: false,
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/shovanpaul48/Movie-Recommendation-system',
  },
  {
    id: 'hand-gesture-cv',
    title: 'Hand Gesture CV',
    description: 'Real-time hand gesture recognition using OpenCV and MediaPipe.',
    status: 'archived',
    statusText: 'Archived',
    featured: false,
    techStack: ['Python', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/shovanpaul48/COMPUTER-VISION-__-Hand-Gesture-.git',
  },
  {
    id: 'website-blocker',
    title: 'Website Blocker',
    description: 'Productivity tool to block distracting websites on a schedule.',
    status: 'archived',
    statusText: 'Archived',
    featured: false,
    techStack: ['Python'],
    github: 'https://github.com/shovanpaul48/Website-Blocker.git',
  },
  {
    id: 'matrix-rain',
    title: 'Matrix Rain',
    description: 'Terminal-style Matrix digital rain animation built with HTML5 Canvas.',
    status: 'archived',
    statusText: 'Archived',
    featured: false,
    techStack: ['JavaScript', 'Canvas API'],
    github: 'https://github.com/shovanpaul48/Matrix-Rain.git',
  },
]

export type TechItem = {
  name: string
  url: string
}

export type SkillCategory = {
  num: string
  category: string
  items: TechItem[]
}

export const stackCategories: SkillCategory[] = [
  {
    num: '01',
    category: 'Languages',
    items: [
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
    ],
  },
  {
    num: '02',
    category: 'AI & LLM Frameworks',
    items: [
      { name: 'LangChain', url: 'https://www.langchain.com/' },
      { name: 'LangGraph', url: 'https://langchain-ai.github.io/langgraph/' },
      { name: 'Azure OpenAI', url: 'https://azure.microsoft.com/en-us/products/ai-services/openai-service' },
      { name: 'RAG Pipelines', url: 'https://www.mongodb.com/basics/retrieval-augmented-generation' },
      { name: 'GraphRAG', url: 'https://github.com/microsoft/graphrag' },
      { name: 'Groq / Llama', url: 'https://groq.com/' },
    ],
  },
  {
    num: '03',
    category: 'Backend & Databases',
    items: [
      { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
      { name: 'Neo4j', url: 'https://neo4j.com/' },
      { name: 'OpenSearch', url: 'https://opensearch.org/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'SQLite', url: 'https://www.sqlite.org/' },
      { name: 'REST APIs', url: 'https://restfulapi.net/' },
    ],
  },
  {
    num: '04',
    category: 'DevOps & Observability',
    items: [
      { name: 'Langfuse', url: 'https://langfuse.com/' },
      { name: 'Grafana', url: 'https://grafana.com/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'GitHub Actions', url: 'https://github.com/features/actions' },
      { name: 'Azure', url: 'https://azure.microsoft.com/' },
      { name: 'Git', url: 'https://git-scm.com/' },
    ],
  },
]
