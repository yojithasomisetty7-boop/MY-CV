import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Yojitha Somisetty</h1>
          <h3>Computer Science Engineering Student</h3>

          <p>
            Passionate about Full Stack Development, Artificial Intelligence,
            Problem Solving and building innovative web applications.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/yojithasomisetty7-boop"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <a
              href="mailto:yojithasomisetty@gmail.com"
              className="btn secondary"
            >
              Contact Me
            </a>
          </div>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuuVr3DxMH23eBAdEGKbSNv26jAP4wFaj29r269vlHA&s=10"
          alt="Profile"
          className="profile-image"
        />
      </section>

      {/* ABOUT */}
      <section className="glass-card">
        <h2>About Me</h2>
        <p>
          I am currently pursuing B.Tech in Computer Science Engineering at KL University.
          I enjoy creating modern web applications and solving real-world problems through technology.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="glass-card">
        <h2>Education</h2>

        <div className="timeline-item">
          <h3>B.Tech - Computer Science Engineering</h3>
          <p>KL University</p>
          <span>2025 - 2029</span>
        </div>

        <div className="timeline-item">
          <h3>Intermediate</h3>
          <p>Narayana Junior College</p>
          <span>2023 - 2025</span>
        </div>
      </section>

      {/* SKILLS */}
      <section className="glass-card">
        <h2>Technical Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>Python</span>
          <span>React JS</span>
          <span>JavaScript</span>
          <span>HTML</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="glass-card">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <div className="icon">🎫</div>
            <h3>Ticket Booking Portal</h3>
            <p>Built using React, Spring Boot and MySQL.</p>
          </div>

          <div className="project-card">
            <div className="icon">🤖</div>
            <h3>Intelligent Agent (DFS & CSP)</h3>
            <p>Implemented AI search algorithms using Python.</p>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="glass-card">
        <h2>Strengths</h2>

        <div className="strength-grid">
          <div className="strength-card">🧠 Problem Solving</div>
          <div className="strength-card">⚡ Quick Learner</div>
          <div className="strength-card">🤝 Teamwork</div>
          <div className="strength-card">💬 Communication</div>
          <div className="strength-card">🎯 Leadership</div>
          <div className="strength-card">🚀 Creativity</div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="glass-card">
        <h2>Certifications</h2>
        <ul>
          <li>Frontend Development</li>
          <li>Web Development</li>
          <li>Full Stack Development</li>
        </ul>
      </section>

      {/* LANGUAGES */}
      <section className="glass-card">
        <h2>Languages</h2>
        <div className="skills">
          <span>English</span>
          <span>Telugu</span>
          <span>Japanese</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="glass-card">
        <h2>Contact</h2>
        <p>📍 Tenali, Andhra Pradesh</p>
        <p>📧 yojithasomisetty@gmail.com</p>
        <p>📱 +91 XXXXX XXXXX</p>
      </section>

    </div>
  );
}

export default App;