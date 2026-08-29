export const projects = [
  {
    id: 'flowpilot',
    name: 'FlowPilot',
    tagline: 'Visual workflow automation platform',
    description:
      'A visual workflow automation platform — build multi-step automations on a drag-and-drop canvas, with AI steps powered by an LLM API.',
    role: 'Sole developer',
    stack: ['React', 'Fastify', 'PostgreSQL', 'Prisma', 'React Flow', 'OpenRouter API'],
    problem:
      'Teams need to automate multi-step processes (trigger → step → action) without hand-writing custom backend code for every workflow.',
    result:
      'A working automation builder with a visual flow canvas, a Postgres-backed workflow engine, and AI-powered steps — deployed and live.',
    liveUrl: 'https://flowpilot-omega-seven.vercel.app',
    githubUrl: 'https://github.com/fazal305/flowpilot',
    accent: 'sky',
    screenshot: 'flowpilot',
  },
  {
    id: 'clinicos',
    name: 'ClinicOS',
    tagline: 'Clinic management system',
    description:
      'A clinic management system covering patient records, appointment scheduling, doctor workflows, and admin analytics.',
    role: 'Sole developer',
    stack: ['React', 'Express', 'MySQL'],
    problem:
      'Clinics often run on paper records or disconnected spreadsheets for patients, appointments, and staff scheduling.',
    result:
      'A full-stack clinic management platform with structured patient, appointment, and admin-facing views, demonstrating a real-world business system architecture end to end.',
    liveUrl: 'https://clinicos-beryl.vercel.app',
    githubUrl: 'https://github.com/fazal305/ClinicOS',
    disclosure:
      'Portfolio project built with fictional demo data — not deployed for a live clinic. The live demo uses seeded fictional accounts documented in the repo (e.g. admin@clinicos.demo), not real patient data.',
    accent: 'mint',
    screenshot: 'clinicos',
  },
  {
    id: 'serviceflow',
    name: 'ServiceFlow',
    tagline: 'Service-business management platform',
    description:
      'A service-business management platform covering customer requests, technician dispatch, quotations, invoicing, and payments.',
    role: 'Sole developer',
    stack: ['React', 'Express', 'Supabase (PostgreSQL)', 'Clerk Auth'],
    problem:
      'Service businesses — repair, maintenance, field services — need to track requests, dispatch technicians, and turn completed jobs into invoices without juggling separate tools.',
    result:
      'An end-to-end service-business workflow from request intake through technician dispatch, quotation, and invoicing, built as a client/server application with authenticated roles.',
    liveUrl: 'https://serviceflow-app.netlify.app',
    githubUrl: 'https://github.com/fazal305/serviceflow',
    accent: 'coral',
    screenshot: 'serviceflow',
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    tagline: 'Production-quality AI chat workspace',
    description:
      'An AI chat workspace with streaming responses, rendered Markdown, syntax-highlighted code, and a command palette.',
    role: 'Sole developer',
    stack: ['React', 'Vite', 'OpenRouter API', 'react-markdown'],
    problem:
      'Off-the-shelf AI chat UIs are often too simple — no formatting, no history, no real streaming — or locked to a single provider.',
    result:
      'A polished chat interface with real streaming output, rendered Markdown and code blocks, and a reducer-driven state architecture.',
    githubUrl: 'https://github.com/fazal305/ai-chatbot',
    disclosure: 'The hosted deployment is currently behind Vercel account-level access controls — clone the repo to run it locally.',
    accent: 'lavender',
    screenshot: 'ai-chatbot',
  },
  {
    id: 'quote-rate',
    name: 'quote-rate',
    tagline: 'Freelance pricing & quotation calculator',
    description:
      'A transparent website pricing and quotation calculator built for freelance web developers, with PDF export.',
    role: 'Sole developer',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'jsPDF'],
    problem: 'Freelance developers often price projects inconsistently with no repeatable, defensible method.',
    result: 'A calculator that turns project scope into a transparent price breakdown and exports it as a shareable PDF quote.',
    githubUrl: 'https://github.com/fazal305/quote-rate',
    disclosure: 'The hosted deployment is currently behind Vercel account-level access controls — clone the repo to run it locally.',
    accent: 'sun',
    screenshot: 'quote-rate',
  },
  {
    id: 'crm-dashboard',
    name: 'CRM Dashboard',
    tagline: 'Enterprise CRM dashboard UI',
    description:
      'A browser-based CRM dashboard covering customers, companies, deals, activities, calendar, and sales pipeline, with chart-based analytics.',
    role: 'Sole developer',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'LocalStorage'],
    problem: 'Small teams need a CRM-style interface to visualize pipeline and customer data without standing up a backend.',
    result:
      'A fully interactive, multi-page CRM UI with a sales pipeline, calendar, and Chart.js analytics, persisting data client-side.',
    liveUrl: 'https://fazal305.github.io/crm-dashboard/',
    githubUrl: 'https://github.com/fazal305/crm-dashboard',
    accent: 'lime',
    screenshot: 'crm-dashboard',
  },
]
