"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, TrendingUp, Lightbulb, Cpu } from "lucide-react";

const articles = [
  {
    title: "The Agentic AI Revolution: Why Autonomous Systems Will Reshape Every Industry",
    excerpt:
      "We're moving from AI as a tool to AI as a collaborator. Autonomous agents that plan, reason, and use tools will transform knowledge work at a scale we haven't seen since the internet.",
    category: "AI Agents",
    readTime: "8 min read",
    date: "Mar 28, 2026",
    icon: Cpu,
    gradient: "from-blue-600 to-cyan-500",
    tags: ["Agents", "Automation", "Future of Work"],
    featured: true,
  },
  {
    title: "RAG vs Fine-Tuning: Choosing the Right Approach for Your LLM Application",
    excerpt:
      "Both RAG and fine-tuning can ground your model in specific knowledge—but they solve different problems. Here's a practical framework for deciding which to use.",
    category: "Engineering",
    readTime: "12 min read",
    date: "Mar 15, 2026",
    icon: Lightbulb,
    gradient: "from-purple-600 to-pink-500",
    tags: ["LLMs", "RAG", "Fine-tuning"],
    featured: true,
  },
  {
    title: "Measuring What Matters: A Pragmatic Guide to LLM Evaluation",
    excerpt:
      "BLEU scores and perplexity are not enough. Learn how top AI teams evaluate language models in production, from G-Eval to custom human feedback pipelines.",
    category: "MLOps",
    readTime: "10 min read",
    date: "Feb 28, 2026",
    icon: TrendingUp,
    gradient: "from-green-600 to-teal-500",
    tags: ["Evaluation", "LLMOps", "Metrics"],
    featured: false,
  },
  {
    title: "Multimodal AI: Building Applications That See, Hear, and Understand",
    excerpt:
      "GPT-4V, Gemini, and Claude 3 have made multimodal AI accessible. This guide explores practical architectures for apps that process images, audio, and text together.",
    category: "Multimodal",
    readTime: "9 min read",
    date: "Feb 10, 2026",
    icon: BookOpen,
    gradient: "from-orange-600 to-red-500",
    tags: ["Multimodal", "Vision", "GPT-4V"],
    featured: false,
  },
  {
    title: "The Hidden Cost of AI: Energy, Infrastructure, and Sustainable ML",
    excerpt:
      "Training large models consumes enormous resources. As AI practitioners, we have a responsibility to think about efficiency, not just performance.",
    category: "Sustainability",
    readTime: "7 min read",
    date: "Jan 22, 2026",
    icon: TrendingUp,
    gradient: "from-teal-600 to-emerald-500",
    tags: ["Sustainability", "Green AI", "Efficiency"],
    featured: false,
  },
  {
    title: "Prompt Engineering at Scale: From Artisan Prompts to Systematic Pipelines",
    excerpt:
      "Moving beyond one-off prompts to systematic, testable, version-controlled prompt pipelines. The engineering practices that separate hobbyist AI from production AI.",
    category: "Engineering",
    readTime: "11 min read",
    date: "Jan 5, 2026",
    icon: Cpu,
    gradient: "from-violet-600 to-indigo-500",
    tags: ["Prompt Engineering", "LLMOps", "Best Practices"],
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "AI Agents": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Engineering: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  MLOps: "bg-green-500/10 text-green-400 border-green-500/20",
  Multimodal: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Sustainability: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

export default function ThoughtLeadership() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Thought Leadership
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI <span className="gradient-text">Insights</span> &amp; Ideas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep dives into AI trends, engineering best practices, and the ideas
            shaping the next decade of technology.
          </p>
        </motion.div>

        {/* Featured articles (2-col) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((article, i) => {
            const Icon = article.icon;
            const catColor = categoryColors[article.category] ?? "bg-gray-700 text-gray-300 border-gray-600";

            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${catColor}`}>
                    {article.category}
                  </span>
                  <span className="text-gray-600 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span className="text-gray-700 text-xs ml-auto">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 font-mono bg-gray-800 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-blue-400 group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Rest of articles (3-col) */}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((article, i) => {
            const Icon = article.icon;
            const catColor = categoryColors[article.category] ?? "bg-gray-700 text-gray-300 border-gray-600";

            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer flex flex-col"
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${catColor}`}>
                    {article.category}
                  </span>
                  <span className="text-gray-600 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug flex-1">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:gap-2 transition-all mt-auto">
                  Read more <ArrowRight className="w-3 h-3" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
