export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Python', level: 90 }
      ]
    },
    {
      category: 'Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    {
      category: 'Design',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Rive', level: 75 },
        { name: 'Framer', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-black dark:text-white">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-zinc-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
