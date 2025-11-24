import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { IconCloud } from './IconCloud';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Python', level: 90 }
      ],
      color: 'blue' as const
    },
    {
      category: 'Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 }
      ],
      color: 'purple' as const
    },
    {
      category: 'Design',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Rive', level: 75 },
        { name: 'Framer', level: 80 }
      ],
      color: 'green' as const
    }
  ];

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-black py-20 relative overflow-hidden">
      {/* Background Icon Cloud */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-full max-w-3xl">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 relative z-10"
      >
        <h2 className="text-5xl font-bold mb-12 text-white">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {skillCategories.map((category, index) => (
            <GlowCard
              key={index}
              glowColor={category.color}
              customSize={true}
              className="w-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm"
            >
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
