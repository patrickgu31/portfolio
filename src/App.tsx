import React, { type JSX } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Calendar App",
    description: "A responsive calendar app with event creation and color-coded tags.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: "p2",
    title: "Push Token Manager",
    description: "Micronaut service for managing push notification tokens and receipts.",
    tech: ["Micronaut", "Kotlin", "AWS"],
    link: "#",
  },
];

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Patrick Gu</h1>
          <p className="text-sm text-slate-600">Backend Developer • Java • Micronaut • AWS</p>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a
            href="#resume"
            className="ml-4 inline-block px-3 py-1 rounded-md border border-slate-200 text-sm"
          >
            Resume
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md border border-slate-200"
          aria-label="open menu"
        >
          ☰
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Hi, I'm <span className="text-indigo-600">Patrick</span> — a backend-focused developer
            </h2>
            <p className="mt-4 text-slate-700">
              I build reliable backend systems, distributed services and developer-friendly tools.
              I enjoy Kotlin, Java, Micronaut and crafting scalable APIs on AWS.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white text-sm"
              >
                View projects
              </a>
              <a
                href="mailto:patrick@example.com"
                className="inline-block px-4 py-2 rounded-md border border-slate-200 text-sm"
              >
                Contact me
              </a>
            </div>

            <div className="mt-8 flex gap-4 text-slate-600">
              <a href="#" aria-label="github" className="hover:text-slate-900">GitHub</a>
              <a href="#" aria-label="linkedin" className="hover:text-slate-900">LinkedIn</a>
              <a href="#" aria-label="twitter" className="hover:text-slate-900">Twitter</a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-lg">
            <div className="h-56 md:h-64 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-slate-500">Currently</div>
                <div className="mt-2 font-semibold">Building backend tooling & APIs</div>
                <div className="text-xs text-slate-500 mt-1">Open to remote work & freelance</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-500">Location</div>
                <div className="font-medium">Melbourne, Australia</div>
              </div>
              <div>
                <div className="text-slate-500">Experience</div>
                <div className="font-medium">5+ years</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold">{p.title}</h4>
                  <a href={p.link} className="text-sm text-indigo-600">View</a>
                </div>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-12">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java",
              "Kotlin",
              "Micronaut",
              "Spring",
              "AWS",
              "Docker",
              "Postgres",
              "TypeScript",
            ].map((s) => (
              <div key={s} className="bg-white p-3 rounded-lg text-sm text-center shadow-sm">
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-sm text-slate-700">Want to work together or ask a question? Send a message and I’ll reply within a few days.</p>
              <div className="mt-6">
                <a href="mailto:patrick@example.com" className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white">Email me</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sm text-slate-600">Quick details</div>
              <ul className="mt-3 text-sm text-slate-700">
                <li>📍 Melbourne, Australia</li>
                <li>💼 Open to remote roles</li>
                <li>🕒 Availability: Contract / Full-time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer / Resume */}
        <footer id="resume" className="mt-12 py-8 text-center">
          <div className="text-sm text-slate-600">Download my resume</div>
          <a
            href="#"
            className="mt-3 inline-block px-4 py-2 rounded-md border border-slate-200"
          >
            Resume (PDF)
          </a>

          <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Patrick Gu</div>
        </footer>
      </main>
    </div>
  );
}
