import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    })
    closeMenu()
  }

  return (
    <>
      {/* Navigation */}
      <nav>
        <h2 className="logo">Philip.</h2>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>


      {/* Hero */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="hero-text">

            <p className="intro">Hello, I'm</p>

            <h1>
              Akpode Tuoyo Philip
            </h1>

            <h2>
              Aspiring Full-Stack Developer
            </h2>

            <p className="hero-description">
              I'm a Software Engineering student focused on building
              modern, responsive and useful web applications.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollTo("projects")}
              >
                View My Projects
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </button>

            </div>

          </div>


          {/* Profile Image */}
          <div className="hero-image">

            <div className="image-ring"></div>

            <img
              src="/WIN_20260808_10_12_12_Pro.jpg"
              alt="Akpode Tuoyo Philip"
            />

          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="section">

        <p className="section-label">ABOUT ME</p>

        <h2>Who I Am</h2>

        <p>
          I'm a 300-level Software Engineering student at the University
          of Cross River State. I'm currently focused on frontend
          development while building my skills toward becoming a
          full-stack developer.
        </p>

        <p>
          I enjoy turning ideas and designs into functional websites
          and applications. I'm currently learning and working with
          HTML, CSS, JavaScript, React, UI/UX and Python.
        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="section">

        <p className="section-label">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Figma</div>
          <div>Python</div>
          <div>Flask</div>
          <div>Git & GitHub</div>
        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <p className="section-label">MY WORK</p>

        <h2>Projects</h2>

        <div className="project-card">

          <span className="project-number">01</span>

          <h3>GOLIM Workers Attendance System</h3>

          <p>
            A workers attendance system built for Grace Operated Life
            International Ministry. The system includes worker
            registration, login, attendance tracking and location
            verification.
          </p>

          <p className="tech">
            Python • Flask • SQLite • HTML • CSS
          </p>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact">

        <p className="section-label">CONTACT</p>

        <h2>Let's Work Together</h2>

        <p>
          I'm open to opportunities, collaborations, internships
          and interesting projects.
        </p>

        <div className="contact-links">

          <a href="mailto:meneakpode@gmail.com">
            Email
          </a>

          <a
            href="https://github.com/meneakpode-spec"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="tel:+2348128676041">
            Phone
          </a>

        </div>

      </section>


      {/* Footer */}
      <footer>
        <p>© 2026 Akpode Tuoyo Philip. All rights reserved.</p>
      </footer>

    </>
  )
}

export default App