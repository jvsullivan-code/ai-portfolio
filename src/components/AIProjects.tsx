"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Bot, Brain, MessageSquare, BarChart3, Image as ImageIcon, Search } from "lucide-react";

const projects = [
  {
    title: "ConversAI",
    description:
      "A GPT-4-powered conversational assistant with memory, context management, and multi-modal capabilities. Handles 10k+ daily conversations with 94% satisfaction rate.",
    icon: MessageSquare,
    tags: ["GPT-4", "LangChain", "Next.js", "Pinecone"],
    gradient: "from-blue-600 to-cyan-500",
    accentColor: "blue",
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Daily Users", value: "10K+" },
      { label: "Satisfaction", value: "94%" },
      { label: "Response Time", value: "<1s" },
    ],
  },
  {
    title: "VisionaryAI",
    description:
      "Computer vision platform for real-time object detection, image classification, and visual Q&A. Built on custom fine-tuned CLIP and YOLO models.",
    icon: ImageIcon,
    tags: ["PyTorch", "CLIP", "FastAPI", "React"],
    gradient: "from-purple-600 to-pink-500",
    accentColor: "purple",
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "mAP Score", value: "91.3" },
      { label: "Models", value: "12" },
      { label: "Images/Day", value: "50K" },
    ],
  },
  {
    title: "InsightEngine",
    description:
      "RAG-powered document intelligence platform that ingests PDFs, reports, and web content to generate actionable insights and answer complex queries.",
    icon: Search,
    tags: ["RAG", "Embeddings", "LlamaIndex", "PostgreSQL"],
    gradient: "from-green-600 to-emerald-500",
    accentColor: "green",
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Documents", value: "1M+" },
      { label: "Accuracy", value: "89%" },
      { label: "Query Speed", value: "0.3s" },
    ],
  },
  {
    title: "PredictFlow",
    description:
      "Automated ML pipeline for time-series forecasting and anomaly detection. Integrates with business data sources to surface predictive insights in real-time.",
    icon: BarChart3,
    tags: ["scikit-learn", "Prophet", "Kafka", "Grafana"],
    gradient: "from-orange-600 to-red-500",
    accentColor: "orange",
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Predictions/Min", value: "5K" },
      { label: "MAPE", value: "3.2%" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "AgentForge",
    description:
      "Framework for building and orchestrating autonomous AI agents. Supports tool-use, planning, and multi-agent collaboration with a visual workflow editor.",
    icon: Bot,
    tags: ["AutoGen", "LangGraph", "TypeScript", "Redis"],
    gradient: "from-violet-600 to-indigo-500",
    accentColor: "violet",
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Agent Types", value: "30+" },
      { label: "GitHub Stars", value: "2.1K" },
      { label: "Tasks/Day", value: "100K+" },
    ],
  },
  {
    title: "NeuralNotes",
    description:
      "AI-enhanced knowledge management tool with semantic search, auto-tagging, and smart summarization. Turns raw notes into a structured, queryable knowledge graph.",
    icon: Brain,
    tags: ["Transformers", "Neo4j", "Electron", "FastAPI"],
    gradient: "from-teal-600 to-cyan-500",
    accentColor: "teal",
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Notes Indexed", value: "500K" },
      { label: "Recall Rate", value: "97%" },
      { label: "Users", value: "3K+" },
    ],
  },
];

const accentClasses: Record<string, { tag: string; stat: string; glow: string }> = {
  blue: { tag: "bg-blue-500/10 text-blue-400 border-blue-500/20", stat: "text-blue-400", glow: "hover:shadow-blue-500/20" },
  purple: { tag: "bg-purple-500/10 text-purple-400 border-purple-500/20", stat: "text-purple-400", glow: "hover:shadow-purple-500/20" },
  green: { tag: "bg-green-500/10 text-green-400 border-green-500/20", stat: "text-green-400", glow: "hover:shadow-green-500/20" },
  orange: { tag: "bg-orange-500/10 text-orange-400 border-orange-500/20", stat: "text-orange-400", glow: "hover:shadow-orange-500/20" },
  violet: { tag: "bg-violet-500/10 text-violet-400 border-violet-500/20", stat: "text-violet-400", glow: "hover:shadow-violet-500/20" },
  teal: { tag: "bg-teal-500/10 text-teal-400 border-teal-500/20", stat: "text-teal-400", glow: "hover:shadow-teal-500/20" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AIProjects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            Featured AI Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI Apps I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of production AI systems spanning LLMs, computer vision,
            RAG, and autonomous agents.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            const accent = accentClasses[project.accentColor] ?? accentClasses.blue;

            return (
              <motion.div
                key={project.title}
                variants={cardVariant}
                className={`group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl ${accent.glow} flex flex-col`}
              >
                {/* Icon & gradient */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-gray-800">
                  {project.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className={`text-sm font-bold ${accent.stat}`}>{s.value}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-md border font-mono ${accent.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <GitBranch className="w-4 h-4" />
                    Source
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors ml-2"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
