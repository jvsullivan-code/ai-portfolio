"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Microscope, Users, Award, MapPin, Coffee } from "lucide-react";

const skills = [
  { category: "Large Language Models", items: ["GPT-4 / Claude", "LangChain / LlamaIndex", "Fine-tuning", "Prompt Engineering"], icon: Brain, color: "blue" },
  { category: "ML & Deep Learning", items: ["PyTorch / TensorFlow", "Computer Vision", "NLP", "Reinforcement Learning"], icon: Microscope, color: "purple" },
  { category: "Engineering", items: ["Python / TypeScript", "FastAPI / Next.js", "Vector DBs", "Cloud (AWS/GCP)"], icon: Code2, color: "green" },
  { category: "Leadership", items: ["Team Building", "Product Strategy", "AI Ethics", "Public Speaking"], icon: Users, color: "orange" },
];

const achievements = [
  { icon: Award, value: "5+", label: "Years in AI" },
  { icon: Brain, value: "20+", label: "AI Projects Shipped" },
  { icon: Coffee, value: "10K+", label: "Users Served" },
  { icon: MapPin, value: "3", label: "Countries Worked In" },
];

const colorMap: Record<string, { icon: string; border: string; badge: string }> = {
  blue: { icon: "text-blue-400", border: "border-blue-500/20 hover:border-blue-400/40", badge: "bg-blue-500/10 text-blue-300" },
  purple: { icon: "text-purple-400", border: "border-purple-500/20 hover:border-purple-400/40", badge: "bg-purple-500/10 text-purple-300" },
  green: { icon: "text-green-400", border: "border-green-500/20 hover:border-green-400/40", badge: "bg-green-500/10 text-green-300" },
  orange: { icon: "text-orange-400", border: "border-orange-500/20 hover:border-orange-400/40", badge: "bg-orange-500/10 text-orange-300" },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Passionate About <span className="gradient-text">AI</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 text-3xl font-bold text-white">
              AI
            </div>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                I&apos;m an AI engineer and thought leader with a passion for building
                technology that matters. I&apos;ve spent the last five years designing
                and shipping AI-powered products—from conversational assistants to
                computer vision systems and autonomous agents.
              </p>
              <p>
                My work sits at the intersection of deep technical expertise and
                strategic thinking. I believe the most impactful AI isn&apos;t the most
                complex—it&apos;s the most human-centered. Every system I build starts
                with the question: <em className="text-gray-300">&quot;What does this enable for real people?&quot;</em>
              </p>
              <p>
                When I&apos;m not writing code or models, I&apos;m writing about the ideas
                reshaping our industry—from the economics of inference to the ethics
                of autonomous systems.
              </p>
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map(({ category, items, icon: Icon, color }) => {
              const c = colorMap[color] ?? colorMap.blue;
              return (
                <div
                  key={category}
                  className={`bg-gray-900 border rounded-2xl p-5 transition-all duration-300 ${c.border}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className={`w-5 h-5 ${c.icon}`} />
                    <h3 className="text-sm font-semibold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-2.5 py-1 rounded-lg font-mono ${c.badge} w-fit`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
