export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 text-black dark:text-white">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Hi, I'm Shiva Sathwik, a passionate web developer and designer with a keen eye for creating 
            beautiful and functional digital experiences. I specialize in building modern web applications 
            using cutting-edge technologies.
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            With expertise in both frontend and backend development, I bring ideas to life through clean code 
            and intuitive design. I'm constantly learning and adapting to new technologies to deliver the best 
            solutions for my clients and projects.
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
