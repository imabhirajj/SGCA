import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import About from "./About";
import "./About.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import "./Support.css";
import "./Work.css";

const Section = ({ id, children }) => (
  <section id={id} className="section">
    <div className="container mx-auto px-6 sm:px-5">{children}</div>
  </section>
);

const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

function HowWeWork() {
  return (
    <Section id="how-we-work">
      <div className="work-hero">
        <h1 className="work-hero-title">
          Seamless Delivery, Every Step of the Way
        </h1>
        <p className="work-hero-sub">
          From idea to deployment, we combine strategy,
          <br />
          design, and engineering to build tech that works.
        </p>
        <div className="work-hero-art">
          <div className="work-hero-left-01">01</div>
          <div className="work-hero-phones">
            <img
              className="work-phone work-phone-left"
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=520&h=1040&fit=crop"
              alt="Phone mockup left"
              loading="lazy"
            />
            <img
              className="work-phone work-phone-right"
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=520&h=1040&fit=crop"
              alt="Phone mockup right"
              loading="lazy"
            />
          </div>
          <div className="work-hero-curve" aria-hidden>
            <svg viewBox="0 0 1920 220" preserveAspectRatio="none">
              <path
                d="M0 200 Q 960 140 1920 200"
                stroke="#e5e7eb"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 180 Q 960 120 1920 180"
                stroke="#e5e7eb"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 160 Q 960 100 1920 160"
                stroke="#e5e7eb"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <button className="work-hero-arrow" aria-label="Next">
            →
          </button>
        </div>
      </div>
      <hr className="work-divider" />

      {/* Section 2: Understanding Your Unique Needs */}
      <div className="work-understand">
        <h2 className="work-understand-title">
          Understanding Your Unique Needs.
        </h2>
        <div className="work-understand-grid">
          <p className="work-understand-text">
            In the discovery phase, we immerse ourselves in your brand's vision,
            goals, and target audience. Through collaborative discussions and
            research, we gather insights that inform our strategy.
          </p>
          <p className="work-understand-text">
            This foundational step ensures that our design solutions align
            perfectly with your objectives and resonate deeply with your
            audience.
          </p>
        </div>
      </div>

      <hr className="work-divider" />

      {/* Section 3: Stats */}
      <div className="work-stats">
        {/* 95% card */}
        <div className="work-stat-card work-stat-purple">
          <div className="work-stat-number">95%</div>
          <div className="work-stat-text">
            Customer Satisfaction rate Built on trust & results
          </div>
          <img
            className="work-stat-phone"
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=400&fit=crop"
            alt="Phone UI"
            loading="lazy"
          />
        </div>

        {/* 100+ card */}
        <div className="work-stat-card work-stat-dark">
          <div className="work-stat-number">100+</div>
          <div className="work-stat-text">Completed & delivered projects</div>
          <img
            className="work-stat-phone"
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=200&h=400&fit=crop"
            alt="Hand holding phone"
            loading="lazy"
          />
        </div>

        {/* 10+ card */}
        <div className="work-stat-card work-stat-light">
          <div className="work-stat-number">10+</div>
          <div className="work-stat-text">
            years of experience in design and development
          </div>
          <img
            className="work-stat-phone"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=400&fit=crop"
            alt="Phone device"
            loading="lazy"
          />
        </div>
      </div>

      <hr className="work-divider" />

      {/* Section 4: Contact */}
      <div className="work-contact">
        {/* Left: Heading + Description + Person */}
        <div>
          <h3 className="work-contact-title">
            Let's Bring Your Vision To Life
          </h3>
          <p className="work-contact-text">
            Michael is here to ensure your experience with us is smooth and
            successful. Reach out anytime — he's here to make sure you feel
            confident and supported throughout your journey with us.
          </p>
          <div className="work-contact-person-row">
            <img
              className="work-contact-avatar"
              src="https://i.pravatar.cc/80?img=5"
              alt="Michael"
            />
            <div>
              <div className="work-contact-person">Michael</div>
              <div className="work-contact-role">Success Manager</div>
              <a
                href="mailto:michael@microsoft.com"
                className="work-contact-role"
              >
                michael@microsoft.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <form className="work-form" onSubmit={(e) => e.preventDefault()}>
            <div className="work-field">
              <span>Full Name</span>
              <input placeholder="Name:" />
            </div>
            <div className="work-field">
              <span>Email</span>
              <input placeholder="Email:" />
            </div>
            <div className="work-field">
              <span>Message</span>
              <textarea rows={4} placeholder="Message" />
            </div>
            <button className="work-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Inline footer removed to avoid duplication with global footer */}
    </Section>
  );
}

function Navbar({ setCurrentPage }) {
  const onNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setCurrentPage("about");
    // Scroll to top when navigating to About page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setCurrentPage("home");
    // Scroll to top when navigating to Home page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="container nav-inner mx-auto px-6 sm:px-5 nav-inner-grid">
        {/* Left: Logo */}
        <div className="logo-container">
          <img src="/logo.svg" alt="SGCA Technologies" className="logo" />
        </div>
        {/* Center: Nav links */}
        <div className="nav-center-links">
          <a href="#hero" onClick={handleHomeClick} className="hover:text-text">
            Home
          </a>
          <a
            href="#about"
            onClick={handleAboutClick}
            className="hover:text-text"
          >
            About
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("work");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-text"
          >
            How We Work
          </a>
          <a
            href="#support"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("support");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-text"
          >
            Support
          </a>
          <a
            href="#projects"
            onClick={(e) => onNav(e, "projects")}
            className="hover:text-text"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => onNav(e, "contact")}
            className="hover:text-text"
          >
            Contact
          </a>
        </div>
        {/* Right: CTA */}
        <div className="nav-right">
          <a href="#contact" className="btn btn-primary">
            Start A Project
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <>
      <Section id="hero">
        <div className="hero-grid" style={{ position: "relative" }}>
          <div className="hero-content">
            <FadeIn>
              <h1 className="heading-xl">
                Tech That <span className="highlight-mark">Works</span> as
                <br />
                <span className="highlight-mark">Hard</span> as You Do
              </h1>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="subtext mt-4">
                We create scalable, stable, and secure systems for modern
                businesses — fast and cost‑effective.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="btn-row mt-6">
                <a href="#contact" className="btn btn-primary">
                  Start A Project <FaArrowRight />
                </a>
                <a href="#process" className="btn btn-ghost">
                  Learn How We Work
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="hero-testimonial">
            <FadeIn delay={0.15}>
              <div className="testimonial-card">
                <div className="avatar-stack" aria-hidden>
                  <img src={`https://i.pravatar.cc/100?img=1`} alt="" />
                  <img src={`https://i.pravatar.cc/100?img=2`} alt="" />
                  <img src={`https://i.pravatar.cc/100?img=3`} alt="" />
                  <img src={`https://i.pravatar.cc/100?img=4`} alt="" />
                </div>
                <div className="rating">
                  <strong>4.9/5</strong>
                  <span className="stars" aria-label="5 stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
                <div className="rating-text">Loved by 645+ Clients</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Decorative Lines Section */}
      <div className="decorative-lines-section">
        <svg
          className="hero-decoration"
          viewBox="0 0 1920 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200 Q 960 100 1920 200"
            stroke="#d1d5db"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 200 Q 960 120 1920 200"
            stroke="#d1d5db"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 200 Q 960 80 1920 200"
            stroke="#d1d5db"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Solutions That Scale With You Section */}
      <div className="solutions-hero-section">
        <div className="solutions-hero-container">
          <FadeIn>
            <div className="solutions-hero-header">
              <div className="solutions-hero-text">
                <h1 className="solutions-hero-headline">
                  Solutions That
                  <br />
                  Scale With <span className="highlight-mark">You</span>
                </h1>
              </div>
              <div className="solutions-hero-right">
                <p className="solutions-hero-subheading">
                  From concept to deployment, we design and build software that
                  grows your business—intelligently and efficiently.
                </p>
                <div className="solutions-hero-button">
                  <button className="see-all-projects-btn">
                    See All Projects
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}

function SolutionsThatScale() {
  return (
    <Section id="solutions-that-scale">
      <div className="modern-landing-container">
        {/* Two-Column Content */}
        <div className="software-development-section">
          <div className="software-development-container">
            <div className="software-development-grid">
              <div className="software-development-image">
                <FadeIn delay={0.3}>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                    alt="Code Editor Screenshot"
                    className="code-screenshot"
                    loading="lazy"
                  />
                </FadeIn>
              </div>

              <div className="software-development-content">
                <FadeIn delay={0.4}>
                  <h2 className="software-development-heading">
                    Software Development
                  </h2>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <p className="software-development-description">
                    We engineer tailored software solutions built for
                    performance, scalability, and impact. From enterprise
                    systems to internal tools, our development process is driven
                    by clean code, rigorous testing, and a deep understanding of
                    your business objectives.
                  </p>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <div className="services-list">
                    <div className="service-item">Web Development</div>
                    <div className="service-item">Mobile Development</div>
                    <div className="service-item">Cybersecurity</div>
                    <div className="service-item">IT Consultancy</div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <div className="projects-header">
        <div className="projects-left">
          <h2 className="heading-xl">
            Work That <span className="highlight-mark">Speaks</span> for Itself
          </h2>
        </div>
        <div className="projects-right">
          <p className="subtext">
            Explore the projects that reflect our passion, precision, and
            performance.
          </p>
          <div className="project-navigation-buttons mt-4">
            <button className="btn btn-outline mr-2">
              <FaChevronLeft /> Previous
            </button>
            <button className="btn btn-primary">
              Next <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="projects-slider">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          navigation={{ prevEl: "#prevProjects", nextEl: "#nextProjects" }}
          pagination={{ clickable: true }}
        >
          {[
            {
              title: "Hospital Management System",
              desc: "Scheduling, EMR, billing, and analytics",
            },
            {
              title: "CRM Platform",
              desc: "Sales pipeline, automation, dashboards",
            },
            {
              title: "School Management",
              desc: "Admissions, LMS, fees, parent portal",
            },
            {
              title: "E-Commerce Platform",
              desc: "Catalog, checkout, fulfillment",
            },
          ].map((p) => (
            <SwiperSlide key={p.title}>
              <div className="card">
                <div
                  style={{
                    height: 160,
                    background:
                      "linear-gradient(135deg, rgba(91,140,255,0.25), rgba(0,209,178,0.20))",
                    borderRadius: 10,
                  }}
                />
                <div className="font-bold text-[18px] mt-3">{p.title}</div>
                <div className="subtext mt-1.5">{p.desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="testimonials-container">
        <div className="testimonial-layout">
          {/* Left Side */}
          <div className="testimonial-left">
            <FadeIn>
              <h2 className="testimonials-heading">
                What Our <span className="highlight-mark">Clients</span> Say ?
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="testimonial-image-container">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                  alt="Client"
                  className="testimonial-image"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Side */}
          <div className="testimonial-right">
            <FadeIn delay={0.2}>
              <p className="testimonial-subtitle">
                Feedback from our partners across industries and scale.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="testimonial-navigation">
                <button className="btn-testimonial btn-testimonial-prev">
                  Previous
                </button>
                <button className="btn-testimonial btn-testimonial-next">
                  Next
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="testimonial-quote">
                "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque."
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="testimonial-client-info">
                <div className="client-name">Jane Doe</div>
                <div className="client-profession">Profession</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-q" onClick={() => setOpen(!open)}>
        <span className="faq-question">{q}</span>
        <span className="faq-toggle">+</span>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

function SupportFAQItem({ id, q, a }) {
  const [open, setOpen] = useState(false);
  const contentId = `support-faq-content-${id}`;
  return (
    <div className={`support-faq-item ${open ? "is-open" : ""}`}>
      <div className="support-faq-row">
        <div className="support-faq-q">{q}</div>
        <button
          type="button"
          className={`support-faq-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => setOpen(!open)}
        >
          {open ? "−" : "+"}
        </button>
      </div>
      <div
        id={contentId}
        className="support-faq-content"
        role="region"
        aria-hidden={!open}
      >
        <div className="support-faq-a">{a}</div>
      </div>
    </div>
  );
}

function FAQ({ setCurrentPage }) {
  const handleAboutClick = (e) => {
    e.preventDefault();
    setCurrentPage("about");
    // Scroll to top when navigating to About page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const leftItems = [
    {
      q: "What services does SGCA Technologies provide?",
      a: "We provide comprehensive software development, web applications, mobile apps, cybersecurity, IT consultancy, and UI/UX design services.",
    },
    {
      q: "Who are your clients?",
      a: "We work with startups, enterprises, and organizations across healthcare, education, and various industries.",
    },
  ];

  const rightItems = [
    {
      q: "Do you offer ongoing support after development?",
      a: "Yes, we offer ongoing support, monitoring, and SLAs to ensure your systems run smoothly.",
    },
    {
      q: "What services does SGCA Technologies provide?",
      a: "We provide comprehensive software development, web applications, mobile apps, cybersecurity, IT consultancy, and UI/UX design services.",
    },
  ];

  return (
    <Section id="faq">
      <FadeIn>
        <div className="trusted-section">
          <div className="trusted-header">
            <h2 className="trusted-main-heading">
              Trusted by Industry Leaders
            </h2>
            <p className="trusted-subheading">
              Partnering with forward-thinking companies to deliver exceptional
              solutions
            </p>
          </div>
          <div className="company-logos">
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="8"
                  width="30"
                  height="24"
                  rx="4"
                  fill="#0066CC"
                />
                <text
                  x="35"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="bold"
                  fill="#0066CC"
                >
                  PayU
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="10"
                  width="32"
                  height="20"
                  rx="10"
                  fill="#3395FF"
                />
                <text
                  x="35"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#3395FF"
                >
                  Razorpay
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="8"
                  width="28"
                  height="24"
                  rx="6"
                  fill="#002970"
                />
                <text
                  x="30"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="bold"
                  fill="#002970"
                >
                  Paytm
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="10"
                  width="26"
                  height="20"
                  rx="4"
                  fill="#2874F0"
                />
                <text
                  x="28"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#2874F0"
                >
                  Flipkart
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="10"
                  width="28"
                  height="20"
                  rx="4"
                  fill="#FF9900"
                />
                <text
                  x="30"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#FF9900"
                >
                  Amazon
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="12"
                  width="30"
                  height="16"
                  rx="2"
                  fill="#635BFF"
                />
                <rect x="4" y="16" width="22" height="8" fill="white" />
                <text
                  x="32"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#635BFF"
                >
                  Stripe
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="10"
                  width="28"
                  height="20"
                  rx="4"
                  fill="#FF6600"
                />
                <text
                  x="30"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="12"
                  fontWeight="bold"
                  fill="#FF6600"
                >
                  CC Avenue
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect x="0" y="10" width="8" height="20" fill="#00BCF2" />
                <rect x="10" y="10" width="8" height="20" fill="#7CBA00" />
                <rect x="20" y="10" width="8" height="20" fill="#F25022" />
                <rect x="30" y="10" width="8" height="20" fill="#FFB900" />
                <text
                  x="40"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#00BCF2"
                >
                  Microsoft
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect x="0" y="10" width="8" height="20" fill="#4285F4" />
                <rect x="10" y="10" width="8" height="20" fill="#34A853" />
                <rect x="20" y="10" width="8" height="20" fill="#FBBC05" />
                <rect x="30" y="10" width="8" height="20" fill="#EA4335" />
                <text
                  x="40"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#4285F4"
                >
                  Google
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <path
                  d="M15 10 Q 20 5 25 10 L 25 25 Q 20 30 15 25 Z"
                  fill="#000000"
                />
                <text
                  x="30"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#000000"
                >
                  Apple
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="10"
                  width="30"
                  height="20"
                  rx="4"
                  fill="#1877F2"
                />
                <text
                  x="32"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#1877F2"
                >
                  Meta
                </text>
              </svg>
            </div>
            <div className="logo-item">
              <svg className="company-logo" viewBox="0 0 120 40" fill="none">
                <rect
                  x="0"
                  y="10"
                  width="28"
                  height="20"
                  rx="2"
                  fill="#E50914"
                />
                <text
                  x="30"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#E50914"
                >
                  Netflix
                </text>
              </svg>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="team-section">
          <div className="team-header">
            <div className="team-left">
              <h2 className="team-main-heading">
                Meet the <span className="team-highlight">Minds</span> Behind
                the <span className="team-highlight">Machines</span>
              </h2>
            </div>
            <div className="team-right">
              <p className="team-description">
                Our leadership brings deep tech expertise and visionary thinking
                to every solution we craft.
              </p>
              <button className="btn btn-about-us" onClick={handleAboutClick}>
                About Us <span className="arrow-icon">↗</span>
              </button>
            </div>
          </div>
          <div className="team-images">
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face"
                alt="Team Member"
              />
              <div className="team-member-info">
                <div className="team-member-name">John Doe</div>
                <div className="team-member-role">CEO/FOUNDER</div>
                <span className="member-arrow">↗</span>
              </div>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=250&fit=crop&crop=face"
                alt="Team Member"
              />
              <div className="team-member-info">
                <div className="team-member-name">John Doe</div>
                <div className="team-member-role">CEO/FOUNDER</div>
                <span className="member-arrow">↗</span>
              </div>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=250&fit=crop&crop=face"
                alt="Team Member"
              />
              <div className="team-member-info">
                <div className="team-member-name">John Doe</div>
                <div className="team-member-role">CEO/FOUNDER</div>
                <span className="member-arrow">↗</span>
              </div>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=250&fit=crop&crop=face"
                alt="Team Member"
              />
              <div className="team-member-info">
                <div className="team-member-name">John Doe</div>
                <div className="team-member-role">CEO/FOUNDER</div>
                <span className="member-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="faq-description-section">
          <p className="faq-company-description">
            SGCA Technologies is a future-ready tech firm specializing in
            <br />
            custom software development, scalable web & mobile apps,
            <br />
            robust cybersecurity services, and enterprise transformation.
            <br />
            We focus on delivering solutions that are secure
            <br />
            effective, helping businesses scale
            <br />
            with confidence in the digital age.
          </p>
        </div>
      </FadeIn>
      <div className="faq-layout">
        <FadeIn>
          <div className="faq-left">
            <h2 className="faq-main-heading">
              Frequently Asked <span className="faq-highlight">Questions</span>
            </h2>
            <div className="faq-left-questions">
              {leftItems.map((it) => (
                <FAQItem key={it.q} q={it.q} a={it.a} />
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="faq-right">
            <p className="faq-description">
              Everything you need to know about our process, services, and
              support — all in one place.
            </p>
            <div className="faq-button-container">
              <button className="btn btn-ask-question">
                Ask a Question <span className="question-icon">?</span>
              </button>
            </div>
            <div className="faq-right-questions">
              {rightItems.map((it) => (
                <FAQItem key={it.q} q={it.q} a={it.a} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function Team() {
  const leaders = [
    { name: "Saurabh Gupta", role: "Founder & CEO" },
    { name: "Ankit Verma", role: "CTO" },
    { name: "Priya Singh", role: "Head of Delivery" },
    { name: "Rahul Mehta", role: "Head of Design" },
  ];
  return (
    <Section id="team">
      <FadeIn>
        <h2 className="heading-lg">Meet the Minds Behind the Machines</h2>
      </FadeIn>
      <FadeIn delay={0.05}>
        <div className="grid team-grid mt-5">
          {leaders.map((m) => (
            <div key={m.name} className="card team-card">
              <img
                src={`https://picsum.photos/seed/${encodeURIComponent(
                  m.name
                )}/600/400`}
                alt={m.name}
              />
              <div className="font-bold mt-2.5">{m.name}</div>
              <div className="subtext">{m.role}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

function HeroBanner() {
  return (
    <section className="hero-banner-section">
      <div className="hero-banner-container">
        <FadeIn>
          <div className="hero-banner">
            <h2 className="hero-banner-title">
              Let's Build Something Powerful Together
            </h2>
            <p className="hero-banner-subtitle">
              Have an idea or challenge? We'll help turn it into a scalable
              digital solution.
            </p>
            <div className="hero-banner-button">
              <a href="#contact" className="btn btn-hero-banner">
                Start Project
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SupportPage() {
  return (
    <>
      <Section id="support-hero">
        <div className="support-hero">
          <FadeIn>
            <h1 className="support-title">How Can We Help You</h1>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="support-search">
              <input
                className="support-search-input"
                type="text"
                placeholder="Search support articles"
                aria-label="Search support"
              />
              <button className="support-search-button">Search</button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section id="support-getting-started">
        <div className="support-section">
          <FadeIn>
            <div className="support-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="support-card">
                  <div className="support-card-title">Getting Started</div>
                  <div className="support-card-text">
                    Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section id="support-faq">
        <div className="support-section">
          <FadeIn>
            <h2 className="support-heading">Frequently Asked Questions</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="support-faq-list">
              {[
                {
                  q: "What services does SGCA Technologies provide?",
                  a: "We build custom web and mobile applications, provide cybersecurity, IT consulting, cloud, DevOps, and UI/UX design.",
                },
                {
                  q: "Do you offer post‑launch support and maintenance?",
                  a: "Yes. We offer SLAs, performance monitoring, security updates, backups, and feature iterations based on your roadmap.",
                },
                {
                  q: "How long does a typical project take?",
                  a: "Most MVPs take 4–8 weeks. Larger enterprise systems range from 3–6 months depending on scope and integrations.",
                },
                {
                  q: "What engagement models do you support?",
                  a: "Fixed‑scope, time & materials, and dedicated teams. We’ll recommend the best fit after discovery.",
                },
                {
                  q: "Can you integrate with our existing systems?",
                  a: "Absolutely. We integrate with ERPs, CRMs, payment gateways, and third‑party APIs following best practices.",
                },
                {
                  q: "How do you ensure code quality and security?",
                  a: "Code reviews, automated testing, CI/CD, dependency audits, and secure coding standards are part of our process.",
                },
              ].map((item, idx) => (
                <SupportFAQItem key={item.q} id={idx} q={item.q} a={item.a} />
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="support-find-answer">
              <div className="support-find-title">Didn’t Find An Answer</div>
              <div className="support-find-text">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="support-avatars">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=160&h=160&fit=crop&crop=faces",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=160&h=160&fit=crop&crop=faces",
                  },
                ].map((p, i) => (
                  <div key={i} className="support-avatar">
                    <img
                      className="support-avatar-img"
                      src={p.img}
                      alt="Team"
                      loading="lazy"
                    />
                    <div className="support-avatar-name">NAME</div>
                    <div className="support-avatar-role">Designation</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Support team section removed as requested */}
    </>
  );
}

function Footer({ setCurrentPage }) {
  const handleAboutClick = (e) => {
    e.preventDefault();
    setCurrentPage("about");
    // Scroll to top when navigating to About page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSupportClick = (e) => {
    e.preventDefault();
    setCurrentPage("support");
    // Scroll to top when navigating to Support page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
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
                    <a href="#about" onClick={handleAboutClick}>
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
                    <a href="#support" onClick={handleSupportClick}>
                      Support
                    </a>
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
          <div className="footer-bottom-left">support@ssanimations.in</div>
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
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About setCurrentPage={setCurrentPage} />;
      case "work":
        return (
          <>
            <Navbar setCurrentPage={setCurrentPage} />
            <main>
              <HowWeWork />
            </main>
            <Footer setCurrentPage={setCurrentPage} />
          </>
        );
      case "support":
        return (
          <>
            <Navbar setCurrentPage={setCurrentPage} />
            <main>
              <SupportPage />
            </main>
            <Footer setCurrentPage={setCurrentPage} />
          </>
        );
      case "home":
      default:
        return (
          <>
            <Navbar setCurrentPage={setCurrentPage} />
            <main>
              <Hero />
              <SolutionsThatScale />
              <Projects />
              <Testimonials />
              <FAQ setCurrentPage={setCurrentPage} />
              <HeroBanner />
            </main>
            <Footer setCurrentPage={setCurrentPage} />
          </>
        );
    }
  };

  return renderPage();
}

export default App;
