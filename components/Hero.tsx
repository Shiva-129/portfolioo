import { Github, Linkedin, Mail } from 'lucide-react';
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-zinc-800 pt-20 relative overflow-hidden">
      
      
      {/* Content */}
      <div className="container mx-auto px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl ml-20">
          <h1 className="text-7xl font-bold mb-4 text-black dark:text-white">
            Shiva Sathwik
          </h1>
          <p className="text-3xl mb-8 text-black dark:text-white">
            I'm Web Developer, Desginer
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white dark:text-black" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white dark:text-black" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white dark:text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
