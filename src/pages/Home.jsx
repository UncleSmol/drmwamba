import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HomeHeroVideo from "../assets/heroVideoBG.mp4";
import preventiveCare from "../assets/preventiveCare.mp4";
import generalConsultation from "../assets/generalConsultation.mp4";
import healthScreening from "../assets/healthScreening.mp4";
import chronicDisease from "../assets/chronicDisease.mp4";

const Homepage = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef();
  const intervalRef = useRef();

  const services = [
    {
      title: "General Consultation",
      description:
        "Comprehensive health assessments and personalized medical advice for all your healthcare needs. Our experienced physicians provide thorough examinations and evidence-based treatments.",
      video: generalConsultation,
      icon: "bi-heart-pulse",
    },
    {
      title: "Preventive Care",
      description:
        "Regular check-ups, vaccinations, and health screenings to maintain your wellbeing and prevent future medical issues. Early detection saves lives.",
      video: preventiveCare,
      icon: "bi-clipboard-plus",
    },
    {
      title: "Chronic Disease Management",
      description:
        "Expert care and support for managing diabetes, hypertension, asthma, and other long-term health conditions with proven treatment plans and continuous monitoring.",
      video: chronicDisease,
      icon: "bi-graph-up",
    },
    {
      title: "Health Screening",
      description:
        "Advanced diagnostic tests including blood work, imaging, and specialized screenings to detect potential health issues early when they're most treatable.",
      video: healthScreening,
      icon: "bi-calendar-check",
    },
  ];

  // Handle service video transitions
  useEffect(() => {
    setProgress(0);
    const duration = 6000; // 6 seconds per video
    const interval = 50; // update every 50ms
    const step = (interval / duration) * 100;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          setCurrentServiceIndex((prevIndex) =>
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
          );
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(intervalRef.current);
  }, [currentServiceIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
    <section className="homepage">
      {/* Hero Section */}
      <motion.div
        className="hero-section position-relative d-flex align-items-center justify-content-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <video
          src={HomeHeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
        />
        <div className="overlay" />
        <motion.div
          className="hero-content text-center text-white px-3"
          variants={itemVariants}
        >
          <motion.h1
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Trusted Healthcare Partner in South Africa
          </motion.h1>
          <motion.p
            className="lead mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Compassionate, comprehensive medical care across Johannesburg,
            Middelburg, and Emalahleni.
          </motion.p>
          <motion.div
            className="d-flex gap-3 justify-content-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="btn btn-light btn-lg px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-calendar-check me-2"></i>Book Appointment
            </motion.button>
            <motion.button
              className="btn btn-outline-light btn-lg px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-telephone me-2"></i>Emergency Contact
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="stats-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="row text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "5000+", label: "Patients Served" },
              { number: "24/7", label: "Emergency Support" },
              { number: "98%", label: "Patient Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="col-6 col-md-3 mb-4"
                variants={itemVariants}
              >
                <motion.div
                  className="stat-item p-4 rounded shadow-sm d-flex flex-column justify-content-center"
                  style={{ height: "140px" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-number display-6 fw-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="stat-label fw-medium text-dark small">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="services-section position-relative d-flex align-items-center justify-content-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <video
          key={currentServiceIndex}
          src={services[currentServiceIndex].video}
          autoPlay
          muted
          playsInline
          className="service-bg-video"
        />
        <div className="overlay" />
        <motion.div
          className="service-content text-center text-white px-3"
          key={currentServiceIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.i
            className={`bi ${services[currentServiceIndex].icon} display-4 mb-3`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.i>
          <h2 className="display-5 fw-bold mb-3">
            {services[currentServiceIndex].title}
          </h2>
          <p className="lead mb-4">
            {services[currentServiceIndex].description}
          </p>
          <motion.button
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About This Service
          </motion.button>
        </motion.div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </motion.div>

      {/* Locations Section */}
      <motion.div
        className="locations-section py-5 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="section-title display-5 fw-bold text-primary mb-3">
              Our Locations Across South Africa
            </h2>
            <p className="section-subtitle lead text-muted">
              Serving communities in Johannesburg, Middelburg, and Emalahleni
              with accessible healthcare
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                city: "Johannesburg",
                address: "123 Medical Precinct, Sandton, Johannesburg",
                hours: "Mon-Fri: 7AM-7PM | Sat: 8AM-1PM",
                phone: "+27 11 123 4567",
                features: [
                  "Emergency Care",
                  "Specialist Referrals",
                  "On-site Pharmacy",
                ],
              },
              {
                city: "Middelburg",
                address: "456 Health Plaza, Middelburg CBD",
                hours: "Mon-Fri: 7:30AM-6PM | Sat: 8AM-12PM",
                phone: "+27 13 123 4567",
                features: [
                  "Family Medicine",
                  "Chronic Medication",
                  "Vaccination Clinic",
                ],
              },
              {
                city: "Emalahleni",
                address: "789 Wellness Center, Emalahleni Central",
                hours: "Mon-Fri: 8AM-5PM | Sat: 9AM-12PM",
                phone: "+27 13 123 4568",
                features: [
                  "Occupational Health",
                  "Mining Medicals",
                  "Trauma Care",
                ],
              },
            ].map((location, index) => (
              <motion.div
                key={location.city}
                className="col-md-4"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="location-card card h-100 border-0 shadow-sm"
                  whileHover="hover"
                >
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <i className="bi bi-geo-alt-fill text-primary display-6"></i>
                      <h4 className="text-primary mt-2">{location.city}</h4>
                    </div>
                    <div className="location-info">
                      <p className="mb-3">
                        <i className="bi bi-geo text-secondary me-2"></i>
                        {location.address}
                      </p>
                      <p className="mb-3">
                        <i className="bi bi-clock text-secondary me-2"></i>
                        {location.hours}
                      </p>
                      <p className="mb-4">
                        <i className="bi bi-telephone text-secondary me-2"></i>
                        <strong>{location.phone}</strong>
                      </p>
                      <div className="features">
                        <h6 className="text-muted mb-3">
                          Specialized Services:
                        </h6>
                        <ul className="list-unstyled">
                          {location.features.map((feature, idx) => (
                            <li key={idx} className="mb-2">
                              <i className="bi bi-check-circle text-success me-2"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <motion.button
                      className="btn btn-outline-primary w-100 mt-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="bi bi-directions me-2"></i>
                      Get Directions
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="why-choose-section py-5 bg-primary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.h2
                className="display-5 fw-bold mb-4"
                variants={itemVariants}
              >
                Why Choose Dr. Mwamba Medical Practice?
              </motion.h2>
              <motion.div variants={containerVariants}>
                {[
                  "South African owned and operated since 2008",
                  "Multiple locations for your convenience",
                  "Bilingual staff (English & local languages)",
                  "NHI and private medical aid accepted",
                  "Emergency after-hours services available",
                  "Comprehensive medical services under one roof",
                  "Modern medical equipment and facilities",
                  "Experienced, compassionate healthcare team",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="d-flex align-items-center mb-3"
                    variants={itemVariants}
                  >
                    <i className="bi bi-check-circle-fill text-warning me-3 fs-5"></i>
                    <span className="fs-6">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="col-lg-6 text-center"
              variants={itemVariants}
            >
              <motion.div
                className="sa-medical-placeholder bg-light bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center p-5"
                style={{ width: "100%", maxWidth: "400px", height: "300px" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <i className="bi bi-flag-fill text-warning display-1 mb-3"></i>
                  <h5 className="text-warning">Proudly South African</h5>
                  <p className="text-light mb-0">
                    Serving Our Communities Since 2008
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Emergency CTA Section */}
      <motion.div
        className="emergency-section py-5 bg-warning"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container text-center">
          <motion.div variants={itemVariants}>
            <motion.i
              className="bi bi-exclamation-triangle-fill display-4 text-dark mb-3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.i>
            <h3 className="text-dark mb-3 fw-bold">Medical Emergency?</h3>
            <p className="text-dark mb-4 lead">
              Don't wait. Our emergency services are available 24/7 across all
              locations.
            </p>
            <motion.div className="d-flex gap-3 justify-content-center flex-wrap">
              <motion.a
                href="tel:112"
                className="btn btn-dark btn-lg px-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-telephone me-2"></i>
                Call Emergency: 112
              </motion.a>
              <motion.a
                href="tel:10177"
                className="btn btn-outline-dark btn-lg px-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-ambulance me-2"></i>
                Ambulance: 10177
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        .homepage {
          overflow-x: hidden;
        }

        .hero-section {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 800px;
        }

        .stats-section .stat-item {
          transition: all 0.3s ease;
          background: white;
          border: 1px solid #e9ecef;
        }

        .stat-number {
          font-size: 2.5rem;
        }

        .services-section {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .service-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .service-content {
          position: relative;
          z-index: 3;
          max-width: 800px;
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 3;
        }

        .progress-fill {
          height: 100%;
          background: var(--bs-primary);
          transition: width 0.05s linear;
        }

        .location-card {
          transition: all 0.3s ease;
          border-radius: 15px;
        }

        .location-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        }

        .why-choose-section {
          background: linear-gradient(
            135deg,
            var(--bs-primary) 0%,
            #146c43 100%
          );
        }

        .emergency-section {
          background: linear-gradient(
            135deg,
            var(--bs-warning) 0%,
            #ffc107 100%
          );
        }

        @media (max-width: 768px) {
          .hero-content,
          .service-content {
            padding: 0 1rem;
          }

          .stat-item {
            height: 120px !important;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .hero-section h1 {
            font-size: 2.5rem;
          }

          .services-section h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Homepage;
