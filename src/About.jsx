import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const About = ({ setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };
  const handleWorkClick = (e) => {
    e.preventDefault();
    setCurrentPage("work");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };
  const handleSupportClick = (e) => {
    e.preventDefault();
    setCurrentPage("support");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };
  const handlePortfolioClick = (e) => {
    e.preventDefault();
    setCurrentPage("home");
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };
  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };
  const teamMembers = [
    {
      name: "John Doe",
      title: "Lead Product Strategist",
      image: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Robert Fox",
      title: "CEO",
      image: "https://i.pravatar.cc/300?img=2",
    },
    {
      name: "Kristin Watson",
      title: "CTO",
      image: "https://i.pravatar.cc/300?img=3",
    },
    {
      name: "Annette Black",
      title: "Head of Design",
      image: "https://i.pravatar.cc/300?img=4",
    },
    {
      name: "Jacob Jones",
      title: "Lead Developer",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Theresa Webb",
      title: "Project Manager",
      image: "https://i.pravatar.cc/300?img=6",
    },
    {
      name: "Bessie Cooper",
      title: "UX Designer",
      image: "https://i.pravatar.cc/300?img=7",
    },
    {
      name: "Leslie Alexander",
      title: "DevOps Engineer",
      image: "https://i.pravatar.cc/300?img=8",
    },
    {
      name: "Darrell Steward",
      title: "Backend Developer",
      image: "https://i.pravatar.cc/300?img=9",
    },
    {
      name: "Kathryn Murphy",
      title: "Frontend Developer",
      image: "https://i.pravatar.cc/300?img=10",
    },
    {
      name: "Savannah Nguyen",
      title: "Quality Assurance",
      image: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "Darlene Robertson",
      title: "Business Analyst",
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Marvin McKinney",
      title: "Senior Developer",
      image: "https://i.pravatar.cc/300?img=13",
    },
  ];

  const handleImageError = (e) => {
    const name = e.target.alt || "User";
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    e.target.style.display = "none";
    e.target.nextSibling?.remove();
    const fallback = document.createElement("div");
    fallback.className = "about-team-image-fallback";
    fallback.textContent = initials;
    e.target.parentNode.appendChild(fallback);
  };

  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <div className="about-header-container">
          <div className="about-logo">
            <img
              src="/logo.svg"
              alt="SGCA Technologies"
              className="about-logo-img"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="about-mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`about-hamburger ${isMobileMenuOpen ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav className={`about-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <a
              href="#home"
              className="about-nav-link"
              onClick={handleHomeClick}
            >
              Home
            </a>
            <a href="#about" className="about-nav-link current">
              About
            </a>
            <a
              href="#work"
              className="about-nav-link"
              onClick={handleWorkClick}
            >
              How We Work
            </a>
            <a
              href="#support"
              className="about-nav-link"
              onClick={handleSupportClick}
            >
              Support
            </a>
            <a
              href="#portfolio"
              className="about-nav-link"
              onClick={handlePortfolioClick}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="about-nav-link"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </nav>
          <button className="about-cta-btn">Start A Project</button>
        </div>
      </header>

      {/* About Us Header Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <h1 className="about-hero-title">About Us</h1>
          <div className="about-hero-text-container">
            <p className="about-hero-text">
              We don't believe in overcomplicating things, using the tools and
              strategies that make the most sense for your goals. If custom code
              is needed, we write it. If something works out of the box, we
              won't reinvent it.
            </p>
            <p className="about-hero-text">
              We approach each project with the same questions: What does this
              need to do? Who will use it? How can we make it as simple and
              effective as possible?
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="about-ceo">
        <div className="about-ceo-container">
          <div className="about-ceo-content">
            <div className="about-ceo-left">
              <div className="about-ceo-image-container">
                <img
                  src="https://i.pravatar.cc/400?img=1"
                  alt="John Doe"
                  className="about-ceo-image"
                />
              </div>
              <div className="about-ceo-name-container">
                <h3 className="about-ceo-name">John Doe</h3>
                <p className="about-ceo-title">CEO/FOUNDER</p>
              </div>
            </div>
            <div className="about-ceo-right">
              <div className="about-ceo-quote-icon">"</div>
              <h2 className="about-ceo-heading">
                SGCA Technologies partners with ambitious teams to craft
                intelligent, scalable digital solutions that deliver real
                impact.
              </h2>
              <p className="about-ceo-text">
                We align technology with purpose — ensuring every product we
                build is rooted in your business logic and growth strategy.
              </p>
              <p className="about-ceo-text">
                From first conversation to final deployment, we prioritize
                clarity, collaboration, and execution — turning your ideas into
                results that last beyond launch.
              </p>
              <div className="about-ceo-signature">
                <h4 className="about-ceo-signature-name">John Doe</h4>
                <p className="about-ceo-signature-title">
                  Lead Product Strategist, SGCA Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership">
        <div className="about-leadership-container">
          <h2 className="about-leadership-title">Leadership</h2>
          <div className="about-leadership-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-leadership-member">
                <div className="about-leadership-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="about-leadership-image"
                    onError={handleImageError}
                  />
                </div>
                <h3 className="about-leadership-name">{member.name}</h3>
                <p className="about-leadership-title">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="about-what-drives">
        <div className="about-what-drives-container">
          <div className="about-what-drives-content">
            <h2 className="about-what-drives-title">What drives us?</h2>
            <div className="about-what-drives-text-container">
              <p className="about-what-drives-text">
                Every project we take on is an opportunity to learn, grow, and
                make an impact. We're passionate about solving complex problems
                and bringing ideas to life.
              </p>
              <p className="about-what-drives-text light">
                We're not just a team; we're a group of individuals with diverse
                passions—from basketball games to team outings, we believe in
                building connections that extend beyond the office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <div className="about-contact-container">
          <div className="about-contact-content">
            <form className="about-contact-form">
              <div className="about-form-group">
                <label htmlFor="fullName" className="about-form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Name"
                  className="about-form-input"
                  required
                />
              </div>
              <div className="about-form-group">
                <label htmlFor="email" className="about-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="michael.mitc@example.com"
                  className="about-form-input"
                  required
                />
              </div>
              <div className="about-form-group">
                <label htmlFor="message" className="about-form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder=""
                  className="about-form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="about-form-submit">
                Send Message
              </button>
            </form>

            <div className="about-contact-info">
              <h2 className="about-contact-title">
                <span className="about-contact-title-blue">Get in touch</span>
                <span className="about-contact-title-black"> with us,</span>
              </h2>
              <h3 className="about-contact-subtitle">
                Let's bring your ideas into reality
              </h3>

              <div className="about-contact-details">
                <div className="about-contact-item">
                  <FaEnvelope className="about-contact-icon" />
                  <span className="about-contact-text">
                    support@sgcatechnologies.com
                  </span>
                  <button className="about-contact-copy">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
                <div className="about-contact-divider"></div>
                <div className="about-contact-item">
                  <FaPhone className="about-contact-icon" />
                  <span className="about-contact-text">+91 6388903337</span>
                  <button className="about-contact-copy">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          {/* Main footer grid */}
          <div className="footer-main">
            <div className="footer-left">
              <img
                src="/footer-logo.svg"
                alt="SGCA Technologies Pvt Ltd"
                className="footer-logo"
              />
            </div>

            <div className="footer-center">
              <div className="footer-columns">
                <div className="footer-column">
                  <div className="footer-heading">Social</div>
                  <ul className="footer-links">
                    <li>
                      <a href="#">LinkedIn</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Blog (soon)</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <div className="footer-heading">Privacy Policy</div>
                  <ul className="footer-links">
                    <li>
                      <a href="#" className="current-page">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Location</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <div className="footer-heading">
                    Try <span className="blue-text">HR NEXUS</span> for free
                  </div>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Resources</a>
                    </li>
                    <li>
                      <a href="#">Leave a Review</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <div className="footer-heading">Leadership</div>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              support@sgcatechnologies.com
            </div>
            <div className="footer-bottom-center">
              Noida One, Sector 62, Noida 201309
            </div>
            <div className="footer-bottom-right">+91 6388903337</div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            © 2025 SGCA Technologies Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
