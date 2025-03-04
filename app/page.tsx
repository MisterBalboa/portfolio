'use client';
import { useState } from 'react';
import Image from "next/image";
import Modal from './components/Modal';

interface ProjectDetails {
  title: string;
  content: string;
  image: string;
  role: string;
  period: string;
  technologies: string[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const projectDetails: Record<string, ProjectDetails> = {
    'Epica Audio': {
      title: 'Epica Audio',
      image: '/epica.png',
      role: 'Lead Full Stack Developer',
      period: '2023 - Present',
      technologies: ['TypeScript', 'React', 'Node.js', 'WebAudio API', 'AWS', 'Redis'],
      content: `Leading the development of a cutting-edge audio processing platform at Epica Audio:

• Architected and implemented real-time audio processing system
• Developed custom WebAudio API integrations
• Built intuitive user interface for audio manipulation
• Optimized performance for handling large audio files
• Implemented cloud storage and processing solutions

Technologies used: React, WebAudio API, Node.js, AWS, TypeScript, Redis`
    },
    'Booz.cl': {
      title: 'Booz.cl',
      image: '/booz.png',
      role: 'Senior Software Engineer',
      period: '2022 - Present',
      technologies: ['TypeScript', 'React', 'D3.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
      content: `At Booz.cl, I led the development of enterprise-scale analytics dashboards that transformed how our clients interact with their data. Key achievements include:

• Architected and implemented real-time data visualization systems
• Developed custom D3.js components for complex data representations
• Led a team of 4 developers in delivering critical features
• Improved dashboard performance by 60% through optimization
• Implemented advanced filtering and search capabilities

Technologies used: React, D3.js, Node.js, TypeScript, GraphQL`
    },
    'Boozity': {
      title: 'Boozity',
      image: '/boozity.png',
      role: 'Senior Software Engineer',
      period: '2021 - 2022',
      technologies: ['JavaScript', 'React', 'Node.js', 'Docker', 'MongoDB', 'AWS'],
      content: `As Senior Software Engineer at Boozity, I was responsible for:

• Developing scalable web applications using modern JavaScript frameworks
• Implementing microservices architecture
• Leading technical architecture decisions
• Optimizing application performance and user experience
• Mentoring junior developers

Technologies used: React, Node.js, Docker, AWS, MongoDB`
    },
    'Gap Inc.': {
      title: 'Gap Inc.',
      image: '/gap.png',
      role: 'Full Stack Developer',
      period: '2020 - 2021',
      technologies: ['JavaScript', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'AWS'],
      content: `At Gap Inc., I worked on critical e-commerce features that improved the shopping experience for millions of users:

• Optimized checkout flow resulting in 40% performance improvement
• Implemented real-time inventory tracking
• Developed mobile-first responsive features
• Integrated multiple payment gateways
• Enhanced security protocols for payment processing

Technologies used: React, Node.js, Redux, PostgreSQL, AWS`
    },
    'Minted': {
      title: 'Minted',
      image: '/minted.png',
      role: 'Frontend Developer',
      period: '2019 - 2020',
      technologies: ['JavaScript', 'React', 'Canvas API', 'WebGL', 'Node.js', 'AWS'],
      content: `At Minted, I built interactive design tools that empowered creators:

• Developed real-time design preview functionality
• Implemented complex Canvas API interactions
• Created responsive design editor interface
• Optimized image processing and rendering
• Integrated with cloud storage solutions

Technologies used: React, Canvas API, WebGL, Node.js, AWS S3`
    },
    'Nisum Latam': {
      title: 'Nisum Latam',
      image: '/nisum.png',
      role: 'Software Engineer',
      period: '2018 - 2019',
      technologies: ['JavaScript', 'React', 'GraphQL', 'Node.js', 'PostgreSQL', 'Redis'],
      content: `At Nisum Latam, I contributed to inventory management solutions:

• Built GraphQL API for inventory tracking
• Implemented real-time updates using WebSocket
• Developed automated reporting system
• Created dashboard for inventory analytics
• Integrated with multiple third-party services

Technologies used: React, GraphQL, Node.js, PostgreSQL, Redis`
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <header className="flex flex-col sm:flex-row items-center gap-6">
        <Image
          src="/avatar.png"
          alt="Ignacio Palma"
          width={100}
          height={100}
          className="rounded-full border-2 border-gray-200 dark:border-gray-700"
          priority
        />
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Ignacio Palma</h1>
          <h2 className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Full Stack Web Developer</h2>
        </div>
      </header>

      <main className="flex flex-col gap-12">
        {/* About Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">About Me</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate web developer with expertise in modern web technologies.
            I specialize in building responsive, user-friendly applications using
            React, Next.js, and Node.js. With a keen eye for detail and a love for
            clean code, I transform ideas into elegant digital solutions.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight">Featured Projects</h3>
          <div className="flex flex-col gap-8">
            {Object.entries(projectDetails).map(([name, details]) => (
              <div 
                key={name} 
                className="flex flex-col sm:flex-row gap-6 border border-gray-200 dark:border-gray-700 rounded-lg p-6 
                  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg 
                  dark:hover:shadow-gray-700/25"
              >
                <div className="sm:w-1/3">
                  <Image
                    src={details.image}
                    alt={`${name} project`}
                    width={400}
                    height={300}
                    className="rounded-lg object-contain w-full h-[200px] bg-gray-50 dark:bg-gray-900 p-4"
                  />
                </div>
                <div className="sm:w-2/3 space-y-2">
                  <h4 className="text-lg font-semibold tracking-tight">{name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{details.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{details.period}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {details.content.split('\n\n')[0]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 
                          text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-xs">
                    <button 
                      onClick={() => setSelectedProject(details)}
                      className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      $ view_more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Get In Touch</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/ignaciopalma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm"
            >
              $ github
            </a>
            <a
              href="https://linkedin.com/in/ignaciopalma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm"
            >
              $ linkedin
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center text-xs text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Ignacio Palma. All rights reserved.</p>
      </footer>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        image={selectedProject?.image || ''}
      >
        <div className="whitespace-pre-line text-sm">
          {selectedProject?.content}
        </div>
      </Modal>
    </div>
  );
}
