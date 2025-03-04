import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <header className="flex flex-col items-center sm:items-start gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Ignacio Palma</h1>
        <h2 className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Full Stack Web Developer</h2>
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
            {/* Booz.cl Project */}
            <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="sm:w-1/3">
                <Image
                  src="/booz.png"
                  alt="Booz Allen Hamilton project"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain w-full h-[200px] bg-gray-50 dark:bg-gray-900 p-4"
                />
              </div>
              <div className="sm:w-2/3 space-y-2">
                <h4 className="text-lg font-semibold tracking-tight">Booz.cl</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2022 - Present</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Led development of enterprise-scale analytics dashboard using React and D3.js.
                  Implemented real-time data visualization and advanced filtering capabilities.
                </p>
                <div className="flex gap-4 text-xs">
                  <a 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $ view_more →
                  </a>
                </div>
              </div>
            </div>

            {/* Boozity Project */}
            <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="sm:w-1/3">
                <Image
                  src="/boozity.png"
                  alt="Boozity project"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain w-full h-[200px] bg-gray-50 dark:bg-gray-900 p-4"
                />
              </div>
              <div className="sm:w-2/3 space-y-2">
                <h4 className="text-lg font-semibold tracking-tight">Boozity</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2021 - 2022</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Led development of modern web applications using React and Node.js.
                  Implemented scalable architecture and optimized performance.
                </p>
                <div className="flex gap-4 text-xs">
                  <a 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $ view_more →
                  </a>
                </div>
              </div>
            </div>

            {/* GAP Project */}
            <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="sm:w-1/3">
                <Image
                  src="/gap.png"
                  alt="GAP project"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain w-full h-[200px] bg-gray-50 dark:bg-gray-900 p-4"
                />
              </div>
              <div className="sm:w-2/3 space-y-2">
                <h4 className="text-lg font-semibold tracking-tight">Gap Inc.</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2020 - 2022</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Developed and maintained critical e-commerce features using React and Node.js.
                  Improved checkout flow performance by 40% through optimization.
                </p>
                <div className="flex gap-4 text-xs">
                  <a 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $ view_more →
                  </a>
                </div>
              </div>
            </div>

            {/* Minted Project */}
            <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="sm:w-1/3">
                <Image
                  src="/minted.png"
                  alt="Minted project"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain w-full h-[200px] bg-gray-50 dark:bg-gray-900 p-4"
                />
              </div>
              <div className="sm:w-2/3 space-y-2">
                <h4 className="text-lg font-semibold tracking-tight">Minted</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2019 - 2020</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Built interactive design customization tool using React and Canvas API.
                  Implemented real-time preview and advanced editing capabilities.
                </p>
                <div className="flex gap-4 text-xs">
                  <a 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $ view_more →
                  </a>
                </div>
              </div>
            </div>

            {/* Nisum Project */}
            <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="sm:w-1/3">
                <Image
                  src="/nisum.png"
                  alt="Nisum project"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain w-full h-[200px] bg-gray-50 dark:bg-gray-900 p-4"
                />
              </div>
              <div className="sm:w-2/3 space-y-2">
                <h4 className="text-lg font-semibold tracking-tight">Nisum Latam</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Software Engineer</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2018 - 2020</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Developed inventory tracking system using React and GraphQL.
                  Implemented real-time updates and automated reporting features.
                </p>
                <div className="flex gap-4 text-xs">
                  <a 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $ view_more →
                  </a>
                </div>
              </div>
            </div>
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
    </div>
  );
}
