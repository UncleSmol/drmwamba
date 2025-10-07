import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServicesHeroVideo from "../assets/services-hero-video.mp4";
import ConsultationImage from "../assets/consultation-service.jpg";
import PreventiveImage from "../assets/preventive-service.jpg";
import ChronicImage from "../assets/chronic-service.jpg";
import ScreeningImage from "../assets/screening-service.jpg";
import EmergencyImage from "../assets/emergency-service.jpg";
import OccupationalImage from "../assets/occupational-service.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "General Consultation",
      description:
        "Comprehensive medical consultations for all your healthcare needs",
      fullDescription:
        "Our general consultations provide thorough medical assessments, diagnosis, and treatment plans for acute and chronic conditions. Our experienced physicians take the time to understand your health concerns and provide personalized care.",
      image: ConsultationImage,
      icon: "bi-heart-pulse",
      features: [
        "Comprehensive health assessments",
        "Acute illness diagnosis and treatment",
        "Chronic condition management",
        "Medication prescriptions and management",
        "Referrals to specialists when needed",
        "Follow-up care and monitoring",
      ],
      duration: "30-45 minutes",
      locations: ["Johannesburg", "Middelburg", "Emalahleni"],
    },
    {
      id: 2,
      title: "Preventive Care",
      description: "Proactive health maintenance and disease prevention",
      fullDescription:
        "Stay ahead of health issues with our comprehensive preventive care services. We focus on early detection and prevention through regular check-ups, vaccinations, and health education.",
      image: PreventiveImage,
      icon: "bi-clipboard-check",
      features: [
        "Annual health check-ups",
        "Vaccinations and immunizations",
        "Health risk assessments",
        "Lifestyle counseling",
        "Cancer screenings",
        "Preventive health education",
      ],
      duration: "45-60 minutes",
      locations: ["Johannesburg", "Middelburg", "Emalahleni"],
    },
    {
      id: 3,
      title: "Chronic Disease Management",
      description: "Comprehensive care for long-term health conditions",
      fullDescription:
        "We provide ongoing management and support for chronic conditions like diabetes, hypertension, asthma, and heart disease. Our team works with you to develop sustainable treatment plans.",
      image: ChronicImage,
      icon: "bi-graph-up",
      features: [
        "Diabetes management",
        "Hypertension control",
        "Asthma and COPD care",
        "Cardiac condition management",
        "Medication therapy management",
        "Lifestyle modification support",
      ],
      duration: "Ongoing care",
      locations: ["Johannesburg", "Middelburg", "Emalahleni"],
    },
    {
      id: 4,
      title: "Health Screening",
      description: "Advanced diagnostic testing and early detection",
      fullDescription:
        "Our comprehensive health screening services help detect potential health issues early, when they're most treatable. We use state-of-the-art diagnostic equipment for accurate results.",
      image: ScreeningImage,
      icon: "bi-search-heart",
      features: [
        "Blood tests and laboratory work",
        "Cardiac screening (ECG, stress tests)",
        "Cancer screenings",
        "Bone density scans",
        "Respiratory function tests",
        "Comprehensive metabolic panels",
      ],
      duration: "Varies by test",
      locations: ["Johannesburg", "Middelburg"],
    },
    {
      id: 5,
      title: "Emergency Care",
      description: "24/7 emergency medical services",
      fullDescription:
        "Our emergency care services are available around the clock for urgent medical needs. Our trained staff and well-equipped facilities ensure you receive prompt, professional care.",
      image: EmergencyImage,
      icon: "bi-exclamation-triangle",
      features: [
        "24/7 emergency consultations",
        "Minor injury treatment",
        "Acute illness management",
        "Emergency medication administration",
        "Stabilization and referrals",
        "After-hours care",
      ],
      duration: "Immediate",
      locations: ["Johannesburg", "Emalahleni"],
    },
    {
      id: 6,
      title: "Occupational Health",
      description: "Workplace health and safety services",
      fullDescription:
        "We provide comprehensive occupational health services including pre-employment medicals, periodic health assessments, and workplace injury management.",
      image: OccupationalImage,
      icon: "bi-briefcase",
      features: [
        "Pre-employment medicals",
        "Fitness for duty assessments",
        "Work-related injury management",
        "Health and safety compliance",
        "Mining medicals",
        "Return-to-work evaluations",
      ],
      duration: "60-90 minutes",
      locations: ["Emalahleni", "Middelburg"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 5000);

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

  return (
    <section className="services-page" style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <motion.div
        className="hero-section position-relative d-flex align-items-center justify-content-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          height: "60vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          src={ServicesHeroVideo}
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
            Our Medical Services
          </motion.h1>
          <motion.p
            className="lead mb-4 fs-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Healthcare Solutions for Every Need
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Services Overview */}
      <motion.div
        className="services-overview py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Comprehensive Medical Care
            </h2>
            <p className="lead text-muted">
              From routine check-ups to specialized treatments, we offer a full
              spectrum of healthcare services
            </p>
          </motion.div>

          <div className="row g-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="col-md-6 col-lg-4"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="service-card card border-0 shadow-sm h-100"
                  whileHover="hover"
                  onClick={() => setActiveService(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body text-center p-4">
                    <motion.div
                      className="service-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "80px", height: "80px" }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                    >
                      <i
                        className={`bi ${service.icon} text-primary`}
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </motion.div>
                    <h5 className="card-title text-primary mb-3">
                      {service.title}
                    </h5>
                    <p className="card-text text-muted mb-3">
                      {service.description}
                    </p>
                    <div className="service-meta">
                      <small className="text-muted">
                        <i className="bi bi-clock me-1"></i>
                        {service.duration}
                      </small>
                      <small className="text-muted ms-3">
                        <i className="bi bi-geo me-1"></i>
                        {service.locations.length} locations
                      </small>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Featured Service Detail */}
      <motion.div
        className="featured-service py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="row align-items-center">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div className="featured-content">
                <span className="badge bg-primary fs-6 mb-3">
                  Featured Service
                </span>
                <h2 className="display-6 fw-bold text-primary mb-4">
                  {services[activeService].title}
                </h2>
                <p className="fs-5 text-muted mb-4">
                  {services[activeService].fullDescription}
                </p>

                <div className="service-features mb-4">
                  <h5 className="text-primary mb-3">What's Included:</h5>
                  <div className="row">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span className="text-muted">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-details">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="bi bi-clock me-2"></i>
                        Duration
                      </h6>
                      <p className="text-muted mb-0">
                        {services[activeService].duration}
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="bi bi-geo me-2"></i>
                        Available at
                      </h6>
                      <div>
                        {services[activeService].locations.map(
                          (location, index) => (
                            <span
                              key={location}
                              className="badge bg-light text-dark me-1 mb-1"
                            >
                              {location}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div className="d-flex gap-3 mt-4">
                  <motion.button
                    className="btn btn-primary btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Book This Service
                  </motion.button>
                  <motion.button
                    className="btn btn-outline-primary btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-info-circle me-2"></i>
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div
                className="service-image-container position-relative rounded overflow-hidden"
                style={{ height: "500px" }}
                key={activeService}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="service-image-placeholder w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: `linear-gradient(135deg, rgba(25, 135, 84, 0.1) 0%, rgba(13, 110, 253, 0.1) 100%)`,
                  }}
                >
                  <div className="text-center text-primary">
                    <i
                      className={`bi ${services[activeService].icon} display-1 mb-3`}
                    ></i>
                    <h4>{services[activeService].title}</h4>
                    <p>Professional medical service</p>
                  </div>
                </div>

                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-100 h-100 object-fit-cover"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(25, 135, 84, 0.1) 0%, rgba(13, 110, 253, 0.1) 100%)",
                    zIndex: 2,
                  }}
                ></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Service Process */}
      <motion.div
        className="process-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Our Service Process
            </h2>
            <p className="lead text-muted">
              Simple, transparent, and patient-focused
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                step: 1,
                icon: "bi-calendar-check",
                title: "Book Appointment",
                description:
                  "Schedule your visit online, by phone, or in person",
              },
              {
                step: 2,
                icon: "bi-clipboard-data",
                title: "Initial Assessment",
                description: "Comprehensive health evaluation and discussion",
              },
              {
                step: 3,
                icon: "bi-stethoscope",
                title: "Diagnosis & Treatment",
                description:
                  "Professional diagnosis and personalized treatment plan",
              },
              {
                step: 4,
                icon: "bi-heart",
                title: "Follow-up Care",
                description:
                  "Ongoing support and monitoring for optimal health",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="col-md-6 col-lg-3"
                variants={cardVariants}
              >
                <div className="process-step card border-0 text-center h-100">
                  <div className="card-body p-4">
                    <div
                      className="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <span className="fs-4 fw-bold">{step.step}</span>
                    </div>
                    <i
                      className={`bi ${step.icon} display-6 text-primary mb-3`}
                    ></i>
                    <h5 className="text-primary mb-3">{step.title}</h5>
                    <p className="text-muted mb-0">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Insurance & Payment */}
      <motion.div
        className="insurance-section py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="row align-items-center">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <h2 className="display-5 fw-bold text-primary mb-4">
                Insurance & Payment Options
              </h2>
              <p className="fs-5 text-muted mb-4">
                We believe quality healthcare should be accessible to everyone.
                We work with most major medical aids and offer flexible payment
                options.
              </p>

              <div className="payment-options">
                {[
                  "All major medical aids accepted",
                  "NHI participating practice",
                  "Cash payment plans available",
                  "Credit and debit cards accepted",
                  "Electronic billing services",
                  "Payment arrangements for extensive treatments",
                ].map((option, index) => (
                  <motion.div
                    key={option}
                    className="d-flex align-items-center mb-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                    <span className="fs-6">{option}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div
                className="insurance-placeholder bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center p-5"
                style={{ height: "400px" }}
              >
                <div className="text-center text-primary">
                  <i className="bi bi-shield-check display-1 mb-3"></i>
                  <h4>Medical Aid Partners</h4>
                  <p>We work with leading healthcare providers</p>
                  <div className="mt-4">
                    <span className="badge bg-light text-dark me-2 mb-2 p-2">
                      Discovery
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2 p-2">
                      Momentum
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2 p-2">
                      Bonitas
                    </span>
                    <span className="badge bg-light text-dark me-2 mb-2 p-2">
                      Fedhealth
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="cta-section py-5 bg-primary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container text-center">
          <motion.div variants={itemVariants}>
            <h2 className="display-5 fw-bold mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="lead mb-4 opacity-75">
              Book your appointment today and experience the difference of
              personalized healthcare
            </p>
            <motion.div className="d-flex gap-3 justify-content-center flex-wrap">
              <motion.button
                className="btn btn-light btn-lg px-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-telephone me-2"></i>
                Call to Book
              </motion.button>
              <motion.button
                className="btn btn-outline-light btn-lg px-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-calendar-week me-2"></i>
                Book Online
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
