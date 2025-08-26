import React from 'react'
import { IconLinkedIn, IconGithub, IconMail } from './icons.jsx'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-lg">Kalani<span className="text-brand">.</span></a>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-brand">Home</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#projects" className="hover:text-brand">Projects</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:nipunika.bak@gmail.com" aria-label="Email" className="p-2 rounded-lg hover:bg-gray-100"><IconMail className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/kalani-wickramapala-54278a185/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-gray-100"><IconLinkedIn className="h-5 w-5" /></a>
          <a href="https://github.com/Nipunikadev" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-gray-100"><IconGithub className="h-5 w-5" /></a>
        </div>
      </div>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I’m <span className="text-brand">Kalani</span> — Software Engineer
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Frontend & Full‑Stack Developer specialising in React, Node.js and modern web development.
            Currently preparing to relocate to New Zealand.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/Kalani_Wickramapala_NZ_CV.pdf" className="btn" download>Download CV</a>
          </div>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Core Skills</h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            {["React.js","TypeScript","JavaScript","Node.js","Express.js","Java","Spring Boot","MySQL","PostgreSQL","AWS (basic)","Git","Jira"].map(s => (
              <span className="badge" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const About = () => (
  <section id="about" className="section bg-gray-50">
    <div className="container grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-4 text-gray-700">
          Results‑driven Software Engineer with over 2 years’ experience across frontend and backend, building
          responsive interfaces and reliable APIs. I enjoy turning ideas into clean, user‑friendly products and
          collaborating with teams to deliver value.
        </p>
        <p className="mt-3 text-gray-700">
          Tech focus: React, TypeScript, Node.js, and relational databases. I’m relocating to New Zealand and looking
          for opportunities to contribute to modern web platforms.
        </p>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold">Experience Highlights</h3>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Built trip management UI in React; improved workflow efficiency.</li>
          <li>Created REST APIs with Node.js & Express; integrated MySQL.</li>
          <li>Implemented geolocation autofill and email notifications.</li>
          <li>Structured error handling and logging for maintainability.</li>
        </ul>
      </div>
    </div>
  </section>
)

const projects = [
  {
    title: "Full‑Stack Trip Management System",
    description: "Trip creation, start/end flows, role-based auth, geolocation autofill and file uploads.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    github: "https://github.com/Nipunikadev?tab=repositories"
  },
  {
    title: "Asset Register (Freelance)",
    description: "Frontend in JSP/JS/CSS and backend in Java/Spring Boot for asset maintenance and reporting.",
    tech: ["Java", "Spring Boot", "JSP", "MySQL"],
    live: "#",
    github: "#"
  }
]

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2 text-gray-600">Live demos & code repositories.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="card">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-700">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-3">
              <a className="btn btn-primary" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="section bg-gray-50">
    <div className="container">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-700">I’m open to roles in New Zealand. Let’s connect.</p>
      <form name="contact" method="POST" data-netlify="true" className="grid gap-3 mt-6 max-w-md">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" className="p-2 border rounded-lg" required />
        <input type="email" name="email" placeholder="Your Email" className="p-2 border rounded-lg" required />
        <textarea name="message" placeholder="Your Message" rows="4" className="p-2 border rounded-lg" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
)

export default function App () {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-10">
        <div className="container text-sm text-gray-500">© {new Date().getFullYear()} Kalani Wickramapala. All rights reserved.</div>
      </footer>
    </div>
  )
}


