import CardSwap, { Card } from './CardSwap';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animated card carousels, and interactive UI components with smooth transitions.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    },
    {
      title: 'HackMonitor',
      description: 'A comprehensive monitoring and tracking system designed to detect and analyze security events. Real-time alerts and detailed analytics dashboard for security professionals.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      link: '#'
    },
    {
      title: 'YouTube Automation',
      description: 'An automated content management tool for YouTube creators. Handles video scheduling, analytics tracking, and content optimization to streamline the content creation workflow.',
      tech: ['Python', 'YouTube API', 'Automation', 'Data Analysis'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-black dark:text-white">Projects</h2>
        
        <div style={{ height: '700px', position: 'relative' }}>
          <CardSwap
            cardDistance={80}
            verticalDistance={90}
            delay={5000}
            pauseOnHover={true}
          >
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-12 shadow-2xl max-w-4xl w-full border border-gray-200 dark:border-zinc-700">
                  <h3 className="text-4xl font-bold mb-6 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 rounded-full text-base font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium text-lg"
                  >
                    View Project →
                  </a>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
