import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutHeroVideo from "../assets/about-hero-video.mp4";
import TeamMeeting from "../assets/team-meeting.mp4";

const AboutUs = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);

  const milestones = [
    {
      year: "2008",
      title: "Practice Established",
      description:
        "Dr. Mwamba opened the first practice in Johannesburg with a vision for accessible healthcare.",
    },
    {
      year: "2012",
      title: "Middelburg Expansion",
      description:
        "Expanded services to Middelburg to serve the growing community in Mpumalanga.",
    },
    {
      year: "2015",
      title: "Emalahleni Branch",
      description:
        "Opened the Emalahleni location to provide specialized mining and occupational health services.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Implemented electronic health records and telemedicine services for better patient care.",
    },
    {
      year: "2023",
      title: "Community Excellence Award",
      description:
        "Recognized for outstanding contribution to healthcare in South African communities.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestone((prev) =>
        prev === milestones.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const teamMembers = [
    {
      name: "Dr. Thabo Mwamba",
      role: "Founder & Senior Physician",
      qualification: "MBChB, MMed (Family Medicine)",
      experience: "15+ years",
      specialty: "Family Medicine & Chronic Disease Management",
      image: "👨‍⚕️", // Replace with actual image
    },
    {
      name: "Dr. Nomsa Khumalo",
      role: "General Practitioner",
      qualification: "MBChB, Diploma in Occupational Health",
      experience: "8 years",
      specialty: "Occupational Health & Preventive Care",
      image: "👩‍⚕️", // Replace with actual image
    },
    {
      name: "Dr. James van der Merwe",
      role: "Emergency Medicine Specialist",
      qualification: "MBChB, FCEM (SA)",
      experience: "12 years",
      specialty: "Emergency Medicine & Trauma Care",
      image: "👨‍⚕️", // Replace with actual image
    },
  ];

  const values = [
    {
      icon: "bi-heart",
      title: "Patient-Centered Care",
      description:
        "Every decision we make prioritizes our patients' wellbeing and comfort.",
    },
    {
      icon: "bi-shield-check",
      title: "Clinical Excellence",
      description:
        "We maintain the highest medical standards through continuous learning and improvement.",
    },
    {
      icon: "bi-people",
      title: "Community Focus",
      description:
        "We're committed to serving and improving the health of our local communities.",
    },
    {
      icon: "bi-lightbulb",
      title: "Innovation",
      description:
        "Embracing technology and new treatments to provide the best possible care.",
    },
  ];

  return (
    <section className="about-us" style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <motion.div
        className="hero-section position-relative d-flex align-items-center justify-content-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          height: "70vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          src={AboutHeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            zIndex: 1,
            aspectRatio: "16/9",
          }}
        />
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(25, 135, 84, 0.8) 0%, rgba(13, 110, 253, 0.7) 100%)",
            zIndex: 2,
          }}
        />
        <motion.div
          className="hero-content text-center text-white px-3"
          variants={itemVariants}
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "800px",
          }}
        >
          <motion.h1
            className="display-3 fw-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Dr. Mwamba Medical Practice
          </motion.h1>
          <motion.p
            className="lead mb-4 fs-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Serving South African Communities with Excellence Since 2008
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        className="mission-vision-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="row g-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div className="mission-card card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <i className="bi bi-bullseye display-4 text-primary mb-3"></i>
                  <h3 className="text-primary mb-3">Our Mission</h3>
                  <p className="lead text-muted">
                    To provide compassionate, comprehensive, and accessible
                    healthcare that empowers our patients to achieve their best
                    possible health outcomes. We are committed to serving our
                    communities with integrity, clinical excellence, and a
                    patient-centered approach.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div className="vision-card card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <i className="bi bi-eye display-4 text-primary mb-3"></i>
                  <h3 className="text-primary mb-3">Our Vision</h3>
                  <p className="lead text-muted">
                    To be the leading primary healthcare provider in South
                    Africa, recognized for our innovative approach, community
                    engagement, and unwavering commitment to improving the
                    health and wellbeing of every patient we serve.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        className="story-section py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">Our Story</h2>
            <p className="lead text-muted">
              From humble beginnings to a trusted multi-branch medical practice
            </p>
          </motion.div>

          <div className="row align-items-center">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div className="story-content">
                <p className="fs-5 text-muted mb-4">
                  Founded in 2008 by Dr. Thabo Mwamba, our practice began as a
                  single consultation room in Johannesburg with a simple
                  mission: to provide quality healthcare that is both accessible
                  and compassionate. Dr. Mwamba recognized the need for
                  comprehensive medical services that cater to the diverse needs
                  of South African communities.
                </p>
                <p className="fs-5 text-muted mb-4">
                  Over the years, we've grown from that single room to three
                  fully-equipped medical facilities across Johannesburg,
                  Middelburg, and Emalahleni. Our expansion was driven by our
                  commitment to bring quality healthcare closer to where people
                  live and work.
                </p>
                <p className="fs-5 text-muted">
                  Today, we continue to uphold our founding principles while
                  embracing innovation and technology to serve over 10,000
                  patients annually. Our team of dedicated healthcare
                  professionals works tirelessly to ensure that every patient
                  receives the personalized care they deserve.
                </p>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div
                className="story-video-placeholder bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center p-5"
                style={{ height: "400px" }}
              >
                <div className="text-center text-primary">
                  <i className="bi bi-play-circle display-1 mb-3"></i>
                  <h4>Our Practice Journey</h4>
                  <p>Watch our story unfold</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="timeline-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">Our Journey</h2>
            <p className="lead text-muted">
              Milestones in our commitment to healthcare excellence
            </p>
          </motion.div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="timeline-container position-relative">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className={`timeline-item position-relative mb-4 ${
                      index % 2 === 0 ? "left" : "right"
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`card border-0 shadow-sm ${
                        currentMilestone === index ? "border-primary" : ""
                      }`}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="badge bg-primary fs-6 me-3">
                            {milestone.year}
                          </span>
                          <h5 className="mb-0 text-primary">
                            {milestone.title}
                          </h5>
                        </div>
                        <p className="text-muted mb-0">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="team-section py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Meet Our Team
            </h2>
            <p className="lead text-muted">
              Dedicated healthcare professionals committed to your wellbeing
            </p>
          </motion.div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="col-md-4"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="team-card card border-0 shadow-sm h-100"
                  whileHover="hover"
                >
                  <div className="card-body text-center p-4">
                    <div
                      className="team-member-image bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "120px", height: "120px" }}
                    >
                      <span className="display-4">{member.image}</span>
                    </div>
                    <h4 className="text-primary mb-2">{member.name}</h4>
                    <h6 className="text-secondary mb-3">{member.role}</h6>
                    <p className="text-muted small mb-2">
                      <i className="bi bi-award me-2"></i>
                      {member.qualification}
                    </p>
                    <p className="text-muted small mb-2">
                      <i className="bi bi-clock me-2"></i>
                      {member.experience} experience
                    </p>
                    <p className="text-muted small mb-3">
                      <i className="bi bi-star me-2"></i>
                      {member.specialty}
                    </p>
                    <motion.button
                      className="btn btn-outline-primary btn-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-person me-2"></i>
                      View Profile
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="values-section py-5 bg-primary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold mb-3">Our Values</h2>
            <p className="lead opacity-75">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="row g-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="col-md-6 col-lg-3"
                variants={cardVariants}
              >
                <motion.div
                  className="value-card text-center p-4 h-100"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <i
                    className={`bi ${value.icon} display-4 text-warning mb-3`}
                  ></i>
                  <h5 className="mb-3">{value.title}</h5>
                  <p className="opacity-75 mb-0">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Community Impact Section */}
      <motion.div
        className="community-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="row align-items-center">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <h2 className="display-5 fw-bold text-primary mb-4">
                Community Impact
              </h2>
              <div className="community-stats mb-4">
                {[
                  { number: "10,000+", label: "Patients Served Annually" },
                  { number: "3", label: "Communities Across SA" },
                  { number: "50+", label: "Health Education Workshops" },
                  { number: "R2M+", label: "in Pro Bono Services" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="d-flex align-items-center mb-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                    <div>
                      <strong className="text-primary">{stat.number}</strong>
                      <span className="text-muted ms-2">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted fs-5">
                We believe in giving back to the communities that have supported
                our growth. Through health education programs, free screenings,
                and pro bono services, we're committed to making quality
                healthcare accessible to all South Africans.
              </p>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div
                className="community-video-placeholder bg-white rounded shadow-sm d-flex align-items-center justify-content-center p-5"
                style={{ height: "400px" }}
              >
                <div className="text-center text-primary">
                  <i className="bi bi-people display-1 mb-3"></i>
                  <h4>Community Health Initiatives</h4>
                  <p>Making a difference beyond our clinics</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .timeline-container::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--bs-primary);
          transform: translateX(-50%);
        }

        .timeline-item.left {
          padding-right: 50%;
        }

        .timeline-item.right {
          padding-left: 50%;
        }

        @media (max-width: 768px) {
          .timeline-container::before {
            left: 20px;
          }

          .timeline-item.left,
          .timeline-item.right {
            padding: 0 0 0 50px;
          }

          .hero-section {
            height: 60vh;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
