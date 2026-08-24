const projects = [
  {
    title: "Gradfolio AI",
    type: "AI / Full-Stack",
    description:
      "An AI-powered portfolio platform that helps students and graduates build and showcase professional portfolios.",
  },
  {
    title: "AI SOC Triage Copilot",
    type: "AI / Cybersecurity",
    description:
      "An AI-assisted security workflow for explaining alerts, mapping activity to MITRE ATT&CK and supporting investigation.",
  },
  {
    title: "Swarm Robotics",
    type: "Robotics / AI",
    description:
      "A multi-robot indoor safety system using autonomous navigation, mapping and computer vision.",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "Next.js",
  "Node.js",
  "AI",
  "Robotics",
  "Computer Vision",
  "Cybersecurity",
  "ROS",
  "SQL",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-lg font-semibold tracking-tight">
          EP.
        </a>

        <div className="hidden gap-7 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#writing" className="transition hover:text-white">
            Writing
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pb-36 md:pt-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            AI · Robotics · Backend Engineering
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Ebraheim Mohamed
            <span className="block text-zinc-500">Pasha Qadri.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            I build practical technology across artificial intelligence,
            robotics, backend systems and cybersecurity — turning ideas into
            working products and experiments.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View my work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              View CV ↗
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800/80 bg-[#0d0d0f]"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              01 / About
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Engineering, AI and experimentation.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400">
              My work sits at the intersection of software, intelligent
              systems and real-world engineering. I enjoy building projects
              that move beyond theory into usable systems — from autonomous
              robots to AI-assisted security tools and web products.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                02 / Selected Work
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Things I&apos;m building.
              </h2>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group min-h-[310px] bg-[#0d0d0f] p-7 transition hover:bg-[#121214]"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                      0{index + 1}
                    </span>
                    <span className="text-xs text-zinc-600">
                      {project.type}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-medium tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-7 text-zinc-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone */}
      <section className="border-t border-zinc-800/80 bg-[#0d0d0f]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            03 / Capstone
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm text-zinc-600">FlyRank Internship</p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight">
                Capstone project coming soon.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
                This space will document my final FlyRank capstone, including
                the problem, build process, technical decisions and final
                outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="border-t border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            04 / Writing
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight">
            Notes & build logs.
          </h2>

          <div className="mt-10 border-t border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 py-7">
              <div>
                <p className="font-medium">First post coming soon</p>
                <p className="mt-1 text-sm text-zinc-600">
                  AI, engineering and things I learn while building.
                </p>
              </div>
              <span className="text-zinc-600">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-800/80 bg-[#0d0d0f]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            05 / Contact
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
              Let&apos;s connect.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-500">
              Interested in AI, robotics, backend engineering or building
              something useful? You can find me through the links below.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/Ebraheim"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
              >
                GitHub ↗
              </a>

              <a
                href="linkedin.com/in/ebraheim13ae"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
              >
                LinkedIn ↗
              </a>

              <a
                href="linkedin.com/in/ebraheim13ae"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
              >
                Contact me ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ebraheim Mohamed Pasha Qadri</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </main>
  );
}